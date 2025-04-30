"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Server, Smartphone, Terminal, Workflow } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["C#", "JavaScript", "TypeScript", "PHP", "Kotlin"],
  },
  {
    title: "Frontend Technologies",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend Technologies",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", ".NET", "Ktor", "Express.js", "PHP"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["Android Development", "Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    title: "Databases & Storage",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "MongoDB", "Redis", "AWS S3"],
  },
  {
    title: "Tools & Workflows",
    icon: <Workflow className="h-6 w-6" />,
    skills: ["Git", "GitHub", "CI/CD", "Hugo SSG", "Firebase"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Skills & Technologies</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary">{category.icon}</div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
