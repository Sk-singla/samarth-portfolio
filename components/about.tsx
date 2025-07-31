"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 text-lg">
                    I’m a full-stack developer passionate about crafting seamless web and Android apps, with a strong background in both frontend and backend development. I enjoy building AI-powered solutions and have led impactful projects at Optmyzr.
                  </p>
                  <p className="mb-4 text-lg">
                    My technical journey spans frontend and backend development, with a focus on creating intuitive user
                    experiences and robust architectures. I'm passionate about leveraging cutting-edge technologies to
                    solve complex problems.
                  </p>
                  {/* <p className="text-lg">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                    continuously expanding my knowledge in the ever-evolving tech landscape.
                  </p> */}

                  {/* <div className="mt-6">
                    <Button className="flex items-center gap-2">
                      <Download size={16} />
                      Download Resume
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/sam_photo.jpg?height=320&width=320"
                  alt="Samarth Gupta"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
