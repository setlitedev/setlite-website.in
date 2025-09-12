// components/Current.jsx
import Image from "next/image";

const timelineData = [
  {
    year: "2025",
    title: "Currently",
    description: `Setlite Engineers Limited is a trusted name in earthmoving equipment, spares, and servicing, supporting India's mining, construction, power, steel, cement, and railway sectors. As a preferred partner for OEMs, we deliver end-to-end solutions—from ex-stock spares to complete overhauls of engines, transmissions, and heavy machinery like excavators, loaders, and dozers.

Our upcoming 1.3-acre state-of-the-art facility, set for 2025 in Northern India and strategically located near a major port with direct access to Delhi Airport, will be a premier MRO hub. Equipped with advanced technology, diagnostic tools, and staffed by factory-trained engineers, it will ensure seamless logistics, faster turnaround, and unmatched reliability—setting new benchmarks in heavy equipment servicing across the region.`,
    image: "/current1.jpg", // ✅ fixed extension
    align: "left",
  },
];

const Current = () => {
  return (
    <div className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px", // size of grid boxes
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
    
    


      </div>
    </div>
  );
};

export default Current;
