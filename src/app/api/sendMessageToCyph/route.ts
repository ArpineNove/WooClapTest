import puppeteer from 'puppeteer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto('https://onetimesecret.com/');

    await page.waitForSelector('textarea[name="secret"]');
    await page.type('textarea[name="secret"]', message);

    const isButtonDisabled = await page.$eval(
      'button[type="submit"]',
      (button) => button.disabled
    );

    if (isButtonDisabled) {
      await page.evaluate(() => {
        const button = document.querySelector('button[type="submit"]');
        if (button) button.removeAttribute('disabled');
      });
    }

    await page.click('button[type="submit"]');
    await page.waitForSelector('textarea[readonly]');

    const cyphLink = await page.evaluate(() => {
      const textareas = document.querySelectorAll(
        'textarea[readonly]'
      ) as NodeListOf<HTMLTextAreaElement>;
      return textareas[1]?.value || '';
    });

    await browser.close();
    return NextResponse.json({ cyphLink });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
