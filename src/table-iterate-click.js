const puppeteer = require('puppeteer')

async function test() {
  const browser = await puppeteer.launch({  headless: false })
  const page = await browser.newPage()
  await page.goto('https://thedavidbarton.github.io/blog/wfa/')

  const numberOfRows = await page.$$eval('table > tbody > tr', rows => rows.length)

  for (let n = 1; n < numberOfRows + 1; n++) {
    const currentUser = `table > tbody > tr:nth-child(${n}) > td:nth-child(2)` // nth row 2nd column
    const currentOption = `table > tbody > tr:nth-child(${n}) > td:nth-child(3)` // nth row 3rd column

    const currentUserString = await page.$eval(currentUser, el => el.innerText)
    console.log(currentUserString)
    if (currentUserString.includes('2020')) {
      console.log('hover')
      try {
        await page.hover(currentOption)
        await page.click(currentOption)
      } catch {}
    }
  }
  await browser.close()
}
test()
