const marques = ["Hermès", "Chanel", "Louis Vuitton", "Gucci", "Dior", "Prada", "Balenciaga", "Céline"]

export default function Marques() {
  return (
    <section className="py-16 bg-[#faf9f7] border-t border-gray-100">
      <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-10">
        Marques disponibles
      </p>
      <div className="flex flex-wrap justify-center gap-10 px-12">
        {marques.map((m) => (
          <span key={m} className="text-gray-400 font-semibold text-lg hover:text-yellow-600 transition cursor-pointer tracking-wide">
            {m}
          </span>
        ))}
      </div>
    </section>
  )
}