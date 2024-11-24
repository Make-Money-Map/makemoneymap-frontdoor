import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';
import { useRouter } from 'next/router';

export const metadata = {
  title: 'Login | MakeMoneyMap',
  description: 'Login to your MakeMoneyMap account',
};

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      {/* Hide logo for mobile screens */}
      <div className="hidden md:block">
        <Image
          src="/trans_logo.png?height=300&width=300"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/trans_logo.png?height=300&width=300"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>

      {/* Main layout for Login page */}
      <div className="container relative flex flex-col items-center justify-center py-8 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signup"
          className={cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8 z-10')}
        >
          Sign Up
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/* Logo will now be hidden on mobile */}
            <Image
              onClick={() => router.push('/')}
              src="/trans_logo.png?height=40&width=40"
              width={40}
              height={40}
              alt="MakeMoneyMap Logo"
              className="mr-2 cursor-pointer hidden md:block" // Hide on mobile (md and below)
            />
            MakeMoneyMap
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;MakeMoneyMap has revolutionized how I manage my finances. It's intuitive, powerful, and has saved
                me countless hours.&rdquo;
              </p>
              <footer className="text-sm">Sarah Johnson</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 px-6">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
              <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
