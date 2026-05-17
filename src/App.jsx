export default function RomanticSurpriseApp() {
  const loveMessages = [
    "You are the best thing that ever happened to me 💖",
    "Thank you for accepting me exactly as I am ✨",
    "Your smile makes every bad day disappear 🌸",
    "I will always be here for you no matter what 💕",
    "You deserve all the happiness in the world ❤️",
    "Happy Sweet 16 Jeanne Rosary 🎂",
  ];

  const memories = [
    {
      title: "Your Smile",
      description: "Your smile always brightens my entire world.",
      emoji: "🌸",
    },
    {
      title: "Your Kindness",
      description: "You always make people around you feel loved.",
      emoji: "💖",
    },
    {
      title: "Your Presence",
      description: "Life feels complete when you are beside me.",
      emoji: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 text-pink-900 overflow-hidden">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 relative">

        <div className="absolute top-10 left-10 text-6xl animate-pulse">💖</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce">✨</div>

        <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-6">
          Happy Sweet 16 Jeanne Rosary 🎂❤️
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl text-pink-700 mb-10 leading-relaxed">
          Thank you for accepting me exactly as I am.
          On your special day, I just want you to know how much you mean to me ✨
        </p>

        <button
          onClick={() =>
            alert("Happy Birthday Jeanne Rosary 💖 I will always love you ✨")
          }
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl shadow-2xl text-lg"
        >
          Open Your Birthday Surprise 🎁
        </button>
      </section>

      {/* MEMORIES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-12">
          Things I Love About You 💕
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-pink-200 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{memory.emoji}</div>
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                {memory.title}
              </h3>
              <p className="text-pink-700 leading-relaxed">
                {memory.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 shadow-2xl border border-pink-200">

          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-8">
            A Video For Jeanne 🎥💖
          </h2>

          <video
            className="w-full max-w-full rounded-3xl shadow-2xl border border-pink-200"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/jeanne.mp4" type="video/mp4" />
          </video>

        </div>
      </section>

      {/* MINI GAME */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-8">
          Romantic Mini Game 🎮💕
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {loveMessages.map((msg, index) => (
            <button
              key={index}
              onClick={() => alert(msg)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-110 transition-all duration-300 text-white rounded-2xl py-5 px-6 shadow-2xl text-lg font-semibold"
            >
              Love Box #{index + 1} 🎁
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-pink-700 font-semibold">
        Made with love ❤️
      </footer>
    </div>
  );
}