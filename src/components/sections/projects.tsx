import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, PlayCircle, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Project Alpha: RAG-based Q&A System",
    description: "An advanced question-answering system for enterprise documents, using a novel RAG pipeline to provide accurate, context-aware answers.",
    technologies: ["PyTorch", "LangChain", "FastAPI", "Docker", "Pinecone"],
    role: "Lead AI Engineer",
    image: "https://placehold.co/600x400.png",
    demoLink: "#",
    githubLink: "#",
    blogLink: "#",
    dataAiHint: "artificial intelligence circuit"
  },
  {
    title: "Project Beta: Agentic AI for Automation",
    description: "Developed a multi-agent system to automate complex data analysis workflows, reducing manual effort by 90% and improving accuracy.",
    technologies: ["LangGraph", "Transformers", "GCP", "Kubernetes"],
    role: "AI Researcher & Developer",
    image: "https://placehold.co/600x400.png",
    demoLink: "#",
    githubLink: "#",
    dataAiHint: "data visualization dashboard"
  },
  {
    title: "Project Gamma: Real-time Object Detection",
    description: "A high-performance object detection model deployed at the edge for real-time video stream analysis, achieving state-of-the-art accuracy.",
    technologies: ["TensorFlow", "FastAPI", "Docker", "AWS"],
    role: "ML Engineer",
    image: "https://placehold.co/600x400.png",
    githubLink: "#",
    blogLink: "#",
    dataAiHint: "cctv camera"
  },
  {
    title: "Project Delta: Open-Source Contributor",
    description: "Contributed significantly to a popular open-source AI framework, focusing on performance optimization and new feature implementation.",
    technologies: ["PyTorch", "Git", "CI/CD"],
    role: "OSS Contributor",
    image: "https://placehold.co/600x400.png",
    githubLink: "#",
    dataAiHint: "open source code"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Projects & Case Studies</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <CardTitle className="pt-4">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-2 text-sm font-semibold">Role: <span className="font-normal text-muted-foreground">{project.role}</span></p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex justify-start gap-2 border-t px-6 py-4">
              {project.demoLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
               {project.blogLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" /> Blog
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
