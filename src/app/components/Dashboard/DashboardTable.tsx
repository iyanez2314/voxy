import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SessionType } from "@/src/types";
import Link from "next/link";

interface DashboardTableProps {
  data: SessionType[];
  handleActiveSession: (id: string) => void;
}

export default function DashboardTable({
  data,
  handleActiveSession,
}: DashboardTableProps) {
  return (
    <>
      <Tabs defaultValue="week">
        <div className="flex items-center">
          <TabsList className="bg-transparent text-white">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Oldest
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Newest</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <TabsContent value="week">
          <Card className="p-3" x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <CardTitle>Sessions</CardTitle>
              <CardDescription>Your most recent sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="p-3">
                    <TableHead>Date</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Grade
                    </TableHead>
                    <TableHead className=" sm:table-cell">View</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="p-3">
                  {data.map((session) => (
                    <TableRow
                      key={session.id}
                      onClick={() => handleActiveSession(session.id)}
                      className="bg-accent hover:bg-accent-hover cursor-pointer"
                    >
                      <TableCell className="p-2">
                        <div className="font-medium">
                          {new Date(session.createdAt).toLocaleDateString()}
                        </div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {new Date(session.createdAt).toLocaleTimeString()}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          className={`text-xs ${
                            parseInt(session.grade) >= 80
                              ? "text-[#51ba69]"
                              : "bg-red-500}`} "
                          }`}
                          variant="outline"
                        >
                          {session.grade}
                        </Badge>
                      </TableCell>
                      <TableCell className=" sm:table-cell">
                        <Link
                          href={`/dashboard/session/${session.id}`}
                          className="text-md hover:cursor-pointer gap-2"
                        >
                          View
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
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
