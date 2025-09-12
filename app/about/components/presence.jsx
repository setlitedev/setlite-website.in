"use client";
import Image from "next/image";

export default function Presence() {
  const sectors = [
    {
      title: "MINING & MINERALS",
      description:
        "Supporting large-scale mining operations with spares, overhauls, and maintenance solutions for heavy earthmoving machinery.",
      image: "/se1.png", // replace with actual image
    },
    {
      title: "CONSTRUCTION & INFRASTRUCTURE",
      description:
        "Delivering equipment support for high-capacity excavators, loaders, and dozers that power India's infrastructure development.",
      image: "/se2.png", // replace with actual image
    },
    {
      title: "POWER GENERATION",
      description:
        "Providing specialized services and parts for earthmoving equipment used in large power projects, ensuring reliability in critical operations.",
      image: "/se3.png", // replace with actual image
    },
    {
      title: "STEEL & CEMENT",
      description:
        "Supporting some of the largest manufacturing sectors in India with timely availability of spares and maintenance for high-demand environments.",
      image: "/se4.png", // replace with actual image
    },
    {
      title: "RAILWAYS & INDUSTRIAL PROJECTS",
      description:
        "Offering engineering expertise for projects of national importance, where equipment performance is critical to timelines and efficiency.",
      image: "/se5.png", // replace with actual image
    },
  ];

  return (
    <div className="bg-black text-gray-300 font-sans relative overflow-hidden pt-28">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-4 uppercase">
          <span className="text-white">Our Presence Across</span> Sectors
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          With decades of experience, Setlite Engineers Limited has built a
          strong presence across multiple sectors that form the backbone of
          India's growth. Our product range and services are trusted in
          industries that demand uninterrupted operations and reliable
          performance.
        </p>
      </div>

      {/* Alternating Sectors */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-24 pb-20">
        {sectors.map((sector, index) => {
          const isImageRight = index % 2 === 0; // First one on the right
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div className={`${isImageRight ? "md:order-1" : "md:order-2"} space-y-4`}>
                <h3 className="text-white text-2xl md:text-3xl font-bold">
                  {sector.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {sector.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-yellow-400 font-semibold hover:underline"
                >
                  → LEARN MORE
                </a>
              </div>

              {/* Image */}
              <div className={`${isImageRight ? "md:order-2" : "md:order-1"}`}>
                <Image
                  src={sector.image}
                  alt={sector.title}
                  width={700}
                  height={450}
                  className="rounded-lg shadow-lg w-full h-[350px] object-cover border-2 border-amber-200"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
