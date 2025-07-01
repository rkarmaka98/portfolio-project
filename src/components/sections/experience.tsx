const experienceData = [
  {
    role: "Senior AI Engineer",
    company: "Future Systems Inc.",
    period: "2021 - Present",
    accomplishments: [
      "Led the development of a large-scale RAG system, improving information retrieval accuracy by 40%.",
      "Designed and implemented a multi-agent framework that automated 75% of manual data processing tasks.",
      "Optimized inference time for production models by 60% through quantization and model pruning.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Data Insights Co.",
    period: "2019 - 2021",
    accomplishments: [
      "Built and deployed a recommendation engine that increased user engagement by 25%.",
      "Developed CI/CD pipelines for ML models, reducing deployment time from days to hours.",
      "Contributed to the company's internal ML platform, used by over 50 data scientists.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Innovatech",
    period: "Summer 2018",
    accomplishments: [
      "Developed a data visualization dashboard for analyzing user behavior.",
      "Assisted in creating a natural language processing module for sentiment analysis.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Experience Timeline</h2>
      <div className="relative">
        <div
          className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"
          aria-hidden="true"
        />
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative flex items-start">
              <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                {index % 2 === 0 && (
                   <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="font-semibold text-primary">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-left text-sm text-muted-foreground">
                      {item.accomplishments.map((acc, i) => <li key={i}>{acc}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary" aria-hidden="true" />
              
              <div className="w-full pl-4 md:w-1/2 md:pl-8">
                 <div className="block md:hidden rounded-lg border bg-card p-6 shadow-sm mb-8">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="font-semibold text-primary">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {item.accomplishments.map((acc, i) => <li key={i}>{acc}</li>)}
                    </ul>
                  </div>

                {index % 2 !== 0 && (
                   <div className="hidden md:block rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="font-semibold text-primary">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted-foreground">
                       {item.accomplishments.map((acc, i) => <li key={i}>{acc}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
