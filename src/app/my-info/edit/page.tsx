"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Smartphone,
  Cake,
  CalendarDays,
  Phone,
  Plus,
  Trash2,
  Save,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function FormField({
  icon,
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </span>
      </div>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="max-w-lg"
      />
    </div>
  );
}

export default function MyInfoEditPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("Chava");
  const [lastName, setLastName] = useState("Iglesias");
  const [email, setEmail] = useState("chava.iglesias@clubdecuervos.mx");
  const [address, setAddress] = useState(
    "Av. Insurgentes Sur 1234, Ciudad de México, CDMX",
  );
  const [phone, setPhone] = useState("55-1234-5678");
  const [birthday, setBirthday] = useState("1985-03-15");
  const [startDate, setStartDate] = useState("2020-01-10");
  const [emergencyContact, setEmergencyContact] = useState("55-9876-5432");
  const [links, setLinks] = useState([
    "https://twitter.com/chavaiglesias",
    "https://facebook.com/chava.iglesias",
  ]);

  const addLink = () => setLinks([...links, ""]);
  const removeLink = (index: number) =>
    setLinks(links.filter((_, i) => i !== index));
  const updateLink = (index: number, value: string) =>
    setLinks(links.map((l, i) => (i === index ? value : l)));

  const handleSave = () => {
    // TODO: wire up to Supabase
    router.push("/my-info");
  };

  return (
    <Layout>
      <div className="max-w-2xl flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Edit My Info</h1>

        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold shrink-0">
            CI
          </div>
          <Button variant="outline" size="sm">
            Change Photo
          </Button>
        </div>

        <Separator />

        {/* Name */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <label className="text-sm text-muted-foreground">
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <label className="text-sm text-muted-foreground">
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <Separator />

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <FormField
            icon={<Mail className="w-4 h-4" />}
            label="Email"
            required
            value={email}
            onChange={setEmail}
            type="email"
          />
          <FormField
            icon={<MapPin className="w-4 h-4" />}
            label="Address"
            value={address}
            onChange={setAddress}
          />
          <FormField
            icon={<Smartphone className="w-4 h-4" />}
            label="Mobile number"
            value={phone}
            onChange={setPhone}
          />
        </div>

        <Separator />

        {/* Personal */}
        <div className="flex flex-col gap-4">
          <FormField
            icon={<Cake className="w-4 h-4" />}
            label="Birthday"
            value={birthday}
            onChange={setBirthday}
            type="date"
          />
          <FormField
            icon={<CalendarDays className="w-4 h-4" />}
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
            type="date"
          />
        </div>

        <Separator />

        {/* Custom Fields */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Custom Fields</h3>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Phone number for emergency contact</span>
            </div>
            <Input
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className="max-w-lg"
            />
          </div>
        </div>

        <Separator />

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Links</h3>
          {links.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={link}
                onChange={(e) => updateLink(index, e.target.value)}
                className="max-w-lg"
                placeholder="https://"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeLink(index)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="self-start"
            onClick={addLink}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>

        <Separator />

        {/* Actions */}
        <div className="flex items-center gap-3 pb-8">
          <Button variant="outline" onClick={() => router.push("/my-info")}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </Layout>
  );
}
