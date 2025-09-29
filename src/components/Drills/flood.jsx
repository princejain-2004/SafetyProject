import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VirtualFloodDrill() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, clock;
    let ground, water, tree, boat;
    let isDrillActive = false;
    let isSafe = false;
    let waterLevel = -10; // Start water level below the ground

    const FLOOD_DURATION = 20000; // 20s for the flood to rise
    const HIGH_GROUND_Z = -5; // Z-coordinate for the safe high ground

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
      scene.background = new THREE.Color(0x87ceeb); // Sky blue background

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

      // Ground (for high ground)
      const groundGeometry = new THREE.BoxGeometry(20, 1, 20);
      ground = new THREE.Mesh(
        groundGeometry,
        new THREE.MeshLambertMaterial({ color: 0x48bb78 }) // Green for land
      );
      ground.position.set(0, -0.5, HIGH_GROUND_Z);
      scene.add(ground);

      // Water Plane
      const waterGeometry = new THREE.PlaneGeometry(50, 50);
      water = new THREE.Mesh(
        waterGeometry,
        new THREE.MeshLambertMaterial({ color: 0x00bfff, transparent: true, opacity: 0.8 })
      );
      water.rotation.x = -Math.PI / 2;
      water.position.y = waterLevel; // Initial position
      scene.add(water);

      // Tree (High Ground Landmark)
      const treeMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 4, 16), treeMaterial);
      trunk.position.set(0, 2, HIGH_GROUND_Z);
      scene.add(trunk);

      const leaves = new THREE.Mesh(
        new THREE.ConeGeometry(2, 3, 16),
        new THREE.MeshLambertMaterial({ color: 0x228b22 })
      );
      leaves.position.set(0, 5, HIGH_GROUND_Z);
      scene.add(leaves);

      // Boat (Example of Floating Object)
      const boatMaterial = new THREE.MeshLambertMaterial({ color: 0xa0522d });
      boat = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.5, 5),
        boatMaterial
      );
      boat.position.set(5, 0, 5);
      scene.add(boat);

      // Mouse & Keyboard Controls (adapted for movement in 3D space)
      const mouseControls = { isDragging: false, previousMouseX: 0, previousMouseY: 0 };
      const keyboardControls = { forward: false, backward: false, left: false, right: false };

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
          const dy = e.clientY - mouseControls.clientY;
          camera.rotation.y -= dx * 0.005;
          camera.rotation.x -= dy * 0.005;
          mouseControls.previousMouseX = e.clientX;
          mouseControls.previousMouseY = e.clientY;
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "w" || e.key === "W") keyboardControls.forward = true;
        if (e.key === "s" || e.key === "S") keyboardControls.backward = true;
        if (e.key === "a" || e.key === "A") keyboardControls.left = true;
        if (e.key === "d" || e.key === "D") keyboardControls.right = true;
      });
      document.addEventListener("keyup", (e) => {
        if (e.key === "w" || e.key === "W") keyboardControls.forward = false;
        if (e.key === "s" || e.key === "S") keyboardControls.backward = false;
        if (e.key === "a" || e.key === "A") keyboardControls.left = false;
        if (e.key === "d" || e.key === "D") keyboardControls.right = false;
      });

      // Start button
      startButton.addEventListener("click", () => {
        infoPanel.style.display = "none";
        isDrillActive = true;
        showMessage(
          "Flood Warning!",
          "Floodwaters are rising. Do not walk or drive through floodwater. Move to high ground immediately.",
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

        if (keyboardControls.forward) direction.z -= 1;
        if (keyboardControls.backward) direction.z += 1;
        if (keyboardControls.left) direction.x -= 1;
        if (keyboardControls.right) direction.x += 1;

        direction.normalize();
        direction.applyQuaternion(camera.quaternion);
        camera.position.add(direction.multiplyScalar(speed));

        // Rising water
        if (water.position.y < 0) {
          water.position.y += 0.005;
        }
        // Floating boat
        boat.position.y = water.position.y + 0.25;

        // Safe spot check (reaching high ground)
        if (camera.position.z <= HIGH_GROUND_Z + 1 && !isSafe) {
          isSafe = true;
          showMessage(
            "You reached high ground!",
            "You correctly identified and moved to a safe, elevated area. You are protected!",
            "End Drill"
          );
          continueButton.onclick = () => {
            isDrillActive = false;
            showMessage(
              "Drill Complete!",
              "🎉 Congratulations! You successfully completed the virtual flood drill.",
              "Restart Drill"
            );
            continueButton.onclick = () => window.location.reload();
          };
        }
      }

      renderer.render(scene, camera);
    }

    function showMessage(title, text, buttonText) {
      messageBox.style.display = "flex";
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
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
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
            Virtual Flood Drill
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Click and drag to look around. Use{" "}
            <span className="font-semibold text-blue-300">W/A/S/D</span> to move.
            <br />
            Find high ground!
          </p>
          <button
            id="start-button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚀 Start Drill
          </button>
        </div>
      </div>

      {/* Single Message Box */}
      <div
        id="message-box"
        className="hidden absolute inset-0 flex items-center justify-center z-30"
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