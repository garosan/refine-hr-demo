"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Palmtree,
  Stethoscope,
  Laptop,
  CalendarPlus,
  Receipt,
  UserPlus,
  FileText,
  Bell,
  CheckCircle2,
  MapPin,
  Home,
  Cake,
  PartyPopper,
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

function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      text: "Your PTO request for May 10-12 is approved",
      time: "2h ago",
    },
    {
      id: 2,
      text: "Your expense request for $150 on Apr 19 is approved",
      time: "1d ago",
    },
    {
      id: 3,
      text: "Your sick leave request for Apr 3 is approved",
      time: "3d ago",
    },
  ];

  return (
    <div className="flex-1 rounded-xl border p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Notifications</span>
        <Bell className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-3">
        {notifications.map((n) => (
          <div key={n.id} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm">{n.text}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickActionsPanel() {
  const actions = [
    { label: "Request Time Off", icon: <CalendarPlus className="w-4 h-4" /> },
    { label: "Log Expense", icon: <Receipt className="w-4 h-4" /> },
    { label: "Add Employee", icon: <UserPlus className="w-4 h-4" /> },
    { label: "View Reports", icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="flex-1 rounded-xl border p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Quick Actions</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function TeamTodayPanel() {
  const team = [
    { name: 'Salvador "Chava" Iglesias', status: "office", role: "Presidente" },
    { name: 'Diego "Potro" Romani', status: "remote", role: "Delantero" },
    { name: "María Luz Reynoso", status: "office", role: "Directora General" },
    { name: "Cuauhtémoc Iglesias", status: "off", role: "Vicepresidente" },
    { name: 'Hugo "Canicas" Sánchez', status: "remote", role: "Entrenador" },
  ];

  const statusConfig: Record<
    string,
    { label: string; icon: React.ReactNode; color: string }
  > = {
    office: {
      label: "In Office",
      icon: <MapPin className="w-3 h-3" />,
      color: "text-green-600 bg-green-50",
    },
    remote: {
      label: "Remote",
      icon: <Home className="w-3 h-3" />,
      color: "text-blue-600 bg-blue-50",
    },
    off: {
      label: "Time Off",
      icon: <Palmtree className="w-3 h-3" />,
      color: "text-orange-600 bg-orange-50",
    },
  };

  return (
    <div className="flex-1 rounded-xl border p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Team Today</span>
        <MapPin className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-3">
        {team.map((member) => {
          const config = statusConfig[member.status];
          return (
            <div
              key={member.name}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${config.color}`}
              >
                {config.icon}
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function UpcomingPanel() {
  const events = [
    {
      name: 'Diego "Potro" Romani',
      event: "Welcome onboard",
      date: "Today",
      type: "new",
    },
    {
      name: 'Salvador "Chava" Iglesias',
      event: "Work Anniversary",
      date: "May 10",
      type: "anniversary",
    },
    {
      name: "Aitor Karanka",
      event: "Work Anniversary",
      date: "May 11",
      type: "anniversary",
    },
    {
      name: "María Luz Reynoso",
      event: "Happy Birthday",
      date: "May 11",
      type: "birthday",
    },
    {
      name: "Cuauhtémoc Iglesias",
      event: "Happy Birthday",
      date: "May 15",
      type: "birthday",
    },
  ];

  const typeConfig: Record<string, { icon: React.ReactNode; color: string }> = {
    new: { icon: <PartyPopper className="w-4 h-4" />, color: "text-green-600" },
    anniversary: {
      icon: <CalendarPlus className="w-4 h-4" />,
      color: "text-blue-600",
    },
    birthday: { icon: <Cake className="w-4 h-4" />, color: "text-pink-600" },
  };

  return (
    <div className="flex-1 rounded-xl border p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Upcoming</span>
        <CalendarPlus className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => {
          const config = typeConfig[event.type];
          return (
            <div
              key={`${event.name}-${event.date}`}
              className="flex items-center gap-3 py-0.5"
            >
              <span className={config.color}>{config.icon}</span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className={`font-medium ${config.color}`}>
                    {event.event}
                  </span>{" "}
                  {event.name}!
                </p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">
                {event.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

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
        {/* Page title */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Overview</h1>
        </div>

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

        {/* Notifications + Quick Actions */}
        <div className="flex gap-4">
          <NotificationsPanel />
          <QuickActionsPanel />
        </div>

        {/* Team Today + Upcoming */}
        <div className="flex gap-4">
          <TeamTodayPanel />
          <UpcomingPanel />
        </div>
      </div>
    </Layout>
  );
}
