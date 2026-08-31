import { Instagram, Twitter, Facebook } from "lucide-react";

const leftLinks = [
  "CONTACT SUPPORT",
  "CAREERS",
  "DANBRO GOODS",
  "GIFT CARDS",
  "FUNDRAISING",
  "REWARDS"
];

const middleLinks = [
  "Our Values",
  "News & Events",
  "Investors",
  "Health & Safety",
  "Cultivate Foundation",
  "Cultivate Next",
  "All Locations",
  "Sustainability",
  "Responsible Disclosure"
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black font-sans">
      <div className="absolute inset-0 h-full w-full">
        <video 
          src="/danbro/workers.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col">
            <ul className="space-y-4">
              {leftLinks.map(link => (
                <li key={link}>
                  <a href="#menu" className="display-xl text-xl sm:text-2xl font-bold text-[#4D2312] hover:text-brick">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <h4 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#4D2312] mb-4">
                DOWNLOAD OUR APP
              </h4>
              <div className="flex gap-3">
                <span className="flex h-10 w-[120px] items-center justify-center rounded-md bg-black text-[10px] text-white font-bold">App Store</span>
                <span className="flex h-10 w-[120px] items-center justify-center rounded-md bg-black text-[10px] text-white font-bold">Google Play</span>
              </div>
            </div>
          </div>
          
          {/* Middle Column */}
          <div className="flex flex-col">
            <ul className="space-y-3">
              {middleLinks.map(link => (
                <li key={link}>
                  <a href="#menu" className="text-[14px] font-bold text-[#4D2312] hover:text-brick">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <h4 className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#4D2312] mb-4">
                CONNECT WITH US
              </h4>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D2312] text-white hover:bg-brick cursor-pointer transition-colors">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D2312] text-white hover:bg-brick cursor-pointer transition-colors">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D2312] text-white hover:bg-brick cursor-pointer transition-colors">
                  <Facebook className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Rewards */}
          <div className="flex flex-col items-center mt-8 md:mt-0 text-center md:w-[350px] md:shrink-0 lg:mr-16">
            <div className="mb-6 h-28 w-28 rounded-full border-2 border-dashed border-white bg-brick flex items-center justify-center text-white text-[12px] leading-tight font-bold text-center shadow-lg transform rotate-[-5deg]">
              DANBRO<br/>REWARDS
            </div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest text-brick">JOIN REWARDS</h3>
            <h2 className="display-xl mt-2 text-4xl sm:text-[44px] font-bold text-[#4D2312]">GET REWARDED</h2>
            <p className="mt-2 text-sm text-black/60 font-medium">The faster way to free Danbro</p>
            
            <button className="mt-6 w-full max-w-[220px] border border-black bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#4D2312] hover:bg-black/5 transition-colors">
              JOIN NOW
            </button>
            <a href="#menu" className="mt-4 text-xs font-bold uppercase text-[#C29022] hover:underline">
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-black/15 pt-8">
          <p className="text-sm font-medium text-black/80 leading-relaxed max-w-4xl">
            Blending Asian traditions with modern flavors, Danbro crafts exquisite, world-class bakery delights, from wedding cakes to innovative baked mithai, ensuring every celebration is unforgettable.
          </p>
          <div className="flex flex-col items-start gap-4 text-xs font-medium text-black/80 sm:flex-row sm:items-center sm:gap-6">
            <span>© {new Date().getFullYear()} Danbro Bakery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
