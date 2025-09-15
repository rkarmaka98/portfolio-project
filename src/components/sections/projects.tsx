"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Fuse from "fuse.js";
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
import { Github, PlayCircle, BookOpen, Search } from "lucide-react";
import { Input } from "../ui/input";

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
    image: "https://private-user-images.githubusercontent.com/130791740/489702655-18cb244e-2b0d-4146-b156-0396b25e6ef7.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc5NjQxODksIm5iZiI6MTc1Nzk2Mzg4OSwicGF0aCI6Ii8xMzA3OTE3NDAvNDg5NzAyNjU1LTE4Y2IyNDRlLTJiMGQtNDE0Ni1iMTU2LTAzOTZiMjVlNmVmNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxNVQxOTE4MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZjMzNDczNjU0MmIwMDhjZGI1MTllZDk5ODI3NDc5ZDg0OWE3YWQ4YTUwMmZkNjBhMWNhMDc5MWRlYzkzZjM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.upNqTdWUHkVlqvohx4LbMXAwZ1D_Rh_uN9LdMh4MbQE",
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

const fuseOptions = {
  keys: ["title", "description", "technologies", "role"],
  threshold: 0.4,
};

export function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const fuse = useMemo(() => new Fuse(projects, fuseOptions), []);
  
  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) return projects;
    return fuse.search(searchTerm).map((result) => result.item);
  }, [searchTerm, fuse]);

  return (
    <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects & Case Studies</h2>
        <div className="relative w-full max-w-sm">
           <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.length > 0 ? filteredProjects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="relative w-full aspect-video">
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
                <Button size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="secondary" size="sm" asChild>
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
        )) : <p className="col-span-full text-center text-muted-foreground">No projects found.</p>}
      </div>
    </section>
  );
}
