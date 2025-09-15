"use client";

import { useEffect, useRef } from "react";

const Clients = () => {
  const scrollRef = useRef(null);

  const equipmentTypes = [
    { image: "/c1.png" },
    { image: "/c2.png" },
    { image: "/c3.png" },
    { image: "/c4.png" },
    { image: "/c5.png" },
    { image: "/c6.png" },
    { image: "/c7.png" },
    { image: "/c8.png" },
    { image: "/c9.png" },
    { image: "/c10.png" },
  ];

  // Duplicate items for seamless infinite scroll
  const loopedItems = [...equipmentTypes, ...equipmentTypes];

  // Infinite scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  // Scroll buttons
  const scrollBy = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">OUR <span className="text-yellow-400"> CLIENTS</span> </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Proudly serving leading companies across mining, construction, and infrastructure.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
          >
            &#10094;
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
          >
            &#10095;
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-hidden space-x-6 scrollbar-hide"
            style={{ scrollBehavior: "auto" }}
          >
            {loopedItems.map((equipment, index) => (
              <div
                key={index}
                className="w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition"
              >
                <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-[200px] h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
              </div>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Clients;
