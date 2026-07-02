const etapes = [
  { num: "01", titre: "Parcourez la collection", desc: "Explorez nos pièces disponibles avec photos HD, état détaillé et prix de revente." },
  { num: "02", titre: "Contactez-nous", desc: "Vous avez un coup de cœur ? Écrivez-nous directement pour réserver la pièce." },
  { num: "03", titre: "Livraison sécurisée", desc: "Votre sac est emballé avec soin et livré chez vous avec certificat d'authenticité." },
]

export default function HowItWorks() {
  return (
    <section id="comment" className="px-12 py-24 bg-black text-white">
      <div className="mb-16 text-center">
        <p className="text-yellow-500 text-sm uppercase tracking-widest mb-2">Simple et transparent</p>
        <h2 className="text-4xl font-bold">Comment ça marche</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {etapes.map((e) => (
          <div key={e.num} className="text-center">
            <span className="text-5xl font-bold text-yellow-500 block mb-4">{e.num}</span>
            <h3 className="text-lg font-semibold mb-3">{e.titre}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}