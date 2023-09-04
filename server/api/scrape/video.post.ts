import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { Platform, type VideoPreviewContent } from '../../types'

async function scrapeData(url: string): Promise<VideoPreviewContent> {
  try {
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(`An error occurred while loading the page. Status code: ${response.status}`)

    const html = await response.text()
    const $ = cheerio.load(html)

    const content: VideoPreviewContent = {
      type: $('meta[property="og:site_name"]').attr('content')?.toUpperCase(),
      title: $('meta[property="og:title"]').attr('content'),
      description: $('meta[property="og:description"]').attr('content'),
      image: $('meta[property="og:image"]').attr('content'),
      video: $('meta[property="og:video"]').attr('content'),
    }

    if (Object.values(Platform).includes(content.type as Platform))
      return content

    else
      throw new Error('Platform is not supported!')
  }
  catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return scrapeData(body.url)
})
