import { useState, useEffect } from 'react'
import { getProducts } from '../services/api'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ProductDrawer from '../components/ProductDrawer'
import SearchBar from '../components/SearchBar'

export default function Collection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(() => setError('Impossible de charger les produits.'))
      .finally(() => setLoading(false))
  }, [])

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-white text-3xl font-light tracking-widest uppercase mb-2">
            Collection
          </h1>
          <p className="text-neutral-500 text-sm">
            {filtered.length} produit{filtered.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Recherche */}
        <SearchBar value={search} onChange={setSearch} />

        {/* États */}
        {loading && (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-2 border-neutral-700 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-950 border border-red-800 text-red-400 px-6 py-4 rounded-xl text-sm">
            {error}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-neutral-500 text-lg">Aucun produit trouvé pour "{search}"</p>
          </div>
        )}

        {/* Grille */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Drawer */}
      {selectedProduct && (
        <ProductDrawer
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
