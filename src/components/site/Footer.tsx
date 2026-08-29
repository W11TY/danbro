const columns = [
  {
    title: "Order",
    links: ["Order Pickup", "Order Delivery", "Catering", "Group Orders", "Gift Cards"],
  },
  {
    title: "Our Food",
    links: ["Full Menu", "Ingredients", "Nutrition Calculator", "Allergens", "Real Food Promise"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Sustainability", "Newsroom", "Investors"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQ", "Rewards Terms", "Accessibility", "Privacy Policy"],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-[1400px] px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="ph-dark h-12 w-12 rounded-full">Logo</span>
              <span className="display-xl text-2xl">Fresh Fire Grill</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/70">
              Real ingredients, cooked by hand, served fast. No shortcuts on the line.
            </p>
            <div className="mt-6 flex gap-3">
              {["FB", "IG", "X", "TT"].map((social) => (
                <span key={social} className="ph-dark h-10 w-10 rounded-full">
                  {social}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <span className="ph-dark h-12 w-[135px] rounded-sm">App Store</span>
              <span className="ph-dark h-12 w-[135px] rounded-sm">Google Play</span>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#menu"
                      className="text-sm text-charcoal-foreground/75 transition-colors hover:text-charcoal-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal-foreground/15 pt-6 text-xs text-charcoal-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fresh Fire Grill. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#menu" className="hover:text-charcoal-foreground">
              Terms of Use
            </a>
            <a href="#menu" className="hover:text-charcoal-foreground">
              Privacy
            </a>
            <a href="#menu" className="hover:text-charcoal-foreground">
              Do Not Sell My Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
