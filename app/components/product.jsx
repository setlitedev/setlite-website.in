"use client";
import Image from "next/image";

const Products = () => {
  const products = [
    { icon: "/prr1.png" },

    { icon: "/pro3.png" },
    { icon: "/pro4.png" },
    { icon: "/pro5.png" },
    { icon: "/hem.png" },
  ];

  const services = [
    { icon: "/ser.png" },
    { icon: "/e2.png" },
    { icon: "/e3.png" },
    { icon: "/ser1.png" },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 text-white">
        {/* PRODUCTS SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani mb-4">
            OUR PRODUCTS
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            High-performance parts and machinery designed to deliver reliability
            in every operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#272B30] rounded-2xl shadow-md group transform transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_0_35px_#FBC400]"
            >
              <div className="p-6 flex items-center justify-center relative">
                <Image
                  src={product.icon}
                  alt={`Product ${index + 1}`}
                  width={400}
                  height={500}
                  className="object-contain h-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ overflow: "visible" }} // ensures scaling outside
                />
              </div>
            </div>
          ))}
        </div>

        {/* SERVICES SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani mb-4">
            OUR SERVICES
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            End-to-end solutions to keep your heavy machinery reliable,
            efficient, and always ready for work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#272B30] rounded-2xl shadow-md group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_#FBC400]"
            >
              <div className="p-6 flex items-center justify-center relative">
                <Image
                  src={service.icon}
                  alt={`Service ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ overflow: "visible" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
