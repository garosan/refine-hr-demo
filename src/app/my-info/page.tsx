"use client";

import { Layout } from "@/components/refine-ui/layout/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import {
  Mail,
  MapPin,
  Smartphone,
  Cake,
  CalendarDays,
  Pencil,
  Phone,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";

function InfoField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 py-4">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        {icon}
        <span>{label}</span>
      </div>
      <p className="text-sm pl-6">{value}</p>
    </div>
  );
}

export default function MyInfoPage() {
  const router = useRouter();

  return (
    <Layout
      action={
        <Button onClick={() => router.push("/my-info/edit")}>
          <Pencil className="w-4 h-4 mr-2" />
          Edit
        </Button>
      }
    >
      <div className="max-w-3xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-6 py-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-border shrink-0 bg-muted flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground">SI</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Salvador Iglesias</h2>
            <p className="text-muted-foreground text-sm mt-1">
              HR / Club President
            </p>
          </div>
        </div>

        <Separator />

        {/* Contact Info */}
        <div>
          <InfoField
            icon={<Mail className="w-4 h-4" />}
            label="Email"
            value="chava.iglesias@clubdecuervos.mx"
          />
          <Separator />
          <InfoField
            icon={<MapPin className="w-4 h-4" />}
            label="Address"
            value="Av. Insurgentes Sur 1234, Ciudad de México, CDMX"
          />
          <Separator />
          <InfoField
            icon={<Smartphone className="w-4 h-4" />}
            label="Mobile number"
            value="55-1234-5678"
          />
        </div>

        <Separator />

        {/* Personal Info */}
        <div>
          <InfoField
            icon={<Cake className="w-4 h-4" />}
            label="Birthday"
            value="March 15"
          />
          <Separator />
          <InfoField
            icon={<CalendarDays className="w-4 h-4" />}
            label="Start date"
            value="January 10 2020 - 5 years 3 months"
          />
        </div>

        <Separator />

        {/* Custom Fields */}
        <div>
          <h3 className="text-base font-semibold mb-2">Custom Fields</h3>
          <InfoField
            icon={<Phone className="w-4 h-4" />}
            label="Emergency contact"
            value="55-9876-5432"
          />
        </div>

        <Separator />

        {/* Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">Links</h3>
          <InfoField
            icon={<Twitter className="w-4 h-4" />}
            label="Twitter"
            value="https://twitter.com/chavaiglesias"
          />
          <Separator />
          <InfoField
            icon={<Facebook className="w-4 h-4" />}
            label="Facebook"
            value="https://facebook.com/chava.iglesias"
          />
        </div>
      </div>
    </Layout>
  );
}
