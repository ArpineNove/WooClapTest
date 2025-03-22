import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

async function loadUsersPlansData() {
  const filePath = path.join(process.cwd(), 'public/data', 'users.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const usersDomains: Record<string, string> = Object.fromEntries(
    fileContent
      .trim()
      .split('\n')
      .slice(1)
      .map((line) => {
        const [email, plan] = line.split(',').map((cell) => cell.trim());
        return [email, plan];
      })
  );

  return usersDomains;
}
export async function GET() {
  try {
    const data = await loadUsersPlansData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
