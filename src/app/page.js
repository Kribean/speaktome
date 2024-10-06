import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/speaktome_hero.jpeg)", // Image d'arrière-plan locale
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to SpeakToMe Club!</h1>
            <p className="mb-5">
              Apprentissage ludique et interactif de l'anglais pour enfants et ados.
            </p>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="bg-white p-6">
        <section className="max-w-4xl mx-auto">
          {/* Message Section */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-pink-600">Chez SpeakToMe</h2>
            <p className="mt-4 text-lg text-gray-700">
              Nous sommes ravis d'accompagner vos enfants dans l'apprentissage de l'anglais de manière ludique et interactive.
              Ici, chacun apprend à son rythme, en petits groupes, tout en s'amusant.
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Notre mission est de cultiver la confiance et l’enthousiasme pour l'anglais dès le plus jeune âge.
              Ensemble, découvrons le plaisir d'apprendre une nouvelle langue !
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-pink-600">Découvrez SpeakToMe en vidéo</h3>
            <iframe
              className="w-full h-64 mt-4 rounded-lg"
              src="https://www.youtube.com/embed/oIJt652g9IA"
              title="SpeakToMe Video"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          {/* Horaires Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-pink-600 text-center">Horaires Flexibles</h3>
            <p className="mt-4 text-lg text-gray-700 text-center">
              Découvrez nos horaires flexibles adaptés à chaque tranche d'âge pour des cours en petits groupes.
            </p>
            <div className="mt-4 text-center">
              <Image src="/images/horairespm.png" className="w-full" width="500" height="500" alt="horaire speak to me" />
            </div>
          </div>

          {/* Cours / Groupes Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-pink-600 text-center">Nos Programmes</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Little Speaker Club */}
              <div className="card bg-white shadow-md rounded-lg p-4">
                <h4 className="text-xl font-semibold text-pink-600">Little Speaker Club</h4>
                <p className="mt-2 text-gray-700">
                  Pour les enfants de 3 à 8 ans, apprendre l'anglais en s'amusant avec des activités interactives.
                </p>
              </div>

              {/* SpeakToMe Kids */}
              <div className="card bg-white shadow-md rounded-lg p-4">
                <h4 className="text-xl font-semibold text-pink-600">SpeakToMe Kids</h4>
                <p className="mt-2 text-gray-700">
                  Un programme pour les enfants de 8 à 12 ans, renforçant leur confiance en anglais avec des jeux et activités.
                </p>
              </div>

              {/* SpeakToMe Teens */}
              <div className="card bg-white shadow-md rounded-lg p-4">
                <h4 className="text-xl font-semibold text-pink-600">SpeakToMe Teens</h4>
                <p className="mt-2 text-gray-700">
                  Pour les adolescents, des cours interactifs pour améliorer l'expression orale et la compréhension en anglais.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-pink-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-pink-600">Contactez-nous</h3>
            <p className="mt-4 text-lg text-gray-700">
              📞 Téléphone : 0696 24 78 04 / 0690 70 14 38 <br />
              ✉️ Email : <a href="mailto:speaktome971@gmail.com" className="text-pink-600 underline">speaktome971@gmail.com</a> <br />
              📍 Adresse : Route de Boisvin, Beausoleil, Les Abymes
            </p>
            <p className="mt-2 text-lg text-gray-700">Nous vous répondrons dans les plus brefs délais !</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-500 p-6 text-white text-center">
        <p>&copy; 2024 SpeakToMe Club - Tous droits réservés</p>
      </footer>
    </div>
  );
}
