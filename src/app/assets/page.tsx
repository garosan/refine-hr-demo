"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Package, Plus, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Asset = {
  id: number;
  type: string;
  title: string;
  serial: string;
  dateLoaned: string;
  dateReturned: string | null;
};

const assets: Asset[] = [
  {
    id: 1,
    type: "Mobile Phone",
    title: "Google Pixel 6",
    serial: "GGL-62617715",
    dateLoaned: "18.06.2025",
    dateReturned: null,
  },
  {
    id: 2,
    type: "Laptop",
    title: "Acer Chromebook",
    serial: "ACR-44938418",
    dateLoaned: "25.09.2025",
    dateReturned: "30.11.2025",
  },
  {
    id: 3,
    type: "Mobile Phone",
    title: "Samsung Galaxy S24",
    serial: "SSG-99863517",
    dateLoaned: "06.06.2025",
    dateReturned: "09.06.2025",
  },
  {
    id: 4,
    type: "Mobile Phone",
    title: "Apple iPhone 15",
    serial: "APL-21785219",
    dateLoaned: "02.06.2025",
    dateReturned: "18.06.2025",
  },
  {
    id: 5,
    type: "Laptop",
    title: "MacBook Pro 14",
    serial: "APL-51696084",
    dateLoaned: "25.05.2025",
    dateReturned: "11.09.2025",
  },
  {
    id: 6,
    type: "Monitor",
    title: "Dell UltraSharp 27",
    serial: "DEL-33821045",
    dateLoaned: "10.01.2026",
    dateReturned: null,
  },
  {
    id: 7,
    type: "Keyboard",
    title: "Logitech MX Keys",
    serial: "LGT-77432198",
    dateLoaned: "10.01.2026",
    dateReturned: null,
  },
];

export default function AssetsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filtered = assets.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.type.toLowerCase().includes(search.toLowerCase()) ||
      a.serial.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout
      action={
        <Button onClick={() => router.push("/assets/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Add Asset
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Assets</h1>

        {/* Search */}
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by title, type or serial..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="rounded-xl border overflow-hidden">
          <div className="grid grid-cols-[1fr_2fr_1.5fr_1fr_1fr] px-4 py-3 bg-muted/40 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <span>Type</span>
            <span>Title</span>
            <span>Serial Number</span>
            <span>Date Loaned</span>
            <span>Date Returned</span>
          </div>
          <Separator />

          {filtered.map((asset, index) => (
            <div key={asset.id}>
              <div className="grid grid-cols-[1fr_2fr_1.5fr_1fr_1fr] px-4 py-4 items-center text-sm hover:bg-muted/30 transition-colors">
                <span className="text-muted-foreground">{asset.type}</span>
                <span className="font-medium">{asset.title}</span>
                <span className="text-muted-foreground font-mono text-xs">
                  {asset.serial}
                </span>
                <span>{asset.dateLoaned}</span>
                <span>
                  {asset.dateReturned ? (
                    asset.dateReturned
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-200">
                      In use
                    </span>
                  )}
                </span>
              </div>
              {index < filtered.length - 1 && <Separator />}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm text-muted-foreground">
              No assets found.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
