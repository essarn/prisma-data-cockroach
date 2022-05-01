-- CreateTable
CREATE TABLE "Colletable" (
    "id" SERIAL4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edition" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "image" STRING NOT NULL,

    CONSTRAINT "Colletable_pkey" PRIMARY KEY ("id")
);
