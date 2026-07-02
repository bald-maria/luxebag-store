import { useState } from "react"

const sacs = [
  {
    id: 1,
    nom: "Birkin 30",
    marque: "Hermès",
    prix: "120 000 FG",
    etat: "Excellent état",
    image: "/images/sac1.jpg",

    details: {
      authenticite: "Authentifié Hermès",
      matiere: "Cuir Togo premium",
      livraison: "Livraison disponible",
      couleur: "Rouge",
      autresCouleurs: "Noir, Blanc et Beige disponibles"
    }
  },

  {
    id: 2,
    nom: "Classic Flap",
    marque: "Chanel",
    prix: "150 000 FG",
    etat: "Très bon état",
    image: "/images/sac2.jpg",

    details: {
      authenticite: "Authentifié Chanel",
      matiere: "Cuir matelassé",
      livraison: "Livraison express",
      couleur: "Rose pastel",
      autresCouleurs: "Noir, Blanc et Beige disponibles"
    }
  },

  {
    id: 3,
    nom: "Neverfull MM",
    marque: "Louis Vuitton",
    prix: "100 000 FG",
    etat: "Bon état",
    image: "/images/sac3.jpg",

    details: {
      authenticite: "Authentifié Louis Vuitton",
      matiere: "Toile monogram",
      livraison: "Livraison offerte",
      couleur: "Marron",
      autresCouleurs: "Noir, Blanc et Beige disponibles"
    }
  },
  {
  id: 4,
  nom: "Speedy 25",
  marque: "Louis Vuitton",
  prix: "200 000 FG",
  etat: "Excellent état",
  image: "/images/sac4.jpg",

  details: {
    authenticite: "Authentifié Louis Vuitton",
    matiere: "Toile premium",
    livraison: "Livraison rapide",
    couleur: "Beige",
    autresCouleurs: "Noir, Blanc et Rouge disponibles"
  }
},

{
  id: 5,
  nom: "GG Marmont",
  marque: "Gucci",
  prix: "90 000 FG",
  etat: "Très bon état",
  image: "/images/sac5.jpg",

  details: {
    authenticite: "Authentifié Gucci",
    matiere: "Cuir italien",
    livraison: "Livraison disponible",
    couleur: "Blanc",
    autresCouleurs: "Rouge, Bleu et Noir disponibles"
  }
},

{
  id: 6,
  nom: "Lady Dior",
  marque: "Dior",
  prix: "120 000 FG",
  etat: "Excellent état",
  image: "/images/sac6.jpg",

  details: {
    authenticite: "Authentifié Dior",
    matiere: "Cuir cannage",
    livraison: "Livraison express",
    couleur: "Blanc",
    autresCouleurs: "Noir, Vert et Beige disponibles"
  }
}
]

export default function Collection() {

  const [openId, setOpenId] = useState(null)

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="collection" className="px-12 py-24 bg-white">

      <div className="mb-12">
        <p className="text-yellow-600 text-sm uppercase tracking-widest mb-2">
          Sélection exclusive
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          Notre Collection
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {sacs.map((sac) => (

          <div
            key={sac.id}
            className="group border border-gray-100 hover:border-yellow-400 transition bg-white"
          >

            {/* Image */}
            <div className="overflow-hidden bg-gray-50 h-64">
              <img
                src={sac.image}
                alt={sac.nom}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Infos */}
            <div className="p-5">

              <p className="text-xs text-yellow-600 uppercase tracking-widest mb-1">
                {sac.marque}
              </p>

              <h3 className="text-lg font-semibold mb-1">
                {sac.nom}
              </h3>

              <p className="text-xs text-gray-400 mb-4">
                {sac.etat}
              </p>

              <div className="flex justify-between items-center">

                <span className="text-xl font-bold text-gray-900">
                  {sac.prix}
                </span>

                <button
                  onClick={() => toggleDetails(sac.id)}
                  className="text-xs bg-black text-white px-4 py-2 hover:bg-yellow-600 transition"
                >
                  {openId === sac.id ? "Fermer" : "Détails"}
                </button>

              </div>

              {/* Détails */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openId === sac.id
                    ? "max-h-60 mt-6"
                    : "max-h-0"
                }`}
              >

                <div className="border-t pt-4 text-sm text-gray-600 space-y-2">

                  <p> {sac.details.authenticite}</p>

                  <p> {sac.details.matiere}</p>

                  <p> {sac.details.livraison}</p>

                  <p> Couleur : {sac.details.couleur}</p>

                  <p> Autres couleurs : {sac.details.autresCouleurs}</p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}