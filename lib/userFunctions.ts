import { ClerkUser } from "@/src/types/ClerkUser";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createUserInDB(user: ClerkUser) {
  const createdUser = await prisma.user_table.create({
    data: {
      ai_id: user.id,
      clerk_id: user.id,
      full_name: `${user.first_name} ${user.last_name}`,
      createdAt: new Date(),
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

export { createUserInDB };
