import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function VirtualFireDrill() {
  const containerRef = useRef(null);
  const [drillState, setDrillState] = useState("ready"); // ready, active, success, fail
  const [messageContent, setMessageContent] = useState({ title: "", text: "", button: "" });
  const keys = useRef({ w: false, a: false, s: false, d: false });
  const mouse = useRef({ dragging: false, prevX: 0, prevY: 0 });

  useEffect(() => {
    let scene, camera, renderer, platform, fireGroup, smokeGroup;

    const MOVE_SPEED = 0.1;
    const FIRE_RADIUS = 0.7; // collision with fire

    function createFireAndSmoke() {
      fireGroup = new THREE.Group();
      smokeGroup = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const fire = new THREE.Mesh(
          new THREE.ConeGeometry(0.3, 1, 8),
          new THREE.MeshBasicMaterial({ color: 0xff4500 })
        );
        fire.position.set(Math.random() * 8 - 4, 0.5, Math.random() * 8 - 4);
        fireGroup.add(fire);

        const smoke = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.6 })
        );
        smoke.position.set(fire.position.x, 1, fire.position.z);
        smokeGroup.add(smoke);
      }
      scene.add(fireGroup);
      scene.add(smokeGroup);
    }

    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a1a);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 1.6, 6);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0x555555));
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(5, 10, 5);
      scene.add(dirLight);

      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshLambertMaterial({ color: 0x2e3b4e })
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      // House (just decoration)
      const house = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2, 3),
        new THREE.MeshLambertMaterial({ color: 0x9b6b4a })
      );
      house.position.set(0, 1, -5);
      scene.add(house);

      // Safe platform
      platform = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.4, 2),
        new THREE.MeshPhongMaterial({ color: 0x2dd4bf, transparent: true, opacity: 0.85 })
      );
      platform.position.set(5, 0.2, 3);
      scene.add(platform);

      createFireAndSmoke();

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
      // Check safe platform
      if (
        pos.x > platform.position.x - 1 &&
        pos.x < platform.position.x + 1 &&
        pos.z > platform.position.z - 1 &&
        pos.z < platform.position.z + 1
      ) {
        setDrillState("success");
        setMessageContent({
          title: "✅ Safe Zone Reached!",
          text: "You successfully reached the safe zone! Drill complete.",
          button: "Restart Drill",
        });
        return true;
      }
      // Check fire collision
      for (let fire of fireGroup.children) {
        if (pos.distanceTo(fire.position) < FIRE_RADIUS) {
          setDrillState("fail");
          setMessageContent({
            title: "❌ You Got Burned!",
            text: "You moved into the fire! Drill failed.",
            button: "Restart Drill",
          });
          return true;
        }
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

        // Fire flicker
        fireGroup.children.forEach((f, idx) => {
          f.scale.y = 0.8 + Math.sin(Date.now() * 0.005 + idx) * 0.4;
        });

        // Smoke rise
        smokeGroup.children.forEach((s) => {
          s.position.y += 0.01;
          if (s.position.y > 3) s.position.y = 1;
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
          <div className="w-[90%] max-w-lg bg-slate-900/90 border border-red-500 rounded-2xl p-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold mb-4 text-red-400">Virtual Fire Drill</h1>
            <p className="text-lg text-gray-200 mb-6">
              Use <span className="font-semibold text-red-300">W/A/S/D</span> keys to move and reach the safe zone.
              <br />
              Avoid the fire!
            </p>
            <button
              onClick={startDrill}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              🚨 Start Fire Drill
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