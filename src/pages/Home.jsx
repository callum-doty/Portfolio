import React, { useEffect } from 'react';
import * as THREE from 'three';

const FullScreenWaveUndulation = () => {
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
    document.body.appendChild(renderer.domElement);

    const squareSize = 35; // Square size
    const geometry = new THREE.PlaneGeometry(squareSize, squareSize);
    const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    const cols = Math.ceil(window.innerWidth / squareSize);
    const rows = Math.ceil(window.innerHeight / squareSize);

    const squares = [];
    const diagonalGroups = {};

    // Create and place only white squares in a grid
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // White square
        const whiteSquare = new THREE.Mesh(geometry, whiteMaterial);
        whiteSquare.position.set(
          (j - cols / 2) * squareSize + squareSize / 2,
          (i - rows / 2) * squareSize + squareSize / 2,
          0
        );

        // Add hover state and animation properties
        whiteSquare.userData.targetScale = 0.6; // Default scale
        whiteSquare.userData.currentScale = 0.6;
        whiteSquare.userData.isHovered = false;

        const diagonalKey = i - j; // Group by diagonal index (i - j creates unique indices for diagonal rows)

        if (!diagonalGroups[diagonalKey]) {
          diagonalGroups[diagonalKey] = {
            squares: [],
          };
        }

        diagonalGroups[diagonalKey].squares.push({ whiteSquare });
        scene.add(whiteSquare);
        squares.push({ whiteSquare });
      }
    }

    // Smoothly interpolate between the current and target scale
    const lerp = (start, end, t) => start * (1 - t) + end * t;

    // Detect mouse movement and update target scale for hovered squares
    const onMouseMove = (event) => {
      const mouseX = event.clientX - window.innerWidth / 2;
      const mouseY = -(event.clientY - window.innerHeight / 2);

      // Calculate which column and row the mouse is over
      const col = Math.floor((mouseX + cols * squareSize / 2) / squareSize);
      const row = Math.floor((mouseY + rows * squareSize / 2) / squareSize);

      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        // Set hover effect to nearby squares
        for (let i = row - 2; i <= row + 1; i++) {
          for (let j = col - 2; j <= col + 1; j++) {
            if (i >= 0 && i < rows && j >= 0 && j < cols) {
              const squareIndex = i * cols + j;
              const { whiteSquare } = squares[squareIndex];

              // Set the target scale to 0.9 (for the hover effect)
              whiteSquare.userData.targetScale = 0.9;
              whiteSquare.userData.isHovered = true;

              // Reset back to original size after a delay
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

    function animate() {
      requestAnimationFrame(animate);

      const time = performance.now() * 0.0004; // Slows down wave propagation
      const waveFrequency = 1; // Increase this value to stretch the wave (increasing the time between waves)

      // Create a coordinated wave across the grid
      for (const key in diagonalGroups) {
        const { squares } = diagonalGroups[key];
        const wavePhase = key * 0.08; // Use this to create the phase offset between diagonals

        squares.forEach(({ whiteSquare }) => {
          if (!whiteSquare.userData.isHovered) {
            // Apply slower wave by modifying the frequency
            const waveScale = Math.abs(Math.sin(time * waveFrequency + wavePhase)) * 0.6 + 0.01;
            whiteSquare.userData.targetScale = waveScale;
          }

          // Smooth interpolation between current and target scale
          whiteSquare.userData.currentScale = lerp(
            whiteSquare.userData.currentScale,
            whiteSquare.userData.targetScale,
            0.1 // Smoothing factor
          );

          // Apply the current scale
          whiteSquare.scale.set(
            whiteSquare.userData.currentScale,
            whiteSquare.userData.currentScale,
            1
          );
        });
      }

      renderer.render(scene, camera);
    }

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
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default FullScreenWaveUndulation;
