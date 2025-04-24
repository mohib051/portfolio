"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Layout, Database, Server, Smartphone, Globe, Search, ShoppingCart } from "lucide-react"

// Demo services data
const servicesData = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies to provide a seamless user experience.",
    icon: <Globe className="h-10 w-10" />,
  },
  {
    title: "Frontend Development",
    description: "Responsive and interactive user interfaces using React.js and modern CSS frameworks.",
    icon: <Layout className="h-10 w-10" />,
  },
  {
    title: "Backend Development",
    description: "Robust server-side applications with Node.js, Express.js, and MongoDB.",
    icon: <Server className="h-10 w-10" />,
  },
  {
    title: "Database Design",
    description: "Efficient database schemas and queries for optimal data management.",
    icon: <Database className="h-10 w-10" />,
  },
  {
    title: "API Development",
    description: "RESTful API design and implementation for seamless integration between systems.",
    icon: <Code className="h-10 w-10" />,
  },
  {
    title: "E-commerce Solutions",
    description: "Custom online stores with secure payment gateways and inventory management.",
    icon: <ShoppingCart className="h-10 w-10" />,
  },
  {
    title: "Web Scraping",
    description: "Automated data extraction from websites for analysis and processing.",
    icon: <Search className="h-10 w-10" />,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first websites that look great on all devices and screen sizes.",
    icon: <Smartphone className="h-10 w-10" />,
  },
]

export default function Services() {
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
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Services</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I offer a range of services to help businesses and individuals build their online presence. Here are some of
          the services I provide.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-all duration-300 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
