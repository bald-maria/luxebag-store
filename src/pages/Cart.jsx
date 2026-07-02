import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import usePanierStore from '../store/usePanierStore'

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotal, clearPanier } = usePanierStore()
  const navigate = useNavigate()
  const total = getTotal()

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">

        <div className="mb-10">
          <h1 className="text-white text-3xl font-light tracking-widest uppercase mb-2">
            Mon Panier
          </h1>
          <p className="text-neutral-500 text-sm">
            {items.length} article{items.length > 1 ? 's' : ''}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <span className="text-6xl">🛒</span>
            <p className="text-neutral-500 text-lg">Votre panier est vide</p>
            <button
              onClick={() => navigate('/collection')}
              className="text-white border border-neutral-700 px-6 py-3 rounded-xl text-sm hover:border-neutral-500 transition-colors"
            >
              Voir la collection
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Liste articles */}
            <div className="flex-1 space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex gap-4">

                  {/* Image */}
                  <div className="bg-white rounded-xl w-24 h-24 flex items-center justify-center p-2 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Infos */}
                  <div className="flex-1 min-w-0">
                    <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-white text-sm line-clamp-2 mb-3">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      {/* Quantité */}
                      <div className="flex items-center gap-2 border border-neutral-800 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-white text-sm px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-white font-light">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-600 hover:text-red-500 transition-colors text-lg"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vider panier */}
              <button
                onClick={clearPanier}
                className="text-neutral-600 hover:text-red-500 text-sm transition-colors"
              >
                Vider le panier
              </button>
            </div>

            {/* Récapitulatif */}
            <div className="lg:w-80">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sticky top-24">
                <h2 className="text-white text-lg font-light mb-6">Récapitulatif</h2>

                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-neutral-500 truncate mr-2">
                        {item.title.substring(0, 20)}... x{item.quantity}
                      </span>
                      <span className="text-neutral-400 shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-800 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Sous-total</span>
                    <span className="text-white text-lg font-light">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-neutral-400 text-sm">Livraison</span>
                    <span className="text-green-500 text-sm">Gratuite</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-white text-xl font-light">${total.toFixed(2)}</span>
                </div>

                <button className="w-full bg-white text-black font-medium py-3 rounded-xl text-sm tracking-wide hover:bg-neutral-200 transition-colors">
                  Commander
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
