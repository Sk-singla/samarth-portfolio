
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Substack from "@/components/substack"

export const metadata = {
  title: "Samarth Gupta | Software Development Engineer",
  description:
    "Portfolio of Samarth Gupta, a Software Development Engineer with expertise in React.js, .NET, TypeScript, and more.",
  keywords: ["Samarth Gupta", "Software Engineer", "React.js", ".NET", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Samarth Gupta | Software Development Engineer",
    description:
      "Portfolio of Samarth Gupta, a Software Development Engineer with expertise in React.js, .NET, TypeScript, and more.",
    url: "https://samarth-gupta.vercel.app",
    siteName: "Samarth Gupta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samarth Gupta Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
    icons: [
      {
        url: "/og-image.png",
        type: "image/png",
        sizes: "any",
      },
    ]
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <link rel="icon" href="/og-image.png" sizes="any" />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Substack />
      <Education />
      <Contact />
    </main>
  )
}
