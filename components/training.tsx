"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Calendar, MapPin } from "lucide-react"

export default function Training() {
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
    hidden: { opacity: 0, y: 20 },
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
        <h2 className="text-3xl font-bold mb-2">Training</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I continuously invest in my professional development through specialized training programs.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">MERN Stack Development</h3>
                <p className="text-muted-foreground">Sheryians Coding School</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                November 2024 - May 2025
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Bhopal, M.P
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Description</h4>
              <p className="text-muted-foreground">
                Currently upskilling in MERN Stack Development from Sheryians Coding School, focusing on building
                full-stack applications with MongoDB, Express.js, React.js, and Node.js.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3">Skills Acquired</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "MongoDB",
                  "Express.js",
                  "React.js",
                  "Node.js",
                  "REST APIs",
                  "Authentication",
                  "State Management",
                  "Responsive Design",
                ].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
