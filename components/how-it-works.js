'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your free account in minutes and connect your bank accounts securely.',
    icon: '📝',
  },
  {
    title: 'Track Expenses',
    description: 'Your transactions are automatically categorized and organized for easy tracking.',
    icon: '📊',
  },
  {
    title: 'Set Budgets',
    description: 'Create custom budgets for different categories and set financial goals.',
    icon: '🎯',
  },
  {
    title: 'Get Insights',
    description: 'Receive personalized insights and recommendations to improve your finances.',
    icon: '💡',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get started with MakeMoneyMap in four simple steps and take control of your finances today.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
              <motion.div
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
