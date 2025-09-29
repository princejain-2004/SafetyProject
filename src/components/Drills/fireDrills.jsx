import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VirtualFireDrill() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, clock;
    let ground, building, exitZone, debrisGroup, flames, smokeGroup;
    let fireStart = 0;
    let isDrillActive = false;

    // DOM refs
    const infoPanel = document.getElementById("fire-info-panel");
    const startButton = document.getElementById("fire-start-button");
    const messageBox = document.getElementById("fire-message-box");
    const messageTitle = document.getElementById("fire-message-title");
    const messageText = document.getElementById("fire-message-text");
    const continueButton = document.getElementById("fire-continue-button");

    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111111);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth * 0.6 / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 1.6, 6);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth * 0.6, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      clock = new THREE.Clock();

      // lights
      scene.add(new THREE.AmbientLight(0x333333));
      const fireLight = new THREE.PointLight(0xff4500, 2, 15);
      fireLight.position.set(0, 2, -3);
      scene.add(fireLight);

      // ground
      const groundGeo = new THREE.PlaneGeometry(50, 50);
      ground = new THREE.Mesh(
        groundGeo,
        new THREE.MeshLambertMaterial({ color: 0x2e2e2e })
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      // burning building
      building = new THREE.Mesh(
        new THREE.BoxGeometry(3, 4, 3),
        new THREE.MeshLambertMaterial({ color: 0x4a2e2e })
      );
      building.position.set(0, 2, -6);
      scene.add(building);

      // exit zone
      exitZone = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.6 })
      );
      exitZone.rotation.x = -Math.PI / 2;
      exitZone.position.set(6, 0.01, -2);
      scene.add(exitZone);

      // flames (particles)
      flames = new THREE.Group();
      for (let i = 0; i < 100; i++) {
        const flame = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xff4500 })
        );
        flame.position.set(
          (Math.random() - 0.5) * 2,
          Math.random() * 2,
          -6 + (Math.random() - 0.5) * 2
        );
        flames.add(flame);
      }
      scene.add(flames);

      // smoke particles
      smokeGroup = new THREE.Group();
      for (let i = 0; i < 50; i++) {
        const smoke = new THREE.Mesh(
          new THREE.SphereGeometry(0.15, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.6 })
        );
        smoke.position.set(
          (Math.random() - 0.5) * 2,
          2 + Math.random() * 1,
          -6 + (Math.random() - 0.5) * 2
        );
        smokeGroup.add(smoke);
      }
      scene.add(smokeGroup);

      // debris
      debrisGroup = new THREE.Group();
      for (let i = 0; i < 10; i++) {
        const debris = new THREE.Mesh(
          new THREE.BoxGeometry(0.4, 0.2, 0.2),
          new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
        );
        debris.position.set(
          (Math.random() - 0.5) * 4,
          2 + Math.random() * 2,
          -6 + (Math.random() - 0.5) * 2
        );
        debris.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        debrisGroup.add(debris);
      }
      scene.add(debrisGroup);

      // animation
      function animate() {
        requestAnimationFrame(animate);

        // animate flames upward
        flames.children.forEach((flame) => {
          flame.position.y += 0.01;
          if (flame.position.y > 4) flame.position.y = 0.5;
        });

        // smoke rising
        smokeGroup.children.forEach((smoke) => {
          smoke.position.y += 0.005;
          smoke.material.opacity -= 0.0005;
          if (smoke.position.y > 5) {
            smoke.position.y = 2;
            smoke.material.opacity = 0.6;
          }
        });

        // debris falling slowly
        debrisGroup.children.forEach((d) => {
          d.position.y -= 0.01;
          if (d.position.y < 0) d.position.y = 2 + Math.random() * 2;
        });

        renderer.render(scene, camera);
      }

      // listeners
      startButton.addEventListener("click", () => {
        infoPanel.style.display = "none";
        fireStart = Date.now();
        isDrillActive = true;
      });
      continueButton.addEventListener("click", () => {
        messageBox.style.display = "none";
      });

      animate();
    }

    init();

    return () => {
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen relative flex justify-center">
      <div ref={containerRef} className="h-full" />

      {/* Info Panel */}
      <div id="fire-info-panel" className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-[90%] max-w-lg bg-black/90 backdrop-blur-lg border border-red-600 rounded-2xl shadow-2xl p-8 text-center">
          <h1 className="text-3xl font-extrabold mb-4 text-red-400 drop-shadow-lg">🔥 Virtual Fire Drill</h1>
          <p className="text-lg text-gray-200 mb-6">
            Move quickly to find the <span className="text-green-400 font-bold">EXIT zone</span>.  
            Stay low and avoid fire & smoke!
          </p>
          <button
            id="fire-start-button"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚨 Start Fire Drill
          </button>
        </div>
      </div>

      {/* Message Box */}
      <div id="fire-message-box" className="hidden absolute inset-0 flex items-center justify-center z-30">
        <div className="w-[90%] max-w-md bg-black/95 backdrop-blur-lg border border-red-500 rounded-2xl shadow-2xl p-6 text-center">
          <h2 id="fire-message-title" className="text-2xl font-bold text-red-400 mb-2" />
          <p id="fire-message-text" className="text-base text-gray-200 mb-4" />
          <button
            id="fire-continue-button"
            className="hidden bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
