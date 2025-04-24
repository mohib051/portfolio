"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
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
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl" />
            <div className="absolute inset-0 rounded-2xl border border-primary/10" />
            <Image
              src="https://media-hosting.imagekit.io/5fbdac79ac2b40c4/myimage.jpg?Expires=1840126402&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=guwRaWvIuyEf1fNpC1yVarJTeLNyt~d5TLfEwo8r6hEXfA65hLuR57Fis14PAKstKO24B~CflQM8S05dI8U3z4BTaeL6bppYsEbCX38yx5zwRPTU7ivmbS6~6vVGrzkEpVPN3YIcVSRkgA4ZoIdr10vat8RHez68a7D8Kqfs7Upz9ES3kKkCahzWC5qdn8jnwFI-18SXYAEoye2WlvjdFq3QvromxZUCuu~IN2gKMKGvTFuldWEH5~vsf1awYrHcVi84mbzmHwXnlfy8wE1G-O4Q2dntMW-Y8M1GL8dwPyVUjaUtQVCoGQE3D7qvEmw3VL8VfUM5gD4PIa-royx6QA__"
              alt="Kazi Mohibuzzaman"
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full h-full relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>

          <p className="text-muted-foreground mb-6">
          I am a passionate MERN Stack Developer with a strong foundation in Computer Science. I completed my B.Tech in Computer Science in 2024 from Govt. College of Engineering and Textile Technology, Berhampore with a DGPA of 8.73.
          </p>

          <p className="text-muted-foreground mb-6">
            I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. My
            experience includes developing responsive user interfaces, implementing secure authentication systems, and
            integrating payment gateways.
          </p>

          <p className="text-muted-foreground mb-6">
            I am currently upskilling my MERN Stack Development skills at Sheryians Coding School, focusing on building
            robust and scalable applications.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">Malda, West Bengal</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">kazimohib51@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-muted-foreground">9933958740</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Study</h3>
              <p className="text-muted-foreground">GCETTB, Berhampore</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
