import fetch from 'node-fetch'
import cheerio from 'cheerio'

import type { VideoPreviewContent } from '../types'

async function scrapeData(url: string) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `An error occurred while loading the page. Status code:${response.status}`,
      )
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    const content: VideoPreviewContent = {
      title: $('meta[property="og:title"]').attr('content'),
      description: $('meta[property="og:description"]').attr('content'),
      image: $('meta[property="og:image"]').attr('content'),
      video: $('meta[property="og:video"]').attr('content'),
    }

    return content
  }
  catch (error) {
    console.error('An error occurred:', error)
    return error
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return scrapeData(body.url)
})
