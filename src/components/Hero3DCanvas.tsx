import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Primary Geometric Object: Sleek Icosahedron with Wireframe & Metallic Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(coreGeometry);
    
    // Wireframe lines: electric blue subtle highlight
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.38,
      linewidth: 1
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    group.add(wireframeMesh);

    // Inner subtle metallic core
    const innerGeometry = new THREE.IcosahedronGeometry(1.28, 2);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.25,
      metalness: 0.95,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // Outer subtle orbital ring
    const ringGeometry = new THREE.TorusGeometry(1.85, 0.008, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.2
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    group.add(ringMesh);

    // Secondary tilted ring
    const ringGeometry2 = new THREE.TorusGeometry(2.05, 0.006, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.15
    });
    const ringMesh2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 5;
    group.add(ringMesh2);

    // Subtle ambient particle dust
    const particlesCount = 75;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const r = 2.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.025,
      transparent: true,
      opacity: 0.55
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x38bdf8, 2.2);
    directionalLight1.position.set(3, 3, 4);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x2563eb, 1.4);
    directionalLight2.position.set(-3, -2, -2);
    scene.add(directionalLight2);

    // Mouse movement reactivity with lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollYOffset = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((event.clientX / innerWidth) - 0.5) * 1.2;
      targetY = ((event.clientY / innerHeight) - 0.5) * 1.2;
    };

    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base gentle rotation
      group.rotation.y = elapsedTime * 0.18 + mouseX * 0.6;
      group.rotation.x = Math.sin(elapsedTime * 0.12) * 0.15 + mouseY * 0.6 + scrollYOffset * 0.5;

      ringMesh.rotation.z = elapsedTime * 0.08;
      ringMesh2.rotation.y = -elapsedTime * 0.06;
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean disposal
      coreGeometry.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    // Graceful visual fallback
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 h-64 border border-blue-500/20 rounded-full flex items-center justify-center animate-pulse-subtle">
          <div className="absolute inset-4 border border-blue-400/30 rounded-full rotate-45" />
          <div className="absolute inset-8 border border-white/10 rounded-full -rotate-45" />
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-950/80 to-blue-600/20 backdrop-blur-sm border border-blue-400/40" />
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[360px] md:min-h-[460px] cursor-grab active:cursor-grabbing flex items-center justify-center pointer-events-auto"
      aria-label="Interactive 3D geometric visualization"
    />
  );
};
