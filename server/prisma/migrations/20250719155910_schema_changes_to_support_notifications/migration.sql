-- AlterTable
ALTER TABLE "User" ADD COLUMN     "telegram_chat_id" TEXT;

-- CreateTable
CREATE TABLE "Reminder" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "plant_id" INTEGER NOT NULL,
    "nextRun" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "Plants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
