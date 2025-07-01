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
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Demystifying RAG: A Practical Guide",
    description: "A deep dive into Retrieval-Augmented Generation, from theory to building a practical application with LangChain and PyTorch.",
    tags: ["Tutorial", "RAG", "AI"],
    image: "https://placehold.co/600x400.png",
    link: "#",
    dataAiHint: "books library"
  },
  {
    title: "The Rise of Agentic AI",
    description: "Exploring the paradigm shift towards autonomous AI agents and their potential to revolutionize industries. A look into LangGraph.",
    tags: ["Explainer", "Agents", "Future of AI"],
    image: "https://placehold.co/600x400.png",
    link: "#",
    dataAiHint: "robot human interaction"
  },
  {
    title: "Optimizing Transformers for Production",
    description: "Techniques for making large language models faster and more efficient for real-world deployment without sacrificing performance.",
    tags: ["Deep Dive", "Performance", "MLOps"],
    image: "https://placehold.co/600x400.png",
    link: "#",
    dataAiHint: "server room"
  },
];

export function ArticlesSection() {
  return (
    <section id="articles" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Blogs & Articles</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
             <CardHeader>
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  data-ai-hint={article.dataAiHint}
                />
              </div>
              <CardTitle className="pt-4">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
               <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto border-t px-6 py-4">
               <Button variant="ghost" asChild className="w-full justify-start">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
