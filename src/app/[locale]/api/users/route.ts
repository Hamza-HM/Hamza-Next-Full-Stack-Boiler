import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
    }
  );
}
