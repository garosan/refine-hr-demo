"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div>
      <p>Dashboard</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
