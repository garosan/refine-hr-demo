"use client";

import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Layout } from "@/components/refine-ui/layout/layout";
import {
  ListView,
  ListViewHeader,
} from "@/components/refine-ui/views/list-view";
import { useTable } from "@refinedev/react-table";
import { createColumnHelper } from "@tanstack/react-table";

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  role: string;
};

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor("id", { header: "ID", size: 60 }),
  columnHelper.accessor("first_name", { header: "First Name", size: 150 }),
  columnHelper.accessor("last_name", { header: "Last Name", size: 150 }),
  columnHelper.accessor("email", { header: "Email", size: 250 }),
  columnHelper.accessor("job_title", { header: "Job Title", size: 200 }),
  columnHelper.accessor("role", { header: "Role", size: 100 }),
];

export default function EmployeeList() {
  const table = useTable({
    columns,
    refineCoreProps: {
      resource: "employees",
    },
  });

  return (
    <Layout>
      <ListView>
        <ListViewHeader canCreate={false} />
        <DataTable table={table} />
      </ListView>
    </Layout>
  );
}
