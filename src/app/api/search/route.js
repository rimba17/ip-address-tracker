import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  if (!search) {
    return NextResponse.json(
      { success: false, data: null, message: "search parameter required" },
      { status: 400 },
    );
  }
  // Detect input IP or Domain
  const isIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(search);

  // parameter API
  const queryParam = isIP ? `ipAddress=${search}` : `domain=${search}`;

  try {
    const res = await fetch(
      `${process.env.GEO_BASE_URL}/country,city?apiKey=${process.env.GEO_API_KEY}&${queryParam}`,
    );
    const json = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          data: json,
          message: json.messages || json.message || "Unknown error",
        },
        {
          status: res.status,
        },
      );
    }
    return NextResponse.json({ success: true, data: json }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, data: null }, { status: 500 });
  }
}
