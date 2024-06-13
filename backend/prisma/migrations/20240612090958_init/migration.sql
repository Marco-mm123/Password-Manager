-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "personal_key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Origin" (
    "origin_id" SERIAL NOT NULL,
    "origin_name" TEXT NOT NULL,
    "origin_url" TEXT NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("origin_id")
);

-- CreateTable
CREATE TABLE "Password" (
    "origin_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("origin_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_origin_id_fkey" FOREIGN KEY ("origin_id") REFERENCES "Origin"("origin_id") ON DELETE RESTRICT ON UPDATE CASCADE;
