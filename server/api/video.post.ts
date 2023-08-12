import fetch from 'node-fetch'
import cheerio from 'cheerio'
import type { VideoPreviewContent } from '../types'

async function scrapeData(url: string) {
  try {
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(`Sayfa yüklenirken bir hata oluştu. Durum Kodu:${response.status}`)

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
    console.error('Hata oluştu:', error)
    return error
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return scrapeData(body.url)
})
