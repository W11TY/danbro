import { Menu, MapPin, User, ShoppingBag } from "lucide-react";

const navLinks = ["Order", "Menu", "Catering", "Rewards", "Locations", "Gift Cards"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <span>Free delivery on orders over $20 in the app</span>
          <div className="hidden gap-6 sm:flex">
            <a href="#rewards" className="hover:text-accent">
              Rewards
            </a>
            <a href="#locations" className="hover:text-accent">
              Find a restaurant
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-4 px-4">
          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <a href="/" className="flex items-center gap-3">
            <span className="ph h-11 w-11 rounded-full">Logo</span>
            <span className="display-xl text-xl text-brick sm:text-2xl">Fresh Fire Grill</span>
          </a>

          <nav className="ml-8 hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#menu"
                className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-brick"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-sm px-3 py-2 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-secondary md:flex">
              <MapPin className="h-4 w-4" /> Locations
            </button>
            <button className="flex items-center gap-2 rounded-sm px-3 py-2 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-secondary">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign in</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-sm transition-colors hover:bg-secondary">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <a
              href="#menu"
              className="ml-1 inline-flex h-11 items-center rounded-sm bg-brick px-5 text-[13px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Order now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
