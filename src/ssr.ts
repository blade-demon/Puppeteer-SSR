import * as puppeteer from "puppeteer";

export default async function ssr(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
	await page.goto(url, { waitUntil: "networkidle0" });
	// 序列化HTML页面的DOM元素
  const html = await page.content();
  await browser.close();
  return html;
}
