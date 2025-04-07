/*
  Warnings:

  - You are about to drop the column `schema` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "schema",
ADD COLUMN     "username" TEXT;
