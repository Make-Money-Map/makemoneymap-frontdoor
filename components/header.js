'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="py-4 px-6 md:px-10 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/trans_logo.png" alt="MakeMoneyMap Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">MakeMoneyMap</span>
        </Link>
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none space-y-4 md:space-y-0 md:space-x-6`}
        >
          <Link href="/" className="text-gray-600 hover:text-[#10B981] transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-[#10B981] transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-[#10B981] transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-[#10B981] transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-[#10B981] transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => router.push('/signup')}
            className="bg-[#10B981] hover:bg-[#0D9668] text-white transition-colors"
          >
            Sign Up
          </Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
