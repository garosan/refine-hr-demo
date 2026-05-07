"use client";
import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AssetsPage() {
  return (
    <Layout
      action={
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Asset
        </Button>
      }
    >
      <div className="p-4">Assets</div>
    </Layout>
  );
}
