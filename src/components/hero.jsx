

const Hero = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/images/ship-1.jpg')` }}
    >
      {/* Content inside the hero image */}
    <div className="relative z-10 text-white text-center bg-white/70 px-6 py-4 rounded-lg">
      <h2 className="text-4xl font-bold text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">About Us</h2>
      <p className="mt-2 text-sm text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
         <span className="text-gray-700 font-semibold">Home</span> &gt; <span className="font-bold">About Us</span>
      </p>
    </div>
    </section>
  );
};

export default Hero;
