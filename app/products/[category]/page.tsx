import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

const categories = {
  "fine-fragrances": {
    title: "Fine Fragrances",
    image: "/images/products/frangrance_product.png",
    description:
      "Our Fine Fragrances collection is crafted with premium ingredients and innovative fragrance compositions. Designed to leave a lasting impression, these products combine sophistication, elegance, and long-lasting performance for modern consumers.",

    items: [
      {
        title: "Spray Perfumes",
        description:
          "Premium spray perfumes developed using high-quality fragrance oils and carefully balanced notes. Ideal for daily wear and luxury perfume brands, offering exceptional longevity and a refined scent experience.",
      },
      {
        title: "Roll-ons / Attars",
        description:
          "Alcohol-free concentrated fragrance oils inspired by traditional perfumery. These formulations provide rich aromas, long-lasting performance, and are suitable for customers seeking authentic fragrance experiences.",
      },
      {
        title: "Body Mists",
        description:
          "Light and refreshing fragrance sprays designed for everyday use. Body mists provide a subtle scent profile that keeps users feeling fresh and confident throughout the day.",
      },
    ],
  },

  "air-care": {
    title: "Air Care",
    image: "/images/aircare.jpg",
    description:
      "Our Air Care solutions are designed to create pleasant, inviting, and memorable environments. From homes and offices to hospitality spaces, these fragrances enhance ambiance and deliver long-lasting freshness.",

    items: [
      {
        title: "Candles",
        description:
          "Premium scented candles crafted to create relaxing and luxurious environments. Available in a variety of fragrance profiles suitable for home and commercial use.",
      },
      {
        title: "Reed Diffusers",
        description:
          "Elegant fragrance diffusion systems that continuously release scent into indoor spaces, providing consistent freshness without electricity or flames.",
      },
      {
        title: "Incense Sticks",
        description:
          "Traditional aromatic incense sticks designed for spiritual, relaxation, and wellness experiences, offering rich and soothing fragrances.",
      },
      {
        title: "Bakhoor",
        description:
          "Exotic fragrance blends inspired by Middle Eastern traditions. Bakhoor products provide rich, warm, and luxurious aromatic experiences.",
      },
    ],
  },

  "personal-care": {
    title: "Personal Care",
    image: "/images/personalcare.jpg",
    description:
      "Our Personal Care fragrance solutions enhance beauty, wellness, and self-care products. Each fragrance is carefully developed to complement product performance and improve consumer experience.",

    items: [
      {
        title: "Cosmetics",
        description:
          "Specialized fragrance formulations for cosmetic products that enhance product appeal while maintaining compatibility with beauty formulations.",
      },
      {
        title: "Skin Care",
        description:
          "Gentle and sophisticated fragrance compositions suitable for skincare products including creams, lotions, serums, and cleansers.",
      },
      {
        title: "Hair Care",
        description:
          "Long-lasting fragrance solutions for shampoos, conditioners, hair oils, and styling products, providing freshness throughout the day.",
      },
      {
        title: "Beauty Soaps",
        description:
          "Premium fragrance blends developed specifically for beauty soaps, delivering a luxurious cleansing and sensory experience.",
      },
    ],
  },

  "home-care": {
    title: "Home Care",
    image: "/images/homecare.jpg",
    description:
      "Our Home Care fragrances transform everyday cleaning products into refreshing experiences. Designed for performance and freshness, these solutions help create cleaner and more pleasant living spaces.",

    items: [
      {
        title: "Laundry Care",
        description:
          "Fresh and long-lasting fragrance solutions for detergents, fabric softeners, and laundry products that keep clothes smelling pleasant after every wash.",
      },
      {
        title: "Floor Cleaners",
        description:
          "Refreshing fragrance compositions developed for floor cleaning products, leaving spaces feeling clean, hygienic, and welcoming.",
      },
      {
        title: "Bathroom Care",
        description:
          "Advanced fragrance systems that help eliminate unpleasant odors while providing lasting freshness in bathroom cleaning applications.",
      },
      {
        title: "Handwash",
        description:
          "Pleasant and skin-friendly fragrance blends suitable for liquid handwash products, delivering freshness with every use.",
      },
    ],
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data =
    categories[category as keyof typeof categories];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-[#f7fdf9] via-white to-[#eef7f1] min-h-screen pt-28 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[350px] md:h-[500px] object-cover"
            />
          </div>

          <div className="mt-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              {data.title}
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-[#308D46]/10 flex items-center justify-center mb-6">
                  <span className="text-[#308D46] font-bold text-xl">
                    {index + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}