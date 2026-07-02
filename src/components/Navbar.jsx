import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
import usePanierStore from '../store/usePanierStore'
import useFavorisStore from '../store/useFavorisStore'

export default function Navbar() {
  const { user, logout } = useAuthStore()
  const { items } = usePanierStore()
  const { favoris } = useFavorisStore()
  const navigate = useNavigate()

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo → Home */}
        <Link to="/" className="text-white tracking-[0.3em] text-lg uppercase font-light">
          LuxeBag
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-neutral-400 hover:text-white text-sm tracking-wide transition-colors">
            Accueil
          </Link>
          <Link to="/collection" className="text-neutral-400 hover:text-white text-sm tracking-wide transition-colors">
            Collection
          </Link>
          <Link to="/favoris" className="text-neutral-400 hover:text-white text-sm tracking-wide transition-colors flex items-center gap-1">
            Favoris
            {favoris.length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {favoris.length}
              </span>
            )}
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link to="/panier" className="relative text-neutral-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>

          <div className="flex items-center gap-3 border-l border-neutral-800 pl-4">
            <span className="text-neutral-500 text-sm hidden md:block">
              {user?.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>

      </div>
    </nav>
  )
}
