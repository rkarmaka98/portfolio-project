"use client";

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
import { ArrowRight, Search } from "lucide-react";
import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Input } from "../ui/input";

const articles = [
  // {
  //   title: "Demystifying RAG: A Practical Guide",
  //   description: "A deep dive into Retrieval-Augmented Generation, from theory to building a practical application with LangChain and PyTorch.",
  //   tags: ["Tutorial", "RAG", "AI"],
  //   image: "https://placehold.co/600x400.png",
  //   link: "#",
  //   dataAiHint: "books library",
  //   readTime: "7 min read",
  //   date: "2024-05-10",
  // },
  // {
  //   title: "The Rise of Agentic AI",
  //   description: "Exploring the paradigm shift towards autonomous AI agents and their potential to revolutionize industries. A look into LangGraph.",
  //   tags: ["Explainer", "Agents", "Future of AI"],
  //   image: "https://placehold.co/600x400.png",
  //   link: "#",
  //   dataAiHint: "robot human interaction",
  //   readTime: "5 min read",
  //   date: "2024-04-22",
  // },
  // {
  //   title: "Optimizing Transformers for Production",
  //   description: "Techniques for making large language models faster and more efficient for real-world deployment without sacrificing performance.",
  //   tags: ["Deep Dive", "Performance", "MLOps"],
  //   image: "https://placehold.co/600x400.png",
  //   link: "#",
  //   dataAiHint: "server room",
  //   readTime: "10 min read",
  //   date: "2024-03-15",
  // },
  {
    title: "Handling Big Git Repos in AI Development",
    description: "Utilizing good Software Development Practices while developing AI workflow.",
    tags: ["Git", "AI", "Software Development"],
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*1lAyjQ33MPmN-pj8",
    link: "https://medium.com/@rkarmakar98/handling-big-git-repos-in-ai-development-a8d2343514d7",
    dataAiHint: "AI Git practices",
    readTime: "3 min read",
    date: "2025-07-03",
  },
  {
    title: "Boosting Productivity to Compete with AI",
    description: "In this age of a new Intelligence, the biggest question arises, how can we improve ourselves more and our thinking to become a great thinkers?",
    tags: ["Productivity", "Focus", "Discipline"],
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*kvbfeIWhUhVExwGd",
    link: "https://medium.com/@rkarmakar98/boosting-productivity-to-compete-with-ai-533489ac0c4e",
    dataAiHint: "Using Discipline for Productivity",
    readTime: "9 min read",
    date: "2025-07-13",
  },
];

const fuseOptions = {
  keys: ["title", "description", "tags"],
  threshold: 0.4,
};


export function ArticlesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const fuse = useMemo(() => new Fuse(articles, fuseOptions), []);

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return articles;
    return fuse.search(searchTerm).map((result) => result.item);
  }, [searchTerm, fuse]);

  return (
    <section id="articles" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Blogs & Articles</h2>
        <div className="relative w-full max-w-sm">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.length > 0 ? filteredArticles.map((article) => {
          const articleSchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              // Replace with your actual domain and article path
              "@id": `https://your-domain.com${article.link}`
            },
            "headline": article.title,
            "description": article.description,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": "Rajarshi Karmakar"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Rajarshi Karmakar",
            },
            "datePublished": article.date,
            "dateModified": article.date
          };

          return (
            <Card key={article.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
              />
              <CardHeader>
                <div className="relative w-full aspect-video">
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
                 <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
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
          );
        }) : <p className="col-span-full text-center text-muted-foreground">No articles found.</p>}
      </div>
    </section>
  );
}
