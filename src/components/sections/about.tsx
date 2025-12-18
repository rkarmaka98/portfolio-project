import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Lightbulb } from "lucide-react";

const strengths = [
  "Computer Vision Systems",
  "Deep Learning Model Development",
  "Agentic AI Systems Design",
  "Transformers & Attention Mechanisms",
  "Backend Microservices",
  "Python for AI/ML & software development",
  "Cloud Infrastructure (AWS, GCP)",
  "Linux & DevOps",
  "System design"
];

const currentlyExploring = [
    "Vision based Deep Learning Models for real world problems",
];

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I am an AI Researcher & Software Engineer passionate about developing robust, scalable and impactful intelligent systems and software. My expertise lies at the intersection of deep learning research and production-grade software engineering, allowing me to build solutions that are not only state-of-the art but also practically viable in real-world.
            </p>
            <p>
              My philosophy centers on creating systems that are transparent, interpretable, and aligned with human values. I am particularly interested in AI and autonomous systems that can collaborate with humans to solve complex problems.
            </p>
             <div className="mt-6 rounded-lg border bg-card p-4 text-sm">
                <h4 className="mb-3 flex items-center font-semibold text-card-foreground">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                    Currently Exploring
                </h4>
                <ul className="space-y-2">
                    {currentlyExploring.map((item) => (
                    <li key={item} className="flex items-start">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                        <span className="text-muted-foreground">{item}</span>
                    </li>
                    ))}
                </ul>
            </div>
            <p>
              I am open to relocating and remote opportunities that allow me to contribute to challenging AI projects to solve scientific problems.
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
