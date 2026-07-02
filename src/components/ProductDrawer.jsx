import { useEffect } from 'react'
import usePanierStore from '../store/usePanierStore'
import useFavorisStore from '../store/useFavorisStore'

export default function ProductDrawer({ product, onClose }) {
  const { addItem } = usePanierStore()
  const { toggleFavori, isFavori } = useFavorisStore()

  // Fermer avec Escape
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Bloquer le scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  if (!product) return null

  const favori = isFavori(product.id)

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-neutral-900 z-50 shadow-2xl flex flex-col animate-slide-in">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <span className="text-neutral-500 text-xs tracking-widest uppercase">
            Détails du produit
          </span>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* Image */}
          <div className="bg-white rounded-xl p-8 mb-6 flex items-center justify-center h-64">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Catégorie */}
          <span className="text-xs text-neutral-500 tracking-widest uppercase">
            {product.category}
          </span>

          {/* Titre */}
          <h2 className="text-white text-xl font-light mt-2 mb-4 leading-snug">
            {product.title}
          </h2>

          {/* Prix */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl text-white font-light">
              ${product.price}
            </span>
            {product.rating && (
              <span className="text-neutral-500 text-sm">
                 {product.rating.rate} ({product.rating.count} avis)
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm leading-relaxed">
            {product.description}
          </p>

        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-neutral-800 flex gap-3">
          <button
            onClick={() => toggleFavori(product)}
            className={`p-3 rounded-xl border transition-colors ${
              favori
                ? 'border-red-500 text-red-500'
                : 'border-neutral-700 text-neutral-400 hover:border-neutral-500'
            }`}
          >
            {favori ? '' : 'Favoris'}
          </button>

          <button
            onClick={() => { addItem(product); onClose() }}
            className="flex-1 bg-white text-black font-medium py-3 rounded-xl text-sm tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Ajouter au panier
          </button>
        </div>

      </div>
    </>
  )
}
