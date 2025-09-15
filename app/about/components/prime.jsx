// components/PrimeMovers.jsx
import Image from "next/image";

const data = [
  {
    title: "YOUR PRIME MOVERS",
    description: [
      `Our philosophy, “Your Prime Movers,” reflects our commitment to being more than just a service provider—we aim to drive progress.`,
      `Just as earthmoving machines are the prime movers of industry, we act as the prime mover behind our customers’ success.`,
      `We ensure equipment runs efficiently and reliably, minimizing downtime and maximizing productivity.`,
      `The tagline embodies our promise to deliver confidence, continuity, and long-term value to our clients.`,
      `Whether it’s keeping a dumper moving in the mines, a dozer shaping infrastructure, or an excavator fueling industrial growth, we stand firmly behind the machines and industries that build India.`,
    ],
    align: "left",
  },
];

const PrimeMovers = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[70vw] mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-8">
            {/* Text Content */}
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold tracking-widest mb-10 mt-10">
                <span className="text-white">YOUR PRIME </span>
                <span className="text-yellow-500">MOVERS</span>
              </h2>
              <div className="space-y-4 text-gray-300  text-center text-lg leading-relaxed">
                {item.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrimeMovers;
