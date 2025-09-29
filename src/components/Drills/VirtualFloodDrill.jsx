import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VirtualFloodDrill() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, clock;
    let ground, water, house, hill, platform, debrisGroup, boat;
    let isDrillActive = false;
    let waterStart = 0;
    let waterLevel = -1.5;
    let rescued = false;

    const FLOOD_DURATION = 20000;
    const WATER_RISE_SPEED = 0.0009;

    const infoPanel = document.getElementById("info-panel");
    const startButton = document.getElementById("start-button");
    const messageBox = document.getElementById("message-box");
    const messageTitle = document.getElementById("message-title");
    const messageText = document.getElementById("message-text");
    const continueButton = document.getElementById("continue-button");

    const mouseControls = { isDragging: false, prevX: 0, prevY: 0 };
    const keys = { w: false, a: false, s: false, d: false };

    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0b1632);

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 1.6, 6);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      containerRef.current.appendChild(renderer.domElement);

      clock = new THREE.Clock();

      // lights
      scene.add(new THREE.AmbientLight(0x555555));
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(5, 10, 5);
      scene.add(dir);

      // ground
      const groundGeo = new THREE.PlaneGeometry(60, 60);
      ground = new THREE.Mesh(
        groundGeo,
        new THREE.MeshLambertMaterial({ color: 0x2e3b4e })
      );
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -2;
      scene.add(ground);

      // hill
      hill = new THREE.Mesh(
        new THREE.ConeGeometry(4, 3, 32),
        new THREE.MeshLambertMaterial({ color: 0x3f6b3f })
      );
      hill.position.set(-8, -0.5, -6);
      hill.rotation.x = Math.PI;
      scene.add(hill);

      // house
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

      // platform
      platform = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.4, 1.6),
        new THREE.MeshPhongMaterial({
          color: 0x2dd4bf,
          transparent: true,
          opacity: 0.85,
        })
      );
      platform.position.set(6, 0.2, -3);
      scene.add(platform);

      // water
      const waterGeo = new THREE.PlaneGeometry(200, 200, 32, 32);
      const waterMat = new THREE.MeshLambertMaterial({
        color: 0x1e90ff,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      });
      water = new THREE.Mesh(waterGeo, waterMat);
      water.rotation.x = -Math.PI / 2;
      water.position.y = waterLevel;
      scene.add(water);

      // debris
      debrisGroup = new THREE.Group();
      scene.add(debrisGroup);

      // boat
      boat = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.2, 0.6),
        new THREE.MeshLambertMaterial({ color: 0x5b2c6f })
      );
      boat.position.set(0, waterLevel + 0.1, 8);
      boat.visible = false;
      scene.add(boat);

      // listeners
      renderer.domElement.addEventListener("mousedown", onMouseDown);
      renderer.domElement.addEventListener("mouseup", onMouseUp);
      renderer.domElement.addEventListener("mousemove", onMouseMove);

      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);

      if (startButton)
        startButton.addEventListener("click", onStart);
      if (continueButton)
        continueButton.addEventListener("click", () => {
          messageBox.style.display = "none";
        });

      window.addEventListener("resize", onResize);

      animate();
    }

    function onResize() {
      if (!camera || !renderer || !containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function onMouseDown(e) {
      mouseControls.isDragging = true;
      mouseControls.prevX = e.clientX;
      mouseControls.prevY = e.clientY;
    }

    function onMouseUp() {
      mouseControls.isDragging = false;
    }

    function onMouseMove(e) {
      if (!mouseControls.isDragging) return;
      const deltaX = e.clientX - mouseControls.prevX;
      camera.rotation.y -= deltaX * 0.002;
      mouseControls.prevX = e.clientX;
    }

    function onKeyDown(e) {
      if (e.key.toLowerCase() in keys) keys[e.key.toLowerCase()] = true;
    }
    function onKeyUp(e) {
      if (e.key.toLowerCase() in keys) keys[e.key.toLowerCase()] = false;
    }

    function onStart() {
      isDrillActive = true;
      waterStart = Date.now();
      if (infoPanel) infoPanel.style.display = "none";
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    init();

    return () => {
      window.removeEventListener("resize", onResize);
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-[600px] relative flex justify-center border border-gray-300">
      <div ref={containerRef} className="w-full h-full" />

      {/* Info Panel */}
      <div
        id="info-panel"
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <div className="w-[90%] max-w-lg bg-slate-900/90 backdrop-blur-lg border border-cyan-500 rounded-2xl shadow-2xl p-8 text-center animate-fadeIn">
          <h1 className="text-3xl font-extrabold mb-4 text-cyan-300 drop-shadow-lg">
            Virtual Flood Drill
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Click and drag to look around. Use{" "}
            <span className="font-semibold text-cyan-200">W/A/S/D</span> to move.
            <br /> Find high ground or climb onto an elevated platform.
          </p>
          <button
            id="start-button"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🚨 Start Flood Drill
          </button>
        </div>
      </div>

      {/* Message Box */}
      <div
        id="message-box"
        className="hidden absolute inset-0 flex items-center justify-center z-30"
      >
        <div className="w-[90%] max-w-md bg-slate-900/95 backdrop-blur-lg border border-cyan-500 rounded-2xl shadow-2xl p-6 text-center animate-fadeIn">
          <h2
            id="message-title"
            className="text-2xl font-bold text-cyan-300 mb-2"
          />
          <p id="message-text" className="text-base text-gray-200 mb-4" />
          <button
            id="continue-button"
            className="hidden bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
