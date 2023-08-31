const youtubeRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const vimeoRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)([0-9]+)(?:\/)?$/

function checkVideoPlatform(url: string): string | undefined | null {
  if (url.length)
    return null

  if (youtubeRegExp.test(url))
    return url.match(youtubeRegExp)?.[1]
  else if (vimeoRegExp.test(url))
    return url.match(vimeoRegExp)?.[1]

  return null
}

export default checkVideoPlatform
