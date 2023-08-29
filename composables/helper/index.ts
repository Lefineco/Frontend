const youtubeRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const vimeoRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)([0-9]+)(?:\/)?$/

function checkVideoPlatform(url: string): boolean {
  return youtubeRegExp.test(url) || vimeoRegExp.test(url)
}

function getVideoID(url: string): string | null {
  const youtubeMatch = url.match(youtubeRegExp)
  if (youtubeMatch)
    return youtubeMatch[1]

  const vimeoMatch = url.match(vimeoRegExp)
  if (vimeoMatch)
    return vimeoMatch[1]

  return null
}

export { checkVideoPlatform, getVideoID }
