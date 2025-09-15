"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "../ui/button";
import { text } from "stream/consumers";

const experienceData = [
  {
    role: "AI Researcher (Internship)",
    company: "Valeo Vision Systems",
    period: "Feb 2025 - Aug 2025",
    accomplishments: [
      { text: "Designed and implemented a novel computer vision model (“SuperSegmentation”) that combines image understanding with precise feature detection, supporting self-driving car navigation (SLAM).", link: "https://github.com/rkarmaka98/SuperSegmentaion" },
      { text: "Conducted a comprehensive review of 50+ research papers to identify gaps in existing methods, discovering a large opportunity for improving consistency and precision in visual mapping." },
      { text: "Built a scalable training system using 30,000+ real-world driving frames, ensuring the model learned to recognize roads, vehicles, and structures while detecting key visual points with sub-pixel accuracy." },
      { text: "Achieved benchmarking performce by increasing consistency of visual landmarks by +34% compared to baseline methods, reducing positioning errors by 80%, enabling more reliable navigation, achieving near-perfect matching accuracy (99.6%) in test scenarios." },
      { text: "Streamlined experimentation and training workflows, cutting turnaround time by 50%, while ensuring compatibility with GPU acceleration and production-ready performance (~15 ms per frame)."},
      { text: "Recognized for introducing semantic awareness to keypoint detection, making SLAM more robust in dynamic urban environments."}
    ],
  },
  {
    role: "Laboratory Instructor (Contract)",
    company: "University of Limerick",
    period: "Sep 2024 - Nov 2024",
    accomplishments: [
      { text: "Supervised and guided students in Operating Systems labs, ensuring they understood both theory and practical applications." },
      { text: "Delivered lessons on core OS concepts such as process management, memory handling, and file systems." },
      { text: "Provided hands-on training in Linux, connecting classroom topics to real-world industry practices." },
      { text: "Mentored students in troubleshooting, scripting, and system management using Linux tools and commands." },
      { text: "Facilitated lab sessions to reinforce OS principles through practice, helping students build confidence in applied computing." },
    ],
  },
  {
    role: "Software Engineer (Full-time)",
    company: "Ciena",
    period: "Apr 2022 - Aug 2024",
    accomplishments: [
      { text: "Contributed to the development of network software powering Ciena’s optical platforms, helping customers handle massive internet traffic growth." },
      { text: "Designed and improved cloud-ready microservices, ensuring reliable communication between network devices and management systems." },
      { text: "Introduced AI-powered solutions, including a knowledge search assistant that cut engineer lookup time by 30% and boosted productivity across teams." },
      { text: "Helped migrate systems across multiple cloud providers (AWS, Azure, IBM), improving resilience and scalability for global deployments." },
      { text: "Automated routine testing and troubleshooting with Python scripts, reducing manual work and speeding up development cycles." },
      { text: "Collaborated with cross-functional teams (design, UI, and hardware engineers) to deliver features faster and ensure smooth integration." },
    ],
  },
  {
    role: "Software Engineer (Full-time)",
    company: "HCL Technologies",
    period: "Feb 2021 - Apr 2022",
    accomplishments: [
      { text: "Supported large-scale Linux system deployments, reviewing code changes and applying patch releases to keep systems secure and reliable." },
      { text: "Built monitoring dashboards using Grafana and Prometheus, giving teams real-time visibility into system health (CPU, RAM, database performance)." },
      { text: "Automated infrastructure tasks with Python and Bash scripting, reducing manual work and improving system availability." },
      { text: "Managed AWS cloud resources (databases, servers, workloads) and scheduled workflows to prevent data loss and ensure smooth operations." },
      { text: "Created technical documentation on operating system upgrades, ensuring compatibility and reducing risks during future rollouts." },
      { text: "Collaborated with cross-functional teams to test deployments and review software architecture for quality and scalability." },
    ],
  },
];

// Sub-component for individual experience items
function ExperienceItem({ item }: { item: typeof experienceData[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const hasCollapsibleContent = item.accomplishments.length > 2;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background">
        <motion.div
          className="h-3 w-3 rounded-full bg-primary"
          aria-hidden="true"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold">{item.role}</h3>
            <p className="font-semibold text-primary">{item.company}</p>
          </div>
          <p className="flex-shrink-0 pt-1 text-sm text-muted-foreground">
            {item.period}
          </p>
        </div>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {item.accomplishments.slice(0, 2).map((acc, i) => (
            <li key={i}>
              {acc.link ? (
                <a
                  href={acc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground hover:underline"
                >
                  {acc.text}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : (
                acc.text
              )}
            </li>
          ))}
        </ul>

        {hasCollapsibleContent && (
          <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen} className="mt-2">
            <CollapsibleContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {item.accomplishments.slice(2).map((acc, i) => (
                    <li key={i}>
                    {acc.link ? (
                        <a
                        href={acc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-foreground hover:underline"
                        >
                        {acc.text}
                        <ArrowUpRight className="h-3 w-3" />
                        </a>
                    ) : (
                        acc.text
                    )}
                    </li>
                ))}
                </ul>
            </CollapsibleContent>
            <CollapsibleTrigger asChild>
              <Button variant="link" className="p-0 h-auto mt-2 text-sm">
                {isCollapsibleOpen ? "Show less" : "Show more"}
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isCollapsibleOpen && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        )}
      </div>
    </motion.div>
  );
}


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
            <ExperienceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
