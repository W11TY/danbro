import { Menu, MapPin, User, ShoppingBag } from "lucide-react";

const navLinks = [
  { name: "Menu", active: true },
  { name: "Catering", active: false },
  { name: "Rewards", active: false },
  { name: "Our Values", active: false },
  { name: "Nutrition", active: false }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">


      <div className="border-b border-[#E1E1E1]">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center gap-4 sm:gap-8 px-4">
          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-[#4D2312] transition-colors hover:bg-secondary lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a href="/danbro/" className="flex items-center shrink-0">
            <img src="/danbro/logo.png" alt="Danbro Logo" className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] object-contain rounded-full" />
          </a>

          <nav className="hidden h-full items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#menu"
                className={`relative flex h-full items-center pt-1 text-[17px] font-bold uppercase tracking-[0.02em] transition-colors hover:text-[#93281E] ${
                  link.active ? "text-[#93281E]" : "text-[#4D2312]"
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-full bg-[#93281E]"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4 sm:gap-6 md:gap-8 text-[#4D2312]">
            <a href="#locations" className="hidden items-center gap-2 text-[14px] font-bold uppercase tracking-[0.06em] hover:text-[#93281E] transition-colors md:flex">
              <MapPin className="h-5 w-5" strokeWidth={2.5} /> Find a DANBRO
            </a>
            <a href="#signin" className="flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.06em] hover:text-[#93281E] transition-colors">
              <User className="h-5 w-5" strokeWidth={2.5} />
              <span className="hidden sm:inline">Sign In / Join</span>
            </a>
            <a href="#cart" className="flex items-center hover:text-[#93281E] transition-colors">
              <ShoppingBag className="h-[22px] w-[22px]" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
