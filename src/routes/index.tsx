import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, MapPin, X, Navigation } from "lucide-react";
import { Preloader } from "@/components/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Danbro" },
      {
        name: "description",
        content:
          "Build your own burrito, bowl, taco or quesadilla with real ingredients grilled fresh daily. Order pickup or delivery and earn rewards on every order.",
      },
      { property: "og:title", content: "DANBRO | Burritos, Bowls & Tacos" },
      {
        property: "og:description",
        content:
          "Real ingredients, grilled fresh, built your way. Order pickup or delivery and earn rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const mealTypes = [
  { name: "Cake", tag: null, note: "Serves 4-6 people", image: "cake.png" },
  { name: "Cookies", tag: null, note: null },
  { name: "Baklawa", tag: null, note: null },
  { name: "Chocolates", tag: null, note: null, image: "chocolate.png", landscape: true },
  { name: "Danbrew", tag: null, note: null, image: "danbrew.png" },
  { name: "Desserts", tag: null, note: null, image: "desserts.png" },
  { name: "Gifts", tag: null, note: null, image: "gifts.png" },
  { name: "Hot Kitchen", tag: null, note: null, image: "hotkitchen.png" },
  { name: "Tea Time Cake", tag: null, note: null, image: "teatimecake.png" },
];


function Index() {
  const pizzaRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const promoWrapperRef = useRef<HTMLDivElement>(null);
  const hotKitchenRef = useRef<HTMLImageElement>(null);
  const corpRef = useRef<HTMLImageElement>(null);
  const [rewardsOpen, setRewardsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pizzaRef.current) {
        const rotation = window.scrollY / 4; 
        pizzaRef.current.style.rotate = `${rotation}deg`;
      }
      
      if (textWrapperRef.current && textRef.current) {
        const rect = textWrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Progress based on text wrapper entering the viewport
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.4)));
        
        const isMobile = window.innerWidth < 1024;
        
        if (isMobile) {
          const offset = 200 * (1 - progress);
          textRef.current.style.transform = `translateY(${offset}px)`;
        } else {
          const offset = -300 * (1 - progress);
          textRef.current.style.transform = `translateX(${offset}px)`;
        }
        
        textRef.current.style.opacity = `${progress}`;
      }

      if (corpRef.current) {
        const rect = corpRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.5)));
        const offset = 200 * (1 - progress);
        corpRef.current.style.transform = `translateX(${offset}px)`;
        corpRef.current.style.opacity = `${progress}`;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Preloader />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden rounded-b-[40px] bg-[#E33423] z-10 shadow-lg">
          <div className="absolute inset-0 h-full w-full">
            <video 
              src="/danbro/herobg.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-full w-full object-cover"
            />
          </div>


        </section>

        {/* Floating Rewards Drawer */}
        <div className="fixed bottom-24 right-0 z-50 flex items-center">
          {/* Bouncing arrow tab */}
          <button
            onClick={() => setRewardsOpen(o => !o)}
            className="flex flex-col items-center justify-center bg-[#4D2312] text-white rounded-l-xl px-2 py-4 shadow-lg hover:bg-[#E33423] transition-colors group"
            aria-label="Toggle rewards"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-500 animate-bounce ${
                rewardsOpen ? 'rotate-0' : '-rotate-180'
              }`}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Expandable card */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              rewardsOpen ? 'max-w-[280px] opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            <div className="bg-white border-y border-l border-[#4D2312]/15 rounded-l-2xl shadow-xl px-5 py-4 flex flex-col gap-3 w-[260px]">
              <div className="flex items-center gap-3">
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#4D2312] leading-snug">
                  Earn points, badges &amp; free entrees
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#menu"
                  className="inline-flex items-center rounded-full bg-[#4D2312] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:opacity-90 transition-opacity"
                >
                  Join rewards
                </a>
                <span className="text-[11px] font-medium text-[#4D2312]/60 uppercase tracking-wide">
                  or <a href="#menu" className="font-bold text-[#C29022] underline underline-offset-2 hover:text-[#a0761c]">Sign in</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Meal types grid */}
        <div className="relative w-full overflow-hidden">
          <section id="menu" className="relative z-10 mx-auto max-w-[1400px] px-4 pt-8 pb-16 sm:pt-12 sm:pb-20">
            <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-end justify-center sm:justify-between gap-4 text-center sm:text-left w-full">
              <div className="w-full sm:w-auto">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E33423] mb-2">What's your craving?</p>
                <h2 className="display-xl text-3xl sm:text-4xl text-[#4D2312]">Order your way</h2>
              </div>
              <a
                href="#menu"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#4D2312] hover:text-[#E33423] transition-colors"
              >
                Full menu <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3">
            {mealTypes.map((meal, index) => (
              <Link to="/menu/$categoryId" params={{ categoryId: meal.name.toLowerCase().replace(/ /g, '-') }} key={meal.name} className="group flex flex-col items-center text-center gap-0">
                <div className="relative flex w-full justify-center transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95">
                  <div 
                    className="animate-float aspect-[4/3] w-full max-w-[320px] rounded-sm bg-transparent border-0 flex items-center justify-center drop-shadow-md transition-all duration-300 group-hover:drop-shadow-2xl"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <img src={`/danbro/${meal.image || meal.name.toLowerCase().replace(/ /g, '-') + '.png'}`} alt={meal.name} className={`max-h-full max-w-full object-contain ${meal.landscape ? '-rotate-90 scale-125' : ''}`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = meal.name + ' image'; }} />
                  </div>
                </div>
                
                <div className="flex w-full min-h-[80px] flex-col items-center justify-start mt-2">
                  {meal.tag && (
                    <span className="mb-1 rounded-full bg-[#4D2312] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      {meal.tag}
                    </span>
                  )}
                  
                  <h3 className={`display-xl text-lg sm:text-[26px] lg:text-[32px] font-bold uppercase tracking-normal text-[#4D2312] ${!meal.tag ? 'mt-3 sm:mt-5' : 'mt-1'}`}>{meal.name}</h3>
                  
                  {meal.note && (
                    <p className="mt-1 text-xs font-medium text-[#4D2312]">{meal.note}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
        </div>

        {/* Feature split */}
        <section ref={sectionRef} className="overflow-hidden">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 relative">
            <img 
              ref={pizzaRef}
              src="/danbro/pizza.png" 
              alt="Feature" 
              className="rounded-sm animate-float-only relative z-10" 
            />
            <div ref={textWrapperRef} className="relative z-0">
              <div ref={textRef}>
                <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-brick">
                  Baked with integrity
                </p>
                <h2 className="display-xl mt-4 text-[clamp(2rem,5vw,3.5rem)]">
                  Freshly made,
                  <br />
                  every single day
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  Our day starts long before the doors open: dough mixed fresh, cakes baked from scratch, chocolate tempered, and pastries finished by hand. Nothing frozen, nothing rushed. Just good ingredients, proper baking, and the kind of freshness you can taste.
                </p>

              </div>
            </div>
          </div>
        </section>


        {/* Dan Brew Section */}
        <section className="relative w-full py-16 sm:py-24 mt-48 sm:mt-64 mb-72 sm:mb-96 flex flex-col justify-center items-center text-center">
          <div className="absolute bottom-[-150px] left-[-40%] z-10">
            <img 
              src="/danbro/pour/grab.png" 
              alt="Grab" 
              className="w-[300px] sm:w-[450px] h-auto object-contain animate-slide-x"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 mt-10 z-10">
            <img 
              src="/danbro/pour/pour.png" 
              alt="Dan Brew Pour" 
              className="w-[250px] h-auto object-contain animate-float-only"
            />
          </div>
          <div className="mx-auto max-w-[1400px] px-4">
            <h2 className="display-xl text-[clamp(4rem,10vw,8rem)] text-[#4D2312] uppercase tracking-tight z-20 relative">
              DANBREW
            </h2>
            <Link
              to="/menu/$categoryId"
              params={{ categoryId: "danbrew" }}
              className="mt-6 inline-flex items-center gap-2 text-[#4D2312] font-black uppercase tracking-[0.15em] text-sm border-b-2 border-[#4D2312] pb-0.5 hover:text-[#E33423] hover:border-[#E33423] transition-colors z-20 relative"
            >
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>


        {/* App promo */}
        <section className="text-[#4D2312] overflow-hidden">
          <div className="mx-auto grid max-w-[1400px] items-end gap-10 pt-16 pb-0 sm:pt-20 sm:pb-0 lg:grid-cols-2">
            <div className="px-4 sm:px-8 pb-16 sm:pb-20 order-2 lg:order-1">
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-brick">
                Get the app
              </p>
              <h2 className="display-xl mt-4 text-[clamp(2rem,5vw,3.5rem)] text-[#4D2312]">
                Skip the line.
                <br />
                Stack the points.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Order ahead, save your favorite build, and grab it off the pickup shelf. Every dollar
                earns points toward free entrees.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="flex h-12 sm:h-14 w-[140px] sm:w-[160px] items-center justify-center rounded-sm bg-black text-[10px] sm:text-[12px] font-bold text-white uppercase tracking-wider cursor-pointer hover:bg-black/80 transition-colors">App Store</span>
                <span className="flex h-12 sm:h-14 w-[140px] sm:w-[160px] items-center justify-center rounded-sm bg-black text-[10px] sm:text-[12px] font-bold text-white uppercase tracking-wider cursor-pointer hover:bg-black/80 transition-colors">Google Play</span>
              </div>
            </div>
            <div className="relative w-[calc(100%+2rem)] -ml-4 sm:w-[calc(100%+4rem)] sm:-ml-8 lg:w-[calc(50vw-1.25rem)] lg:ml-0 lg:mr-0 mt-10 lg:mt-0 order-1 lg:order-2">
              <img 
                src="/danbro/fresh.png" 
                alt="Fresh" 
                className="relative z-10 w-full h-auto object-cover mt-[100px] block"
              />
              <img 
                src="/danbro/hotkitchen.png" 
                alt="Hot Kitchen" 
                className="absolute top-[-50px] left-[20%] w-[60%] h-auto object-cover z-20 animate-float-slow"
              />
            </div>
          </div>
        </section>

        {/* Corporate Gifts Section */}
        <section className="relative w-full py-16 sm:py-24 flex flex-col justify-center items-center text-center">
          <div className="mx-auto max-w-[1400px] px-4">
            <h2 className="display-xl text-[clamp(3rem,8vw,6rem)] text-[#4D2312] uppercase tracking-tight relative z-20">
              CORPORATE GIFTS
            </h2>
          </div>
          <div className="mt-12 flex justify-end w-full">
            <img 
              ref={corpRef}
              src="/danbro/pour/corp.png" 
              alt="Corporate Gifts" 
              className="w-[80%] max-w-[800px] h-auto object-contain"
              style={{ opacity: 0, transform: 'translateX(200px)' }}
            />
          </div>
        </section>

      </main>

      {false && <Footer />}
    </div>
  );
}
