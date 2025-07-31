"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Optmyzr",
    period: "Jun 2023 - July 2025",
    responsibilities: [
      "Led implementation of Generative AI initiatives with <a href='https://help.optmyzr.com/en/articles/5904076-account-dashboard-user-guide#h_88a68ae52e' target='_blank' class='underline'>Sidekick chatbot</a>, enabling users to query account data and providing AI-powered ad text suggestions.",
      "Enhanced Budget Trackers with comprehensive logging and redesigned UI/UX to consolidate multi-account management into a single intuitive interface.",
      "Developed <a href='https://help.optmyzr.com/en/articles/10345381-magic-quadrants-insight-tool-user-guide' target='_blank' class='underline'>Magic Quadrants</a> tool as the company's first Labs project, receiving high user appreciation and earning 2nd runner-up in the company hackathon.",
      "Mentored junior developers and interns while contributing to core platform features and strategic initiatives.",
    ],
    technologies: ["C#", ".NET", "React.js", "TypeScript", "PHP", "MongoDB", "MySQL", "AWS S3", "Redis"],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Optmyzr",
    period: "Apr 2022 - Jun 2023",
    responsibilities: [
      "Contributed to <a href='https://help.optmyzr.com/en/articles/6402785-smart-exclusions-for-apps-and-display' target='_blank' class='underline'>Smart Exclusions automation tool</a>, enabling automated exclusion of underperforming placements from advertising accounts.",
      "Implemented spell check functionality in the <a href='https://help.optmyzr.com/en/articles/6311280-ad-text-optimization-rsa-user-guide' target='_blank' class='underline'>Ad Text Optimization RSA tool</a>, significantly improving user experience.",
      "Redesigned the <a href='https://www.hatquest.com' target='_blank' class='underline'>Hatquest</a> webapp and marketing site, enhancing user experience through improved navigation and visual consistency.",
    ],
    technologies: ["React.js", "TypeScript", "C#", ".NET", "PHP", "MySQL", "Redis", "Hugo"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 list-disc pl-5">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} dangerouslySetInnerHTML={{ __html: resp }} />
                      ))}
                    </ul>

                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
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
