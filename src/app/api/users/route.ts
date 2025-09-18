import getConnection from '../../../../lib/db';
import * as r from 'rethinkdb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  let conn;
  try {
    conn = await getConnection();
    const newUser = await request.json();
    const result = await r.db('my_project_db').table('users').insert(newUser).run(conn);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  let conn;
  try {
    conn = await getConnection();
    const cursor = await r.db('my_project_db').table('users').run(conn);
    const users = await cursor.toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


