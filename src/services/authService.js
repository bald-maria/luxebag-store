import axios from 'axios'

const API = 'http://localhost:3001'

export const loginUser = async (email, password) => {
  // On récupère tous les users et on filtre côté client
  const { data } = await axios.get(`${API}/users`)

  const user = data.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    throw new Error('Email ou mot de passe incorrect')
  }

  const token = btoa(`${user.id}:${user.email}:${Date.now()}`)

  return { user, token }
}
