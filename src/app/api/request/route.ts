import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // 先在 Vercel logs / server logs 里看
  console.log("New request:", body);
  return NextResponse.json({ ok: true });
}
