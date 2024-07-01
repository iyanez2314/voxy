-- DropForeignKey
ALTER TABLE "user_table" DROP CONSTRAINT "user_table_id_fkey";

-- AddForeignKey
ALTER TABLE "user_table" ADD CONSTRAINT "user_table_ai_id_fkey" FOREIGN KEY ("ai_id") REFERENCES "ai_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
