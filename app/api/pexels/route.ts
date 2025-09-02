import { NextResponse } from 'next/server'

const PEXELS_API_KEY = 'dbhBo4u0vIfODU9Ghz1vEgk2dcpEDrfTqSxS14G4nOrHWmr7YPB9kr0g'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || 'executive technology portrait'
    const perPage = searchParams.get('per_page') || '1'

    const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=portrait`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      // Force dynamic for freshness
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch from Pexels' }, { status: res.status })
    }

    const data = await res.json()
    const first = data?.photos?.[0]
    const url = first?.src?.large2x || first?.src?.large || first?.src?.portrait || null

    return NextResponse.json({ url })
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error fetching image' }, { status: 500 })
  }
}

