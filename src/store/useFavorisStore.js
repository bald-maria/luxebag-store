import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useFavorisStore = create(
  persist(
    (set, get) => ({
      favoris: [],

      toggleFavori: (product) => {
        const exists = get().favoris.find(f => f.id === product.id)
        if (exists) {
          set({ favoris: get().favoris.filter(f => f.id !== product.id) })
        } else {
          set({ favoris: [...get().favoris, product] })
        }
      },

      isFavori: (id) => get().favoris.some(f => f.id === id),
    }),
    { name: 'favoris-storage' }
  )
)

export default useFavorisStore
