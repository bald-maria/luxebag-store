import usePanierStore from '../store/usePanierStore'
import useFavorisStore from '../store/useFavorisStore'

export default function ProductCard({ product, onDetails }) {
  const { addItem } = usePanierStore()
  const { toggleFavori, isFavori } = useFavorisStore()
  const favori = isFavori(product.id)

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group hover:border-neutral-600 transition-colors">

      {/* Image cliquable → drawer */}
      <div
        className="bg-white h-52 flex items-center justify-center p-6 cursor-pointer"
        onClick={onDetails}
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Infos */}
      <div className="p-4">
        <span className="text-neutral-600 text-xs tracking-widest uppercase">
          {product.category}
        </span>
        <h3
          className="text-white text-sm mt-1 mb-3 line-clamp-2 cursor-pointer hover:text-neutral-300 transition-colors leading-snug"
          onClick={onDetails}
        >
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-white text-lg font-light">
            ${product.price}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFavori(product)}
              className={`p-2 rounded-lg border transition-colors ${
                favori
                  ? 'border-red-800 text-red-500'
                  : 'border-neutral-800 text-neutral-600 hover:border-neutral-600 hover:text-neutral-400'
              }`}
            >
              {favori ? '❤️' : '🤍'}
            </button>

            <button
              onClick={() => addItem(product)}
              className="p-2 rounded-lg border border-neutral-800 text-neutral-600 hover:border-neutral-600 hover:text-neutral-400 transition-colors"
            >
              🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
