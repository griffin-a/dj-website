/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Host` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Host` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HostsOnEvents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Photo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `eventId` column on the `Photo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Video` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Video` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `eventId` column on the `Video` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `hostId` on the `HostsOnEvents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `eventId` on the `HostsOnEvents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_EventToHost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_EventToHost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "HostsOnEvents" DROP CONSTRAINT "HostsOnEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "HostsOnEvents" DROP CONSTRAINT "HostsOnEvents_hostId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_eventId_fkey";

-- DropForeignKey
ALTER TABLE "_EventToHost" DROP CONSTRAINT "_EventToHost_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToHost" DROP CONSTRAINT "_EventToHost_B_fkey";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Host" DROP CONSTRAINT "Host_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Host_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HostsOnEvents" DROP CONSTRAINT "HostsOnEvents_pkey",
DROP COLUMN "hostId",
ADD COLUMN     "hostId" INTEGER NOT NULL,
DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD CONSTRAINT "HostsOnEvents_pkey" PRIMARY KEY ("hostId", "eventId");

-- AlterTable
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER,
ADD CONSTRAINT "Photo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Video" DROP CONSTRAINT "Video_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER,
ADD CONSTRAINT "Video_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_EventToHost" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_EventToHost_AB_unique" ON "_EventToHost"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToHost_B_index" ON "_EventToHost"("B");

-- AddForeignKey
ALTER TABLE "HostsOnEvents" ADD CONSTRAINT "HostsOnEvents_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HostsOnEvents" ADD CONSTRAINT "HostsOnEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToHost" ADD CONSTRAINT "_EventToHost_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToHost" ADD CONSTRAINT "_EventToHost_B_fkey" FOREIGN KEY ("B") REFERENCES "Host"("id") ON DELETE CASCADE ON UPDATE CASCADE;
