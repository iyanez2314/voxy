import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function DashboardAnalytics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="sm:col-span-2 p-3" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>New Session Avaliable</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            In this session, we will be working on closing the deal with your
            clients.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className=" bg-transparent hover:bg-transparent gap-2 flex items-center text-[#12b981]">
            Start
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                />
              </svg>
            </span>
          </Button>
        </CardFooter>
      </Card>
      <Card className="p-3" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>This Weeks Progress</CardDescription>
          <CardTitle className="text-4xl">95%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground flex text-[#12b981]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 18V8.8l-3.6 3.6L6 11l6-6l6 6l-1.4 1.4L13 8.8V18z"
              />
            </svg>
            25% from last week
          </div>
        </CardContent>
      </Card>
      <Card className="p-3" x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>This Month's Progress</CardDescription>
          <CardTitle className="text-4xl">85%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground flex text-[#12b981]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 18V8.8l-3.6 3.6L6 11l6-6l6 6l-1.4 1.4L13 8.8V18z"
              />
            </svg>
            10% from last month
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
