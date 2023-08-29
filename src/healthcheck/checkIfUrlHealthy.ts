export type HealthStatus = 'healthy' | 'no-healthy'

const safeFetch = async (url: string) => {
  try {
    return await fetch(url)
  } catch {
    return null
  }
}

export const checkIfUrlHealthy = async (url: string): Promise<HealthStatus> => {
  const result = await safeFetch(url)

  return result?.status === 200 ? 'healthy' : 'no-healthy'
}
