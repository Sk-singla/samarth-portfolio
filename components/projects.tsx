"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import projects from "@/components/projects-data"

import React from "react"
import { useRouter } from "next/navigation"

export default function Projects() {
  const router = useRouter()
  const handleCardClick = (idx: number) => {
    if (projects[idx].images && projects[idx].images.length > 0) {
      router.push(`/projects/${idx}`)
    }
  }
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
                <Card
                  className={`h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow${project.images && project.images.length > 0 ? ' cursor-pointer hover:scale-105 transition-transform' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
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
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
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
        {/* Modal removed: details now shown on separate page */}
      </div>
    </section>
  )
}
