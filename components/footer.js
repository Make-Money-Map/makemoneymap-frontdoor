import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">MakeMoneyMap</h3>
          <p className="text-sm text-gray-400">Empowering you to take control of your finances.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-sm text-gray-400 hover:text-[#10B981] transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-sm text-gray-400 hover:text-[#10B981] transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-sm text-gray-400 hover:text-[#10B981] transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-sm text-gray-400 hover:text-[#10B981] transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#10B981] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#10B981] transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; 2023 MakeMoneyMap. All rights reserved.</p>
      </div>
    </footer>
  );
}
