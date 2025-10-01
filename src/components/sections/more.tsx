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
  // {
  //   icon: Book,
  //   title: "Publications / Research",
  //   description: "Peer-reviewed papers and articles.",
  //   items: [
  //     { name: "A Novel Approach to Multi-Agent Collaboration", link: "#" },
  //     { name: "Efficient Attention Mechanisms for Edge Devices", link: "#" },
  //   ],
  // },
  {
    icon: GitMerge,
    title: "Open Source Contributions",
    description: "Contributions to major AI/ML libraries.",
    items: [
      // { name: "PyTorch - Performance Patch", link: "#" },
      // { name: "Hugging Face Transformers - Added new model", link: "#" },
      { name: "OpenSSL - Security and Performance Patch", link: "https://github.com/openssl/openssl/issues?q=is%3Aclosed%20%20author%3Arkarmaka98"}
      { name: "LangChain/LangGraph - Bug fixes in Checkpoint component", link: "" }
    ],
  },
  {
    icon: GraduationCap,
    title: "Certifications & Courses",
    description: "Continuous learning and skill development.",
    items: [
      { name: "Neural Networks and Deep Learning", link: "https://www.coursera.org/account/accomplishments/verify/6GS3NVSYH2QM" },
      { name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization", link: "https://www.coursera.org/account/accomplishments/verify/6P9AJKC7ZHR8"},
      { name: "Structuring Machine Learning Projects", link: "https://www.coursera.org/account/accomplishments/verify/F9WNH4E636VH"},
      { name: "Browser-based Models with TensorFlow.js" , link: "https://www.coursera.org/account/accomplishments/verify/KVDSPPFRGZ8M"},
      { name: "AWS Certified Cloud Practitioner", link: "" },
    ],
  },
  {
    icon: Award,
    title: "Benchmarks & Demos",
    description: "Interactive demos and leaderboard scores.",
    items: [
      { name: "SafeSpaceAI: Agentic RAG Application Demo", link: "https://www.linkedin.com/posts/rajarshi-karmakar-ai-engineer_ai-digitalhealth-europe-activity-7356966692482121728-B-jq" },
      // { name: "PaperWithCode: Top 5 on XYZ Benchmark", link: "#" },
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
