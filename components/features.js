'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, PiggyBank, LineChart, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Smart Expense Tracking',
    description: 'Automatically categorize and track your expenses with our AI-powered system.',
    icon: BarChart3,
  },
  {
    title: 'Intelligent Budgeting',
    description: 'Create and manage budgets that adapt to your spending habits and financial goals.',
    icon: PiggyBank,
  },
  {
    title: 'Personalized Insights',
    description: 'Receive tailored financial advice and insights based on your unique spending patterns.',
    icon: LineChart,
  },
  {
    title: 'Real-time Alerts',
    description: 'Get instant notifications for unusual spending, bill reminders, and budget updates.',
    icon: Zap,
  },
  {
    title: 'Bank-level Security',
    description: 'Rest easy knowing your financial data is protected with state-of-the-art encryption.',
    icon: Shield,
  },
  {
    title: 'Collaborative Finance',
    description: 'Share accounts and manage household finances together with family or partners.',
    icon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how MakeMoneyMap can revolutionize your financial management with these game-changing features.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
