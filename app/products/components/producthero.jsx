const ProductHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/proimage.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex w-[85vw] md:w-[75vw] lg:w-[70vw] flex-col text-left px-4 sm:px-6 lg:px-8 mt-10">
        {/* Heading */}
        <h1 className="mb-6 text-3xl sm:text-4xl md:text-3xl lg:text-[36px] font-bold leading-relaxed uppercase">
          <span className="block text-white">Powering the</span>
          <span className="block text-white">Future of</span>
          <span className="block text-yellow-500">Heavy Machinery</span>
        </h1>

        {/* Paragraph */}
        <p className="max-w-3xl mb-8  sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 leading-relaxed">
          Engines, Transmissions & Spares engineered for unmatched performance in mining, construction & earthmoving.
        </p>
      </div>
    </section>
  );
};

export default ProductHero;
