
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      role: "Mãe de 2 (4 e 7 anos)",
      content: "Aqui em casa diminuiu muito o uso do celular e aumentaram os momentos juntos. O guia é prático e salva meus dias!",
      avatar: "https://i.ibb.co/svxY5mfW/N-o-romantize-as-rela-es-de-trabalho-sua.jpg"
    },
    {
      name: "Ricardo Mendes",
      role: "Pai do Léo (5 anos)",
      content: "Eu nunca sabia o que inventar quando chegava do trabalho. Agora é só abrir o PDF e escolher uma. Meu filho adora!",
      avatar: "https://i.ibb.co/XxG2FGxZ/Pai-e-Filha-Meus-amores-fazem-o-meu-cora-o.jpg"
    },
    {
      name: "Juliana Costa",
      role: "Mãe da Bia (3 anos)",
      content: "Material de altíssima qualidade. As brincadeiras sensoriais são as favoritas da Bia. Recomendo para todos os pais.",
      avatar: "https://i.ibb.co/4Z0qTLZ1/Dolores-Aveiro-descobre-talento-aos-65-anos-Uma-caixa-de-surpresas.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">O que outros pais estão dizendo</h2>
          <div className="flex justify-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:border-blue-200 transition-colors">
              <div className="mb-6 flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-16 h-16 rounded-full border-2 border-slate-100 object-cover shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
              <p className="text-slate-900 font-medium italic leading-relaxed flex-grow">
                "{rev.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
