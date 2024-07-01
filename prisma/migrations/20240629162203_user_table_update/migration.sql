-- DropForeignKey
ALTER TABLE "user_table" DROP CONSTRAINT "user_table_ai_id_fkey";

-- AlterTable
ALTER TABLE "user_table" ALTER COLUMN "ai_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user_table" ADD CONSTRAINT "user_table_ai_id_fkey" FOREIGN KEY ("ai_id") REFERENCES "ai_table"("id") ON DELETE SET NULL ON UPDATE CASCADE;
