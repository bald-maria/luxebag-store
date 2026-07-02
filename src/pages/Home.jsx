import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/sac1.jpg')" }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950" />

        {/* Contenu */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

          <p className="text-neutral-500 text-xs tracking-[0.5em] uppercase mb-6">
            Nouvelle Collection 2026
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-light tracking-wider uppercase leading-tight mb-6">
            L'art du<br />
            <span className="italic text-neutral-300">luxe</span>
          </h1>

          <p className="text-neutral-400 text-lg font-light max-w-md mx-auto mb-10 leading-relaxed">
            Des sacs d'exception, pensés pour la femme moderne qui allie élégance et caractère.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/collection')}
              className="bg-white text-black px-10 py-4 text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors rounded-full"
            >
              Voir la collection
            </button>
            <button
              onClick={() => navigate('/favoris')}
              className="border border-neutral-700 text-white px-10 py-4 text-sm tracking-widest uppercase hover:border-neutral-500 transition-colors rounded-full"
            >
              Mes favoris
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-neutral-600 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-neutral-700" />
        </div>
      </section>

      {/* Section features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <span className="text-4xl mb-4 block"></span>
            <h3 className="text-white text-sm tracking-widest uppercase mb-3">
              Artisanat Premium
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Chaque sac est fabriqué à la main par des artisans experts avec des matériaux sélectionnés.
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl mb-4 block"></span>
            <h3 className="text-white text-sm tracking-widest uppercase mb-3">
              Livraison Gratuite
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Livraison offerte partout en Afrique de l'Ouest. Votre commande livrée en 3 à 5 jours.
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl mb-4 block"></span>
            <h3 className="text-white text-sm tracking-widest uppercase mb-3">
              Édition Limitée
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Des pièces exclusives en quantité limitée pour garantir votre unicité.
            </p>
          </div>
        </div>
      </section>

      {/* Section aperçu collection */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-neutral-500 text-xs tracking-widest uppercase mb-2">Sélection</p>
            <h2 className="text-white text-3xl font-light tracking-wide uppercase">
              Nos Coups de Cœur
            </h2>
          </div>
          <button
            onClick={() => navigate('/collection')}
            className="text-neutral-400 hover:text-white text-sm transition-colors tracking-wide"
          >
            Tout voir
          </button>
        </div>

        {/* Grid aperçu 4 sacs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(n => (
            <div
              key={n}
              onClick={() => navigate('/collection')}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer group hover:border-neutral-600 transition-colors"
            >
              <div className="bg-white h-48 flex items-center justify-center p-4">
                <img
                  src={`/images/sac${n + 4}.jpg`}
                  alt={`Sac ${n}`}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <p className="text-neutral-500 text-xs tracking-widest uppercase">Handbags</p>
                <p className="text-white text-xs mt-1">Découvrir </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white tracking-[0.3em] text-sm uppercase font-light">LuxeBag</span>
          <p className="text-neutral-600 text-xs">
            © 2026 LuxeBag. Tous droits réservés.
          </p>
          <p className="text-neutral-600 text-xs">
            Conakry, Guinée
          </p>
        </div>
      </footer>
    </div>
  )
}
