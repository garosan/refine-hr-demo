"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, MapPin, Home, Palmtree } from "lucide-react";
import { useState } from "react";

type Employee = {
  id: number;
  name: string;
  jobTitle: string;
  department: string;
  email: string;
  phone: string;
  status: "office" | "remote" | "off";
  initials: string;
  color: string;
};

const employees: Employee[] = [
  {
    id: 1,
    name: 'Salvador "Chava" Iglesias',
    jobTitle: "President",
    department: "Executive",
    email: "chava@clubdecuervos.mx",
    phone: "55-1234-5678",
    status: "office",
    initials: "CI",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    name: 'Diego "Potro" Romani',
    jobTitle: "Forward",
    department: "Team Squad",
    email: "potro@clubdecuervos.mx",
    phone: "55-2345-6789",
    status: "remote",
    initials: "DR",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Moisés Suarez",
    jobTitle: "Midfielder",
    department: "Team Squad",
    email: "moises@clubdecuervos.mx",
    phone: "55-3456-7890",
    status: "off",
    initials: "MS",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    name: "Aitor Cardoné",
    jobTitle: "Goalkeeper",
    department: "Team Squad",
    email: "aitor@clubdecuervos.mx",
    phone: "55-4567-8901",
    status: "office",
    initials: "AC",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 5,
    name: "María Luz Reynoso",
    jobTitle: "General Director",
    department: "Executive",
    email: "marialuz@clubdecuervos.mx",
    phone: "55-5678-9012",
    status: "remote",
    initials: "ML",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 6,
    name: "Cuauhtémoc Iglesias",
    jobTitle: "VP",
    department: "Executive",
    email: "cuauhtemoc@clubdecuervos.mx",
    phone: "55-6789-0123",
    status: "off",
    initials: "CI",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 7,
    name: "Hugo Sánchez",
    jobTitle: "Assistant",
    department: "Coaching Staff",
    email: "hugo@clubdecuervos.mx",
    phone: "55-7890-1234",
    status: "office",
    initials: "HS",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: 8,
    name: "Rafael Reina",
    jobTitle: "Defender",
    department: "Team Squad",
    email: "rafael@clubdecuervos.mx",
    phone: "55-8901-2345",
    status: "remote",
    initials: "RR",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 9,
    name: "Félix Domingo",
    jobTitle: "Head Coach",
    department: "Coaching Staff",
    email: "felix@clubdecuervos.mx",
    phone: "55-9012-3456",
    status: "office",
    initials: "FD",
    color: "bg-red-100 text-red-700",
  },
];

const statusConfig = {
  office: {
    label: "In Office",
    icon: <MapPin className="w-3 h-3" />,
    className: "text-green-600 bg-green-50 border-green-200",
  },
  remote: {
    label: "Remote",
    icon: <Home className="w-3 h-3" />,
    className: "text-blue-600 bg-blue-50 border-blue-200",
  },
  off: {
    label: "Time Off",
    icon: <Palmtree className="w-3 h-3" />,
    className: "text-orange-600 bg-orange-50 border-orange-200",
  },
};

const departmentColors: Record<string, string> = {
  Executive: "bg-purple-50 text-purple-700 border-purple-200",
  "Team Squad": "bg-green-50 text-green-700 border-green-200",
  "Coaching Staff": "bg-blue-50 text-blue-700 border-blue-200",
};

function EmployeeCard({ employee }: { employee: Employee }) {
  const status = statusConfig[employee.status];
  const deptColor =
    departmentColors[employee.department] ??
    "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <div className="rounded-xl border p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${employee.color}`}
          >
            {employee.initials}
          </div>
          <div>
            <p className="font-semibold text-sm">{employee.name}</p>
            <p className="text-xs text-muted-foreground">{employee.jobTitle}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${status.className}`}
        >
          {status.icon}
          {status.label}
        </span>
      </div>

      {/* Department */}
      <span
        className={`self-start inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${deptColor}`}
      >
        {employee.department}
      </span>

      {/* Contact */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{employee.email}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>{employee.phone}</span>
        </div>
      </div>
    </div>
  );
}

export default function DirectoryPage() {
  const [search, setSearch] = useState("");

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Directory</h1>

        {/* Search */}
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, title or department..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No employees found.
          </div>
        )}
      </div>
    </Layout>
  );
}
