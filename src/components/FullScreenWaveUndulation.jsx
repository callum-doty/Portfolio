import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FullScreenWaveUndulation = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState(0);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const squareSize = 35;
    const geometry = new THREE.PlaneGeometry(squareSize, squareSize);
    const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    const cols = Math.ceil(window.innerWidth / squareSize);
    const rows = Math.ceil(window.innerHeight / squareSize);

    const squares = [];
    const diagonalGroups = {};

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const whiteSquare = new THREE.Mesh(geometry, whiteMaterial.clone());
        whiteSquare.position.set(
          (j - cols / 2) * squareSize + squareSize / 2,
          (i - rows / 2) * squareSize + squareSize / 2,
          0
        );

        whiteSquare.userData.targetScale = 0.6;
        whiteSquare.userData.currentScale = 0.6;
        whiteSquare.userData.isHovered = false;

        const diagonalKey = i - j;
        if (!diagonalGroups[diagonalKey]) {
          diagonalGroups[diagonalKey] = { squares: [] };
        }

        diagonalGroups[diagonalKey].squares.push({ whiteSquare });
        scene.add(whiteSquare);
        squares.push({ whiteSquare });
      }
    }

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    // Interpolates between white and green based on the scale
    const interpolateColor = (scale) => {
      const green = new THREE.Color(0x00ff00);  // Green color
      const white = new THREE.Color(0xffffff);  // White color
      const color = white.clone().lerp(green, (scale - 0.3) / 0.9); // Scale between 0.6 (white) to 0.9 (green)
      return color;
    };

    const calculateMouseVelocity = (x, y) => {
      const currentTime = performance.now();
      const timeDifference = currentTime - lastTimeRef.current;
      const dx = x - lastMousePosition.current.x;
      const dy = y - lastMousePosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const velocity = distance / timeDifference; // Pixels per millisecond

      lastMousePosition.current = { x, y };
      lastTimeRef.current = currentTime;

      return velocity;
    };

    const onMouseMove = (event) => {
      const mouseX = event.clientX - window.innerWidth / 2;
      const mouseY = -(event.clientY - window.innerHeight / 2);

      // Update the state with the current mouse position and calculate velocity
      const velocity = calculateMouseVelocity(event.clientX, event.clientY);
      setMousePosition({ x: mouseX, y: mouseY });
      setMouseVelocity(velocity);

      const col = Math.floor((mouseX + cols * squareSize / 2) / squareSize);
      const row = Math.floor((mouseY + rows * squareSize / 2) / squareSize);

      // Adjust the reaction radius based on mouse velocity
      const minRadius = 1; // The slowest will affect 1x1 grid (just the square under the mouse)
      const maxRadius = 3; // The fastest will affect up to a 6x6 grid
      const reactionRadius = Math.min(maxRadius, Math.ceil(velocity * 1.5)); // Scale velocity to affect the number of squares

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        for (let i = row - reactionRadius; i <= row + reactionRadius; i++) {
          for (let j = col - reactionRadius; j <= col + reactionRadius; j++) {
            if (i >= 0 && i < rows && j >= 0 && j < cols) {
              const squareIndex = i * cols + j;
              const { whiteSquare } = squares[squareIndex];
              whiteSquare.userData.targetScale = 0.9;
              whiteSquare.userData.isHovered = true;

              setTimeout(() => {
                whiteSquare.userData.targetScale = 0.6;
                whiteSquare.userData.isHovered = false;
              }, 100);
            }
          }
        }
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      const time = performance.now() * 0.0004;
      const waveFrequency = 2;

      for (const key in diagonalGroups) {
        const { squares } = diagonalGroups[key];
        const wavePhase = key * 0.08;

        squares.forEach(({ whiteSquare }) => {
          if (!whiteSquare.userData.isHovered) {
            const waveScale = Math.abs(Math.sin(time * waveFrequency + wavePhase)) * 0.4 + 0.01;
            whiteSquare.userData.targetScale = waveScale;
          }

          whiteSquare.userData.currentScale = lerp(
            whiteSquare.userData.currentScale,
            whiteSquare.userData.targetScale,
            0.1
          );

          // Interpolate color based on the current scale
          whiteSquare.material.color.copy(interpolateColor(whiteSquare.userData.currentScale));

          whiteSquare.scale.set(
            whiteSquare.userData.currentScale,
            whiteSquare.userData.currentScale,
            1
          );
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fullscreenwave"></div>;
};

export default FullScreenWaveUndulation;
