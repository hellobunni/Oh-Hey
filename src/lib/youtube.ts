const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_HANDLE = 'ohheylynae'
const BASE = 'https://www.googleapis.com/youtube/v3'

export interface YoutubeVideo {
  title: string
  description: string
  href: string
  type: string
  length: number
  date: string
}

function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 0
  const hours = parseInt(match[1] ?? '0')
  const minutes = parseInt(match[2] ?? '0')
  const seconds = parseInt(match[3] ?? '0')
  return Math.round(hours * 60 + minutes + seconds / 60)
}

async function getUploadsPlaylistId(): Promise<string> {
  const url = `${BASE}/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`
  const res = await fetch(url, { next: { revalidate: 86400 } }) // cache 24h — playlist ID won't change
  if (!res.ok) throw new Error(`YouTube channels.list failed: ${res.status}`)
  const data = await res.json()
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads as string
}

export async function getLatestVideos(limit = 5): Promise<YoutubeVideo[]> {
  if (!API_KEY) {
    // Return placeholder data until API key is configured
    return Array.from({ length: limit }, (_, i) => ({
      title: 'Video title goes here',
      description: 'Video description goes here',
      href: `https://www.youtube.com/@${CHANNEL_HANDLE}`,
      type: 'video',
      length: 0,
      date: new Date().toISOString().slice(0, 10),
    }))
  }

  const uploadsPlaylistId = await getUploadsPlaylistId()

  const listUrl = `${BASE}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${limit}&key=${API_KEY}`
  const listRes = await fetch(listUrl, { next: { revalidate: 21600 } }) // cache 6h
  if (!listRes.ok) throw new Error(`YouTube playlistItems.list failed: ${listRes.status}`)
  const listData = await listRes.json()

  const items = listData.items ?? []
  const videoIds: string[] = items.map((item: any) => item.snippet.resourceId.videoId)

  const detailUrl = `${BASE}/videos?part=contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
  const detailRes = await fetch(detailUrl, { next: { revalidate: 21600 } })
  if (!detailRes.ok) throw new Error(`YouTube videos.list failed: ${detailRes.status}`)
  const detailData = await detailRes.json()

  const durationMap: Record<string, number> = {}
  for (const v of detailData.items ?? []) {
    durationMap[v.id] = parseDuration(v.contentDetails.duration)
  }

  return items.map((item: any) => {
    const snippet = item.snippet
    const videoId = snippet.resourceId.videoId
    return {
      title: snippet.title,
      description: snippet.description?.split('\n')[0] ?? '',
      href: `https://www.youtube.com/watch?v=${videoId}`,
      type: 'video',
      length: durationMap[videoId] ?? 0,
      date: snippet.publishedAt?.slice(0, 10) ?? '',
    }
  })
}
