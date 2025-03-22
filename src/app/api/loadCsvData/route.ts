import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

async function loadCsvData(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent
    .trim()
    .split('\n')
    .map((line) => line.trim());
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public/data', 'domains.csv');
    const data: string[] = (await loadCsvData(filePath)) || '';
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(`Error + ${error}`);
  }
}
