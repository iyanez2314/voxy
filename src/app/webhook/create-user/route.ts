import { NextResponse, NextRequest } from "next/server";
import { createUserInDB } from "@/lib/userFunctions";
import { ClerkEvent, ClerkUser } from "@/src/types/ClerkUser";
import { prisma } from "@/lib/prisma";

async function createUser(req: NextRequest, res: NextResponse) {
  // We want to check the request header to make sure it's a POST request
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  const requestBody: ClerkEvent = await req.json();
  const bearerTokenFromRequest = req.headers.get("Authorization");

  // We want to check the authorization header to make sure it's a valid token
  if (bearerTokenFromRequest !== "Bearer my-secret-token") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // In the body of the request we will have the users information and with that we will use some
  // db operations to create a new user

  const user: ClerkUser = requestBody.data;

  const createdUser = await createUserInDB(user);

  console.log(createdUser.status);

  if (createdUser.status !== 201) {
    return NextResponse.json({ message: "User not created" }, { status: 400 });
  }

  await prisma.$disconnect();

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}

export { createUser as POST };
