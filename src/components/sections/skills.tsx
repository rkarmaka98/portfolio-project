import { Badge } from "@/components/ui/badge";

const skillCategories: {
  title: string;
  skills: { name: string; icon?: string }[];
}[] = [
  {
    title: "Core AI/ML",
    skills: [
      { name: "Transformers" },
      { name: "CNNs" },
      { name: "RAG Pipelines" },
      { name: "Deep Learning" },
      { name: "NLP" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Weights & Biases" },
    ],
  },
  {
    title: "Backend/Full-stack",
    skills: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    title: "Infra/DevOps",
    skills: [
      { name: "CI/CD" },
      { name: "GCP", icon: "googlecloud" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Terraform", icon: "terraform" },
    ],
  },
  {
    title: "Vector DBs / LLMs",
    skills: [
      { name: "Pinecone" },
      { name: "Weaviate" },
      { name: "LangGraph" },
      { name: "LangChain" },
    ],
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
              {category.skills.map((skill) =>
                skill.icon ? (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    <div
                      data-devicon-placeholder={skill.icon}
                      className="h-4 w-4 shrink-0"
                      aria-label={`${skill.name} icon`}
                    />
                    <span>{skill.name}</span>
                  </div>
                ) : (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
