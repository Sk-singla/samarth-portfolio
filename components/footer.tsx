import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold gradient-text">
              Samarth Gupta
            </Link>
            <p className="text-muted-foreground mt-2">Software Development Engineer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://github.com/Sk-singla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/samarth-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:samarthgupta8002@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="tel:+917340790776"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Samarth Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
