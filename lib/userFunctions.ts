import { ClerkUser } from "@/src/types/ClerkUser";
import { prisma } from "@/lib/prisma";

async function createUserInDB(user: ClerkUser) {
  const createdUser = await prisma.user_table.create({
    data: {
      ai_id: null,
      clerk_id: user.id,
      full_name: `${user.first_name} ${user.last_name}`,
      createdAt: new Date(),
      session_count: 0,
    },
  });

  if (!createdUser) {
    console.log("User not created", createdUser);

    return {
      message: "User not created",
      status: 400,
    };
  }

  return {
    message: "User created successfully",
    status: 201,
  };
}

async function getUserFromDB(clerk_id: string) {
  try {
    console.log("Getting user from DB:", clerk_id);
    const user = await prisma.user_table.findFirst({
      where: {
        clerk_id: clerk_id,
      },
    });

    console.log("User from DB in user functions:", user);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log("Error getting user from DB:", error);
    return null;
  }
}

export { createUserInDB, getUserFromDB };
