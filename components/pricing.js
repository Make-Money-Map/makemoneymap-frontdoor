'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '₹50',
    description: 'Perfect for individuals just starting their financial journey',
    features: ['Expense tracking', 'Basic budgeting', 'Monthly financial report', 'Bank account integration (up to 2)'],
  },
  {
    name: 'Pro',
    price: '₹100',
    description: 'Ideal for those who want to take their finances to the next level',
    features: [
      'All Basic features',
      'Advanced budgeting tools',
      'Custom categories',
      'Unlimited bank account integration',
      'Bill reminders',
      'Investment tracking',
    ],
  },
  {
    name: 'Family',
    price: '₹200',
    description: 'Best for households managing finances together',
    features: [
      'All Pro features',
      'Up to 5 user accounts',
      'Shared expenses tracking',
      'Family budget planning',
      'Goal setting and tracking',
      'Priority customer support',
    ],
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the plan that fits your needs. All plans come with a 30-day free trial.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="text-4xl font-bold text-primary mb-4"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </motion.p>
                  <ul className="text-left mb-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-colors">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
