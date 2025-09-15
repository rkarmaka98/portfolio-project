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
    image: "https://private-user-images.githubusercontent.com/130791740/489702655-18cb244e-2b0d-4146-b156-0396b25e6ef7.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc5NjQxODksIm5iZiI6MTc1Nzk2Mzg4OSwicGF0aCI6Ii8xMzA3OTE3NDAvNDg5NzAyNjU1LTE4Y2IyNDRlLTJiMGQtNDE0Ni1iMTU2LTAzOTZiMjVlNmVmNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxNVQxOTE4MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW1zLVNpZ25hdHVyZT1kZjMzNDczNjU0MmIwMDhjZGI1MTllZDk5ODI3NDc5ZDg0OWE3YWQ4YTUwMmZkNjBhMWNhMDc5MWRlYzkzZjM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.upNqTdWUHkVlqvohx4LbMXAwZ1D_Rh_uN9LdMh4MbQE",
    demoLink: "https://github.com/user-attachments/assets/d1b99108-9b3b-4d37-a1d5-35b6da3a99b2",
    githubLink: "https://github.com/rkarmaka98/SuperSegmentaion",
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
