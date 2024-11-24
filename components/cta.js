'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-10 bg-primary">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Ready to Take Control of Your Finances?
          </motion.h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their financial lives with MakeMoneyMap.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors">
              Start Your Free Trial
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
