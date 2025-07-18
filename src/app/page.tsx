// src/app/page.tsx
"use client";

import { useUser } from "@supabase/auth-helpers-react";
import PostBox from "@/components/post-box";
import Feed from "@/components/feed";

export default function HomePage() {
  const user = useUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Please login to see your feed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <PostBox />
      <Feed />
    </div>
  );
}
