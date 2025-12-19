import { ProjectList } from "@/components/project-list";

const projects = [
  // {
  //   title: "Project Alpha: RAG-based Q&A System",
  //   description: "An advanced question-answering system for enterprise documents, using a novel RAG pipeline to provide accurate, context-aware answers.",
  //   technologies: ["PyTorch", "LangChain", "FastAPI", "Docker", "Pinecone"],
  //   role: "Lead AI Engineer",
  //   image: "https://placehold.co/600x400.png",
  //   demoLink: "#",
  //   githubLink: "#",
  //   blogLink: "#",
  //   dataAiHint: "artificial intelligence circuit"
  // },
  // {
  //   title: "Project Beta: Agentic AI for Automation",
  //   description: "Developed a multi-agent system to automate complex data analysis workflows, reducing manual effort by 90% and improving accuracy.",
  //   technologies: ["LangGraph", "Transformers", "GCP", "Kubernetes"],
  //   role: "AI Researcher & Developer",
  //   image: "https://placehold.co/600x400.png",
  //   demoLink: "#",
  //   githubLink: "",
  //   dataAiHint: ""
  // },
  {
    title: "SuperSegmentation: Novel architecture for Keypoint matching",
    description: "A high performance Keypoint detection and matching model with the semantic context for SLAM in robotics, achieving state-of-the-art benchmark for cityscape.",
    technologies: ["Pytorch", "Tensorboard", "Git", "CUDA", "Python", "OpenCV", "Deep Learning"],
    role: "AI Researcher at Valeo",
    image: "/segmentation-matching.png",
    demoLink: "https://github.com/user-attachments/assets/242296e3-9a9c-4bcb-8692-20acc34a6eb4",
    githubLink: "https://github.com/rkarmaka98/SuperSegmentaion",
    paper: "/SuperSegmentation.pdf",
    // blogLink: "#",
    dataAiHint: "Gemini AI platform"
  },
  {
    title: "SafeSpaceAI: AI platform for Clinical Therapists",
    description: "A Gemini AI based platform to analyze patients mood in real time, an AI Chatbot for giving therapy to patients and a whole platform to monitor patients' mood.",
    technologies: ["ReactJs", "Typescript", "Gemini", "NodeJs", "RAG", "Supabase", "AI/ML"],
    role: "Individual Contributor",
    image: "/moodchart.png",
    demoLink: "https://github.com/user-attachments/assets/a26a2d51-bfe4-4a52-9af7-e1873e38a8e2",
    // githubLink: "https://github.com/rkarmaka98/SuperSegmentaion",
    // blogLink: "#",
    dataAiHint: "Computer vision AI model"
  },
  {
    title: "LangChain/LangGraph: Open-Source Contributor",
    description: "Contributed significantly to a popular open-source Agentic AI framework, focusing on performance optimization and new feature implementation.",
    technologies: ["Python", "Git", "Github Actions"],
    role: "OSS Contributor",
    image: "https://github.com/user-attachments/assets/40b8c8c9-0f55-4740-9d44-5ef6ab2f041b",
    githubLink: "https://github.com/langchain-ai/langgraph",
    dataAiHint: "open source code"
  },
  {
    title: "SelfDriving Car Simulation Agent using Q Learning",
    description: "Self-Driving Car Simulation using Deep Reinforcement Learning aims to create an environment where an agent learns to drive a car autonomously",
    technologies: ["Python", "Git", "Pytorch", "Reinforcement Leanring", "Pygame"],
    role: "Individual Contributor",
    image: "/SelfdrivingSim.png",
    demoLink: "https://github.com/user-attachments/assets/7146335e-90e0-40cf-b844-18543974753b",
    githubLink: "https://github.com/rkarmaka98/SelfDrivingCarSimulation",
    dataAiHint: "Reinforcement learning model"
  },
  {
    title: "Real-time Image Filter Application",
    description: "A web application that applies real-time image filters using OpenCV, allowing users to use webcam and see various effects instantly.",
    technologies: ["Python", "Git", "OpenCV", "Computer Vision", "NodeJs","Flask"],
    role: "Individual Contributor",
    image: "https://github.com/user-attachments/assets/dc62cb82-c3d9-491d-8f2b-43eb89dd1ea7",
    demoLink: "https://github.com/user-attachments/assets/7971fb5e-eca2-4373-b257-77fc56e1d810",
    githubLink: "https://github.com/rkarmaka98/Image-filter-app",
    dataAiHint: "Webcam with image filters"
  },
  {
    title: "Handwritten Digit Classifier Web App",
    description: "A web application that classifies handwritten digits using a trained machine learning model (MNIST dataset), allowing users to draw digits and get predictions.",
    technologies: ["Python", "Git", "Computer Vision", "Tensorflow", "Flask", "Matplotlib"],
    role: "Individual Contributor",
    image: "https://github.com/user-attachments/assets/a6e61827-9d5c-4ba6-a0ab-244dcb6d3098",
    demoLink: "https://github.com/user-attachments/assets/fca438b9-1fd8-463f-a18e-d0a619d36e99",
    githubLink: "https://github.com/rkarmaka98/Handwritten-digit-classifier",
    dataAiHint: "Handwritten digit recognition model web app"
  },
  {
    title: "Emotion Detection using SVC",
    description: "A web application that detects emotions from facial expressions using a Support Vector Classifier (SVC) model, allowing users to upload images and receive emotion predictions.",
    technologies: ["Python", "Git", "Computer Vision", "Tensorflow", "Flask", "Matplotlib"],
    role: "Individual Contributor",
    image: "https://github.com/user-attachments/assets/e8fb1e13-93d8-4d0a-b676-e1549e00ea69",
    demoLink: "https://github.com/user-attachments/assets/75b7386b-3335-4236-9e52-53ff4f92a3cb",
    githubLink: "https://github.com/rkarmaka98/Emotion-Detection",
    dataAiHint: "Emotion Detection model web app"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ProjectList projects={projects} />
    </section>
  );
}
