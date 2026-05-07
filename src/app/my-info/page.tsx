"use client";
import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function MyInfoPage() {
  return (
    <Layout
      action={
        <Button>
          <Pencil className="w-4 h-4 mr-2" />
          Edit
        </Button>
      }
    >
      <div className="p-4">My Info</div>
    </Layout>
  );
}
