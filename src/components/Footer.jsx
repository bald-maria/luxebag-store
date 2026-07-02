export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
            <span className="font-bold text-lg">Sac de Luxe</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Spécialiste de la revente de sacs de luxe authentiques depuis 2020.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#hero" className="hover:text-yellow-600 transition">Accueil</a></li>
            <li><a href="#collection" className="hover:text-yellow-600 transition">Collection</a></li>
            <li><a href="#comment" className="hover:text-yellow-600 transition">Comment ça marche</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li> contact@sacdeluxe.com</li>
            <li> +224 611 00 00 00</li>
            <li> Conakry, Guinea</li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
        © 2025 Sac de Luxe — Tous droits réservés
      </div>
    </footer>
  )
}