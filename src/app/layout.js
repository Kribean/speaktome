import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Speak To Me - Apprentissage ludique et interactif de l'anglais pour enfants et ados en Guadeloupe",
  description: "Speak To Me est une entreprise basée en Guadeloupe, spécialisée dans l'apprentissage interactif de l'anglais pour enfants et adolescents. Découvrez nos programmes adaptés à chaque tranche d'âge pour apprendre l'anglais tout en s'amusant.",
  keywords: "apprentissage anglais Guadeloupe, cours d'anglais enfants, anglais interactif, enfants ados anglais, Speak To Me Guadeloupe, cours d'anglais ludiques, petits groupes",
  author: "Speak To Me Club",
  robots: "index, follow",
  og: {
    title: "Speak To Me - Apprentissage ludique de l'anglais pour enfants et ados",
    description: "Découvrez Speak To Me en Guadeloupe, des cours d'anglais interactifs et adaptés pour enfants et adolescents.",
    url: "https://www.speaktome.club",
    image: "/images/speaktome_hero.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak To Me - Apprentissage interactif de l'anglais",
    description: "Des cours d'anglais pour enfants et adolescents en Guadeloupe, avec une approche ludique et immersive.",
    image: "/images/speaktome_hero.jpeg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
