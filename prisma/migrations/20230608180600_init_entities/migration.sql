-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sede" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "sede_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facultad" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sedeId" TEXT NOT NULL,

    CONSTRAINT "facultad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carrera" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "facultadId" TEXT NOT NULL,
    "asesoraId" TEXT NOT NULL,

    CONSTRAINT "carrera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asignatura" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "asignatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asignatura_carrera" (
    "id" TEXT NOT NULL,
    "carreraId" TEXT NOT NULL,
    "asignaturaId" TEXT NOT NULL,

    CONSTRAINT "asignatura_carrera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asesora" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "asesora_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "asesora_email_key" ON "asesora"("email");

-- AddForeignKey
ALTER TABLE "facultad" ADD CONSTRAINT "facultad_sedeId_fkey" FOREIGN KEY ("sedeId") REFERENCES "sede"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrera" ADD CONSTRAINT "carrera_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrera" ADD CONSTRAINT "carrera_asesoraId_fkey" FOREIGN KEY ("asesoraId") REFERENCES "asesora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asignatura_carrera" ADD CONSTRAINT "asignatura_carrera_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "carrera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asignatura_carrera" ADD CONSTRAINT "asignatura_carrera_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "asignatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
