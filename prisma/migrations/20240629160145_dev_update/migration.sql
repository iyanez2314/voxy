/*
  Warnings:

  - Added the required column `session_count` to the `user_table` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PRO', 'FREE');

-- AlterTable
ALTER TABLE "user_table" ADD COLUMN     "current_session" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "session_count" INTEGER NOT NULL,
ADD COLUMN     "sub_type" "Role" NOT NULL DEFAULT 'FREE';

-- CreateTable
CREATE TABLE "session_table" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "overall_score" DOUBLE PRECISION NOT NULL,
    "tone_score" DOUBLE PRECISION NOT NULL,
    "knowledge_score" DOUBLE PRECISION NOT NULL,
    "overall_desc" TEXT NOT NULL,
    "tone_desc" TEXT NOT NULL,
    "knowledge_desc" TEXT NOT NULL,
    "audio_transcript" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "session_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_table" (
    "id" TEXT NOT NULL,
    "ai_name" TEXT NOT NULL,
    "vapi_id" TEXT NOT NULL,

    CONSTRAINT "ai_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_prompt" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "prompt_desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_prompt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ai_table_vapi_id_key" ON "ai_table"("vapi_id");

-- AddForeignKey
ALTER TABLE "user_table" ADD CONSTRAINT "user_table_id_fkey" FOREIGN KEY ("id") REFERENCES "ai_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_table" ADD CONSTRAINT "session_table_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_prompt" ADD CONSTRAINT "ai_prompt_id_fkey" FOREIGN KEY ("id") REFERENCES "ai_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
