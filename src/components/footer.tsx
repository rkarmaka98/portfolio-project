import Link from "next/link";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "./ui/button";

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

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Rajarshi Karmakar. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button key={href} variant="ghost" size="icon" asChild>
              <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
