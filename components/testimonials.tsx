// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import Image from "next/image"
// import { Quote } from "lucide-react"

// // Demo testimonials data
// const testimonialsData = [
//   {
//     name: "Rahul Sharma",
//     position: "Senior Developer at TechCorp",
//     image: "/placeholder.svg?height=100&width=100",
//     testimonial:
//       "Kazi is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality code is impressive. It was a pleasure working with him on our project.",
//   },
//   {
//     name: "Priya Patel",
//     position: "Project Manager at WebSolutions",
//     image: "/placeholder.svg?height=100&width=100",
//     testimonial:
//       "Working with Kazi was a great experience. He is not only technically skilled but also communicates effectively and meets deadlines consistently. I highly recommend him for any web development project.",
//   },
//   {
//     name: "Amit Kumar",
//     position: "CTO at StartupX",
//     image: "/placeholder.svg?height=100&width=100",
//     testimonial:
//       "Kazi's expertise in MERN stack development helped us launch our product ahead of schedule. His attention to detail and commitment to quality made a significant difference to our project.",
//   },
// ]

// export default function Testimonials() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   }

//   return (
//     <div className="container mx-auto px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
//         <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//         <p className="text-muted-foreground max-w-2xl mx-auto">Here's what people have to say about working with me.</p>
//       </motion.div>

//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {testimonialsData.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
//           >
//             <div className="mb-6 text-primary">
//               <Quote className="h-8 w-8 opacity-50" />
//             </div>

//             <p className="text-muted-foreground mb-6 flex-grow italic">"{testimonial.testimonial}"</p>

//             <div className="flex items-center">
//               <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                 <Image
//                   src={testimonial.image || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <h4 className="font-semibold">{testimonial.name}</h4>
//                 <p className="text-sm text-muted-foreground">{testimonial.position}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }
