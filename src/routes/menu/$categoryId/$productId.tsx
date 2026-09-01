import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/menu/$categoryId/$productId")({
  component: ProductPage,
});

const mockProducts: Record<string, { name: string; price: number; description: string }> = {
  classic:   { name: "Classic",   price: 349, description: "Our timeless classic — made fresh every morning with the finest ingredients. A crowd favourite that never disappoints." },
  premium:   { name: "Premium",   price: 499, description: "A step above the rest. Premium ingredients, premium taste. For those who appreciate the finer things in life." },
  signature: { name: "Signature", price: 699, description: "Our chef's own creation — a signature recipe that's exclusive to Danbro. Bold, distinctive, unforgettable." },
  deluxe:    { name: "Deluxe",    price: 899, description: "The ultimate Danbro experience. Indulgent, lavish, and crafted with the most luxurious ingredients we source." },
};

function ProductPage() {
  const { categoryId, productId } = Route.useParams();

  const categoryTitle = categoryId.split("-").join(" ").toUpperCase();
  const imageSlug = categoryId.replace(/-/g, "");
  const product = mockProducts[productId] ?? { name: productId, price: 399, description: "Freshly made every day using the finest ingredients, the Danbro way." };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-[1100px] px-4 py-12 sm:py-20 flex flex-col items-center">
        {/* Back to category */}
        <Link
          to="/menu/$categoryId"
          params={{ categoryId }}
          className="flex items-center gap-3 text-[#4D2312] font-black text-xs sm:text-sm tracking-[0.15em] uppercase hover:opacity-70 transition-opacity mb-10 sm:mb-16 self-start"
        >
          <div className="bg-[#E33423] rounded-full p-1 text-white">
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
          </div>
          Back to {categoryTitle}
        </Link>

        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={`/danbro/${imageSlug}.webp`}
              alt={product.name}
              className="w-full max-w-[420px] object-contain drop-shadow-2xl"
              onError={(e) => { e.currentTarget.src = "/danbro/pizza.webp"; }}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col items-start">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#E33423] mb-3">{categoryTitle}</p>
            <h1 className="font-black text-[clamp(2.5rem,7vw,5.5rem)] text-[#4D2312] leading-[0.85] uppercase tracking-tighter mb-6">
              {product.name}
            </h1>

            <p className="text-[#4D2312]/70 text-base sm:text-lg leading-relaxed max-w-md mb-10">
              {product.description}
            </p>

            {/* Price Tag */}
            <div className="mb-8 inline-flex flex-col items-start border border-[#4D2312]/25 rounded-xl px-5 py-3 bg-[#FDF8F6] shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4D2312]/40 mb-0.5">Price</p>
              <p className="font-black text-[2rem] sm:text-[2.5rem] leading-none text-[#4D2312]">
                ₹{product.price}
              </p>
            </div>

            {/* CTA */}
            <button className="flex items-center gap-3 bg-[#4D2312] text-white font-bold uppercase tracking-[0.12em] text-sm px-8 py-3.5 rounded-full hover:bg-[#E33423] transition-colors shadow-md hover:shadow-lg">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
