import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Shirt, Share2, Clock, Sparkles, Music, Zap, Star, Heart } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isPartyTime, setIsPartyTime] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Target date: August 23, 2025, 12:00 PM
  const targetDate = new Date('2025-08-23T12:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsPartyTime(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Función para manejar la carga del video
  const handleVideoLoad = () => {
    console.log('Video cargado exitosamente');
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error al reproducir video:', error);
      });
    }
  };

  // Función para manejar errores del video
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Error cargando video:', e);
    setVideoError(true);
    setVideoLoaded(false);
  };

  // Intentar reproducir el video cuando el usuario interactúe
  const handleUserInteraction = () => {
    if (videoRef.current && !videoLoaded) {
      videoRef.current.play().catch(console.error);
    }
  };

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: '🎉 SATURDAY NIGHT PARTY - CUMPLE #15 ANDRÉS 🎉',
        text: '¡LA FIESTA MÁS ÉPICA DEL AÑO! Celebra conmigo mi cumpleaños número 15! 23 de Agosto 2025 🔥💚',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado! 🎉 ¡Comparte la fiesta!');
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans" onClick={handleUserInteraction}>
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            onError={handleVideoError}
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3C/svg%3E"
          >
            <source src="./cositas.mp4" type="video/mp4" />
            <source src="./Visuales.mp4" type="video/mp4" />
            <source src="/cositas.mp4" type="video/mp4" />
            <source src="/Visuales.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
        ) : null}
        
        {/* Fallback gradient animado si el video no carga */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-green-800 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/10 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Audio de fondo (opcional) */}
      <audio ref={audioRef} loop className="hidden">
        <source src="/musica-fondo.mp3" type="audio/mpeg" />
        <source src="/musica-fondo.ogg" type="audio/ogg" />
      </audio>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center pt-8 pb-6">
          <div className="inline-flex items-center gap-3">
            <Music className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg tracking-wider">SATURDAY NIGHT PARTY</span>
            <Music className="w-6 h-6 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white drop-shadow-2xl">
            El cumpleaños de 
          </h1>
          
          <div className="text-3xl md:text-4xl font-black text-white mb-6">
            <span className="text-green-400 drop-shadow-lg">
              🎊 ANDRÉS 🎊
            </span>
          </div>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl font-bold text-white">
            <span className="text-green-300 drop-shadow-lg">
              Recuerda, Los Tiempos Malos No Son Para Siempre 🔥💵💥
            </span>
          </div>
        </header>

        {/* Countdown Timer */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-5xl">
            {isPartyTime ? (
              <div className="text-center mb-8">
                <h2 className="text-5xl md:text-7xl font-black text-green-400 mb-6 drop-shadow-2xl">
                  🎉🔥 ¡PARTY TIME! 🔥🎉
                </h2>
                <p className="text-3xl text-white font-bold drop-shadow-lg">¡Ya Comenzo Esta Guevonada!</p>
                <div className="text-6xl mt-4">🎊</div>
              </div>
            ) : (
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl text-white mb-10 font-black drop-shadow-lg">
                  ⚡ FALTA SOLO... ⚡
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: 'DÍAS', value: timeLeft.days, emoji: '📅' },
                    { label: 'HORAS', value: timeLeft.hours, emoji: '⏰' },
                    { label: 'MINUTOS', value: timeLeft.minutes, emoji: '⚡' },
                    { label: 'SEGUNDOS', value: timeLeft.seconds, emoji: '🔥' }
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="bg-black/60 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-6 hover:border-green-400 transition-all duration-300 shadow-2xl"
                    >
                      <div className="text-3xl mb-3">
                        {item.emoji}
                      </div>
                      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tabular-nums drop-shadow-lg">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-white font-bold text-sm md:text-base tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Details Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Date & Time Card */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-600 rounded-full">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">FECHA & HORA</h3>
                </div>
                <p className="text-white font-bold text-xl mb-3">
                  🗓️ <strong>23 DE AGOSTO 2025</strong>
                </p>
                <p className="text-white/90 text-lg font-semibold">
                  🕐 12:00 PM - ¡HASTA EL AMANECER! 🌅
                </p>
              </div>

              {/* Location Card */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-600 rounded-full">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">UBICACIÓN</h3>
                </div>
                <p className="text-white font-bold text-lg leading-relaxed">
                  📍 <strong>CARACAS, CARAPITA</strong><br />
                  🏠 El Manguito<br />
                  🛣️ Subida El Progreso<br />
                  🎯 Calle Real La Chinita
                </p>
              </div>

              {/* Guest Info Card */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-600 rounded-full">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">INVITADOS VIP</h3>
                </div>
                <p className="text-white font-bold text-lg">
                  🎊 <strong>ANDRÉS/CELEBRATION</strong><br />
                  <span className="text-white/90 text-base">¡Te Esperamos!</span>
                </p>
                <div className="mt-4 text-3xl">🥳👥🎉</div>
              </div>

              {/* Dress Code Card */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-600 rounded-full">
                    <Shirt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">CODIGO DE VESTIMENTA</h3>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full border-4 border-white"></div>
                  <p className="text-white font-black text-2xl">
                    💚 VERDE 💚
                  </p>
                </div>
                <p className="text-white/90 font-semibold">¡No Obligatorio Gafo! ✨</p>
              </div>
            </div>

            {/* Share Button */}
            <div className="text-center">
              <button
                onClick={shareEvent}
                className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-400"
              >
                <Share2 className="w-6 h-6" />
                🚀 COMPARTE ESTA VAINA FUEGO 🚀
                <Sparkles className="w-6 h-6" />
              </button>
              
              <p className="text-white/90 mt-4 font-bold drop-shadow-lg">
                Mas Info al 04126282524🤖
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="text-2xl mb-4">🎊🔥🎉🔥🎊</div>
          <p className="text-white text-lg font-bold drop-shadow-lg">
            ✨ RECUERDA LLEVAR TU BEBIDA MAMAGUEVO ✨
          </p>
          <p className="text-white/80 text-sm mt-2 font-semibold">
            🎵 Tech house • 💃 Salsa • 🍰 Afro • 🎁 Merengue+ 🎵
          </p>
        </footer>
      </div>

      {/* Floating Action Element */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-2xl">
          <Music className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Debug info (solo en desarrollo) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
          Video: {videoLoaded ? '✅ Cargado' : videoError ? '❌ Error' : '⏳ Cargando...'}
        </div>
      )}
    </div>
  );
}

export default App;