import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Leaf, Flame, Clock, MapPin, X, Navigation } from "lucide-react";
import { Preloader } from "@/components/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DANBRO | Burritos, Bowls, Tacos & Quesadillas" },
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


const promises = [
  {
    icon: Leaf,
    title: "Real ingredients",
    copy: "53 whole ingredients, no added colors, flavors or preservatives on the line.",
  },
  {
    icon: Flame,
    title: "Cooked by hand",
    copy: "Meat marinated and grilled in-house every morning. Guac mashed all day long.",
  },
  {
    icon: Clock,
    title: "Ready when you are",
    copy: "",
  },
];

function Index() {
  const pizzaRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const promoWrapperRef = useRef<HTMLDivElement>(null);
  const hotKitchenRef = useRef<HTMLImageElement>(null);
  const corpRef = useRef<HTMLImageElement>(null);

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
    <div className="min-h-screen bg-background">
      <Preloader />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 h-full w-full">
            <video 
              src="/danbro/herobg.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-full w-full object-cover opacity-90"
            />
            {/* dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative mx-auto flex min-h-[560px] max-w-[1400px] flex-col items-center justify-center px-4 py-20 text-center lg:min-h-[660px]">
            <h1 className="display-xl mt-8 flex flex-col text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9] text-white">
              <span className="text-[clamp(1.75rem,6vw,4rem)] text-white/95">DANBRO HONEY</span>
              CHICKEN
            </h1>
            <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.2em] text-white">
              DANBRO HEAT WITH A TOUCH OF SWEET
            </p>
            <p className="mt-4 max-w-[450px] text-[15px] font-medium leading-relaxed text-white">
              Freshly grilled chicken marinated with DANBRO peppers and a touch of pure honey is back to kick off summer.
            </p>
            <div className="mt-6 flex">
              <a
                href="#menu"
                className="inline-flex items-center rounded-sm bg-[#93281E] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
              >
                Order now
              </a>
            </div>
          </div>
        </section>

        {/* Rewards promo */}
        <section id="rewards" className="border-b border-border bg-white text-[#4D2312]">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-x-6 gap-y-4 px-4 py-5 text-center md:flex-row md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-transparent text-[8px] text-muted-foreground border border-dashed border-[#4D2312]/30">
                Badge Image
              </div>
              <h2 className="text-[15px] sm:text-[17px] font-bold uppercase tracking-[0.08em]">
                Earn extra points, extra badges, & extra entrees
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#menu"
                className="inline-flex items-center rounded-sm bg-[#4D2312] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
              >
                Join rewards
              </a>
              <span className="text-[13px] font-medium uppercase tracking-[0.12em]">
                or <a href="#menu" className="font-bold text-[#C29022] underline underline-offset-4 hover:text-[#a0761c]">Sign in</a>
              </span>
            </div>
          </div>
        </section>

        {/* Meal types grid */}
        <div className="relative w-full overflow-hidden">
          <section id="menu" className="relative z-10 mx-auto max-w-[1400px] px-4 py-16 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="display-xl text-3xl sm:text-4xl">Order your way</h2>
              <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brick"
            >
              Full menu <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16">
            {mealTypes.map((meal, index) => (
              <a href="#menu" key={meal.name} className="group flex flex-row items-center sm:flex-col sm:text-center text-left gap-4 sm:gap-0">
                <div className="relative flex w-1/2 sm:w-full justify-center transition-all duration-300 ease-out group-hover:-translate-y-4 group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95">
                  <div 
                    className="animate-float aspect-[4/3] w-full max-w-[320px] rounded-sm bg-transparent border-0 flex items-center justify-center drop-shadow-md transition-all duration-300 group-hover:drop-shadow-2xl"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <img src={`/danbro/${meal.image || meal.name.toLowerCase().replace(/ /g, '-') + '.png'}`} alt={meal.name} className={`max-h-full max-w-full object-contain ${meal.landscape ? '-rotate-90 scale-125' : ''}`} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = meal.name + ' image'; }} />
                  </div>
                </div>
                
                <div className="flex w-1/2 sm:w-full min-h-[80px] flex-col items-start sm:items-center justify-center sm:justify-start sm:mt-2">
                  {meal.tag && (
                    <span className="mb-1 rounded-full bg-[#4D2312] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      {meal.tag}
                    </span>
                  )}
                  
                  <h3 className={`display-xl text-2xl font-bold uppercase tracking-normal text-[#4D2312] sm:text-[26px] lg:text-[32px] ${!meal.tag ? 'sm:mt-5' : 'mt-1'}`}>{meal.name}</h3>
                  
                  {meal.note && (
                    <p className="mt-1 text-xs font-medium text-[#4D2312]">{meal.note}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
        </div>

        {/* Feature split */}
        <section ref={sectionRef} className="bg-white overflow-hidden">
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

        {/* Promises */}
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {promises.map(({ title, copy }) => (
              <div key={title} className="pt-2">
                <h3 className="display-xl text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
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

        {/* App promo */}
        <section className="bg-white text-[#4D2312] overflow-hidden">
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

        {false && (
          <>
        {/* Locations Overhaul */}
        <section id="locations" className="relative bg-[#F9F4EB] py-16 sm:py-32 overflow-hidden text-[#5A1921] min-h-screen">
          {/* Decorative bushes */}
          <img src="/danbro/find/bushes.png" alt="Bushes" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] max-w-none md:w-full md:left-0 md:translate-x-0 h-auto object-cover object-bottom pointer-events-none z-0 opacity-100" />

          {/* Sign placeholder */}
          <img src="/danbro/sign-mockup.png" alt="" className="absolute top-[50%] left-0 w-32 object-contain z-30" />

          <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8 z-10 flex flex-col items-center">
            {/* Top section: Text + Search and Path Illustration */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 w-full relative">
              
              {/* Left Content */}
              <div className="max-w-2xl pt-10 z-10 relative w-full">
                <h2 className="display-xl text-[#5A1921] text-[clamp(4rem,8vw,7rem)] leading-[0.85] tracking-tight relative inline-block">
                  FIND YOUR<br />DANBRO.
                  {/* Decorative Heart */}
                  <span className="absolute -top-4 sm:-top-8 left-[12%] sm:left-[15%] text-[#5A1921] text-3xl sm:text-5xl">♥</span>
                </h2>
                <p className="mt-6 sm:mt-8 text-base sm:text-xl font-bold text-[#5A1921]/80 max-w-md pr-4 sm:pr-0">
                  Fresh cakes, coffee & everything worth stopping for — just around the corner.
                </p>
                
                {/* Search Bar */}
                <div className="mt-8 sm:mt-10 bg-white rounded-full p-1 sm:p-2 pl-4 sm:pl-6 flex items-center shadow-lg shadow-[#5A1921]/10 border border-[#E8DDC3] w-full max-w-xl overflow-hidden">
                  <div className="pr-2 sm:pr-4 text-[#5A1921] shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 bg-transparent outline-none text-[#5A1921] placeholder-[#5A1921]/50 font-bold text-sm sm:text-lg min-w-0 w-full"
                  />
                  <button className="bg-[#5A1921] hover:bg-[#4a141b] text-white rounded-full px-4 sm:px-8 py-3 sm:py-4 font-bold text-[10px] sm:text-sm tracking-wider sm:tracking-widest transition-colors flex items-center gap-1 sm:gap-2 whitespace-nowrap shrink-0">
                    FIND A STORE <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Right Content - Path Illustration */}
              <div className="relative w-full lg:w-[60%] lg:absolute lg:right-[10%] lg:top-[-10%] aspect-square lg:aspect-auto h-full pointer-events-none z-0">
                <img src="/danbro/find/store.png" alt="Danbro Store Map Illustration" className="w-full h-full object-contain object-right-top" />
              </div>
            </div>

            {/* Bottom Ticket Container */}
            <div className="mt-16 lg:mt-32 relative bg-white rounded-[2rem] shadow-2xl border border-[#EAE2CE] p-8 lg:p-10 z-10 w-full max-w-[1200px]">
              {/* Fake dashed edge effect */}
              <div className="absolute top-0 left-4 right-4 h-px border-t-[3px] border-dashed border-[#EAE2CE]" />

              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mt-4">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl sm:text-2xl font-black text-[#5A1921] tracking-wide uppercase relative inline-block self-start">
                    D<span className="relative inline-block"><span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs">♥</span>A</span>NBRO NEAR YOU
                  </h3>
                  <div className="relative mt-2">
                    <input type="text" defaultValue="Delhi" className="w-full bg-[#F2EBDC] rounded-xl px-5 py-4 text-[#5A1921] font-bold border border-[#E8DDC3] outline-none pr-12" />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5A1921]/50 hover:text-[#5A1921]">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#5A1921]/70 hover:text-[#5A1921]">
                    <Navigation className="w-4 h-4" /> Use my current location
                  </button>
                </div>

                {/* Column 2 - Locations List */}
                <div className="flex flex-col gap-3">
                  <div className="bg-[#5A1921] text-white rounded-2xl p-5 flex justify-between items-center cursor-pointer shadow-md transform transition hover:scale-[1.02]">
                    <div>
                      <h4 className="font-bold flex items-center gap-2 text-sm sm:text-base"><MapPin className="w-4 h-4 shrink-0" /> DANBRO — Connaught Place</h4>
                      <p className="text-xs sm:text-sm text-white/80 mt-1 ml-6">1.2 km away</p>
                    </div>
                    <ArrowRight className="w-5 h-5 shrink-0 ml-2" />
                  </div>
                  
                  <div className="bg-[#F2EBDC] text-[#5A1921] rounded-2xl p-5 flex justify-between items-center cursor-pointer transition hover:bg-[#E8DDC3]">
                    <div>
                      <h4 className="font-bold flex items-center gap-2 text-sm sm:text-base"><MapPin className="w-4 h-4 text-[#5A1921]/50 shrink-0" /> DANBRO — Saket</h4>
                      <p className="text-xs sm:text-sm text-[#5A1921]/60 mt-1 ml-6">4.8 km away</p>
                    </div>
                    <ArrowRight className="w-5 h-5 shrink-0 ml-2 text-[#5A1921]/30" />
                  </div>

                  <div className="bg-[#F2EBDC] text-[#5A1921] rounded-2xl p-5 flex justify-between items-center cursor-pointer transition hover:bg-[#E8DDC3]">
                    <div>
                      <h4 className="font-bold flex items-center gap-2 text-sm sm:text-base"><MapPin className="w-4 h-4 text-[#5A1921]/50 shrink-0" /> DANBRO — Vasant Kunj</h4>
                      <p className="text-xs sm:text-sm text-[#5A1921]/60 mt-1 ml-6">7.1 km away</p>
                    </div>
                    <ArrowRight className="w-5 h-5 shrink-0 ml-2 text-[#5A1921]/30" />
                  </div>
                </div>

                {/* Column 3 - Map */}
                <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-visible lg:overflow-hidden border-4 border-[#F2EBDC] shadow-inner bg-[#EAE2CE]">
                  <img src="/danbro/find/map.png" alt="Map" className="w-full h-full object-cover rounded-xl" />
                  {/* Sticky note placeholder */}
                  <img src="/danbro/sticky-note.png" alt="Sticky Note" className="absolute -right-4 lg:-right-8 top-[10%] lg:top-[20%] w-24 sm:w-32 object-contain drop-shadow-lg rotate-6 z-20" />
                </div>

              </div>
            </div>
          </div>
        </section>
        </>
        )}
      </main>

      {false && <Footer />}
    </div>
  );
}
