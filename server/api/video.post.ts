import fetch from 'node-fetch'

// import cheerio from 'cheerio'

async function scrapeData(url: string) {
  try {
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(`Sayfa yüklenirken bir hata oluştu. Durum Kodu:${response.status}`)

    const html = await response.text()
    // const $ = cheerio.load(html)

    // const pageTitle = $('html').html()
    return html
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
