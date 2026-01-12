import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Target, Users, Brain, Home, ChevronLeft, ChevronRight } from 'lucide-react';

const Solution: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevImgRef = useRef(0);
  
  const images = [
    "https://i.ibb.co/tT9Ls7ks/image.png",
    "https://i.ibb.co/0pj2fk48/Chat-GPT-Image-6-de-jan-de-2026-18-04-26.png",
    "https://i.ibb.co/sv3XcY1p/Screenshot-2026-01-05-21-50-34-697-com-instagram-android-2.jpg",
    "https://i.ibb.co/pcqW3Y6/Screenshot-2026-01-05-21-54-02-481-com-instagram-android-2.jpg",
    "https://i.ibb.co/Ldb0Z6fp/Screenshot-2026-01-05-11-22-14-086-com-google-android-apps-photosgo-2.jpg",
    "https://i.ibb.co/vCpFLXBJ/Screenshot-2026-01-05-11-22-17-392-com-google-android-apps-photosgo-3.jpg",
    "https://i.ibb.co/nqRsr52g/Screenshot-2026-01-05-11-21-52-667-com-google-android-apps-photosgo-2.jpg",
    "https://i.ibb.co/VWKjpstn/Screenshot-2026-01-05-11-22-07-093-com-google-android-apps-photosgo-2.jpg"
  ];

  const changeImage = useCallback((nextIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    prevImgRef.current = currentImg;
    setCurrentImg(nextIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [currentImg, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        const nextIdx = currentImg === images.length - 1 ? 0 : currentImg + 1;
        changeImage(nextIdx);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImg, isTransitioning, changeImage, images.length]);

  const nextSlide = () => changeImage(currentImg === images.length - 1 ? 0 : currentImg + 1);
  const prevSlide = () => changeImage(currentImg === 0 ? images.length - 1 : currentImg - 1);

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ideias prontas",
      desc: "Para todos os dias das férias, sem precisar pesquisar nada."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vínculo forte",
      desc: "Fortalece a conexão entre pais e filhos através do riso."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Estimula a mente",
      desc: "Desenvolve criatividade, autonomia e regulação emocional."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Versatilidade",
      desc: "Funciona perfeitamente em casa, viagens ou no quintal."
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-800 overflow-hidden relative border-y border-slate-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[160px] opacity-40 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-slate-900 leading-tight">
              A solução está em brincadeiras simples e bem direcionadas
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-500 leading-tight">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-white ring-1 ring-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
              
              <div className="relative w-full aspect-[3/4] md:aspect-auto bg-slate-50 flex items-center justify-center min-h-[400px] overflow-hidden">
                {images.map((img, index) => {
                  const isActive = index === currentImg;
                  const isPrev = index === prevImgRef.current && isTransitioning;
                  
                  return (
                    <div 
                      key={index}
                      className={`absolute inset-0 w-full h-full flex items-center justify-center bg-slate-50 transition-all duration-300
                        ${isActive ? 'z-10' : 'z-0'} 
                        ${isActive || isPrev ? 'opacity-100' : 'opacity-0'}
                      `}
                    >
                      <img 
                        src={img} 
                        alt={`Preview Material ${index + 1}`} 
                        className={`w-full h-auto max-h-[600px] object-contain shadow-2xl rounded-sm will-change-transform
                          ${isPrev ? 'page-transition-out' : ''}
                          ${isActive && isTransitioning ? 'page-transition-in' : ''}
                        `}
                        style={{ backfaceVisibility: 'hidden' }}
                      />
                      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/5 to-transparent z-20 pointer-events-none"></div>
                    </div>
                  );
                })}

                <button 
                  onClick={(e) => { e.preventDefault(); prevSlide(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); nextSlide(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                  {images.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => changeImage(i)}
                      className={`h-2 rounded-full transition-all ${i === currentImg ? 'w-8 bg-blue-600' : 'w-2 bg-white/60'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[3rem] rotate-12 -z-10 shadow-xl shadow-orange-200 animate-bounce-subtle"></div>
            <div className="absolute inset-0 bg-blue-400/10 blur-[100px] -z-20 rounded-full scale-150 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;