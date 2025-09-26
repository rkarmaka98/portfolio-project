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
    technologies: ["Pytorch", "Tensorboard", "Git", "CUDA"],
    role: "AI Researcher at Valeo",
    image: "/segmentation-matching.png",
    demoLink: "https://github.com/user-attachments/assets/d1b99108-9b3b-4d37-a1d5-35b6da3a99b2",
    // githubLink: "https://github.com/rkarmaka98/SuperSegmentaion",
    // blogLink: "#",
    dataAiHint: "Gemini AI platform"
  },
  {
    title: "SafeSpaceAI: AI platform for Clinical Therapists",
    description: "A Gemini AI based platform to analyze patients mood in real time, an AI Chatbot for giving therapy to patients and a whole platform to monitor patients' mood.",
    technologies: ["ReactJs", "Typescript", "Gemini", "NodeJs"],
    // role: "AI Researcher at Valeo",
    image: "/moodchart.png",
    demoLink: "https://github.com/user-attachments/assets/a26a2d51-bfe4-4a52-9af7-e1873e38a8e2",
    // githubLink: "https://github.com/rkarmaka98/SuperSegmentaion",
    // blogLink: "#",
    dataAiHint: "Computer vision AI model"
  },
  // {
  //   title: "Project Delta: Open-Source Contributor",
  //   description: "Contributed significantly to a popular open-source AI framework, focusing on performance optimization and new feature implementation.",
  //   technologies: ["PyTorch", "Git", "CI/CD"],
  //   role: "OSS Contributor",
  //   image: "https://placehold.co/600x400.png",
  //   githubLink: "#",
  //   dataAiHint: "open source code"
  // },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ProjectList projects={projects} />
    </section>
  );
}
