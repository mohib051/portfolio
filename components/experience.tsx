"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar } from "lucide-react"

// const experienceData = [
//   // {
//   //   title: "Finance General Secretary",
//   //   company: "GCETTB Students' Association",
//   //   duration: "2022 - 2023",
//   //   description: "Led, managed, and dealt with all financial matters of GCETTB Students' Association.",
//   // },
//   // {
//   //   title: "Accountant",
//   //   company: "GCETTB Student's Hostel",
//   //   duration: "May 2022 - March 2023",
//   //   description: "Managed all mess bill records of all hostel boarders of GCETTB Students' Hostel.",
//   // },
//   // {
//   //   title: "Organizing Member",
//   //   company: "GCETTB Saraswati Puja Committee",
//   //   duration: "2023",
//   //   description:
//   //     "Served as an organizing member for GCETTB Saraswati Puja 2023, one of the biggest events of GCETTB and the largest Saraswati Puja in Berhampore Town.",
//   // },
// ]

export default function Experience() {
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
        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
        Over the last year, I have focused on mastering the MERN stack by creating personal projects that simulate real-world use cases. My experience includes building responsive user interfaces, implementing server-side logic, and managing NoSQL databases.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-3xl mx-auto"
      >
        {/* {experienceData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-border"
          >
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center -translate-x-1/2">
              <Briefcase className="h-3 w-3 text-white" />
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  <Calendar className="h-3 w-3 mr-1" /> {item.duration}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{item.company}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))} */}
      </motion.div>
    </div>
  )
}
