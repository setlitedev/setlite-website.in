const Enginehero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/et.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

      {/* Container */}
      <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mx-auto flex flex-col text-left z-10 px-4 sm:px-6 lg:px-8 mt-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-3xl md:text-[36px]  font-bold mb-6 leading-relaxed uppercase">
          <span className="block text-white">ENGINE
</span>
          <span className="block text-white"> AND</span>
          <span className="block text-yellow-500">TRANSMISSION</span>
        </h1>

        {/* Paragraph & Button */}
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg text-gray-300 mb-8 leading-relaxed w-lg">
           Engines and Transmissions  for unmatched performance in mining, construction & earthmoving.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default Enginehero;
