import { NextRequest, NextResponse } from 'next/server';

import addTodo from '@/actions/todo';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await addTodo(body);
    if (typeof result === 'string') {
      return NextResponse.json({ error: result }, { status: 400 });
    }
    return NextResponse.json(result, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occured.' },
      { status: 500 }
    );
  }
}
