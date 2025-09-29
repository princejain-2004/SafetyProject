import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VirtualEarthquakeDrill() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, clock, mouseControls, keyboardControls;
    let ground, bookcase, table, safeSpot;
    let shakeStartTime = 0;
    let isShaking = false;
    let isDrillActive = false;
    let isSafe = false;

    const SHAKE_DURATION = 10000; // 10s
    const COLLAPSE_TIME = 8000; // 8s

    // DOM references
    const infoPanel = document.getElementById("info-panel");
    const startButton = document.getElementById("start-button");
    const messageBox = document.getElementById("message-box");
    const messageTitle = document.getElementById("message-title");
    const messageText = document.getElementById("message-text");
    const continueButton = document.getElementById("continue-button");

    function init() {
      // Scene, Camera, Renderer
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0d1117);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 1.6, 5);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Lights
      scene.add(new THREE.AmbientLight(0x404040));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

      // Ground
      const groundGeometry = new THREE.PlaneGeometry(20, 20);
      ground = new THREE.Mesh(
        groundGeometry,
        new THREE.MeshLambertMaterial({ color: 0x2d3748 })
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      // Walls
      const wallMaterial = new THREE.MeshLambertMaterial({ color: 0x1a202c });
      const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
      backWall.position.set(0, 5, -10);
      scene.add(backWall);

      const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
      rightWall.rotation.y = -Math.PI / 2;
      rightWall.position.set(10, 5, 0);
      scene.add(rightWall);

      const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
      leftWall.rotation.y = Math.PI / 2;
      leftWall.position.set(-10, 5, 0);
      scene.add(leftWall);

      // Bookcase
      bookcase = new THREE.Mesh(
        new THREE.BoxGeometry(2, 5, 0.5),
        new THREE.MeshLambertMaterial({ color: 0x8b5c5c })
      );
      bookcase.position.set(-5, 2.5, -9);
      scene.add(bookcase);

      // Table (safe spot)
      table = new THREE.Mesh(
        new THREE.BoxGeometry(3, 1, 1.5),
        new THREE.MeshLambertMaterial({ color: 0x422a1f })
      );
      table.position.set(0, 0.5, -4);
      scene.add(table);

      safeSpot = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 0.1, 1),
        new THREE.MeshBasicMaterial({ color: 0x48bb78, transparent: true, opacity: 0.5 })
      );
      safeSpot.position.set(0, 0.55, -4);
      scene.add(safeSpot);

      // Lamp
      const lamp = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 1, 16),
        new THREE.MeshLambertMaterial({ color: 0xffff00 })
      );
      lamp.position.set(2, 3, -8);
      scene.add(lamp);

      // Controls
      mouseControls = { isDragging: false, previousMouseX: 0, previousMouseY: 0 };
      keyboardControls = { up: false, down: false, left: false, right: false };

      // Mouse
      renderer.domElement.addEventListener("mousedown", (e) => {
        mouseControls.isDragging = true;
        mouseControls.previousMouseX = e.clientX;
        mouseControls.previousMouseY = e.clientY;
      });
      renderer.domElement.addEventListener("mouseup", () => {
        mouseControls.isDragging = false;
      });
      renderer.domElement.addEventListener("mousemove", (e) => {
        if (mouseControls.isDragging) {
          const dx = e.clientX - mouseControls.previousMouseX;
          const dy = e.clientY - mouseControls.previousMouseY;
          camera.rotation.y -= dx * 0.005;
          camera.rotation.x -= dy * 0.005;
          camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
          mouseControls.previousMouseX = e.clientX;
          mouseControls.previousMouseY = e.clientY;
        }
      });

      // Keyboard
      document.addEventListener("keydown", (e) => {
        if (e.key === "w") keyboardControls.up = true;
        if (e.key === "s") keyboardControls.down = true;
        if (e.key === "a") keyboardControls.left = true;
        if (e.key === "d") keyboardControls.right = true;
      });
      document.addEventListener("keyup", (e) => {
        if (e.key === "w") keyboardControls.up = false;
        if (e.key === "s") keyboardControls.down = false;
        if (e.key === "a") keyboardControls.left = false;
        if (e.key === "d") keyboardControls.right = false;
      });

      // Start button
      startButton.addEventListener("click", () => {
        infoPanel.style.display = "none";
        isDrillActive = true;
        shakeStartTime = clock.getElapsedTime();
        isShaking = true;
        showMessage(
          "Drill Started!",
          "Earthquake detected! Stay calm and find a safe spot under a sturdy table. Do not go outside!",
          "Get to Safety"
        );
      });

      continueButton.addEventListener("click", () => {
        messageBox.style.display = "none";
      });

      clock = new THREE.Clock();
      animate();
    }

    function animate() {
      requestAnimationFrame(animate);

      if (isDrillActive) {
        const delta = clock.getDelta();
        const speed = 5 * delta;
        const direction = new THREE.Vector3();

        if (keyboardControls.up) direction.z -= 1;
        if (keyboardControls.down) direction.z += 1;
        if (keyboardControls.left) direction.x -= 1;
        if (keyboardControls.right) direction.x += 1;

        direction.normalize();
        direction.applyQuaternion(camera.quaternion);
        camera.position.add(direction.multiplyScalar(speed));

        // Safe spot check
        const pos = camera.position.clone();
        if (
          pos.x > safeSpot.position.x - 1.5 &&
          pos.x < safeSpot.position.x + 1.5 &&
          pos.z > safeSpot.position.z - 1.5 &&
          pos.z < safeSpot.position.z + 1.5
        ) {
          if (!isSafe) {
            isSafe = true;
            showMessage(
              "You are safe!",
              "You correctly identified and took shelter in a safe spot. You are protected!",
              "End Drill"
            );
            continueButton.onclick = () => {
              isDrillActive = false;
              isShaking = false;
              showMessage(
                "Drill Complete!",
                "🎉 Congratulations! You successfully completed the virtual earthquake drill.",
                "Restart Drill"
              );
              continueButton.onclick = () => window.location.reload();
            };
          }
        }
      }

      // Shake effect
      if (isShaking) {
        const elapsed = clock.getElapsedTime() - shakeStartTime;
        camera.position.x += Math.sin(elapsed * 50) * 0.02;
        camera.position.y += Math.cos(elapsed * 50) * 0.02;

        if (elapsed > COLLAPSE_TIME && bookcase.position.x > -10) {
          bookcase.rotation.z += 0.05;
          bookcase.position.y -= 0.02;
          bookcase.position.x -= 0.02;
        }

        if (elapsed > SHAKE_DURATION) {
          isShaking = false;
          showMessage(
            "Shaking Stopped.",
            "The shaking has stopped. Now, carefully move outside to an open area.",
            "End Drill"
          );
          continueButton.onclick = () => {
            isDrillActive = false;
            showMessage(
              "Drill Complete!",
              "🎉 Congratulations! You successfully completed the virtual earthquake drill.",
              "Restart Drill"
            );
            continueButton.onclick = () => window.location.reload();
          };
        }
      }

      renderer.render(scene, camera);
    }

    function showMessage(title, text, buttonText) {
      messageBox.style.display = "flex"; // center
      messageTitle.textContent = title;
      messageText.textContent = text;
      continueButton.textContent = buttonText;
      continueButton.style.display = "inline-block";
    }

    window.addEventListener("resize", () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    init();

    return () => {
      if (renderer) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* Three.js Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Info Panel */}
      <div
        id="info-panel"
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <div className="w-[90%] max-w-lg bg-slate-900/90 backdrop-blur-lg border border-blue-500 rounded-2xl shadow-2xl p-8 text-center animate-fadeIn">
          <h1 className="text-3xl font-extrabold mb-4 text-blue-400 drop-shadow-lg">
            Virtual Earthquake Drill
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Click and drag to look around. Use{" "}
            <span className="font-semibold text-blue-300">W/A/S/D</span> to move.
            <br />
            Find a safe spot!
          </p>
          <button
            id="start-button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚀 Start Drill
          </button>
        </div>
      </div>

      {/* ✅ Single Message Box */}
      <div
        id="message-box"
        className="absolute inset-0 flex items-center justify-center z-30"
      >
        <div className="w-[90%] max-w-md bg-slate-900/95 backdrop-blur-lg border border-green-500 rounded-2xl shadow-2xl p-6 text-center animate-fadeIn">
          <h2 id="message-title" className="text-2xl font-bold text-green-400 mb-2" />
          <p id="message-text" className="text-base text-gray-200 mb-4" />
          <button
            id="continue-button"
            className="hidden bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
