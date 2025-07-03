import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Retrieval-Augmented Generation (RAG)",
  "Agentic AI Systems",
  "Transformers & Attention Mechanisms",
  "Backend Engineering",
  "Python for AI/ML",
];

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I am an AI Software Engineer and Researcher passionate about developing robust, scalable, and impactful intelligent systems. My expertise lies at the intersection of deep learning research and production-grade software engineering, allowing me to build solutions that are not only theoretically sound but also practically viable.
            </p>
            <p>
              My AI philosophy centers on creating systems that are transparent, interpretable, and aligned with human values. I am particularly interested in agentic AI and how autonomous systems can collaborate with humans to solve complex problems.
            </p>
            <p>
              Currently, I'm exploring efficient multi-modal models and their applications in creating more natural human-computer interfaces.
            </p>
            <p>
              I am open to relocating and remote opportunities that allow me to contribute to challenging AI projects.
            </p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Key Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {strengths.map((strength) => (
                <li key={strength} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
