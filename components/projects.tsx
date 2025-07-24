"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    "title": "Wizournal",
    "description": "AI-Powered Daily Journaling App",
    "details": "Developed an innovative Android journaling application that transforms everyday thoughts into enchanting, AI-enhanced stories. Features include AI-driven content generation, dynamic thematic backgrounds, seamless voice-to-text input using Android's native speech recognition, and robust journal management with intuitive swipe-to-delete functionality. Built with Kotlin, Jetpack Compose for UI, Room for local data persistence, Koin for dependency injection, and Gemini API for core AI capabilities.",
    "image": "/projects/wizournal/cover.png?height=300&width=600",
    "technologies": ["Kotlin", "Jetpack Compose", "Room", "Koin", "Gemini API", "Android Speech Recognition"],
    "github": "https://github.com/Sk-singla/WizardJournal",
    "live": null
  },
  {
    title: "Meme's Magic",
    description: "Social Media Android App",
    details:
      "Developed a feature-rich social media platform for meme enthusiasts with real-time messaging using WebSockets and push notifications via Firebase Cloud Messaging. Built with Kotlin, Jetpack Compose for UI, Ktor for backend, and AWS S3 for media storage.",
    image: "/projects/memes_magic/cover.png?height=300&width=600",
    technologies: ["Kotlin", "Jetpack Compose", "Ktor", "WebSockets", "AWS S3", "Firebase"],
    github: "https://github.com/Sk-singla/MemesMagicApp",
    live: null,
  },
  {
    title: "Music Genre Classification",
    description: "Techniques Analysis",
    details:
      "Analyzed various machine learning algorithms to classify music genres based on audio features extracted using Python libraries. Compared multiple classification models including Random Forest, SVM, and Neural Networks with detailed result visualization.",
    image: "/projects/music_genre_classfication/cover.png?height=300&width=600",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Neural Networks", "SVM", "Random Forest"],
    github: "https://github.com/Sk-singla/Music-Genre-Classification-Techniques",
    live: null,
  },
  // {
  //   title: "Magic Quadrants Tool",
  //   description: "Data Visualization Project",
  //   details:
  //     "Developed as Optmyzr's first Labs project, this tool helps digital marketers visualize performance data in a quadrant format, similar to Gartner's Magic Quadrant. Earned 2nd runner-up in the company hackathon.",
  //   image: "/placeholder.svg?height=300&width=600",
  //   technologies: ["React.js", "TypeScript", "C#", ".NET", "Data Visualization"],
  //   github: null,
  //   live: null,
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Personal Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <p className="text-sm mb-4">{project.details}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-2">
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
