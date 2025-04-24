"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    title: "Email Marketing Automation",
    description:
      "A web scraping tool that extracts email IDs from websites, creates Excel sheets and JSON files of scraped data, and sends customized emails using Nodemailer.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Web Scraping", "Puppeteer", "Nodemailer", "Node.js"],
    github: "https://github.com/mohib051/email_marketing_automation",
    demo: "#",
  },
  {
    title: "FOODY - Online Food Ordering App",
    description:
      "A full-stack food ordering application with secure authentication using JWT and bcrypt. Features include food item listing, cart management, checkout, Stripe payment integration, and admin dashboard.",
    image: "https://media-hosting.imagekit.io/5524bf3039b24b4f/foody%20application.jpg?Expires=1840110841&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Qtm50CxffcaD0OrfGf4XS~Zt4us1r-i22aqpUfzQXVlh7gGhQ0orRhLqumXoSzOcRj~zKIDR-Fn3X0MEnZWl~Hmt-7sWvL-zhCc8iK3it259Nrp2RMHpCfYKGXM3RO09QHopsWLlb4L2B805GtAK3TspbDDl92arwkm2b5xjMAHJfk0EmJeCrv16zVao7kKwf8l7lEaPF~eo1ZWe~A9thYsq~n3wEaPJcjlXYrNWCLmNKFPAucPBujRkzcyQCXV9RpEsggyXqxdTIJpW6Lw3Ro6pMq8s9PxVKefBMnUpaf5MGSeFi8Ds2f~cajOgFfuLPOPBhv60H1Ecn66gtYmsMg__",
    tags: ["MERN Stack", "JWT", "Stripe", "Admin Dashboard"],
    github: "https://github.com/mohib051/Foody_Application.git",
    demo: "https://foody-application-frontend.onrender.com",
  },
  {
    title: "SOCIALBUZZ - Social Media App",
    description:
      "A full-stack social media application with user authentication, CRUD functionalities for posts, and features like liking, commenting, and user interactions.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["MERN Stack", "Authentication", "Real-time Updates"],
    github: "https://github.com/mohib051/socialbuzz",
    demo: "#",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">My Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies I've
          mastered.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Button variant="outline" size="lg" asChild>
          <Link href="https://github.com/mohib051" target="_blank" rel="noopener noreferrer">
            View More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
