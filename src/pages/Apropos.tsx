import React, { useRef, useState } from "react";
import spotVideo from "../assets/videos/spot.mp4";

// 🔹 Ajoute ici tes images locales
import hnd from "../assets/images/hnd.jpeg";
import licence from "../assets/images/licence.jpeg";
import master from "../assets/images/master.jpeg";

import louvin from "../assets/images/louvin.jpg";
import dschang from "../assets/images/uni_dschang.jpg";
import bruxelles from "../assets/images/uni-bruxelles.jpg";

import staffKouam from "../assets/images/kouam_mme.jpeg";
import staffNjoya from "../assets/images/kouam_m.jpeg";
import staffTchatchoua from "../assets/images/binam.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// === CAROUSEL ===
const carouselItems = [
  {
    title: "Excellence Académique",
    desc: "Un programme conçu pour répondre aux exigences du monde actuel.",
    image: "https://via.placeholder.com/1200x500?text=Excellence+Académique",
  },
  {
    title: "Technologies Modernes",
    desc: "Des infrastructures adaptées aux sciences et technologies émergentes.",
    image: "https://via.placeholder.com/1200x500?text=Technologies+Modernes",
  },
  {
    title: "Formateurs Experts",
    desc: "Un encadrement assuré par des enseignants hautement qualifiés.",
    image: "https://via.placeholder.com/1200x500?text=Formateurs+Experts",
  },
  {
    title: "Insertion Professionnelle",
    desc: "Une formation orientée vers l’emploi et l’entrepreneuriat.",
    image:
      "https://via.placeholder.com/1200x500?text=Insertion+Professionnelle",
  },
  {
    title: "Partenariats Stratégiques",
    desc: "Des collaborations avec des universités et entreprises de renom.",
    image: "https://via.placeholder.com/1200x500?text=Partenaires",
  },
  {
    title: "Vie Étudiante Riche",
    desc: "Un environnement stimulant et favorable à l’épanouissement.",
    image: "https://via.placeholder.com/1200x500?text=Vie+Étudiante",
  },
];

const Apropos: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) videoRef.current.volume = vol;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-24">
      {/* === CAROUSEL === */}
      <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12">
        <Carousel className="h-full">
          <CarouselContent className="h-full flex">
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="relative w-full flex-shrink-0 h-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6 rounded-3xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-white text-lg md:text-xl max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-yellow-500 rounded-full p-2 shadow-lg hover:bg-yellow-600" />
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-yellow-500 rounded-full p-2 shadow-lg hover:bg-yellow-600" />
        </Carousel>
      </div>

      {/* === VIDEO === */}
      <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
        >
          <source src={spotVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 z-10 bg-black/40 flex flex-col justify-center items-center text-center px-6 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Bienvenue à l'ISSTEK
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              Institut Supérieur des Sciences et Technologies Kouam – Excellence
              et innovation au service de la réussite.
            </p>
            <button
              onClick={handlePlayVideo}
              className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              Lancer la vidéo
            </button>
          </div>
        )}

        {isPlaying && (
          <div className="absolute bottom-4 left-4 bg-black/40 p-3 rounded-lg flex items-center space-x-4">
            <button
              onClick={isPlaying ? handlePauseVideo : handlePlayVideo}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-gray-900 font-semibold"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <label className="text-white flex items-center space-x-2">
              Volume
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={handleVolumeChange}
              />
            </label>
          </div>
        )}
      </div>

      {/* === QUI SOMMES-NOUS === */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          L’Institut Supérieur des Sciences et Technologies Kouam (ISSTEK) est
          un établissement d’enseignement supérieur dont la mission est de
          former des leaders compétents, innovants et responsables dans les
          domaines scientifiques et technologiques.
        </p>
      </section>

      {/* === CYCLES DE FORMATIONS === */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Cycles de Formations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "HND / BTS", img: hnd },
            { name: "Licence / Licence Pro", img: licence },
            { name: "Master / Master Pro", img: master },
          ].map((cycle, idx) => (
            <Card
              key={idx}
              className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow py-0"
            >
              <img
                src={cycle.img}
                alt={cycle.name}
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {cycle.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Programmes académiques orientés vers la pratique et la
                  recherche pour une meilleure insertion professionnelle.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === PARTENAIRES === */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Partenaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Université de Dschang", img: dschang },
            { name: "Université  de Louvin", img: louvin },
            { name: "Université libre de Bruxelles", img: bruxelles },
          ].map((partner, idx) => (
            <Card
              key={idx}
              className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow py-0"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="h-40 w-full object-cover bg-white"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {partner.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Collaboration stratégique avec {partner.name} pour renforcer
                  l’apprentissage et les opportunités professionnelles.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === STAFF ADMINISTRATIF === */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Staff Administratif
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Mme. Kouam", role: "Directeur", img: staffKouam },
            {
              name: "Mr. Kouam Etienne",
              role: "PDG",
              img: staffNjoya,
            },
            {
              name: "Mr. Binam Alphonse Donatien",
              role: "Coordonnateur",
              img: staffTchatchoua,
            },
          ].map((staff, idx) => (
            <Card
              key={idx}
              className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={staff.img}
                alt={staff.name}
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {staff.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{staff.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === CONTACT === */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">
          Yaoundé – Etoug-Ebé, face Collège de l’Espérance <br />
          Email : isstek@gmail.com <br />
          Tél : +237 677 699 402 / 699 101 557
        </p>
      </section>
    </div>
  );
};

export default Apropos;
