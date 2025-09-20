import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "../../data/products"; // adjust path
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function ProductPage({ params }) {
  const { id } = await params; // ✅ await params
  const product = products[id];

  if (!product) return notFound();

  return (
    <div className="min-h-screen  bg-[#0D0F12] text-white">
  <section
  className="
    relative h-[80vh] flex items-center justify-center
    bg-cover bg-center bg-no-repeat
  "
  style={{ backgroundImage: "url('/avban.png')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

  {/* Container */}
  <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mx-auto flex flex-col text-left z-10 px-4 sm:px-6 lg:px-8 mt-10">
    {/* Heading */}
    <h1 className="text-2xl md:text-[36px]  font-bold mb-6 leading-relaxed uppercase">
      <span className="block text-white">Delivering</span>
      <span className="block text-white">Precision & Power</span>
      <span className="block text-yellow-500">AVTEC TRANSMISSION</span>
    </h1>

    {/* Paragraph */}
    <div className="max-w-3xl">
      <p className="text-base sm:text-lg md:text-lg  text-gray-300 mb-8 leading-relaxed">
        AVTEC transmission systems for heavy-duty machines.
      </p>
    </div>
  </div>
</section>

      {/* Title */}
      <div className="text-center mb-20 mt-20 ">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-3xl font-bold tracking-wide text-white drop-shadow-md">
            {product.title1}
          </h1>
          <h1 className="text-3xl font-bold tracking-wide text-yellow-400 drop-shadow-md">
            {product.title2}
          </h1>
        </div>
        <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
          {product.description}
        </p>
      </div>

      {/* Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20 max-w-6xl mx-auto px-4">
        {product.types.map((type, idx) => (
          <div
            key={idx}
            className="bg-[#1A1D21] rounded-xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500"
          >
      
            {/* Image */}
            {type.image && (
              <Image
                src={type.image}
                alt={type.name}
                width={500}
                height={500}
                className="w-full h-56 object-contain bg-black/20"
              />
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">
                {type.name}
              </h2>

              <ul className="space-y-3 mb-6">
                {type.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-yellow-400">&#10003;</span>
                    <span>
                      <strong>{spec.label}:</strong> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* VIEW button */}
              <Link href={`/products/${id}/${idx}`}>
                <button className="mt-auto bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition ">
                  VIEW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}
