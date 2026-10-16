import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface VisualMode {
  id: string;
  stepNumber: string;
  name: string;
  label: string;
  cameraAngle: { x: number; y: number; z: number };
  description: string;
  detailedNarrative: string;
  badge: string;
  telemetry: {
    windSpeed: string;
    stressRatio: string;
    deflection: string;
    rslSignal: string;
  };
  specsList: { label: string; value: string }[];
}

const VISUAL_MODES: VisualMode[] = [
  {
    id: "lidar",
    stepNumber: "01",
    name: "01 // Drone LiDAR Point Cloud",
    label: "LIDAR SCAN",
    cameraAngle: { x: 26, y: 15, z: 26 },
    description: "High-density RTK photogrammetry point cloud capturing topography, bedrock elevation, and surrounding clutter.",
    detailedNarrative:
      "Before civil foundation excavation or steel assembly, RTK drone photogrammetry captures 48,000 sub-centimeter elevation data points. This verifies mountain ridge contours, rock strata depth, and unobstructed microwave line-of-sight paths across surrounding peaks.",
    badge: "15MM DENSITY // 48,000 PTS",
    telemetry: {
      windSpeed: "0 km/h (Calm)",
      stressRatio: "0.02 (Dead Load)",
      deflection: "0.0 mm",
      rslSignal: "N/A (Pre-Build)",
    },
    specsList: [
      { label: "Survey Tech", value: "RTK Drone Photogrammetry" },
      { label: "Ground Sampling", value: "15 mm GSD Resolution" },
      { label: "Geodetic Datum", value: "WGS 84 / UTM Zone 45N" },
      { label: "Survey Status", value: "Certified Site Clear" },
    ],
  },
  {
    id: "blueprint",
    stepNumber: "02",
    name: "02 // Technical CAD Wireframe",
    label: "CAD BLUEPRINT",
    cameraAngle: { x: 0, y: 12, z: 36 }, // Front elevation
    description: "Orthographic vector geometry with structural framing lines, bolt node coordinates, and TIA-222-H dimension rules.",
    detailedNarrative:
      "A mathematically exact 3D vector model derived from structural design calculations. Verifies structural leg tapers, girt member cross-sections, diagonal X-brace overlap clearances, and gusset plate bolt node spacing in accordance with TIA-222-H.",
    badge: "TIA-222-H // AS-BUILT CAD",
    telemetry: {
      windSpeed: "Design Baseline",
      stressRatio: "0.38 (Calculated)",
      deflection: "0.5 mm",
      rslSignal: "Boresight Axis",
    },
    specsList: [
      { label: "Structural Standard", value: "TIA-222-H / ANSI" },
      { label: "Tower Form", value: "4-Legged Self-Supporting" },
      { label: "Framing Panels", value: "14 Structural Girt Levels" },
      { label: "Fastener Schedule", value: "A325 High-Tensile Bolts" },
    ],
  },
  {
    id: "fea",
    stepNumber: "03",
    name: "03 // Finite Element Wind Stress",
    label: "STRESS FEA",
    cameraAngle: { x: 24, y: 14, z: 24 },
    description: "Nonlinear P-Delta stress distribution under 180 km/h mountain gusts with radial ice accretion load vectors.",
    detailedNarrative:
      "Nonlinear finite element stress simulation under extreme Class IV mountain storms at 180 km/h with 15mm radial glaze ice. Orange color gradients indicate bending and axial stresses along diagonal braces, proving a safe utilization ratio of 0.76 (well under the 1.0 failure threshold).",
    badge: "CLASS IV WIND // 180 KM/H",
    telemetry: {
      windSpeed: "180 km/h Gust",
      stressRatio: "0.76 (SAFE < 1.0)",
      deflection: "142 mm (< H/300)",
      rslSignal: "LoS Maintained",
    },
    specsList: [
      { label: "Peak Gust Rating", value: "180 km/h (Class IV)" },
      { label: "Radial Ice Load", value: "15 mm Glaze Accretion" },
      { label: "Max Apex Deflection", value: "142 mm (< H/300 limit)" },
      { label: "Safety Factor", value: "1.45 (Certified Pass)" },
    ],
  },
  {
    id: "pbr",
    stepNumber: "04",
    name: "04 // Industrial Galvanized Steel (PBR)",
    label: "INDUSTRIAL PBR",
    cameraAngle: { x: -22, y: 16, z: 26 },
    description: "ASTM A123 hot-dip galvanized coating, matte zinc spangle texture, high-tensile A325 fasteners, and equipment shelter.",
    detailedNarrative:
      "Full industrial physical material rendering with non-glossy, matte hot-dip galvanized zinc spangle finish (86µm thickness). Zero plastic or toy appearance: every angle, gusset plate, and cable ladder is textured to replicate real structural steel erected in harsh Himalayan climates.",
    badge: "86µm ZINC // PBR METAL",
    telemetry: {
      windSpeed: "45 km/h Ambient",
      stressRatio: "0.42 (Nominal)",
      deflection: "18 mm",
      rslSignal: "Standby Carrier",
    },
    specsList: [
      { label: "Galvanizing Coating", value: "ASTM A123 (86 µm Zinc)" },
      { label: "Design Life", value: "50+ Years Corrosion Free" },
      { label: "Obstacle Beacon", value: "ICAO Medium-Intensity Red" },
      { label: "Max Antenna EPA", value: "18.4 m² Projected Area" },
    ],
  },
  {
    id: "rf",
    stepNumber: "05",
    name: "05 // Microwave LoS & RF Propagation",
    label: "RF PROPAGATION",
    cameraAngle: { x: 20, y: 22, z: 22 },
    description: "Dual-polarized solid parabolic dish alignment with 1st Fresnel zone clearance modeling and return loss testing.",
    detailedNarrative:
      "Microwave line-of-sight propagation cones projected outward from dual 1.2m solid parabolic antennas operating at 18 GHz. Demonstrates boresight alignment, 1st Fresnel zone clearance above mountain ridges, and a verified return loss under -26 dB.",
    badge: "18 GHZ // VSWR 1.12 PASS",
    telemetry: {
      windSpeed: "30 km/h",
      stressRatio: "0.46",
      deflection: "8 mm",
      rslSignal: "-42.4 dBm RSL",
    },
    specsList: [
      { label: "Microwave Band", value: "18 GHz Dual-Polarized" },
      { label: "Path Distance", value: "28.4 km Direct Line-of-Sight" },
      { label: "Received RSL", value: "-42.4 dBm (High Margin)" },
      { label: "VSWR Return Loss", value: "1.12 : 1 (< 1.20 Pass)" },
    ],
  },
  {
    id: "section",
    stepNumber: "06",
    name: "06 // Sectional Floor Plan & Footing",
    label: "FOUNDATION CUT",
    cameraAngle: { x: 28, y: 5, z: 28 },
    description: "Deep structural concrete foundation raft, post-tensioned Dywidag bedrock anchors, and 1.8-Ohm radial earth grid.",
    detailedNarrative:
      "Cross-sectional elevation of the 6.8m x 6.8m x 0.9m M30 reinforced concrete raft. Four anchor pedestals with 16 post-tensioned Dywidag alloy rods extend into bedrock, bonded to a 50x3mm electrolytic copper earthing grid achieving 1.42 Ohms.",
    badge: "M30 CONCRETE // < 2.0 Ω",
    telemetry: {
      windSpeed: "Sub-surface Load",
      stressRatio: "0.52 (Shear Proof)",
      deflection: "0.0 mm Base",
      rslSignal: "Telemetry Live",
    },
    specsList: [
      { label: "Concrete Raft", value: "M30 Reinforced (NBC 205)" },
      { label: "Anchor Rods", value: "16x 32mm High-Tensile Dywidag" },
      { label: "Earthing Impedance", value: "1.42 Ω (Certified < 2.0 Ω)" },
      { label: "Bedrock Bearing", value: "240 kPa Safe Capacity" },
    ],
  },
];

