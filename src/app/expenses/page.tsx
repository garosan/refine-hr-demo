"use client";
import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Receipt } from "lucide-react";

export default function ExpensesPage() {
  return (
    <Layout
      action={
        <Button>
          <Receipt className="w-4 h-4 mr-2" />
          Request Expense
        </Button>
      }
    >
      <div className="p-4">Expenses</div>
    </Layout>
  );
}
