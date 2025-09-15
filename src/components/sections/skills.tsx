import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      { name: "Agentic Systems" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "PyTorch", icon: "pytorch-original" },
      { name: "TensorFlow", icon: "tensorflow-original" },
      { name: "scikit-learn", icon: "scikitlearn-plain" },
      { name: "Hugging Face" },
      { name: "Autogen" },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git", icon: "git-plain" },
      { name: "Docker", icon: "docker-plain" },
      { name: "Kubernetes", icon: "kubernetes-plain" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: "fastapi-plain" },
      { name: "Node.js", icon: "nodejs-plain" },
      { name: "PostgreSQL", icon: "postgresql-plain" },
      { name: "Kafka", icon: "apachekafka-original" },
    ],
  },
  {
    title: "Infra/DevOps",
    skills: [
      { name: "CI/CD" },
      { name: "GCP", icon: "googlecloud-plain" },
      { name: "AWS", icon: "amazonwebservices-plain-wordmark" },
      { name: "Terraform", icon: "terraform-plain" },
      { name: "Teamcity" },
      { name: "Ansible", icon: "ansible-plain-wordmark colored"}
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
                    <i
                      className={cn(
                        `devicon-${skill.icon}`,
                        'text-lg'
                      )}
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
