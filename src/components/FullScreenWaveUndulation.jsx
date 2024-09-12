import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';

const FullScreenWaveUndulation = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [debugInfo, setDebugInfo] = useState('');
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const squaresRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(performance.now());

  const squareSize = 32;
  const waveFrequency = 0.5;
  const minHoverRadius = 1;
  const maxHoverRadius = 5;
  const speedMultiplier = 1.5; // Adjust this to change sensitivity to mouse speed
  const hoverDuration = 0.3; // Adjust this value for slower or faster growth/shrink


  const { cols, rows } = useMemo(() => ({
    cols: Math.ceil(window.innerWidth / squareSize),
    rows: Math.ceil(window.innerHeight / squareSize)
  }), []);

  const lerp = (start, end, t) => start * (1 - t) + end * t;
  const easeOut = (t) => t * (2 - t);

  const interpolateColor = useCallback((scale) => {
    const green = new THREE.Color(0x02a9f7);
    const white = new THREE.Color(0xd4f0fc);
    return white.clone().lerp(green, (scale - 0.3) / 0.5);
  }, []);

  const morphToCircle = useCallback((geometry, scale) => {
    const vertices = geometry.attributes.position;
    const originalPositions = geometry.userData.originalPositions || vertices.array.slice();
    
    if (!geometry.userData.originalPositions) {
      geometry.userData.originalPositions = originalPositions;
    }

    for (let i = 0; i < vertices.count; i++) {
      const index = i * 3;
      const x = originalPositions[index];
      const y = originalPositions[index + 1];

      const angle = Math.atan2(y, x);
      const radius = Math.sqrt(x * x + y * y);
      const circleRadius = squareSize / 2;

      const morphedRadius = lerp(radius, circleRadius, 1 - scale);

      vertices.array[index] = morphedRadius * Math.cos(angle);
      vertices.array[index + 1] = morphedRadius * Math.sin(angle);
    }

    vertices.needsUpdate = true;
  }, [squareSize]);

  const updateHoveredSquares = useCallback((mouseX, mouseY, speed) => {
    const hoverRadius = Math.min(maxHoverRadius, Math.max(minHoverRadius, speed * speedMultiplier));

    let hoveredCount = 0;
    squaresRef.current.forEach((square) => {
      const dx = square.position.x - mouseX;
      const dy = square.position.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= hoverRadius * squareSize) {
        square.userData.targetScale = 0.9;
        square.userData.isHovered = true;
        square.userData.hoverStartTime = performance.now();
        hoveredCount++;
      } else if (square.userData.isHovered) {
        square.userData.isHovered = false;
        square.userData.targetScale = 0.6;
      }
    });

    setDebugInfo(`Mouse at (${mouseX.toFixed(2)}, ${mouseY.toFixed(2)}), Speed: ${speed.toFixed(2)}, Hovered: ${hoveredCount}`);
  }, [squareSize, speedMultiplier]);

  const updateSquares = useCallback(() => {
    const time = performance.now() * 0.0004;
  
    squaresRef.current.forEach((square) => {
      if (!square.userData.isHovered) {
        const wavePhase = square.userData.diagonalKey * 0.08;
        const waveScale = Math.abs(Math.sin(time * waveFrequency + wavePhase)) * 0.4 + 0.05;
        square.userData.targetScale = waveScale;
      }
  
      // Use the hoverDuration to control how fast the scale changes
      square.userData.currentScale = lerp(
        square.userData.currentScale,
        square.userData.targetScale,
        easeOut(hoverDuration) // This determines how fast the transition happens
      );
  
      morphToCircle(square.geometry, square.userData.currentScale);
      square.material.color.copy(interpolateColor(square.userData.currentScale));
      square.scale.setScalar(square.userData.currentScale);
    });
  }, [morphToCircle, interpolateColor, hoverDuration]);
  

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x01303f);
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.PlaneGeometry(squareSize, squareSize, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x01303f, side: THREE.DoubleSide });

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const square = new THREE.Mesh(geometry.clone(), material.clone());
        square.position.set(
          (j - cols / 2) * squareSize + squareSize / 2,
          (rows / 2 - i) * squareSize - squareSize / 2,
          0
        );

        square.userData = {
          targetScale: 0.6,
          currentScale: 0.6,
          isHovered: false,
          hoverStartTime: 0,
          diagonalKey: i - j
        };

        scene.add(square);
        squaresRef.current.push(square);
      }
    }

    const onMouseMove = (event) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const mouseX = event.clientX - containerRect.left - window.innerWidth / 2;
      const mouseY = window.innerHeight / 2 - (event.clientY - containerRect.top);

      const currentTime = performance.now();
      const timeDelta = currentTime - lastUpdateTime.current;
      const dx = mouseX - lastMousePosition.current.x;
      const dy = mouseY - lastMousePosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = distance / timeDelta; // pixels per millisecond

      setMousePosition({ x: mouseX, y: mouseY });
      updateHoveredSquares(mouseX, mouseY, speed);

      lastMousePosition.current = { x: mouseX, y: mouseY };
      lastUpdateTime.current = currentTime;
    };

    document.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      updateSquares();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [cols, rows, updateHoveredSquares, updateSquares]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={containerRef} className="fullscreenwave"></div>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '5px',
        fontFamily: 'monospace'
      }}>
        {debugInfo}
      </div>
    </div>
  );
};

export default FullScreenWaveUndulation;