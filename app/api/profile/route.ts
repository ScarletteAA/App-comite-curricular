import { NextRequest, NextResponse } from "next/server";
import { verify, decode } from "jsonwebtoken";


export const GET = async (req: NextRequest) => {
    const authTokens = req.cookies.get("authTokens")?.value;
    if (authTokens) {
        try {
            // const user = decode(authTokens, "secret", { complete: true })
            // console.log(user)
            // return NextResponse.json({
            //     name: user.username,
            //     email: user.email
            // });
        }
        catch (error) {
            return NextResponse.json({ error: "Not authorized" }, { status: 401 });
        }
    }
}