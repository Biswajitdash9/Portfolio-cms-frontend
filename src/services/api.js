const API_BASE_URL = 'http://localhost:8080/api'

export async function login(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status}`)
  }

  return response.json()
}


export async function getAbout() {
  const response = await fetch(`${API_BASE_URL}/about/get`)

  if (response.status === 204) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch About: ${response.status}`)
  }

  return response.json()
}


const BACKEND_BASE_URL = 'http://localhost:8080'

export function getProfileImageUrl(profileImage) {
  if (!profileImage) {
    return ''
  }

  if (
    profileImage.startsWith('http://') ||
    profileImage.startsWith('https://')
  ) {
    return profileImage
  }

  return `${BACKEND_BASE_URL}${
    profileImage.startsWith('/') ? profileImage : `/${profileImage}`
  }`
}
