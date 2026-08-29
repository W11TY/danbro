import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Leaf, Flame, Clock } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fresh Fire Grill | Burritos, Bowls, Tacos & Quesadillas" },
      {
        name: "description",
        content:
          "Build your own burrito, bowl, taco or quesadilla with real ingredients grilled fresh daily. Order pickup or delivery and earn rewards on every order.",
      },
      { property: "og:title", content: "Fresh Fire Grill | Burritos, Bowls & Tacos" },
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
  { name: "Build-Your-Own", tag: "Digital Only", note: "Serves 4-6 people" },
  { name: "Burrito", tag: null, note: null },
  { name: "Burrito Bowl", tag: null, note: null },
  { name: "High Protein Menu", tag: "New", note: null },
  { name: "Quesadilla", tag: "Digital Only", note: null },
  { name: "Salad", tag: null, note: null },
  { name: "Tacos", tag: null, note: null },
  { name: "Kid's Meal", tag: null, note: null },
];

const ingredients = [
  "Cilantro-Lime Rice",
  "Black Beans",
  "Grilled Chicken",
  "Fresh Tomato Salsa",
  "Fajita Veggies",
  "Hand-Mashed Guac",
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
    copy: "Skip the line with digital pickup shelves and delivery straight to your door.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-charcoal text-charcoal-foreground">
          <div className="ph-dark absolute inset-0 h-full w-full items-end justify-end p-6">
            Hero video placeholder
          </div>
          <div className="relative mx-auto grid min-h-[560px] max-w-[1400px] items-center px-4 py-20 lg:min-h-[660px]">
            <div className="max-w-xl">
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-accent">
                Back for summer
              </p>
              <h1 className="display-xl mt-4 text-[clamp(2.75rem,8vw,5.5rem)]">
                Chile Honey
                <br />
                Chicken
              </h1>
              <p className="mt-4 text-lg font-bold uppercase tracking-[0.12em] text-accent">
                Real heat with a touch of sweet
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal-foreground/80">
                Freshly grilled chicken marinated with smoked red chiles and a spoonful of pure
                honey, finished on the grill and built into anything on the menu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center rounded-sm bg-brick px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Order now
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center rounded-sm border border-charcoal-foreground/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] transition-colors hover:bg-charcoal-foreground/10"
                >
                  See the menu
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards band */}
        <section id="rewards" className="bg-accent text-accent-foreground">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 py-10 text-center md:flex-row md:text-left">
            <span className="ph h-[110px] w-[110px] shrink-0 rounded-full">Badge 340x340</span>
            <div className="md:flex-1">
              <h2 className="display-xl text-2xl sm:text-3xl">
                Earn extra points, extra badges & extra entrees
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] opacity-80">
                Summer of Extras runs through August
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center rounded-sm bg-charcoal px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-charcoal-foreground transition-opacity hover:opacity-90"
              >
                Join rewards
              </a>
              <span className="text-xs font-bold uppercase tracking-[0.16em]">or</span>
              <a
                href="#menu"
                className="text-sm font-bold uppercase tracking-[0.16em] underline underline-offset-4"
              >
                Sign in
              </a>
            </div>
          </div>
        </section>

        {/* Meal types grid */}
        <section id="menu" className="mx-auto max-w-[1400px] px-4 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-xl text-3xl sm:text-4xl">Order your way</h2>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brick"
            >
              Full menu <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {mealTypes.map((meal) => (
              <article key={meal.name} className="group text-center">
                <div className="relative">
                  {meal.tag && (
                    <span className="absolute left-2 top-2 z-10 rounded-sm bg-charcoal px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal-foreground">
                      {meal.tag}
                    </span>
                  )}
                  <div className="ph aspect-square w-full rounded-sm transition-transform duration-300 group-hover:-translate-y-1">
                    {meal.name} image
                  </div>
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-[0.1em]">{meal.name}</h3>
                {meal.note && (
                  <p className="mt-1 text-xs text-muted-foreground">{meal.note}</p>
                )}
                <a
                  href="#menu"
                  className="mt-3 inline-flex items-center rounded-sm border-2 border-brick px-6 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brick transition-colors hover:bg-brick hover:text-primary-foreground"
                >
                  Order
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Feature split */}
        <section className="bg-secondary">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2">
            <div className="ph aspect-[4/3] w-full rounded-sm">Feature image 1400x1000</div>
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-brick">
                Food with integrity
              </p>
              <h2 className="display-xl mt-4 text-[clamp(2rem,5vw,3.5rem)]">
                Grilled fresh,
                <br />
                every single day
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Our line starts before the doors open: chicken and steak marinated in adobo, hand
                cut peppers on the flat top, beans simmered slow. Nothing frozen, nothing
                microwaved.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {ingredients.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-herb" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#menu"
                className="mt-9 inline-flex items-center rounded-sm bg-brick px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Build your bowl
              </a>
            </div>
          </div>
        </section>

        {/* Promises */}
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {promises.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="border-t-4 border-brick pt-6">
                <Icon className="h-8 w-8 text-brick" />
                <h3 className="display-xl mt-4 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* App promo */}
        <section className="bg-charcoal text-charcoal-foreground">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-accent">
                Get the app
              </p>
              <h2 className="display-xl mt-4 text-[clamp(2rem,5vw,3.5rem)]">
                Skip the line.
                <br />
                Stack the points.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal-foreground/80">
                Order ahead, save your favorite build, and grab it off the pickup shelf. Every dollar
                earns points toward free entrees.
              </p>
              <div className="mt-8 flex gap-4">
                <span className="ph-dark h-14 w-[160px] rounded-sm">App Store</span>
                <span className="ph-dark h-14 w-[160px] rounded-sm">Google Play</span>
              </div>
            </div>
            <div className="ph-dark aspect-[4/3] w-full rounded-sm">App screenshot placeholder</div>
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="mx-auto max-w-[1400px] px-4 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="display-xl text-[clamp(2rem,5vw,3.25rem)]">Find a restaurant</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                More than 3,000 locations and counting. Enter your city or ZIP to see hours, pickup
                options and delivery range.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="City, state or ZIP"
                  className="h-14 flex-1 rounded-sm border border-input bg-card px-4 text-sm outline-none focus:border-brick focus:ring-2 focus:ring-ring/30"
                />
                <button
                  type="button"
                  className="h-14 rounded-sm bg-brick px-8 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="ph aspect-[16/9] w-full rounded-sm">Map placeholder</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
