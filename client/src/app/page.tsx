"use client";

import DashboardPage from "@/pages/dashboardPage";

export default function Home() {
  return (
    <DashboardPage>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl font-bold">Welcome to the Next.js Starter!</h1>
        <p className="text-lg mt-4">
          Get started by editing the pages/index.tsx file
        </p>
      </div>
    </DashboardPage>
  );
}
