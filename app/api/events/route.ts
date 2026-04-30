import { NextResponse } from "next/server";

export const revalidate = 300;

const CALENDAR_ID =
  "c_bfb1a6b5f0ca1f13ac9d1d002bda36ae849a2d8a3f8e6c238f1a1877321eb75c@group.calendar.google.com";

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Google API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?maxResults=3&key=${apiKey}&timeMin=${new Date().toISOString()}&orderBy=startTime&singleEvents=true`
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: "Failed to fetch events", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(
      { items: data.items || [] },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
