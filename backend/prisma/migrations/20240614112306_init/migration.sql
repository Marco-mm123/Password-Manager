-- DropForeignKey
ALTER TABLE "Password" DROP CONSTRAINT "Password_origin_id_fkey";

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_origin_id_fkey" FOREIGN KEY ("origin_id") REFERENCES "Origin"("origin_id") ON DELETE CASCADE ON UPDATE CASCADE;
