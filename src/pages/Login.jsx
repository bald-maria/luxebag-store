import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authService'
import useAuthStore from '../store/useAuthStore'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuthStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { user, token } = await loginUser(email, password)
      login(user, token)
      navigate('/collection')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo / titre */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light tracking-[0.3em] text-white uppercase">
            LuxeBag
          </h1>
          <p className="text-neutral-500 text-sm mt-2 tracking-widest">
            Collection exclusive
          </p>
        </div>

        {/* Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-white text-xl font-light mb-6">Connexion</h2>

          {error && (
            <div className="bg-red-950 border border-red-800 text-red-400 text-sm px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-neutral-400 text-sm mb-2">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mariama@luxebag.com"
                required
                className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-neutral-400 text-sm mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-medium py-3 rounded-lg text-sm tracking-wide hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}