"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science",
    period: "2019 - 2023",
    grade: "CGPA: 8.9",
  },
  {
    institution: "Govt. Sen. Sec. School, Muktsar",
    degree: "Class XII (PCM)",
    period: "2017 - 2019",
    grade: "Percentage: 97.1%",
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Education</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{edu.institution}</h3>
                          <div className="flex items-center text-muted-foreground mt-1 md:mt-0">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-lg">{edu.degree}</p>
                        <p className="text-muted-foreground mt-1">{edu.grade}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
