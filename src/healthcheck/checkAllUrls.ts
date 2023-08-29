import { checkIfUrlHealthy, HealthStatus } from './checkIfUrlHealthy'

type UrlHealth = {
  url: string
  status: HealthStatus
}

export const checkAllUrls = (urls: string[]): Promise<UrlHealth[]> =>
  Promise.all(
    urls.map(async url => ({
      url,
      status: await checkIfUrlHealthy(url),
    }))
  )
