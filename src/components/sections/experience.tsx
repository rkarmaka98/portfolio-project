import { ArrowUpRight } from "lucide-react";

const experienceData = [
  {
    role: "Senior AI Engineer",
    company: "Future Systems Inc.",
    period: "2021 - Present",
    accomplishments: [
      { text: "Led the development of a large-scale RAG system, improving information retrieval accuracy by 40%.", link: "#" },
      { text: "Designed and implemented a multi-agent framework that automated 75% of manual data processing tasks." },
      { text: "Optimized inference time for production models by 60% through quantization and model pruning." },
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Data Insights Co.",
    period: "2019 - 2021",
    accomplishments: [
      { text: "Built and deployed a recommendation engine that increased user engagement by 25%." },
      { text: "Developed CI/CD pipelines for ML models, reducing deployment time from days to hours.", link: "#" },
      { text: "Contributed to the company's internal ML platform, used by over 50 data scientists." },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Innovatech",
    period: "Summer 2018",
    accomplishments: [
      { text: "Developed a data visualization dashboard for analyzing user behavior." },
      { text: "Assisted in creating a natural language processing module for sentiment analysis." },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Experience Timeline</h2>
      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-0 top-0 ml-3 h-full w-0.5 bg-border"
          aria-hidden="true"
        />
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background">
                 <div className="h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className="font-semibold text-primary">{item.company}</p>
                    </div>
                    <p className="flex-shrink-0 pt-1 text-sm text-muted-foreground">{item.period}</p>
                </div>
                
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {item.accomplishments.map((acc, i) => (
                    <li key={i}>
                      {acc.link ? (
                        <a href={acc.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
                          {acc.text}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        acc.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
