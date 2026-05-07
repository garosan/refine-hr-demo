"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddAssetPage() {
  const router = useRouter();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleAssign = () => {
    // TODO: wire up to Supabase
    router.push("/assets");
  };

  return (
    <Layout>
      <div className="max-w-2xl flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button
            onClick={() => router.push("/assets")}
            className="flex items-center gap-1.5 border rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
          >
            Assets
          </button>
        </div>

        <h1 className="text-2xl font-bold">Add Asset</h1>

        <Separator />

        {/* Asset Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">
            Asset Type <span className="text-red-500">*</span>
          </label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="max-w-xs">
              <SelectValue placeholder="Please select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="mobile">Mobile Phone</SelectItem>
              <SelectItem value="monitor">Monitor</SelectItem>
              <SelectItem value="keyboard">Keyboard</SelectItem>
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
            placeholder="Please enter asset title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="max-w-lg"
          />
        </div>

        {/* ID Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-muted-foreground">
            ID Number <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Please enter asset ID"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="max-w-lg"
          />
        </div>

        <Separator />

        {/* Actions */}
        <div className="flex items-center gap-3 pb-8">
          <Button variant="outline" onClick={() => router.push("/assets")}>
            Cancel
          </Button>
          <Button onClick={handleAssign}>
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Assign
          </Button>
        </div>
      </div>
    </Layout>
  );
}
