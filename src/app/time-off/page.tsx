"use client";
import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function TimeOffPage() {
  return (
    <Layout
      action={
        <Button>
          <Clock className="w-4 h-4 mr-2" />
          Request Time Off
        </Button>
      }
    >
      <div className="p-4">Time Off</div>
    </Layout>
  );
}
