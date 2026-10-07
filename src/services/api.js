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

export async function getAbout(token) {
  const response = await fetch(`${API_BASE_URL}/about/get`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch About: ${response.status}`)
  }

  return response.json()
}