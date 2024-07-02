import { NextResponse, NextRequest } from "next/server";
import { DbUser } from "@/src/types";
import { getUserFromDB } from "@/lib/userFunctions";

async function getUser(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  try {
    const user_id = searchParams.get("user_id");

    console.log("User ID using to fetch:", user_id);

    if (!user_id) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const userInDb = await getUserFromDB(user_id);

    console.log("User from DB function in route:", userInDb);

    if (!userInDb) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User found", status: 200 });
  } catch (error) {
    console.log("Error getting user from DB:", error);
    return NextResponse.json(
      { message: "Error getting user from DB" },
      { status: 500 }
    );
  }
}

export { getUser as GET };
