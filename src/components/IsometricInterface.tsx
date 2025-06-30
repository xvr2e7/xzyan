"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";

export default function IsometricInterface() {
  const [activeMode, setActiveMode] = useState<"hand" | "cursor" | "tldr">(
    "cursor"
  );
  const { theme } = useTheme();
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const cubeGroupRef = useRef<THREE.Group | null>(null);
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });

  // Default isometric view
  const defaultRotation = { x: -Math.PI / 6, y: -Math.PI / 4 };
  const targetRotation = useRef({ ...defaultRotation });
  const currentRotation = useRef({ ...defaultRotation });

  const getIconFill = (isActive: boolean) => {
    if (theme === "dark") {
      return isActive ? "black" : "white";
    }
    return isActive ? "white" : "black";
  };

  // Snap angles for the three main views + default
  const snapAngles = [
    { x: -Math.PI / 6, y: -Math.PI / 4 }, // Default isometric
    { x: 0, y: 0 }, // Front view (X-Y plane)
    { x: -Math.PI / 2, y: 0 }, // Top view (X-Z plane)
    { x: 0, y: -Math.PI / 2 }, // Side view (Y-Z plane)
  ];

  const findClosestSnapAngle = (x: number, y: number) => {
    let minDistance = Infinity;
    let closestAngle = snapAngles[0];

    snapAngles.forEach((angle) => {
      const distance = Math.sqrt(
        Math.pow(x - angle.x, 2) + Math.pow(y - angle.y, 2)
      );
      if (distance < minDistance && distance < 0.5) {
        // Only snap if close enough
        minDistance = distance;
        closestAngle = angle;
      }
    });

    return minDistance < 0.5 ? closestAngle : { x, y };
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(
      theme === "dark" ? "#1A1816" : "#F6F4ED"
    );
    sceneRef.current = scene;

    // Camera setup - orthographic for isometric view
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 600;
    const camera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      -1000,
      1000
    );
    camera.position.set(0, 0, 500);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create cube group
    const cubeGroup = new THREE.Group();
    cubeGroupRef.current = cubeGroup;
    scene.add(cubeGroup);

    // Define colors
    const axisColors = {
      x: "#DF7070",
      y: "#70DF99",
      z: "#7095DF",
    };

    const planeColors =
      theme === "dark"
        ? { fill: "#302D29", border: "#B3A6C9" }
        : { fill: "#FFFBEF", border: "#295BA8" };

    const labelColor = theme === "dark" ? "#B3A6C9" : "#295BA8";

    // Create diamond ends for axes
    const createDiamond = (color: string) => {
      const geometry = new THREE.OctahedronGeometry(12);
      const material = new THREE.MeshBasicMaterial({
        color,
        opacity: 0.8,
        transparent: true,
      });
      return new THREE.Mesh(geometry, material);
    };

    // Add dashed axes
    const createDashedAxis = (direction: "x" | "y" | "z", color: string) => {
      const group = new THREE.Group();
      const segmentLength = 20;
      const gapLength = 10;
      const totalLength = 300;

      for (let i = 0; i < totalLength; i += segmentLength + gapLength) {
        const geometry = new THREE.CylinderGeometry(4, 4, segmentLength);
        const material = new THREE.MeshBasicMaterial({
          color,
          opacity: 0.8,
          transparent: true,
        });
        const segment = new THREE.Mesh(geometry, material);

        if (direction === "x") {
          segment.rotation.z = Math.PI / 2;
          segment.position.x = -i - segmentLength / 2;
        } else if (direction === "y") {
          segment.position.y = i + segmentLength / 2;
        } else {
          segment.rotation.x = Math.PI / 2;
          segment.position.z = -i - segmentLength / 2;
        }

        group.add(segment);
      }

      return group;
    };

    // Add axes
    const xAxis = createDashedAxis("x", axisColors.x);
    const yAxis = createDashedAxis("y", axisColors.y);
    const zAxis = createDashedAxis("z", axisColors.z);
    cubeGroup.add(xAxis, yAxis, zAxis);

    // Add diamonds at axis ends
    const xDiamond = createDiamond(axisColors.x);
    xDiamond.position.x = -300;
    const yDiamond = createDiamond(axisColors.y);
    yDiamond.position.y = 300;
    const zDiamond = createDiamond(axisColors.z);
    zDiamond.position.z = -300;
    cubeGroup.add(xDiamond, yDiamond, zDiamond);

    // Create planes with 2D labels
    const createPlane = (
      width: number,
      height: number,
      labels?: Array<{
        text: string;
        subscript: string;
        position: { x: number; y: number };
      }>
    ) => {
      const planeGeometry = new THREE.PlaneGeometry(width, height);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: planeColors.fill,
        opacity: 0.85,
        transparent: true,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);

      // Add border
      const edges = new THREE.EdgesGeometry(planeGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: planeColors.border,
        opacity: 0.4,
        transparent: true,
        linewidth: 2,
      });
      const border = new THREE.LineSegments(edges, lineMaterial);
      plane.add(border);

      // Add grid lines as placeholder
      const divisions = 8;
      const gridMaterial = new THREE.LineBasicMaterial({
        color: planeColors.border,
        opacity: 0.15,
        transparent: true,
      });

      // Vertical lines
      for (let i = 1; i < divisions; i++) {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          -width / 2 + (i * width) / divisions,
          -height / 2,
          0.1,
          -width / 2 + (i * width) / divisions,
          height / 2,
          0.1,
        ]);
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(vertices, 3)
        );
        const line = new THREE.Line(geometry, gridMaterial);
        plane.add(line);
      }

      // Horizontal lines
      for (let i = 1; i < divisions; i++) {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          -width / 2,
          -height / 2 + (i * height) / divisions,
          0.1,
          width / 2,
          -height / 2 + (i * height) / divisions,
          0.1,
        ]);
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(vertices, 3)
        );
        const line = new THREE.Line(geometry, gridMaterial);
        plane.add(line);
      }

      // Add 2D text labels as textures on the plane
      if (labels) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = 1024;
        canvas.height = 1024;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      return plane;
    };

    // X-Y plane (front/back face)
    const xyPlane = createPlane(300, 300);
    xyPlane.position.set(-150, 150, 0);
    cubeGroup.add(xyPlane);

    // Y-Z plane (right face)
    const yzPlane = createPlane(300, 300);
    yzPlane.rotation.y = Math.PI / 2;
    yzPlane.position.set(0, 150, -150);
    cubeGroup.add(yzPlane);

    // X-Z plane (bottom face)
    const xzPlane = createPlane(300, 300);
    xzPlane.rotation.x = Math.PI / 2;
    xzPlane.position.set(-150, 0, -150);
    cubeGroup.add(xzPlane);

    // Set initial rotation
    cubeGroup.rotation.x = currentRotation.current.x;
    cubeGroup.rotation.y = currentRotation.current.y;

    // Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      if (activeMode === "hand") {
        isDragging.current = true;
        previousMouse.current = { x: e.clientX, y: e.clientY };
        if (mountRef.current) {
          mountRef.current.style.cursor = "grabbing";
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current && activeMode === "hand") {
        const deltaX = e.clientX - previousMouse.current.x;
        const deltaY = e.clientY - previousMouse.current.y;

        targetRotation.current.y += deltaX * 0.01;
        targetRotation.current.x += deltaY * 0.01;

        // Clamp X rotation to prevent flipping
        targetRotation.current.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 6, targetRotation.current.x)
        );

        previousMouse.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;

        // Snap to nearest angle
        const snapAngle = findClosestSnapAngle(
          targetRotation.current.x,
          targetRotation.current.y
        );
        targetRotation.current = { ...snapAngle };

        if (mountRef.current) {
          mountRef.current.style.cursor =
            activeMode === "hand" ? "grab" : "default";
        }
      }
    };

    // Add event listeners
    renderer.domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      camera.left = (-frustumSize * aspect) / 2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation
      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * 0.1;
      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * 0.1;

      if (cubeGroup) {
        cubeGroup.rotation.x = currentRotation.current.x;
        cubeGroup.rotation.y = currentRotation.current.y;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme, activeMode]);

  // Update cursor style when mode changes
  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.style.cursor =
        activeMode === "hand" ? "grab" : "default";
    }
  }, [activeMode]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />

      {/* Control Icons - Top Left */}
      <div className="absolute top-8 left-8 flex gap-3">
        <button
          onClick={() => setActiveMode("hand")}
          className={`w-12 h-12 rounded-lg border-4 flex items-center justify-center transition-all ${
            activeMode === "hand"
              ? "bg-[#3674D1] dark:bg-[#9B7FC9] text-white"
              : "bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/20 dark:hover:border-[#B3A6C9]/20"
          }`}
          aria-label="3D manipulation mode"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 11.8333H10.8333V3.16667H13V11.8333H15.1667V3.16667H17.3333V1H6.5V3.16667H8.66667V11.8333ZM2.16667 22.6667H4.33333V18.3333H2.16667V22.6667ZM4.33333 24.8333H17.3333V22.6667H4.33333V24.8333ZM0 18.3333H2.16667V5.33333H0V18.3333ZM4.33333 14H6.5V3.16667H2.16667V5.33333H4.33333V14ZM17.3333 22.6667H19.5V20.5H17.3333V22.6667ZM19.5 20.5H21.6667V18.3333H19.5V20.5ZM21.6667 18.3333H23.8333V9.66667H19.5V3.16667H17.3333V14H19.5V11.8333H21.6667V18.3333Z"
              fill={getIconFill(activeMode === "hand")}
              fillOpacity={activeMode === "hand" ? "1" : "0.7"}
            />
          </svg>
        </button>

        <button
          onClick={() => setActiveMode("cursor")}
          className={`w-12 h-12 rounded-lg border-4 flex items-center justify-center transition-all ${
            activeMode === "cursor"
              ? "bg-[#3674D1] dark:bg-[#9B7FC9] text-white"
              : "bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/20 dark:hover:border-[#B3A6C9]/20"
          }`}
          aria-label="Panel selection mode"
        >
          <svg
            width="16"
            height="25"
            viewBox="0 0 16 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 22.7273H2.28571V20.4545H6.85714V15.9091H4.57143V18.1818H2.28571V4.54545H4.57143V2.27273H2.28571V0H0V22.7273ZM6.85714 25H13.7143V18.1818H11.4286V22.7273H9.14286V20.4545H6.85714V25ZM9.14286 18.1818H11.4286V15.9091H16V13.6364H13.7143V11.3636H11.4286V13.6364H9.14286V18.1818ZM4.57143 6.81818H6.85714V4.54545H4.57143V6.81818ZM6.85714 9.09091H9.14286V6.81818H6.85714V9.09091ZM9.14286 11.3636H11.4286V9.09091H9.14286V11.3636Z"
              fill={getIconFill(activeMode === "cursor")}
              fillOpacity={activeMode === "cursor" ? "1" : "0.7"}
            />
          </svg>
        </button>

        <button
          onClick={() => setActiveMode("tldr")}
          className={`px-4 h-12 rounded-lg border-4 flex items-center justify-center transition-all ${
            activeMode === "tldr"
              ? "bg-[#3674D1] dark:bg-[#9B7FC9] text-white"
              : "bg-[#FFFBEF] dark:bg-[#302D29] hover:border-[#295BA8]/20 dark:hover:border-[#B3A6C9]/20"
          }`}
          aria-label="Condensed overview mode"
        >
          <span
            className="font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-recursive-sans)",
              fontSize: "20px",
              fontVariationSettings: '"MONO" 0, "CASL" 1.5, "CRSV" 0',
            }}
          >
            TL;DR
          </span>
        </button>
      </div>
    </div>
  );
}
