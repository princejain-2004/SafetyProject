import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function VirtualFloodDrill() {
  const containerRef = useRef(null);
  const [drillState, setDrillState] = useState("ready"); // ready, active, success, fail
  const [messageContent, setMessageContent] = useState({ title: "", text: "", button: "" });
  const keys = useRef({ w: false, a: false, s: false, d: false });
  const mouse = useRef({ dragging: false, prevX: 0, prevY: 0 });

  useEffect(() => {
    let scene, camera, renderer, water, platform, debrisGroup;
    const WATER_RISE_SPEED = 0.001; // per frame
    const WATER_CRITICAL = 2; // height to fail

    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0b1632);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 1.6, 6);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0x555555));
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(5, 10, 5);
      scene.add(dirLight);

      // Ground
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30),
        new THREE.MeshLambertMaterial({ color: 0x2e3b4e })
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      // Safe platform
      platform = new THREE.Mesh(
        new THREE.BoxGeometry(3, 0.4, 3),
        new THREE.MeshPhongMaterial({ color: 0x2dd4bf, transparent: true, opacity: 0.85 })
      );
      platform.position.set(6, 1.5, -3);
      scene.add(platform);

      // Water plane
      const waterGeo = new THREE.PlaneGeometry(200, 200, 32, 32);
      const waterMat = new THREE.MeshLambertMaterial({ color: 0x1e90ff, transparent: true, opacity: 0.7 });
      water = new THREE.Mesh(waterGeo, waterMat);
      water.rotation.x = -Math.PI / 2;
      water.position.y = -0.5;
      scene.add(water);

      // Floating debris
      debrisGroup = new THREE.Group();
      for (let i = 0; i < 10; i++) {
        const debris = new THREE.Mesh(
          new THREE.BoxGeometry(0.5, 0.2, 0.3),
          new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
        );
        debris.position.set(Math.random() * 10 - 5, water.position.y + 0.1, Math.random() * 10 - 5);
        debrisGroup.add(debris);
      }
      scene.add(debrisGroup);

      // Mouse drag
      renderer.domElement.addEventListener("mousedown", (e) => {
        mouse.current.dragging = true;
        mouse.current.prevX = e.clientX;
        mouse.current.prevY = e.clientY;
      });
      renderer.domElement.addEventListener("mouseup", () => (mouse.current.dragging = false));
      renderer.domElement.addEventListener("mousemove", (e) => {
        if (mouse.current.dragging) {
          const dx = e.clientX - mouse.current.prevX;
          const dy = e.clientY - mouse.current.prevY;
          camera.rotation.y -= dx * 0.005;
          camera.rotation.x -= dy * 0.005;
          camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
          mouse.current.prevX = e.clientX;
          mouse.current.prevY = e.clientY;
        }
      });

      // Keyboard controls
      const handleKeyDown = (e) => {
        if (e.key.toLowerCase() in keys.current) keys.current[e.key.toLowerCase()] = true;
      };
      const handleKeyUp = (e) => {
        if (e.key.toLowerCase() in keys.current) keys.current[e.key.toLowerCase()] = false;
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      animate();
    }

    function checkCollision() {
      const pos = camera.position;
      // Success: safe platform
      if (
        pos.x > platform.position.x - 1.5 &&
        pos.x < platform.position.x + 1.5 &&
        pos.z > platform.position.z - 1.5 &&
        pos.z < platform.position.z + 1.5
      ) {
        setDrillState("success");
        setMessageContent({
          title: "✅ Safe Zone Reached!",
          text: "You reached the high platform before the water flooded. Drill complete.",
          button: "Restart Drill",
        });
        return true;
      }
      // Failure: water level too high
      if (pos.y < water.position.y) {
        setDrillState("fail");
        setMessageContent({
          title: "❌ Flooded!",
          text: "You were submerged by rising water! Drill failed.",
          button: "Restart Drill",
        });
        return true;
      }
      return false;
    }

    function animate() {
      requestAnimationFrame(animate);

      if (drillState === "active") {
        const direction = new THREE.Vector3();
        if (keys.current.w) direction.z -= 1;
        if (keys.current.s) direction.z += 1;
        if (keys.current.a) direction.x -= 1;
        if (keys.current.d) direction.x += 1;

        direction.normalize();
        direction.applyQuaternion(camera.quaternion);
        camera.position.add(direction.multiplyScalar(0.1));

        // Water rising
        water.position.y += WATER_RISE_SPEED;
        // Debris floats
        debrisGroup.children.forEach((d) => {
          d.position.y = water.position.y + 0.1;
        });

        checkCollision();
      }

      renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    init();
    return () => {
      if (renderer) containerRef.current.removeChild(renderer.domElement);
    };
  }, [drillState]);

  const startDrill = () => setDrillState("active");
  const restartDrill = () => window.location.reload();

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />

      {drillState === "ready" && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-[90%] max-w-lg bg-slate-900/90 border border-blue-500 rounded-2xl p-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold mb-4 text-blue-400">Virtual Flood Drill</h1>
            <p className="text-lg text-gray-200 mb-6">
              Use <span className="font-semibold text-blue-300">W/A/S/D</span> keys to move.
              <br />
              Reach the high platform before water rises!
            </p>
            <button
              onClick={startDrill}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              🚨 Start Flood Drill
            </button>
          </div>
        </div>
      )}

      {(drillState === "success" || drillState === "fail") && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-[90%] max-w-md bg-slate-900/95 border border-green-500 rounded-2xl p-6 text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-green-400 mb-2">{messageContent.title}</h2>
            <p className="text-gray-200 mb-4">{messageContent.text}</p>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
              onClick={restartDrill}
            >
              {messageContent.button}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}