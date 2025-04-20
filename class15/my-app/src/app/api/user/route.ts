import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

export async function GET(req: NextRequest) {
  //function is async because api return promise
  const token = req.cookies.get("token");
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.SECRET); //getting secret from .env
      const { payload, protectedHeader } = await jwtVerify(token.value, secret);
      //payload is our data

      return NextResponse.json({
        success: true,
        payload,
        protectedHeader,
      });
    } catch (error) {
      return NextResponse.json({ success: false, message: "Invalid Token" });
    }
  }
  return NextResponse.json({
    success: false,
    message: "Token not found!",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (body.userName === "Ratan Lal") {
    const secret = new TextEncoder().encode(process.env.SECRET); //getting secret from .env
    const alg = "HS256";

    const jwt = await new SignJWT({ userName: body.userName, role: body.role })
      .setProtectedHeader({ alg }) //mandatory
      .setIssuedAt() //kab bana token
      .setExpirationTime("2h")
      .sign(secret); //mandatory

    const res = NextResponse.json({ Success: true, token: jwt });
    res.cookies.set({ name: "token", value: jwt });
    return res;
  }
  return NextResponse.json({ Success: false, message: "Invalid User" });
}

export async function DELETE(req: NextRequest) {
  const res = NextResponse.json("user is logout!");
  res.cookies.delete("token");
  return res;
}
