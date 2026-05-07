"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Receipt, Search, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useState } from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: "Travel" | "Meals" | "Training" | "Other";
  status: "approved" | "pending" | "rejected";
};

const expenses: Expense[] = [
  {
    id: 1,
    title: "Hotel Stay",
    amount: 600,
    date: "05.04.2026",
    type: "Travel",
    status: "approved",
  },
  {
    id: 2,
    title: "Client Dinner",
    amount: 100,
    date: "30.04.2026",
    type: "Meals",
    status: "approved",
  },
  {
    id: 3,
    title: "Team Coffee",
    amount: 20,
    date: "25.03.2026",
    type: "Meals",
    status: "pending",
  },
  {
    id: 4,
    title: "Parking",
    amount: 25,
    date: "06.03.2026",
    type: "Travel",
    status: "approved",
  },
  {
    id: 5,
    title: "Conference Registration",
    amount: 400,
    date: "23.06.2025",
    type: "Training",
    status: "rejected",
  },
  {
    id: 6,
    title: "Team Lunch",
    amount: 85,
    date: "10.02.2026",
    type: "Meals",
    status: "approved",
  },
  {
    id: 7,
    title: "Flight to Monterrey",
    amount: 320,
    date: "15.01.2026",
    type: "Travel",
    status: "pending",
  },
];

const statusConfig = {
  approved: {
    label: "Approved",
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    className: "text-green-600 bg-green-50 border-green-200",
  },
  pending: {
    label: "Pending",
    icon: <Clock className="w-3.5 h-3.5" />,
    className: "text-yellow-600 bg-yellow-50 border-yellow-200",
  },
  rejected: {
    label: "Rejected",
    icon: <XCircle className="w-3.5 h-3.5" />,
    className: "text-red-600 bg-red-50 border-red-200",
  },
};

export default function ExpensesPage() {
  const [search, setSearch] = useState("");

  const filtered = expenses.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout
      action={
        <Button>
          <Receipt className="w-4 h-4 mr-2" />
          Request Expense
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Expenses</h1>

        {/* Search */}
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="rounded-xl border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr_40px] px-4 py-3 bg-muted/40 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <span>Title</span>
            <span>Amount</span>
            <span>Date</span>
            <span>Type</span>
            <span>Status</span>
            <span />
          </div>
          <Separator />

          {filtered.map((expense, index) => {
            const status = statusConfig[expense.status];
            return (
              <div key={expense.id}>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr_40px] px-4 py-4 items-center text-sm hover:bg-muted/30 transition-colors">
                  <span className="font-medium">{expense.title}</span>
                  <span>${expense.amount.toFixed(2)}</span>
                  <span className="text-muted-foreground">{expense.date}</span>
                  <span>{expense.type}</span>
                  <span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.className}`}
                    >
                      {status.icon}
                      {status.label}
                    </span>
                  </span>
                  <span className="text-muted-foreground cursor-pointer hover:text-foreground">
                    <Receipt className="w-4 h-4" />
                  </span>
                </div>
                {index < filtered.length - 1 && <Separator />}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm text-muted-foreground">
              No expenses found.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
