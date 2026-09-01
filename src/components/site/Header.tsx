import { Menu, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent text-white">
      <div className="mx-auto flex h-[80px] w-full items-center justify-between px-6 lg:px-10 relative">
        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-sm transition-colors lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-8 flex-1">
          <a href="#menu" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">Menu</a>
          <a href="#real-deal" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">Real Deal</a>
          <a href="#loyalty" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">Loyalty</a>
          <a href="#catering" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">Catering</a>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 flex justify-center z-50">
          <Link to="/" className="flex items-center p-1.5 mt-2 transition-transform hover:scale-105">
            <img src="/danbro/logo.webp" alt="Danbro Logo" className="h-[65px] w-[65px] sm:h-[75px] sm:w-[75px] object-contain brightness-0 invert" />
          </Link>
        </div>

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          <nav className="flex items-center gap-8">
            <a href="#about-us" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">About Us</a>
            <a href="#careers" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">Careers</a>
            <Link to="/locations" className="text-[14px] font-extrabold uppercase tracking-wide hover:text-[#E84E20] transition-colors">Locations</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-[#E84E20] hover:bg-[#d6451a] text-white px-6 py-2.5 rounded-full font-bold text-[14px] uppercase tracking-wide transition-colors">
              <ArrowRight className="w-4 h-4" /> Order
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-[#E84E20]/20 shadow-sm transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
                alt="Indian Flag" 
                className="w-full h-full object-cover" 
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
