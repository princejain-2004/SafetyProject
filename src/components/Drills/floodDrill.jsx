import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function VirtualFloodDrill() {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let scene, camera, renderer, clock;
    let ground, water, house, hill, platform, debrisGroup, boat;
    let waterLevel = -1.5;
    let isDrillActive = false;
    let waterStart = 0;

    const WATER_RISE_SPEED = 0.0009;

    function createDebris(group) {
      for (let i = 0; i < 12; i++) {
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(0.5, 0.3, 0.2),
          new THREE.MeshLambertMaterial({ color: 0xdeb887 })
        );
        box.position.set((Math.random() - 0.5) * 10, waterLevel + 0.2, (Math.random() - 0.5) * 10);
        group.add(box);
      }
    }

    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0b1632);

      camera = new THREE.PerspectiveCamera(
        75,
        (window.innerWidth * 0.7) / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 1.6, 6);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      clock = new THREE.Clock();

      // Lights
      scene.add(new THREE.AmbientLight(0x555555));
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(5, 10, 5);
      scene.add(dir);

      // Ground
      ground = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 60),
        new THREE.MeshLambertMaterial({ color: 0x2e3b4e })
      );
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -2;
      scene.add(ground);

      // Hill
      hill = new THREE.Mesh(
        new THREE.ConeGeometry(4, 3, 32),
        new THREE.MeshLambertMaterial({ color: 0x3f6b3f })
      );
      hill.position.set(-8, -0.5, -6);
      scene.add(hill);

      // House
      house = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(3, 1.4, 2.5),
        new THREE.MeshLambertMaterial({ color: 0x9b6b4a })
      );
      base.position.set(0, -0.3, -4.5);
      house.add(base);

      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(1.8, 0.8, 4),
        new THREE.MeshLambertMaterial({ color: 0x8b2e2e })
      );
      roof.position.set(0, 0.6, -4.5);
      roof.rotation.y = Math.PI / 4;
      house.add(roof);
      scene.add(house);

      // Safe Platform
      platform = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.4, 1.6),
        new THREE.MeshPhongMaterial({ color: 0x2dd4bf, transparent: true, opacity: 0.85 })
      );
      platform.position.set(6, 0.2, -3);
      scene.add(platform);

      // Water
      water = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200, 32, 32),
        new THREE.MeshLambertMaterial({
          color: 0x1e90ff,
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
        })
      );
      water.rotation.x = -Math.PI / 2;
      water.position.y = waterLevel;
      scene.add(water);

      // Debris
      debrisGroup = new THREE.Group();
      scene.add(debrisGroup);
      createDebris(debrisGroup);

      // Boat
      boat = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.2, 0.6),
        new THREE.MeshLambertMaterial({ color: 0x5b2c6f })
      );
      boat.position.set(0, waterLevel + 0.1, 8);
      boat.visible = false;
      scene.add(boat);

      window.addEventListener("resize", onResize);

      animate();
    }

    function animate() {
      requestAnimationFrame(animate);

      if (isDrillActive) {
        const elapsed = Date.now() - waterStart;
        waterLevel = -1.5 + elapsed * WATER_RISE_SPEED;
        water.position.y = waterLevel;
        boat.position.y = waterLevel + 0.1;
      }

      renderer.render(scene, camera);
    }

    function onResize() {
      camera.aspect = (window.innerWidth * 0.7) / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    }

    init();

    return () => {
      window.removeEventListener("resize", onResize);
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const startDrill = () => {
    setStarted(true);
    setMessage("🚨 Flood waters are rising! Find high ground or the safe platform.");
  };

  const continueDrill = () => setMessage(null);

  return (
    <div className="w-full h-screen relative flex justify-center">
      <div ref={containerRef} className="h-full" />

      {!started && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-[90%] max-w-lg bg-slate-900/90 border border-cyan-500 rounded-2xl p-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold mb-4 text-cyan-300">Virtual Flood Drill</h1>
            <p className="text-lg text-gray-200 mb-6">
              Click and drag to look around. Use <b>W/A/S/D</b> to move.
              <br /> Find high ground or climb onto the platform.
            </p>
            <button
              onClick={startDrill}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              🚨 Start Flood Drill
            </button>
          </div>
        </div>
      )}

      {message && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-[90%] max-w-md bg-slate-900/95 border border-cyan-500 rounded-2xl p-6 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2">Flood Alert</h2>
            <p className="text-gray-200 mb-4">{message}</p>
            <button
              onClick={continueDrill}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
