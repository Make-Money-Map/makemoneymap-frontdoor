import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MakeMoneyMap - Your Personal Finance Manager',
  description: 'Track expenses, set budgets, and take charge of your financial future with MakeMoneyMap.',
};

export default function RootLayout() {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
