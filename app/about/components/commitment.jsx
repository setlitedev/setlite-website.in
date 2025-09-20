// components/Commitment.jsx
"use client";
import Image from "next/image";

export default function Commitment() {
  return (
    <section className="relative min-h-screen bg-black text-gray-300 font-sans overflow-hidden px-6 md:px-20 py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Image Left */}
        <div className="relative w-[90%] h-[400px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/commit.jpg"
            alt="Commitment to Excellence"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Right */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-white leading-tight">
              Commitment to <span className="text-yellow-400">Excellence</span>
            </h2>
            <div className="mt-3 w-16 h-1 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Top Paragraph */}
          <div className="text-md md:text-md leading-relaxed text-gray-300 space-y-5">
            <p>
              What truly sets{" "}
              <span className="text-white font-semibold">
                Setlite Engineers
              </span>{" "}
              apart is our ability to combine technical knowledge with
              customer-focused solutions. In industries where downtime is not an
              option, we prioritize{" "}
              <span className="text-yellow-400">availability</span>,{" "}
              <span className="text-yellow-400">reliability</span>, and{" "}
              <span className="text-yellow-400">cost-effectiveness</span>.
            </p>
            <p>
              We don’t just maintain equipment—we{" "}
              <span className="text-white font-semibold">
                maximize performance
              </span>
              , extend machine life, and power progress. With our strong
              foundation and dedication to excellence, we remain true to our
              promise of being{" "}
              <span className="italic text-yellow-400">“Your Prime Movers.”</span>
            </p>
          </div>

          {/* Bottom Paragraph */}
          <div className="text-md md:text-md leading-relaxed text-gray-300 space-y-5 border-l-4 border-yellow-400 pl-6">
            <p>
              At Setlite Engineers Limited,{" "}
              <span className="text-white font-semibold">
                excellence is at the core of everything we do
              </span>
              . From precision engineering to prompt service delivery, we uphold
              the highest standards in{" "}
              <span className="text-yellow-400">quality</span>,{" "}
              <span className="text-yellow-400">reliability</span>, and{" "}
              <span className="text-yellow-400">customer satisfaction</span>.
            </p>
            <p>
              Every overhaul, spare, and solution is backed by{" "}
              <span className="text-white font-semibold">rigorous processes</span>{" "}
              and continuous improvement—ensuring{" "}
              <span className="italic text-yellow-400">maximum uptime</span> and
              performance. Excellence isn’t just a goal—it’s{" "}
              <span className="font-bold text-white">our promise</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
