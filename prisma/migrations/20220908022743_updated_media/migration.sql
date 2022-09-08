-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('PARTY', 'FREE', 'PAID', 'PRIVATE', 'PUBLIC', 'OTHER', 'CLUB', 'BAR', 'HOUSE_PARTY');

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "tags" "Tag"[];

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "link" TEXT,
    "eventId" TEXT,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
