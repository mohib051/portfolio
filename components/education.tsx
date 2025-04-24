"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Govt. College of Engg. and Textile Technology, Berhampore",
    duration: "2020 - 2024",
    location: "Berhampore, West Bengal",
    grade: "DGPA - 8.73",
  },
  {
    degree: "Class XII",
    institution: "Holy Child English Academy",
    duration: "2020",
    location: "Malda, West Bengal",
    grade: "66 percentage",
  },
  {
    degree: "Class X",
    institution: "Holy Child English Academy",
    duration: "2018",
    location: "Malda, West Bengal",
    grade: "78.66 percentage",
  },
]

export default function Education() {
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
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic journey has equipped me with a strong foundation in computer science and problem-solving skills.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-3xl mx-auto relative"
      >
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"}`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-0 ${
                index % 2 === 0 ? "md:-left-3 left-0" : "md:-right-3 left-0"
              } w-6 h-6 rounded-full bg-primary flex items-center justify-center`}
            >
              <GraduationCap className="h-3 w-3 text-white" />
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                {item.duration}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
              <p className="text-muted-foreground mb-4">{item.institution}</p>

              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                {item.location}
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {item.grade}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
