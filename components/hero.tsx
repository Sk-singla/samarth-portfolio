"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-20">

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Samarth Gupta</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-medium text-muted-foreground">Software Engineer</h2>
          <p className="text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">
            I build robust web and mobile apps, blending frontend, backend, and AI to turn ideas into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="#contact">
              <Button size="lg" className="rounded-full">
                Get in Touch
              </Button>
            </Link>
            {/* <Link href="#projects">
              <Button size="lg" variant="outline" className="rounded-full">
                View My Work
              </Button>
            </Link> */}
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://linkedin.com/in/samarth-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:samarthgupta8002@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </Link>
            <Link
              href="tel:+917340790776"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </Link>
            <Link
              href="https://github.com/Sk-singla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}
