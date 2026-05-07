"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RequestExpensePage() {
  const router = useRouter();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    // TODO: wire up to Supabase
    router.push("/expenses");
  };

  return (
    <Layout>
      <div className="max-w-2xl flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button
            onClick={() => router.push("/expenses")}
            className="flex items-center gap-1.5 border rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
          >
            Back to Expenses
          </button>
        </div>

        <h1 className="text-2xl font-bold">Request Expense</h1>

        <Separator />

        {/* Expense Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">
            Expense Type <span className="text-red-500">*</span>
          </label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="max-w-lg">
              <SelectValue placeholder="Please select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="meals">Meals</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Please enter expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="max-w-lg"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">Description</label>
          <Textarea
            placeholder="Place enter expense description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="max-w-lg min-h-28 resize-none"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">
            Amount <span className="text-red-500">*</span>
          </label>
          <div className="relative max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              $
            </span>
            <Input
              placeholder="Place enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-7"
              type="number"
              min="0"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">
            Date <span className="text-red-500">*</span>
          </label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="max-w-xs"
          />
        </div>

        {/* Attachments */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">Attachments</label>
          <div className="max-w-lg border-2 border-dashed rounded-xl p-6 flex items-center gap-4 text-muted-foreground hover:bg-muted/30 transition-colors cursor-pointer">
            <Upload className="w-6 h-6 shrink-0" />
            <p className="text-sm">
              Browse or drag & drop any documents related to your expense
              request. Only pdf, jpg and png files are accepted, maximum file
              size per document is 2 Mb.
            </p>
          </div>
        </div>

        <Separator />

        {/* Actions */}
        <div className="flex items-center gap-3 pb-8">
          <Button variant="outline" onClick={() => router.push("/expenses")}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            <Send className="w-4 h-4 mr-2" />
            Send Request
          </Button>
        </div>
      </div>
    </Layout>
  );
}
