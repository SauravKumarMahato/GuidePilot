"use client";

import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function InitialPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        GuidePilot
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-10">
        Your ultimate solution for student management
      </p>
      <Link href="/Home">
        <Button
          variant="gradient"
          className="text-lg px-6 py-3 rounded-md"
        >
          Let's Get Started
        </Button>
      </Link>
    </div>
  );
}
