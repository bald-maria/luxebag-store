import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductDrawer from '../components/ProductDrawer'
import useFavorisStore from '../store/useFavorisStore'
import usePanierStore from '../store/usePanierStore'

export default function Favorites() {
  const { favoris, toggleFavori } = useFavorisStore()
  const { addItem } = usePanierStore()
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        <div className="mb-10">
          <h1 className="text-white text-3xl font-light tracking-widest uppercase mb-2">
            Mes Favoris
          </h1>
          <p className="text-neutral-500 text-sm">
            {favoris.length} article{favoris.length > 1 ? 's' : ''}
          </p>
        </div>

        {favoris.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <span className="text-6xl"></span>
            <p className="text-neutral-500 text-lg">Aucun favori pour le moment</p>
            <a href="/collection" className="text-white border border-neutral-700 px-6 py-3 rounded-xl text-sm hover:border-neutral-500 transition-colors">
              Voir la collection
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoris.map(product => (
              <div key={product.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group hover:border-neutral-600 transition-colors">

                {/* Image */}
                <div
                  className="bg-white h-52 flex items-center justify-center p-6 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <span className="text-neutral-600 text-xs tracking-widest uppercase">
                    {product.category}
                  </span>
                  <h3
                    className="text-white text-sm mt-1 mb-3 line-clamp-2 cursor-pointer hover:text-neutral-300 transition-colors"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-lg font-light">
                      ${product.price}
                    </span>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFavori(product)}
                        className="p-2 rounded-lg border border-red-800 text-red-500 hover:border-red-600 transition-colors"
                      >
                        favoris
                      </button>
                      <button
                        onClick={() => addItem(product)}
                        className="p-2 rounded-lg border border-neutral-800 text-neutral-600 hover:border-neutral-600 hover:text-neutral-400 transition-colors"
                      >
                        panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductDrawer
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
