import React from "react";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardTable from "./DashboardTable";
import { SessionType } from "@/src/types";

interface DashboardProps {
  handleActiveSession: (id: string) => void;
  data: SessionType[];
}

export default function Dashboard({
  handleActiveSession,
  data,
}: DashboardProps) {
  return (
    <>
      <DashboardAnalytics />
      <DashboardTable data={data} handleActiveSession={handleActiveSession} />
    </>
  );
}
