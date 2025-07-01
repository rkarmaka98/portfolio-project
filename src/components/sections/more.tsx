import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Book, GitMerge, GraduationCap } from "lucide-react";
import Link from "next/link";

const moreData = [
  {
    icon: Book,
    title: "Publications / Research",
    description: "Peer-reviewed papers and articles.",
    items: [
      { name: "A Novel Approach to Multi-Agent Collaboration", link: "#" },
      { name: "Efficient Attention Mechanisms for Edge Devices", link: "#" },
    ],
  },
  {
    icon: GitMerge,
    title: "Open Source Contributions",
    description: "Contributions to major AI/ML libraries.",
    items: [
      { name: "PyTorch - Performance Patch", link: "#" },
      { name: "Hugging Face Transformers - Added new model", link: "#" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Certifications & Courses",
    description: "Continuous learning and skill development.",
    items: [
      { name: "DeepLearning.AI - TensorFlow Developer", link: "#" },
      { name: "AWS Certified Machine Learning - Specialty", link: "#" },
    ],
  },
  {
    icon: Award,
    title: "Benchmarks & Demos",
    description: "Interactive demos and leaderboard scores.",
    items: [
      { name: "Hugging Face Space: RAG Demo", link: "#" },
      { name: "PaperWithCode: Top 5 on XYZ Benchmark", link: "#" },
    ],
  },
];

export function MoreSection() {
  return (
    <section id="more" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">More Achievements</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {moreData.map((section) => (
          <Card key={section.title}>
            <CardHeader className="flex flex-row items-center gap-4">
              <section.icon className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link} className="text-sm text-muted-foreground hover:text-foreground hover:underline" target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
