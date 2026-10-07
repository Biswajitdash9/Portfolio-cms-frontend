import { useState } from 'react'
import { login } from '../services/api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const data = await login(username, password)

      console.log('Login response:', data)

      setMessage('Login successful')
    } catch (error) {
      console.error(error)
      setMessage('Login failed')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="block mb-2 font-semibold">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        {message && (
          <p className="text-center mt-6">
            {message}
          </p>
        )}

      </div>
    </section>
  )
}

export default Login