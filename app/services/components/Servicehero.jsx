const Servicehero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/service.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex w-[85vw] md:w-[75vw] lg:w-[70vw] flex-col text-left px-4 sm:px-6 lg:px-8 mt-10">
        {/* Heading */}
        <h1 className="mb-6 text-3xl md:text-[36px] font-bold leading-relaxed uppercase">
          <span className="block text-white">Maximise Equipment Uptime With</span>
          <span className="block text-yellow-500">Expert Service</span>
        </h1>

        {/* Paragraph */}
        <p className="max-w-3xl mb-8 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 leading-relaxed">
          Trusted expertise that keeps your heavy machinery working harder, longer. Engines, Transmissions & Spares engineered for unmatched performance in mining, construction & earthmoving.
        </p>
      </div>
    </section>
  );
};

export default Servicehero;
