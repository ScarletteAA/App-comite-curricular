import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest, res: NextResponse) => {
    //validar token
    const authTokens = req.cookies.get("authTokens")?.value;
    return NextResponse.json({
        name: "Karla",
        email: "karla.steppes@ucn.cl"
    });

}