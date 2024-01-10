import fetch from 'node-fetch'
import puppeteer from 'puppeteer'

async function scrapeData(url: string): Promise<string | undefined | null> {
  try {
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(`An error occurred while loading the page. Status code: ${response.status}`)

    const browser = await puppeteer.launch()

    const page = await browser.newPage()

    await page.goto(url)

    await page.title()

    await page.setBypassCSP(true)

    await page.waitForSelector('iframe')

    const iframe = await page.$('iframe')

    const videoSrc = await iframe?.evaluate((iframe) => {
      const iframeSrc = iframe.getAttribute('src')

      if (!iframeSrc)
        return

      const iframeSrcUrl = new URL(iframeSrc)

      const videoSrc = iframeSrcUrl.searchParams.get('src')

      return videoSrc
    })

    // console.log(videoSrc)

    await browser.close()

    return videoSrc
  }
  catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await scrapeData(body.url)
})
