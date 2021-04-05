// @ts-check
const playwright = require('playwright')

;(async () => {
  const { webkit, devices } = playwright
  const browser = await webkit.launch({ headless: false })
  // const iPhone11 = devices['iPhone 11 Pro']
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('about:blank')

  // await browser.close()
})()
