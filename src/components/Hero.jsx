import { useState, useEffect } from 'react'

const images = [
  "/images/sac7.jpg",
  "/images/sac8.jpg",
  "/images/sac9.jpg",
  "/images/sac10.jpg",
  "/images/sac11.jpg",
  "/images/sac12.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="flex items-center px-12 py-20 bg-[#faf9f7] gap-16"
    >

      {/* Texte gauche */}
      <div className="w-1/2">
        <p className="text-yellow-600 font-medium mb-4 text-sm tracking-widest uppercase">
          Revente · Authenticité · Prestige
        </p>

        <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
          Les Plus Grands
          <br />
          <span className="text-yellow-500">
            Sacs de Luxe
          </span>
        </h1>

        <p className="text-gray-500 max-w-lg mb-10 text-lg leading-relaxed">
          Hermès, Chanel, Louis Vuitton...
          Chaque pièce est authentique,
          vérifiée et présentée avec tous ses détails.
        </p>

        <div className="flex gap-4">
          <a
            href="#collection"
            className="bg-black text-white px-8 py-4 text-sm hover:bg-yellow-600 transition"
          >
            Voir la collection →
          </a>

          <a
            href="#comment"
            className="border border-black text-black px-8 py-4 text-sm hover:border-yellow-600 hover:text-yellow-600 transition"
          >
            Comment ça marche
          </a>
        </div>
      </div>

      {/* Slider droite */}
      <div className="w-1/2 h-[500px] overflow-hidden relative rounded-sm">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`sac ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? 'bg-yellow-500' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}