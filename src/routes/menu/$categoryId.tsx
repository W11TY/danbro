import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { ArrowLeft } from "lucide-react";
import { Preloader } from "@/components/Preloader";

export const Route = createFileRoute("/menu/$categoryId")({
  component: CategoryPage,
});

const mockItems = [
  { id: 1, name: "Classic",   productId: "classic",   price: 349, isNew: true  },
  { id: 2, name: "Premium",   productId: "premium",   price: 499, isNew: false },
  { id: 3, name: "Signature", productId: "signature", price: 699, isNew: false },
  { id: 4, name: "Deluxe",    productId: "deluxe",    price: 899, isNew: false },
];

function CategoryPage() {
  const { categoryId } = Route.useParams();
  
  const title = categoryId.split('-').join(' ').toUpperCase();
  const imageSlug = categoryId.replace(/-/g, ''); // For e.g. "tea-time-cake" -> "teatimecake.png"

  return (
    <div className="min-h-screen bg-white">
      <Preloader />
      <Header />
      
      <main className="mx-auto max-w-[1200px] px-4 py-12 sm:py-20 flex flex-col items-center">
        {/* Back button */}
        <Link 
          to="/" 
          className="flex items-center gap-3 text-[#4D2312] font-black text-xs sm:text-sm tracking-[0.15em] uppercase hover:opacity-70 transition-opacity mb-8 sm:mb-12"
        >
          <div className="bg-[#E33423] rounded-full p-1 text-white">
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
          </div>
          GO BACK TO MENU
        </Link>
        
        {/* Title & Description */}
        <h1 className="display-xl font-black text-[clamp(4rem,12vw,9rem)] text-[#4D2312] leading-[0.8] tracking-tighter text-center uppercase mb-8">
          {title}
        </h1>
        <p className="text-[#4D2312] text-center max-w-[800px] text-base sm:text-[22px] font-medium leading-snug sm:leading-relaxed mb-20 sm:mb-28">
          Discover our selection of {title.toLowerCase()} made with fresh ingredients and real flavors. Choose from our wide variety of options — all prepared the Danbro way.
        </p>

        {/* Item Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-16 sm:gap-x-12 sm:gap-y-24 w-full max-w-[900px]">
          {mockItems.map((item) => (
            <Link
              key={item.id}
              to="/menu/$categoryId/$productId"
              params={{ categoryId, productId: item.productId }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={`/danbro/${imageSlug}.png`}
                  alt={item.name}
                  className="w-[90%] max-h-full object-contain drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-2xl group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "/danbro/pizza.png"; }}
                />
                {item.isNew && (
                  <div className="absolute top-[10%] right-[10%] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-[#FFE400] font-black text-[12px] sm:text-[14px] transform rotate-12 z-10 pointer-events-none drop-shadow-md">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#F23C13] z-[-1] scale-[1.5]">
                       <path fill="currentColor" d="M50 5 L55 20 L70 15 L65 30 L80 30 L70 42 L85 50 L70 58 L80 70 L65 70 L70 85 L55 80 L50 95 L45 80 L30 85 L35 70 L20 70 L30 58 L15 50 L30 42 L20 30 L35 30 L30 15 L45 20 Z" />
                    </svg>
                    <span className="relative z-10 tracking-wider">NEW!</span>
                  </div>
                )}
              </div>

              {/* Product name */}
              <h3 className="text-[#4D2312] font-bold text-center uppercase tracking-[0.05em] text-sm sm:text-xl mt-6 mb-4">
                {title} {item.name.toUpperCase()}
              </h3>

              {/* Price Tag */}
              <div className="mt-3 border border-[#4D2312]/30 shadow-[2px_2px_0px_#4D2312]/20 rounded-md px-3 py-1 bg-white group-hover:border-[#E33423]/50 group-hover:shadow-[2px_2px_0px_#E33423]/20 transition-all">
                <span className="font-bold text-[0.95rem] sm:text-[1.1rem] leading-none text-[#4D2312] group-hover:text-[#E33423] transition-colors">
                  ₹{item.price}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </main>

      {/* Oven Footer — only for Hot Kitchen */}
      {categoryId === 'hot-kitchen' && (
        <section className="relative w-full flex justify-end items-center overflow-hidden max-w-[1400px] mx-auto min-h-[350px] sm:min-h-[550px] mt-8">
          {/* Animated Peel */}
          <img
            src="/danbro/pour/peel.png"
            alt="Peel"
            className="w-[70%] max-w-[750px] h-auto object-contain z-30 drop-shadow-2xl absolute left-[-5%] sm:left-[0%] lg:left-[5%] top-[55%] sm:top-[60%] mt-[60px] transform -translate-y-1/2 pointer-events-none animate-slide-peel"
          />
          {/* Stable Oven */}
          <img
            src="/danbro/pour/oven.png"
            alt="Oven"
            className="w-[75%] max-w-[800px] h-auto object-contain drop-shadow-xl z-20 mr-[-10%] sm:mr-[5%]"
          />
        </section>
      )}
    </div>
  );
}
