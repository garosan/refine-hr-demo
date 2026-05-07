"use client";

import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import React from "react";

import routerProvider from "@refinedev/nextjs-router";
import {
  Building2,
  Home,
  User,
  Clock,
  BookUser,
  Receipt,
  Package,
} from "lucide-react";
import { Toaster } from "@/components/refine-ui/notification/toaster";
import { useNotificationProvider } from "@/components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "@/components/refine-ui/theme/theme-provider";
import { dataProviderInstance } from "@providers/data-provider";
import "@/app/globals.css";

type RefineContextProps = {
  children: React.ReactNode;
};

export const RefineContext = ({ children }: RefineContextProps) => {
  const notificationProvider = useNotificationProvider();

  return (
    <RefineKbarProvider>
      <ThemeProvider>
        <Refine
          dataProvider={dataProviderInstance}
          notificationProvider={notificationProvider}
          routerProvider={routerProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            title: {
              text: "CuervosHR",
              icon: <Building2 />,
            },
          }}
          resources={[
            {
              name: "dashboard",
              list: "/dashboard",
              meta: {
                label: "Home",
                icon: <Home />,
              },
            },
            {
              name: "my-info",
              list: "/my-info",
              meta: {
                label: "My Info",
                icon: <User />,
              },
            },
            {
              name: "time-off",
              list: "/time-off",
              meta: {
                label: "Time Off",
                icon: <Clock />,
              },
            },
            {
              name: "employees",
              list: "/employees",
              show: "/employees/show/:id",
              meta: {
                label: "Directory",
                icon: <BookUser />,
              },
            },
            {
              name: "expenses",
              list: "/expenses",
              meta: {
                label: "Expenses",
                icon: <Receipt />,
              },
            },
            {
              name: "assets",
              list: "/assets",
              meta: {
                label: "Assets",
                icon: <Package />,
              },
            },
          ]}
        >
          {children}
          <Toaster />
          <RefineKbar />
        </Refine>
      </ThemeProvider>
    </RefineKbarProvider>
  );
};