export default function Interactive3DTowerVisualizer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const introCardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isUserClickingRef = useRef(false);

  const [currentModeIdx, setCurrentModeIdx] = useState<number>(0);
  const [cameraProjection, setCameraProjection] = useState<"perspective" | "orthographic">("perspective");
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [simulatedWind, setSimulatedWind] = useState<number>(60);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const perspCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const orthoCameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const towerGroupRef = useRef<THREE.Group | null>(null);
  const pointCloudRef = useRef<THREE.Points | null>(null);
  const wireframeGroupRef = useRef<THREE.Group | null>(null);
  const pbrGroupRef = useRef<THREE.Group | null>(null);
  const feaGroupRef = useRef<THREE.Group | null>(null);
  const rfBeamsGroupRef = useRef<THREE.Group | null>(null);
  const foundationGroupRef = useRef<THREE.Group | null>(null);

  const activeMode = VISUAL_MODES[currentModeIdx];

  // Scroll tracking: synchronize 3D visual mode and dissolve cards as they reach section top
  useEffect(() => {
    const handleScroll = () => {
      // 1. Synchronize active 3D mode with the card in reading view
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      if (!isUserClickingRef.current && closestIdx !== currentModeIdx) {
        setCurrentModeIdx(closestIdx);
      }

      // 2. Dissolve left-side content as it reaches the top of the section
      const topBoundary = 150; // Threshold as card reaches top of section
      const fadeDistance = 140; // Distance over which content smoothly disappears

      const cardsToDissolve = [introCardRef.current, ...cardRefs.current];
      cardsToDissolve.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top < topBoundary) {
          const distancePastTop = topBoundary - rect.top;
          const progress = Math.min(Math.max(distancePastTop / fadeDistance, 0), 1);
          const opacity = Math.max(0, 1 - progress);
          const translateY = -distancePastTop * 0.25;
          const scale = 1 - progress * 0.05;

          el.style.opacity = `${opacity}`;
          el.style.transform = `translateY(${translateY}px) scale(${scale})`;
          el.style.filter = `blur(${progress * 6}px)`;
          el.style.pointerEvents = opacity < 0.05 ? "none" : "auto";
        } else {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
          el.style.filter = "none";
          el.style.pointerEvents = "auto";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial pass on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentModeIdx]);

  const handleCardClick = (idx: number) => {
    isUserClickingRef.current = true;
    setCurrentModeIdx(idx);

    const cardEl = cardRefs.current[idx];
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setTimeout(() => {
      isUserClickingRef.current = false;
    }, 800);
  };

  // Mount Three.js Procedural Tower
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 600;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0c161e, 0.008);

    // 2. Cameras
    const aspect = width / height;
    const perspCamera = new THREE.PerspectiveCamera(38, aspect, 0.1, 1000);
    perspCamera.position.set(25, 18, 25);
    perspCamera.lookAt(0, 7, 0);
    perspCameraRef.current = perspCamera;

    const frustumSize = 36;
    const orthoCamera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    );
    orthoCamera.position.set(25, 18, 25);
    orthoCamera.lookAt(0, 7, 0);
    orthoCameraRef.current = orthoCamera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(30, 45, 20);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    scene.add(dirLight1);

    const rimLight = new THREE.DirectionalLight(0xe8501a, 0.8);
    rimLight.position.set(-25, 20, -25);
    scene.add(rimLight);

    // 5. MASTER TOWER GROUP
    const towerGroup = new THREE.Group();
    towerGroupRef.current = towerGroup;
    scene.add(towerGroup);

    // --- PROCEDURAL ARCHITECTURAL TOWER GEOMETRY ---
    const TOWER_HEIGHT = 28;
    const BASE_WIDTH = 5.0;
    const TOP_WIDTH = 1.4;
    const LEVELS = 14;

    const pointsArray: number[] = [];
    const pbrMeshList: THREE.Mesh[] = [];
    const feaMeshList: THREE.Mesh[] = [];

    // PBR Materials (Industrial Galvanized Steel - Zero Doll Look)
    const pbrSteelMat = new THREE.MeshStandardMaterial({
      color: 0x5b6b76,
      roughness: 0.85,
      metalness: 0.45,
    });

    const pbrOrangeBeaconMat = new THREE.MeshStandardMaterial({
      color: 0xe8501a,
      roughness: 0.4,
      metalness: 0.2,
      emissive: 0xb8380f,
      emissiveIntensity: 0.6,
    });

    const pbrDishMat = new THREE.MeshStandardMaterial({
      color: 0xd9e2ec,
      roughness: 0.75,
      metalness: 0.3,
    });

    const pbrConcreteMat = new THREE.MeshStandardMaterial({
      color: 0x3a4954,
      roughness: 0.95,
      metalness: 0.05,
    });

    // PBR Group Container
    const pbrGroup = new THREE.Group();
    pbrGroupRef.current = pbrGroup;
    towerGroup.add(pbrGroup);

    // FEA Group Container (Stress Heatmap)
    const feaGroup = new THREE.Group();
    feaGroupRef.current = feaGroup;
    towerGroup.add(feaGroup);

    // Wireframe Blueprint Group Container
    const wireframeGroup = new THREE.Group();
    wireframeGroupRef.current = wireframeGroup;
    towerGroup.add(wireframeGroup);

    // RF Volumetric Beams Group
    const rfBeamsGroup = new THREE.Group();
    rfBeamsGroupRef.current = rfBeamsGroup;
    towerGroup.add(rfBeamsGroup);

    // Ground Drafting Reference Grid
    const gridHelper = new THREE.GridHelper(40, 40, 0xe8501a, 0x1f3448);
    gridHelper.position.y = -7.05;
    scene.add(gridHelper);

    // 4 Corner Main Structural Legs
    const legPositions = [
      { x: -1, z: -1 },
      { x: 1, z: -1 },
      { x: 1, z: 1 },
      { x: -1, z: 1 },
    ];

    legPositions.forEach((pos) => {
      const legGeo = new THREE.CylinderGeometry(0.12, 0.24, TOWER_HEIGHT, 8);
      const legMesh = new THREE.Mesh(legGeo, pbrSteelMat);
      legMesh.position.set(
        (pos.x * (BASE_WIDTH + TOP_WIDTH)) / 4,
        TOWER_HEIGHT / 2,
        (pos.z * (BASE_WIDTH + TOP_WIDTH)) / 4
      );
      legMesh.rotation.z = (pos.x * (BASE_WIDTH - TOP_WIDTH)) / (2 * TOWER_HEIGHT);
      legMesh.rotation.x = (-pos.z * (BASE_WIDTH - TOP_WIDTH)) / (2 * TOWER_HEIGHT);
      legMesh.castShadow = true;
      legMesh.receiveShadow = true;
      pbrGroup.add(legMesh);
      pbrMeshList.push(legMesh);

      // Blueprint Wireframe
      const edges = new THREE.EdgesGeometry(legGeo);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x4fd1c5, linewidth: 1 }));
      line.position.copy(legMesh.position);
      line.rotation.copy(legMesh.rotation);
      wireframeGroup.add(line);

      // Sample points for LiDAR point cloud
      for (let i = 0; i < 400; i++) {
        const y = Math.random() * TOWER_HEIGHT;
        const factor = y / TOWER_HEIGHT;
        const currentWidth = BASE_WIDTH - factor * (BASE_WIDTH - TOP_WIDTH);
        pointsArray.push(
          (pos.x * currentWidth) / 2 + (Math.random() - 0.5) * 0.12,
          y,
          (pos.z * currentWidth) / 2 + (Math.random() - 0.5) * 0.12
        );
      }
    });

    // Build Horizontal Girts & X-Bracing
    for (let l = 0; l < LEVELS; l++) {
      const y1 = (l * TOWER_HEIGHT) / LEVELS;
      const y2 = ((l + 1) * TOWER_HEIGHT) / LEVELS;
      const f1 = y1 / TOWER_HEIGHT;
      const f2 = y2 / TOWER_HEIGHT;
      const w1 = BASE_WIDTH - f1 * (BASE_WIDTH - TOP_WIDTH);
      const w2 = BASE_WIDTH - f2 * (BASE_WIDTH - TOP_WIDTH);

      // Horizontal Girts
      const girtSides = [
        { p1: [-w1 / 2, y1, -w1 / 2], p2: [w1 / 2, y1, -w1 / 2] },
        { p1: [w1 / 2, y1, -w1 / 2], p2: [w1 / 2, y1, w1 / 2] },
        { p1: [w1 / 2, y1, w1 / 2], p2: [-w1 / 2, y1, w1 / 2] },
        { p1: [-w1 / 2, y1, w1 / 2], p2: [-w1 / 2, y1, -w1 / 2] },
      ];

      girtSides.forEach((side) => {
        const p1 = new THREE.Vector3(...side.p1);
        const p2 = new THREE.Vector3(...side.p2);
        const dist = p1.distanceTo(p2);
        const girtGeo = new THREE.CylinderGeometry(0.06, 0.06, dist, 6);
        const girtMesh = new THREE.Mesh(girtGeo, pbrSteelMat);
        const mid = p1.clone().add(p2).multiplyScalar(0.5);
        girtMesh.position.copy(mid);
        girtMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
        pbrGroup.add(girtMesh);

        // FEA Stress coloring (Amber/Orange at middle height under wind torque)
        const stressIntensity = Math.sin((l / LEVELS) * Math.PI) * 0.8 + 0.1;
        const stressColor = new THREE.Color().lerpColors(new THREE.Color(0x3a4954), new THREE.Color(0xe8501a), stressIntensity);
        const feaMat = new THREE.MeshBasicMaterial({ color: stressColor });
        const feaMesh = new THREE.Mesh(girtGeo, feaMat);
        feaMesh.position.copy(mid);
        feaMesh.quaternion.copy(girtMesh.quaternion);
        feaGroup.add(feaMesh);
        feaMeshList.push(feaMesh);

        // Blueprint Wireframe
        const edges = new THREE.EdgesGeometry(girtGeo);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x4fd1c5 }));
        line.position.copy(mid);
        line.quaternion.copy(girtMesh.quaternion);
        wireframeGroup.add(line);

        // LiDAR points on girt
        for (let p = 0; p < 25; p++) {
          const t = Math.random();
          const pt = p1.clone().lerp(p2, t);
          pointsArray.push(pt.x, pt.y, pt.z);
        }
      });

      // Diagonal X-Braces
      const xBracePairs = [
        { p1: [-w1 / 2, y1, -w1 / 2], p2: [w2 / 2, y2, -w1 / 2] },
        { p1: [w1 / 2, y1, -w1 / 2], p2: [-w2 / 2, y2, -w1 / 2] },
        { p1: [w1 / 2, y1, w1 / 2], p2: [-w2 / 2, y2, w1 / 2] },
        { p1: [-w1 / 2, y1, w1 / 2], p2: [w2 / 2, y2, w1 / 2] },
      ];

      xBracePairs.forEach((brace) => {
        const p1 = new THREE.Vector3(...brace.p1);
        const p2 = new THREE.Vector3(...brace.p2);
        const dist = p1.distanceTo(p2);
        const braceGeo = new THREE.CylinderGeometry(0.045, 0.045, dist, 6);
        const braceMesh = new THREE.Mesh(braceGeo, pbrSteelMat);
        const mid = p1.clone().add(p2).multiplyScalar(0.5);
        braceMesh.position.copy(mid);
        braceMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
        pbrGroup.add(braceMesh);

        // FEA Diagonal Stress
        const stressIntensity = Math.sin((l / LEVELS) * Math.PI) * 0.9 + 0.1;
        const feaMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color().lerpColors(new THREE.Color(0x2d3748), new THREE.Color(0xe8501a), stressIntensity),
        });
        const feaMesh = new THREE.Mesh(braceGeo, feaMat);
        feaMesh.position.copy(mid);
        feaMesh.quaternion.copy(braceMesh.quaternion);
        feaGroup.add(feaMesh);

        // Blueprint
        const edges = new THREE.EdgesGeometry(braceGeo);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x319795 }));
        line.position.copy(mid);
        line.quaternion.copy(braceMesh.quaternion);
        wireframeGroup.add(line);

        for (let p = 0; p < 20; p++) {
          const pt = p1.clone().lerp(p2, Math.random());
          pointsArray.push(pt.x, pt.y, pt.z);
        }
      });
    }

    // Dual Microwave Parabolic Dishes (Mounted at 18m and 22m)
    const dishHeights = [16, 21];
    dishHeights.forEach((dh, idx) => {
      const dishGroup = new THREE.Group();
      const dishGeo = new THREE.SphereGeometry(1.2, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
      const dishMesh = new THREE.Mesh(dishGeo, pbrDishMat);
      dishMesh.rotation.x = Math.PI / 2;
      dishGroup.add(dishMesh);

      // Radome Cover
      const radomeGeo = new THREE.CircleGeometry(1.18, 24);
      const radomeMesh = new THREE.Mesh(radomeGeo, pbrSteelMat);
      radomeMesh.position.z = 0.28;
      dishGroup.add(radomeMesh);

      // Feedhorn Boom
      const boomGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.1, 8);
      const boomMesh = new THREE.Mesh(boomGeo, pbrSteelMat);
      boomMesh.position.z = 0.7;
      boomMesh.rotation.x = Math.PI / 2;
      dishGroup.add(boomMesh);

      dishGroup.position.set(idx === 0 ? 1.4 : -1.2, dh, idx === 0 ? 0.8 : -0.6);
      dishGroup.rotation.y = idx === 0 ? 0.45 : -2.6;
      pbrGroup.add(dishGroup);

      // Volumetric RF Microwave Beams
      const beamGeo = new THREE.ConeGeometry(3.5, 18, 16, 1, true);
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xe8501a,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
      });
      const beamMesh = new THREE.Mesh(beamGeo, beamMat);
      beamMesh.position.copy(dishGroup.position);
      beamMesh.quaternion.copy(dishGroup.quaternion);
      beamMesh.rotateX(Math.PI / 2);
      beamMesh.translateY(9);
      rfBeamsGroup.add(beamMesh);

      // Boresight Axis Line
      const axisGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 24, 0),
      ]);
      const axisLine = new THREE.Line(axisGeo, new THREE.LineBasicMaterial({ color: 0xffedd5 }));
      axisLine.position.copy(beamMesh.position);
      axisLine.quaternion.copy(beamMesh.quaternion);
      rfBeamsGroup.add(axisLine);
    });

    // 5G Sector Panel Antennas (Triple Sector at Apex 25m)
    for (let s = 0; s < 3; s++) {
      const angle = (s * Math.PI * 2) / 3;
      const secGeo = new THREE.BoxGeometry(0.32, 1.8, 0.16);
      const secMesh = new THREE.Mesh(secGeo, pbrDishMat);
      secMesh.position.set(Math.cos(angle) * 0.9, 25.5, Math.sin(angle) * 0.9);
      secMesh.rotation.y = -angle + Math.PI / 2;
      pbrGroup.add(secMesh);

      const secEdges = new THREE.EdgesGeometry(secGeo);
      const secLine = new THREE.LineSegments(secEdges, new THREE.LineBasicMaterial({ color: 0x4fd1c5 }));
      secLine.position.copy(secMesh.position);
      secLine.rotation.copy(secMesh.rotation);
      wireframeGroup.add(secLine);
    }

    // Top Aviation Obstacle Strobe Beacon
    const beaconGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const beaconMesh = new THREE.Mesh(beaconGeo, pbrOrangeBeaconMat);
    beaconMesh.position.set(0, TOWER_HEIGHT + 0.6, 0);
    pbrGroup.add(beaconMesh);

    // Foundation Concrete Raft & Base Pedestals
    const foundationGroup = new THREE.Group();
    foundationGroupRef.current = foundationGroup;
    towerGroup.add(foundationGroup);

    const raftGeo = new THREE.BoxGeometry(BASE_WIDTH + 3.2, 0.9, BASE_WIDTH + 3.2);
    const raftMesh = new THREE.Mesh(raftGeo, pbrConcreteMat);
    raftMesh.position.y = -0.45;
    raftMesh.receiveShadow = true;
    foundationGroup.add(raftMesh);

    // Anchor Bolt Pedestals
    legPositions.forEach((pos) => {
      const pedGeo = new THREE.BoxGeometry(1.2, 0.6, 1.2);
      const pedMesh = new THREE.Mesh(pedGeo, pbrConcreteMat);
      pedMesh.position.set((pos.x * BASE_WIDTH) / 2, 0.3, (pos.z * BASE_WIDTH) / 2);
      foundationGroup.add(pedMesh);

      for (let b = 0; b < 4; b++) {
        const boltGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 8);
        const boltMesh = new THREE.Mesh(boltGeo, pbrOrangeBeaconMat);
        const bx = (b % 2 === 0 ? -0.3 : 0.3) + pedMesh.position.x;
        const bz = (b < 2 ? -0.3 : 0.3) + pedMesh.position.z;
        boltMesh.position.set(bx, 0.7, bz);
        foundationGroup.add(boltMesh);
      }
    });

    // Concrete Footing Wireframe
    const raftEdges = new THREE.EdgesGeometry(raftGeo);
    const raftLine = new THREE.LineSegments(raftEdges, new THREE.LineBasicMaterial({ color: 0xc9d1cf }));
    raftLine.position.copy(raftMesh.position);
    wireframeGroup.add(raftLine);

    // BUILD LIDAR POINT CLOUD
    const pointGeo = new THREE.BufferGeometry();
    const posAttribute = new THREE.Float32BufferAttribute(pointsArray, 3);
    pointGeo.setAttribute("position", posAttribute);

    const colors: number[] = [];
    for (let i = 0; i < pointsArray.length; i += 3) {
      const y = pointsArray[i + 1];
      const norm = Math.min(Math.max(y / TOWER_HEIGHT, 0), 1);
      const c = new THREE.Color().lerpColors(new THREE.Color(0x319795), new THREE.Color(0xe8501a), norm);
      colors.push(c.r, c.g, c.b);
    }
    pointGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
    });
    const pointCloud = new THREE.Points(pointGeo, pointMat);
    pointCloudRef.current = pointCloud;
    towerGroup.add(pointCloud);

    // Initial Visual State Visibility (Default: Mode 0 LiDAR Scan)
    pointCloud.visible = true;
    wireframeGroup.visible = false;
    feaGroup.visible = false;
    rfBeamsGroup.visible = false;
    pbrGroup.visible = false;

    // Center tower vertically
    towerGroup.position.y = -7;

    // --- RENDER LOOP ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous turntable rotation
      if (isAutoRotate && !isDragging) {
        towerGroup.rotation.y += 0.0035;
      }

      // Wind Deflection Simulation
      const windFactor = simulatedWind / 180;
      towerGroup.position.x = Math.sin(elapsedTime * 2.5) * 0.15 * windFactor;
      towerGroup.rotation.z = Math.sin(elapsedTime * 2.2) * 0.008 * windFactor;

      // Pulse beacon light
      beaconMesh.scale.setScalar(1 + Math.sin(elapsedTime * 4) * 0.15);

      const activeCamera = cameraProjection === "orthographic" ? orthoCamera : perspCamera;
      renderer.render(scene, activeCamera);
    };

    animate();

    // Viewport Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const asp = w / h;

      perspCamera.aspect = asp;
      perspCamera.updateProjectionMatrix();

      orthoCamera.left = (-frustumSize * asp) / 2;
      orthoCamera.right = (frustumSize * asp) / 2;
      orthoCamera.top = frustumSize / 2;
      orthoCamera.bottom = -frustumSize / 2;
      orthoCamera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Sync 3D Visual States with active mode
  useEffect(() => {
    const mode = VISUAL_MODES[currentModeIdx];
    if (!mode) return;

    // Toggle layer visibilities
    if (pointCloudRef.current) {
      pointCloudRef.current.visible = mode.id === "lidar";
    }
    if (wireframeGroupRef.current) {
      wireframeGroupRef.current.visible = mode.id === "blueprint" || mode.id === "section";
    }
    if (feaGroupRef.current) {
      feaGroupRef.current.visible = mode.id === "fea";
    }
    if (pbrGroupRef.current) {
      pbrGroupRef.current.visible = mode.id === "pbr" || mode.id === "rf";
    }
    if (rfBeamsGroupRef.current) {
      rfBeamsGroupRef.current.visible = mode.id === "rf";
    }
    if (foundationGroupRef.current) {
      foundationGroupRef.current.visible = true;
      foundationGroupRef.current.position.y = mode.id === "section" ? 1.5 : 0;
    }

    // Smooth camera transition to target angle centered at y = 7
    const target = mode.cameraAngle;
    if (perspCameraRef.current && orthoCameraRef.current) {
      const cam = cameraProjection === "orthographic" ? orthoCameraRef.current : perspCameraRef.current;
      cam.position.set(target.x, target.y, target.z);
      cam.lookAt(0, 7, 0);
    }
  }, [currentModeIdx, cameraProjection]);

  // Pointer drag to orbit 3D tower
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    const startX = e.clientX;

    const handlePointerMove = (moveEvt: PointerEvent) => {
      const dx = moveEvt.clientX - startX;
      if (towerGroupRef.current) {
        towerGroupRef.current.rotation.y += dx * 0.005;
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <div ref={containerRef} className="tower-story-container" id="3d-tower-digital-twin">
      {/* TWO-COLUMN PINNED STORYTELLING LAYOUT */}
      <div className="tower-story-layout-grid">
        {/* LEFT COLUMN: SCROLLING STORY CARDS */}
        <div className="tower-story-scroll-col">
          <div ref={introCardRef} className="tower-story-intro-card">
            <div className="digital-twin-tag-row">
              <span className="live-dot" aria-hidden="true"></span>
              <span className="label digital-twin-tag">DIGITAL TWIN INSPECTION // THREE.JS ARCHITECTURAL CAD</span>
            </div>
            <h2 id="digital-twin-title" className="intro-main-title">
              Interactive 3D Tower Structural Inspector
            </h2>
            <p className="intro-desc">
              Rotate and inspect the 60m self-supporting lattice tower across 6 structural simulation states. The tower maintains fixed position and consistent scale while transforming through LiDAR cloud scans, orthographic CAD wireframes, finite element wind stress (FEA), industrial hot-dip galvanized steel, RF microwave propagation beams, and sub-surface concrete raft foundations.
            </p>
            <div className="intro-stats-strip">
              <div className="stat-unit">
                <span className="label">TOWER HEIGHT:</span>
                <span className="data font-bold">60.0 METERS</span>
              </div>
              <div className="stat-unit">
                <span className="label">DESIGN STANDARD:</span>
                <span className="data font-bold text-accent">TIA-222-H</span>
              </div>
              <div className="stat-unit">
                <span className="label">WIND CLASS:</span>
                <span className="data font-bold">180 KM/H GUST</span>
              </div>
            </div>
          </div>

          {/* Sequential Step Cards */}
          <div className="tower-cards-stack">
            {VISUAL_MODES.map((mode, idx) => {
              const isActive = currentModeIdx === idx;
              return (
                <div
                  key={mode.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className={`tower-story-card ${isActive ? "card-active" : ""}`}
                  onClick={() => handleCardClick(idx)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(idx);
                    }
                  }}
                >
                  <div className="card-top-bar">
                    <span className="step-counter label">[{mode.stepNumber}]</span>
                    <span className="code-pill label">{mode.badge}</span>
                    <span
                      className={`indicator-pip ${isActive ? "pip-active" : ""}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="card-title">{mode.name}</h4>
                  <p className="card-subtitle label">{mode.description}</p>
                  <p className="card-body-text">{mode.detailedNarrative}</p>

                  {/* Technical Parameters Matrix */}
                  <div className="card-specs-matrix">
                    {mode.specsList.map((spec, sIdx) => (
                      <div key={sIdx} className="spec-item">
                        <span className="label spec-lbl">{spec.label}</span>
                        <span className="data spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Telemetry Row */}
                  <div className="card-telemetry-row">
                    <div className="tel-cell">
                      <span className="label">WIND LOAD:</span>
                      <span className="data font-bold">{mode.telemetry.windSpeed}</span>
                    </div>
                    <div className="tel-cell">
                      <span className="label">STRESS RATIO:</span>
                      <span className="data font-bold text-accent">{mode.telemetry.stressRatio}</span>
                    </div>
                    <div className="tel-cell">
                      <span className="label">APEX DEFLECTION:</span>
                      <span className="data font-bold">{mode.telemetry.deflection}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: PINNED FIXED 3D STAGE */}
        <div className="tower-story-pinned-col">
          <div className="tower-sticky-stage">
            <div className="viewer-master-wrapper">
              {/* 3D WebGL Canvas Viewport */}
              <div
                ref={mountRef}
                className="three-canvas-container"
                onPointerDown={handlePointerDown}
                role="region"
                aria-label="Interactive 3D Architectural Tower Model"
              />

              {/* TECHNICAL CAD HUD OVERLAY */}
              <div className="cad-hud-overlay">
                {/* Top Header Tag */}
                <div className="hud-top-strip">
                  <div className="hud-mode-pill label">
                    <span className="live-dot" aria-hidden="true" />
                    <span>MODE: {activeMode.name}</span>
                  </div>
                  <div className="hud-badge label">{activeMode.badge}</div>
                </div>

                {/* Floating Telemetry Box (Engineering metrics) */}
                <div className="hud-telemetry-box">
                  <div className="telemetry-item">
                    <span className="label tel-lbl">WIND LOAD:</span>
                    <span className="data tel-val">{activeMode.telemetry.windSpeed}</span>
                  </div>
                  <div className="telemetry-item">
                    <span className="label tel-lbl">FEA STRESS:</span>
                    <span className="data tel-val text-accent">{activeMode.telemetry.stressRatio}</span>
                  </div>
                  <div className="telemetry-item">
                    <span className="label tel-lbl">APEX DEFLECTION:</span>
                    <span className="data tel-val">{activeMode.telemetry.deflection}</span>
                  </div>
                  <div className="telemetry-item">
                    <span className="label tel-lbl">RF CARRIER:</span>
                    <span className="data tel-val">{activeMode.telemetry.rslSignal}</span>
                  </div>
                </div>

                {/* Interactive Viewport Controls (Camera & Projection) */}
                <div className="hud-control-bar">
                  <button
                    type="button"
                    className={`hud-btn label ${cameraProjection === "perspective" ? "btn-active" : ""}`}
                    onClick={() => setCameraProjection("perspective")}
                    title="Perspective 3D Camera"
                  >
                    3D PERSPECTIVE
                  </button>
                  <button
                    type="button"
                    className={`hud-btn label ${cameraProjection === "orthographic" ? "btn-active" : ""}`}
                    onClick={() => setCameraProjection("orthographic")}
                    title="Orthographic CAD Drafting Projection"
                  >
                    ORTHOGRAPHIC CAD
                  </button>
                  <button
                    type="button"
                    className={`hud-btn label ${isAutoRotate ? "btn-active" : ""}`}
                    onClick={() => setIsAutoRotate((v) => !v)}
                    title="Toggle Continuous Rotation"
                  >
                    {isAutoRotate ? "ROTATION: ON" : "ROTATION: PAUSED"}
                  </button>
                </div>

                {/* Visual State Morph Stepper Buttons */}
                <div className="hud-mode-selector-tabs">
                  {VISUAL_MODES.map((mode, idx) => (
                    <button
                      key={mode.id}
                      type="button"
                      className={`mode-tab-chip ${currentModeIdx === idx ? "chip-active" : ""}`}
                      onClick={() => handleCardClick(idx)}
                    >
                      <span className="label chip-num">[{String(idx + 1).padStart(2, "0")}]</span>
                      <span className="chip-name">{mode.label}</span>
                    </button>
                  ))}
                </div>

                {/* Coordinate Tripod Corner Tag */}
                <div className="hud-corner-coordinates label">
                  COORD: 27°42'34" N 85°19'12" E // ELEV: 1,350M // TIA-222-H
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
