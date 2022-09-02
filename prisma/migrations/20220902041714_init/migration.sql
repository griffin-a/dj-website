-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "paid" BOOLEAN,
    "capacity" INTEGER,
    "venue" TEXT,
    "date" TIMESTAMP(3),
    "eventType" TEXT,
    "completed" BOOLEAN,
    "currentlyBooked" BOOLEAN,
    "imageUri" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Host" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,

    CONSTRAINT "Host_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HostsOnEvents" (
    "hostId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "HostsOnEvents_pkey" PRIMARY KEY ("hostId","eventId")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "link" TEXT,
    "eventId" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToHost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

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
ALTER TABLE "_EventToHost" ADD CONSTRAINT "_EventToHost_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToHost" ADD CONSTRAINT "_EventToHost_B_fkey" FOREIGN KEY ("B") REFERENCES "Host"("id") ON DELETE CASCADE ON UPDATE CASCADE;
