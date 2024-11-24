'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content:
      "MakeMoneyMap has revolutionized how I manage my business finances. It's intuitive, powerful, and has saved me countless hours of bookkeeping.",
    avatar: '/trans_logo.png?height=100&width=100',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    content:
      'As a freelancer, keeping track of expenses was a nightmare. MakeMoneyMap made it simple and stress-free. I can focus on my work, knowing my finances are in order.',
    avatar: '/trans_trans_logo.png?height =100&width=100',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student',
    content:
      "MakeMoneyMap helped me budget my student loans and part-time job income. It's a game-changer for students trying to manage their finances!",
    avatar: '/trans_logo.png?height=100&width=100',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 bg-gradient-to-br from-primary/10 to-blue-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Don't just take our word for it. Here's what our users have to say about their experience with MakeMoneyMap.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center space-x-4 mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </motion.div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
