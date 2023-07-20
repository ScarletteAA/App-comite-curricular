import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, email, password } = await req.json();
  const user = await prisma.asesora.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return NextResponse.json(user);
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const users = await prisma.asesora.findMany();
  return NextResponse.json(users);
};
