import { NextRequest, NextResponse } from "next/server";
import { verify, decode } from "jsonwebtoken";


export const GET = async (req: NextRequest) => {
    const authTokens = req.cookies.get('authTokens')?.value;
    console.log(authTokens)
    if (!authTokens) {
        // decodifica el token
        const decoded = decode(authTokens!);
        console.log(decoded)
        // verifica el token
        const verified = verify(authTokens!, process.env.JWT_SECRET!);
        console.log(verified)
        // si el token es valido, retorna el usuario
        if (verified) {
            return NextResponse.next();
        }
        // si el token no es valido, retorna un error
        return NextResponse.next(
            new Response(JSON.stringify({ message: "Unauthorized" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        );

    }
};

