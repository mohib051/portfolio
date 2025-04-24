"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Layout, Terminal, Cpu } from "lucide-react"

const skills = [
  {
    category: "Front-End Development",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Back-End Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "MongoDB"],
    color: "from-green-500 to-emerald-400",
  },
  {
    category: "Programming",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "Data Structures", "Algorithms", "OOP"],
    color: "from-purple-500 to-violet-400",
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "SQL Basics"],
    color: "from-orange-500 to-amber-400",
  },
  {
    category: "Developer Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["VS Code", "Git", "GitHub", "Postman"],
    color: "from-red-500 to-pink-400",
  },
  {
    category: "Other Skills",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Web Scraping", "API Integration", "Responsive Design"],
    color: "from-primary to-purple-400",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I have experience with a variety of technologies and tools in web development. Here are some of the key skills
          I've developed throughout my journey.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-lg inline-block mb-4`}>{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.skills.map((item, idx) => (
                <li key={idx} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="p-6 bg-card rounded-xl border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
          <p className="text-muted-foreground mb-4">
            I'm constantly improving my skills and learning new technologies. Currently focusing on:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Advanced React Patterns", "Next.js", "TypeScript", "Redux", "GraphQL"].map((item, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
