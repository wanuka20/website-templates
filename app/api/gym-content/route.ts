import { NextResponse } from "next/server";
import { getGymContent } from "@/lib/gym-content";

export const dynamic = "force-dynamic";

export async function GET() {
  const gym = await getGymContent();

  return NextResponse.json({ ok: true, gym });
}
