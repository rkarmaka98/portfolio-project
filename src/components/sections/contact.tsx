import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Send, Calendar } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/your-github",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/your-linkedin",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/your-twitter",
    icon: Twitter,
    label: "Twitter / X",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Let's Connect</CardTitle>
          <CardDescription>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:your-email@example.com">
                <Send className="mr-2 h-5 w-5" />
                Send an Email
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="https://calendly.com/your-calendly" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Meeting
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Button key={href} variant="ghost" size="icon" asChild>
                <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
