"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Palmtree,
  Stethoscope,
  Laptop,
  CalendarOff,
} from "lucide-react";

function LeaveCard({
  title,
  icon,
  daysUsed,
  daysAvailable,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  daysUsed: number;
  daysAvailable: number;
  accent?: string;
}) {
  return (
    <div
      className={`flex-1 rounded-xl border p-5 flex flex-col gap-3 ${accent}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {title}
        </span>
        <span className="text-muted-foreground">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold">{daysUsed}</p>
          <p className="text-xs text-muted-foreground mt-1">Days used</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">{daysAvailable}</p>
          <p className="text-xs text-muted-foreground mt-1">Days available</p>
        </div>
      </div>
    </div>
  );
}

const typeConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  pto: { color: "text-green-600", icon: <Palmtree className="w-4 h-4" /> },
  sick: { color: "text-orange-500", icon: <Stethoscope className="w-4 h-4" /> },
  remote: { color: "text-blue-600", icon: <Laptop className="w-4 h-4" /> },
};

const history = [
  {
    id: 1,
    from: "April 01",
    to: "April 03",
    days: 3,
    type: "sick",
    label: "Sick Leave",
  },
  {
    id: 2,
    from: "March 10",
    to: "March 14",
    days: 5,
    type: "pto",
    label: "PTO",
  },
  {
    id: 3,
    from: "February 20",
    to: "February 21",
    days: 2,
    type: "remote",
    label: "Remote Days",
  },
  {
    id: 4,
    from: "January 15",
    to: "January 16",
    days: 2,
    type: "sick",
    label: "Sick Leave",
  },
  {
    id: 5,
    from: "January 02",
    to: "January 03",
    days: 2,
    type: "pto",
    label: "PTO",
  },
];

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
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Time Off</h1>

        {/* Leave cards */}
        <div className="flex gap-4">
          <LeaveCard
            title="PTO"
            icon={<Palmtree className="w-5 h-5" />}
            daysUsed={5}
            daysAvailable={15}
            accent="bg-green-100 border-green-200"
          />
          <LeaveCard
            title="Sick Leave"
            icon={<Stethoscope className="w-5 h-5" />}
            daysUsed={1}
            daysAvailable={7}
            accent="bg-orange-100 border-orange-200"
          />
          <LeaveCard
            title="Remote Days"
            icon={<Laptop className="w-5 h-5" />}
            daysUsed={8}
            daysAvailable={12}
            accent="bg-blue-100 border-blue-200"
          />
        </div>

        {/* Bottom panels */}
        <div className="flex gap-4">
          {/* Upcoming Time Off */}
          <div className="flex-1 rounded-xl border p-5 flex flex-col gap-4">
            <span className="font-semibold">Upcoming Time Off</span>
            <div className="flex flex-col items-center justify-center flex-1 gap-3 py-12 text-muted-foreground">
              <CalendarOff className="w-12 h-12 opacity-20" />
              <p className="text-sm">No upcoming time offs scheduled.</p>
            </div>
          </div>

          {/* Time Off History */}
          <div className="flex-1 rounded-xl border p-5 flex flex-col gap-4">
            <span className="font-semibold">Time Off History</span>
            <div className="flex flex-col overflow-y-auto max-h-72">
              {history.map((item, index) => {
                const config = typeConfig[item.type];
                return (
                  <div key={item.id}>
                    <div className="flex items-center gap-3 py-3">
                      <span className={config.color}>{config.icon}</span>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.from} - {item.to}
                        </p>
                        <p className="text-sm font-medium">
                          {item.days} days of {item.label}
                        </p>
                      </div>
                    </div>
                    {index < history.length - 1 && <Separator />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
