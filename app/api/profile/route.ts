import { NextRequest, NextResponse } from "next/server";
import { verify, decode } from "jsonwebtoken";

function decodeJWT(token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export const GET = async (req: NextRequest) => {
    const authTokens = req.cookies.get('authTokens')?.value;
    const user = decodeJWT(authTokens);
    return NextResponse.json(user);


};

