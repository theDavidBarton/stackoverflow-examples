const puppeteer = require('puppeteer')
const referers = require('./referers.json')

async function fn() {
  const randomReferer = referers[Math.floor(Math.random() * referers.length)]
  console.log(referers)
  console.log(randomReferer)
  const browser = await puppeteer.launch({ headless: false, devtools: true })
  const page = await browser.newPage()

  page.setExtraHTTPHeaders({ referer: randomReferer })

  await page.goto('https://www.instagram.com/')
}
fn()
