export const profile = {
  name: "Muhammad Waleed Ahmad",
  firstName: "Waleed",
  roles: ["AI Engineer", "Computer Vision", "Generative AI", "Agentic AI"],
  tagline: "I build production-grade AI systems — from real-time vision to autonomous agents.",
  location: "Lahore, Pakistan",
  phone: "(+92) 303-8753204",
  email: "syedwaleedahmadshah@gmail.com",
  github: "https://github.com/waleedshah0",
  githubHandle: "waleedshah0",
  linkedin: "https://www.linkedin.com/in/muhammad-waleed-ahmad/",
  linkedinHandle: "muhammad-waleed-ahmad",
  summary:
    "Results-driven AI Engineer with 2+ years of hands-on experience building and deploying production-grade Computer Vision, Generative AI, and Agentic AI systems. Proven track record delivering real-world products — including a live multi-site surveillance platform (Fortix AI) and a psychology AI assistant (Sprixle) — using PyTorch, YOLOv11/v26, LangChain, LangGraph, and RAG architectures. Skilled in end-to-end MLOps: data pipelines, LLM fine-tuning, vector databases, multi-agent workflows, and model deployment with FastAPI and Docker on AWS.",
};

export const stats = [
  { value: "2", label: "Live AI products shipped", suffix: "" },
  { value: "2", label: "Years hands-on AI", suffix: "+" },
  { value: "50K", label: "Video frames / day", suffix: "" },
  { value: "99.5", label: "Production uptime", suffix: "%" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  images: string[];
  video?: string; // optional demo video (public path)
  link?: string;
  live?: boolean;
  accent: string; // tailwind gradient classes
};

export const projects: Project[] = [
  {
    slug: "fortix",
    name: "Fortix AI",
    category: "Computer Vision · Surveillance",
    tagline: "Real-time multi-site camera monitoring platform",
    description:
      "A production web-based multi-site camera monitoring platform serving real clients. Implements real-time detection for 8 event types with sub-200ms alert latency, plus facial recognition and Automatic Number Plate Recognition (ANPR).",
    highlights: [
      "8 real-time event types: fighting, weapons, fire, smoke, PPE, shoplifting, robbery, vehicle violations",
      "<200ms alert latency end-to-end",
      "ANPR + facial recognition auto-logs incidents, cutting manual reporting ~60%",
      "Serving real paying clients in production",
    ],
    stack: ["YOLOv11/v26/YOLOE", "ByteTrack", "ANPR", "FastAPI", "PostgreSQL", "AWS"],
    images: ["/projects/fortix-1.png", "/projects/fortix-2.png"],
    link: "https://www.fortixai.io/",
    live: true,
    accent: "from-rose-500/30 to-orange-500/10",
  },
  {
    slug: "sprixle",
    name: "Sprixle",
    category: "Agentic AI · Mental Health",
    tagline: "Psychology Agentic AI system with persistent memory",
    description:
      "Architected autonomous AI workflows with persistent memory management and emotion/context understanding for personalized psychological assistance. Supports 500+ concurrent adaptive conversations with sub-300ms responses.",
    highlights: [
      "500+ concurrent adaptive conversations",
      "Persistent memory + emotion/context understanding",
      "Sub-300ms real-time contextual responses",
      "Live in production with scalable backend APIs",
    ],
    stack: ["LangChain", "LangGraph", "LLMs", "FastAPI", "Vector DB"],
    images: ["/projects/sprixle-1.png", "/projects/sprixle-2.png"],
    link: "https://www.sprixle.com/",
    live: true,
    accent: "from-violet-500/30 to-indigo-500/10",
  },
  {
    slug: "boaak",
    name: "Boaak — Voice Agent",
    category: "Voice AI · Realtime",
    tagline: "Speak, search, and hear the answer",
    description:
      "A realtime voice AI agent that lets users speak a query, search, and receive natural spoken answers. Focused on low-latency voice capture, processing, and natural language response.",
    highlights: [
      "Speak-to-search-to-speech voice loop",
      "Low-latency audio capture and processing",
      "Natural spoken responses",
    ],
    stack: ["Next.js", "Realtime Voice", "LLMs", "Node.js"],
    images: ["/projects/boaak-1.png", "/projects/boaak-2.png"],
    live: false,
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    slug: "faceswap",
    name: "Face Swap Studio",
    category: "Generative AI · Vision",
    tagline: "Developing identities, frame by frame",
    description:
      "A generative face-swap studio for combining two images or videos by overlaying one face onto another — “developing identities, frame by frame.” Handles image and video pipelines.",
    highlights: [
      "Image & video face swap pipelines",
      "Clean studio interface for upload, preview, and export",
      "Frame-accurate identity transfer",
    ],
    stack: ["Generative AI", "Computer Vision", "Python", "FastAPI"],
    images: ["/projects/faceswap-1.png", "/projects/faceswap-2.png"],
    live: false,
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    slug: "wakanda-gym",
    name: "Wakanda GYM",
    category: "Computer Vision · Pose Estimation",
    tagline: "AI workout form analysis with real-time rep counting",
    description:
      "A pose-estimation system that analyzes workout form in real time using OpenCV and YOLO-based pose models. Tracks body keypoints during exercises like squats to count reps and assess movement quality.",
    highlights: [
      "Real-time pose estimation for workout analysis",
      "Automatic squat rep counting from video",
      "Keypoint tracking with YOLO pose models + OpenCV",
      "Visual overlay of skeleton and form feedback",
    ],
    stack: ["OpenCV", "YOLO26", "Pose Estimation", "Python"],
    images: [],
    video: "/projects/wakanda-gym.mp4",
    live: false,
    accent: "from-amber-500/30 to-yellow-500/10",
  },
  {
    slug: "robbery-detection",
    name: "Robbery Detection",
    category: "Computer Vision · Security",
    tagline: "Zone-based intrusion alerts with facial recognition",
    description:
      "A surveillance pipeline that lets you define restricted zones and monitors them with facial recognition. When an unknown person enters a protected zone, the system triggers an alarm in real time.",
    highlights: [
      "Custom zone definition for restricted areas",
      "Facial recognition to distinguish known vs unknown people",
      "Real-time alarm when an unknown person enters the zone",
      "End-to-end detection and alert pipeline",
    ],
    stack: ["OpenCV", "YOLO", "Facial Recognition", "Python"],
    images: [],
    video: "/projects/robbery-detection.mp4",
    live: false,
    accent: "from-red-500/30 to-rose-500/10",
  },
  {
    slug: "tennis-analysis",
    name: "Tennis Analysis",
    category: "Computer Vision · Sports Analytics",
    tagline: "Automated analysis of tennis play from video",
    description:
      "A computer vision system that analyzes tennis matches from video — tracking players, ball movement, and play dynamics to deliver actionable sports insights.",
    highlights: [
      "Player and ball tracking across rally sequences",
      "Automated tennis play analysis from raw video",
      "Sports analytics overlays for performance review",
    ],
    stack: ["OpenCV", "YOLO", "Object Tracking", "Python"],
    images: [],
    video: "/projects/tennis-analysis.mp4",
    live: false,
    accent: "from-lime-500/30 to-green-500/10",
  },
  {
    slug: "foot-size",
    name: "Foot Size Measurement",
    category: "Computer Vision · Measurement",
    tagline: "Accurate foot length & width from images",
    description:
      "A computer vision pipeline that estimates accurate foot measurements from images using pose estimation and segmentation models combined with DeepSORT tracking and YOLOv11 detection. Combines keypoint detection with instance segmentation to isolate the foot region, then derives real-world length/width measurements using reference-object calibration.",
    highlights: [
      "Keypoint detection + instance segmentation to isolate the foot",
      "YOLOv11 detection with DeepSORT multi-object tracking",
      "Reference-object calibration for real-world length/width",
      "End-to-end measurement pipeline from a single image/video",
    ],
    stack: ["YOLOv11", "DeepSORT", "Pose Estimation", "Segmentation", "OpenCV"],
    images: [],
    video: "/projects/foot-size.mp4",
    live: false,
    accent: "from-sky-500/30 to-cyan-500/10",
  },
  {
    slug: "3d-room",
    name: "3D Room Reconstruction",
    category: "Computer Vision · 3D Reconstruction",
    tagline: "Monocular images to editable 3D room layouts",
    description:
      "A 3D reconstruction pipeline using Droid-SLAM and Spatial LM that generates precise 3D point clouds from monocular images with sub-2cm error, then reconstructs them into editable 3D room layouts.",
    highlights: [
      "Droid-SLAM + Spatial LM for monocular 3D reconstruction",
      "Precise point clouds with <2cm reconstruction error",
      "Editable 3D room layouts from casual camera footage",
    ],
    stack: ["Droid-SLAM", "Spatial LM", "3D Reconstruction", "Python"],
    images: [],
    video: "/projects/3d-room.mp4",
    live: false,
    accent: "from-fuchsia-500/30 to-purple-500/10",
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / ML",
    icon: "brain",
    skills: [
      "Machine Learning", "Deep Learning", "Computer Vision", "NLP",
      "Transformers", "Vision Transformers", "LLM Fine-Tuning", "Prompt Engineering",
      "Generative AI", "Agentic AI", "Multimodal AI", "RAG",
      "MLOps", "Model Deployment", "Real-Time Inference", "3D Slicer", "CVAT",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "layers",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn", "Ultralytics YOLO (v11/v26/YOLOE)",
      "OpenCV", "LangChain", "LangGraph", "Hugging Face Transformers",
      "Keras", "FastAPI", "NumPy", "Pandas", "N8N",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Docker", "AWS", "GitHub", "CI/CD (GitHub Actions)", "Kubernetes"],
  },
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "JavaScript", "Node.js", "PostgreSQL", "SQLite"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Computer Vision Engineer",
    company: "Shayan Solutions",
    location: "Lahore, Pakistan",
    period: "Oct 2024 – Present",
    current: true,
    points: [
      "Designed, trained, and optimized real-time object detection & tracking pipelines using YOLOv11/YOLOv26/SAM3 with ByteTrack, achieving >92% mAP on custom surveillance datasets across 6 detection categories (weapons, fire, PPE, shoplifting, vehicles, faces).",
      "Built end-to-end multi-agent workflows using LangChain and LangGraph with RAG architectures and vector databases, reducing average query response latency by 40% through optimized retrieval strategies and context window management.",
      "Continuously fine-tuned LLMs using Hugging Face on domain-specific datasets; deployed models via FastAPI and Docker on AWS with GitHub Actions CI/CD, maintaining 99.5% uptime across production systems.",
      "Engineered feature engineering and data preprocessing pipelines handling 50,000+ video frames per day, improving model inference throughput by 35% through batch optimization and TensorRT integration.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Fiverivers Technologies",
    location: "Lahore, Pakistan",
    period: "Jun 2024 – Oct 2024",
    points: [
      "Developed end-to-end ML pipelines for 3 client classification and regression projects — covering data collection, cleaning, feature selection, and model evaluation with scikit-learn — improving F1 scores by an average of 18% over baseline models.",
      "Fine-tuned 2 LLMs and 1 VLM using Hugging Face on Google Colab and Kaggle (GPU environments); built RAG-based NLP systems with LangChain and LangGraph deployed for real-world client use, processing 10,000+ documents.",
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const otherProjects = [
  {
    name: "DeepTutor AI",
    desc: "Domain-specific chatbot using gemma3n 2B + RAG for deep-learning Q&A with multimodal input (facial expression + tone analysis), improving relevance by 28%.",
    stack: ["gemma3n 2B", "RAG", "LangGraph", "Multimodal"],
  },
];
