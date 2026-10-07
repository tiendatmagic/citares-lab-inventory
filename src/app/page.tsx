import React from 'react';
import LeftHero from '@/components/LeftHero';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] min-h-screen w-full relative overflow-x-hidden">
      <LeftHero />
      <LoginForm />
    </main>
  );
}
