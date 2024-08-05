-- AlterTable
ALTER TABLE `Category` ADD COLUMN `type` ENUM('System', 'UserDefined') NOT NULL DEFAULT 'System',
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ExpenseGroup` ADD COLUMN `type` ENUM('System', 'UserDefined') NOT NULL DEFAULT 'System',
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ExpenseGroup` ADD CONSTRAINT `ExpenseGroup_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
