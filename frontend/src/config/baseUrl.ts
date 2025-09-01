export const serverUrl =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000'

export const clientUrl =
  process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3000'

export const apiUrl = `${serverUrl}/api`
export const todoApiUrl = `${apiUrl}/todo`
