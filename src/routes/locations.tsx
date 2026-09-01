import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/locations")({
  component: Locations,
});

function Locations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Locations Section */}
        <section className="relative w-full py-24 sm:py-40 flex flex-col justify-center items-center text-center">
          <div className="mx-auto max-w-[1400px] px-4 w-full">
            <h2 className="font-black text-[clamp(4rem,14vw,13rem)] leading-[0.85] text-[#4D2312] uppercase tracking-tighter w-full text-center mb-8">
              THE CREW IS<br />WHERE DANBRO IS
            </h2>
            <p className="mt-8 sm:mt-12 text-[#4D2312] font-medium text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
              Find Your Nearest Danbro! Visit us in Delhi, Gurugram,<br className="hidden sm:block" />
              Noida, and more cities and enjoy authentic flavors, every day.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
