"use client"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Kazi.dev
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate MERN Stack Developer focused on creating interactive and responsive web applications. Let's
              work together to bring your ideas to life.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/mohib051" target="_blank" rel="noopener noreferrer">
                <span className="bg-background p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Github className="h-5 w-5" />
                </span>
              </Link>
              <Link href="https://www.linkedin.com/in/kazi-mohibuzzaman-7830481b6/" target="_blank" rel="noopener noreferrer">
                <span className="bg-background p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </span>
              </Link>
              <Link href="https://x.com/K_Mohib51" target="_blank" rel="noopener noreferrer">
                <span className="bg-background p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </span>
              </Link>
              <Link href="mailto:kazimohib51@gmail.com">
                <span className="bg-background p-2 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">kazimohib51@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Twitter className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground"> <a href="https://x.com/K_Mohib51">X.com</a> </span>
              </li>
              <li className="flex items-start">
                <Github className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">  <a href="https://github.com/mohib051">github</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-muted-foreground">© {currentYear} Kazi Mohibuzzaman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
