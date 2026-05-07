"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </Layout>
  );
}
