import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  const sql = neon(String(process.env.DATABASE_URL));
  const users = await sql `SELECT * FROM users`

  return  NextResponse.json(users);
}
