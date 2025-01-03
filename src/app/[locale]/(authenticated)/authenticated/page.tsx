'use client';

import { notFound } from 'next/navigation';
import { useSession } from 'next-auth/react';

import Navbar from '@/components/navbar/Navbar';

export default function Authenticated() {
  const { data: session } = useSession();

  if (!session?.user) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Welcome Section */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome back, {session.user.name}!
            </h1>
            <p className="mt-2 text-muted-foreground">
              This is your personalized dashboard. Start exploring!
            </p>
          </div>

          {/* Dashboard Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Add your dashboard cards/widgets here */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="font-semibold">Quick Actions</h2>
              {/* Add actions */}
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="font-semibold">Recent Activity</h2>
              {/* Add activity list */}
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="font-semibold">Statistics</h2>
              {/* Add stats */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
