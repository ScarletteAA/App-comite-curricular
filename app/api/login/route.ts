import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../prismaClient";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password } = await req.json();
  const user = await prisma.asesora.findUnique({
    where: {
      email: email,
    },
  });
  const token = jwt.sign(
    { email: user!.email, id: user!.id },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );
  return NextResponse.json({ token: token });
};
