-- CreateTable
CREATE TABLE "user_table" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "clerk_id" TEXT NOT NULL,
    "ai_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_table_pkey" PRIMARY KEY ("id")
);
