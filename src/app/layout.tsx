import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Rajarshi Karmakar - AI Software Engineer & Researcher",
  description: "Rajarshi Karmakar's personal portfolio. An AI Software Engineer & Researcher building intelligent systems that scale.",
  openGraph: {
    title: "Rajarshi Karmakar - AI Software Engineer & Researcher",
    description: "Personal portfolio showcasing AI projects, skills, and experience.",
    url: 'https://your-domain.com', // To be replaced with actual domain
    siteName: "Rajarshi's Digital Vista",
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with a real preview image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajarshi Karmakar",
    // Replace with your actual domain
    "url": "https://your-domain.com",
    "sameAs": [
      // Replace with your actual social links
      "https://github.com/your-github",
      "https://linkedin.com/in/your-linkedin",
      "https://twitter.com/your-twitter"
    ],
    "jobTitle": "AI Software Engineer & Researcher",
    // Replace with a real profile image
    "image": "https://placehold.co/512x512.png" 
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        
        {/* Add your analytics script here. Example for Plausible */}
        {/* <script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script> */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={cn("font-body antialiased", process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
