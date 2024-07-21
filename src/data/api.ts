export function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const apiPrefix = '/api'

  const url = new URL(apiPrefix.concat(path), baseUrl)
  return fetch(url, init)
}

export function post(path: string, jsonBody: object) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const apiPrefix = '/api'

  const url = new URL(apiPrefix.concat(path), baseUrl)
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  })
}

