-- CreateTable
CREATE TABLE "WaterLogs" (
    "id" SERIAL NOT NULL,
    "plant_id" INTEGER NOT NULL,
    "wateredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WaterLogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WaterLogs" ADD CONSTRAINT "WaterLogs_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "Plants"("id") ON DELETE CASCADE ON UPDATE RESTRICT;
