"use client"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import React from "react"
import projects from "@/components/projects-data"

// Carousel component (reuse logic from main projects.tsx)
type ProjectImage = { url: string; type?: "android" | "default" }
function Carousel({ images }: { images: ProjectImage[] }) {
  const [current, setCurrent] = React.useState(0)
  if (!images || images.length === 0) return null
  const currentImage = images[current]
  return (
    <div className="relative w-full flex flex-col items-center mt-2 mb-4">
      {currentImage.type === "android" ? (
        <div className="mx-auto flex items-center justify-center mb-2" style={{ maxWidth: 240 }}>
          <div className="relative bg-black rounded-[2.5rem] shadow-lg border-4 border-gray-300 dark:border-zinc-700" style={{ width: 200, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-400 rounded-full opacity-60" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full opacity-40" />
            <img src={currentImage.url} alt={`Project image ${current + 1}`} className="rounded-[1.3rem] object-cover" style={{ width: 172, height: 344, background: '#222' }} />
          </div>
        </div>
      ) : (
        <div className="mx-auto flex items-center justify-center mb-2" style={{ maxWidth: 320 }}>
          <img src={currentImage.url} alt={`Project image ${current + 1}`} className="rounded-lg object-contain border border-gray-300 dark:border-zinc-700 shadow" style={{ maxWidth: 280, maxHeight: 220, background: '#fff' }} />
        </div>
      )}
      <div className="flex gap-2 justify-center mb-2">
        {images.map((_, idx) => (
          <button key={idx} className={`w-2 h-2 rounded-full ${current === idx ? "bg-primary" : "bg-gray-300"}`} onClick={() => setCurrent(idx)} aria-label={`Go to image ${idx + 1}`} />
        ))}
      </div>
      <div className="flex justify-between w-full absolute top-1/2 left-0 px-2">
        <button onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))} className="bg-white/70 rounded-full p-1" aria-label="Previous image">&#8592;</button>
        <button onClick={() => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))} className="bg-white/70 rounded-full p-1" aria-label="Next image">&#8594;</button>
      </div>
    </div>
  )
}

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const project = projects[parseInt(id)]
  if (!project) return notFound()
  return (
    <main className="min-h-screen py-8 px-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 gradient-text">{project.title}</h1>
      <p className="text-muted-foreground mb-2 text-lg">{project.description}</p>
      <Carousel images={project.images} />
      <p className="mb-4 text-base">{project.details}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, techIndex: number) => (
          <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>
        ))}
      </div>
      <div className="flex gap-2 mb-8">
        {project.github && (
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </Link>
        )}
        {project.live && (
          <Link href={project.live} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-1">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </Button>
          </Link>
        )}
      </div>
      <Link href="/" className="text-primary underline">← Back to Projects</Link>
    </main>
  )
}
