/*
  Warnings:

  - You are about to drop the `refreshtoken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `refreshtoken` DROP FOREIGN KEY `RefreshToken_userId_fkey`;

-- AlterTable
ALTER TABLE `utilisateur` MODIFY `role` ENUM('ADMIN', 'AUTHOR', 'USER') NOT NULL DEFAULT 'AUTHOR';

-- DropTable
DROP TABLE `refreshtoken`;
