"use client";
import React, { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { SessionType } from "@/src/types";
let mockData: SessionType[] = [
  {
    id: "1",
    grade: "90",
    description: "Session 1",
    createdAt: "2021-09-10T10:00:00.000Z",
    updatedAt: "2021-09-10T10:00:00.000Z",
  },
  {
    id: "2",
    grade: "80",
    description: "Session 2",
    createdAt: "2021-09-10T10:00:00.000Z",
    updatedAt: "2021-09-10T10:00:00.000Z",
  },
  {
    id: "3",
    grade: "70",
    description: "Session 3",
    createdAt: "2021-09-10T10:00:00.000Z",
    updatedAt: "2021-09-10T10:00:00.000Z",
  },
];

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [activeSession, setActiveSession] = useState<SessionType[] | undefined>(
    []
  );
  const [activeSessionId, setActiveSessionId] = useState<string>("");

  const handleSetActiveSession = (id: string) => {
    const session = mockData.find(
      (session) => session.id === id
    ) as SessionType;
    setActiveSession([session]);
    setActiveSessionId(id);
    setActiveComponent("session");
  };
  return (
    <Dashboard data={mockData} handleActiveSession={handleSetActiveSession} />
  );
}
