import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Core AI/ML",
    skills: ["Transformers", "CNNs", "RAG Pipelines", "Deep Learning", "NLP"],
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face"],
  },
  {
    title: "Tooling",
    skills: ["Git", "Docker", "Kubernetes", "Weights & Biases"],
  },
  {
    title: "Backend/Full-stack",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "Next.js"],
  },
  {
    title: "Infra/DevOps",
    skills: ["CI/CD", "GCP", "AWS", "Terraform"],
  },
  {
    title: "Vector DBs / LLMs",
    skills: ["Pinecone", "Weaviate", "LangGraph", "LangChain"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Technical Skills</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-card-foreground">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
