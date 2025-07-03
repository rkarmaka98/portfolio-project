import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block text-primary">Rajarshi Karmakar</span>
        <span className="mt-2 block text-foreground">AI Software Engineer & Researcher</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        Building intelligent systems that scale.
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-md text-muted-foreground sm:text-lg">
        Specializing in production-ready deep learning and agentic systems.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <a href="#contact">
            Get in Touch
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <a href="/resume.pdf" download>
            <ArrowDown className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
