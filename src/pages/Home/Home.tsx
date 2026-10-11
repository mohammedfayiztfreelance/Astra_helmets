import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import {
  NanoLatticeIcon,
  DualConfigIcon,
  AdaptiveShellIcon,
  AdaptiveImpactIcon,
  DynamicAirflowIcon,
} from "../../components/Icons/TechIcons";
import { ArrowRight, ChevronDown } from "lucide-react";

function Home() {
  const products = [
    {
      name: "X1",
      category: "ADAPTIVE PERFORMANCE HELMET",
      price: "₹ 99,999",
      image: "/x1.jpg",
    },
    {
      name: "R1",
      category: "TRACK-FOCUSED PRECISION",
      price: "₹ 27,999",
      image: "/r1.jpg",
    },
    {
      name: "T1",
      category: "TOURING WITHOUT COMPROMISE",
      price: "₹ 19,999",
      image: "/s1.jpg",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-red-600 selection:text-white">
      {/* NAVBAR */}
      <Navbar />

      <main className="relative w-full pt-20">
        {/* =====================================================
            HERO SECTION — ASTRA X1 (Full Bleed)
        ===================================================== */}
        <section className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col justify-between overflow-hidden bg-black">
          {/* Subtle Ambient Red Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[150px]" />
          <div className="pointer-events-none absolute top-1/3 right-10 h-[400px] w-[400px] rounded-full bg-red-600/15 blur-[160px]" />

          <div className="grid w-full flex-1 lg:grid-cols-2">
            {/* LEFT — HERO CONTENT */}
            <div className="relative z-10 flex items-center px-4 py-10 sm:px-8 lg:px-12 lg:py-16">
              <ScrollReveal direction="up" duration={900} className="w-full">
                {/* TAGLINE */}
                <p className="mb-3 text-xs tracking-[0.35em] text-red-500 font-semibold uppercase">
                  THE ALL-NEW
                </p>

                {/* MAIN TITLE */}
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl uppercase">
                  ASTRA <span className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">X1</span>
                </h1>

                {/* SUBTITLE */}
                <p className="mt-4 text-sm font-semibold tracking-[0.25em] text-white/90 sm:text-base md:text-lg uppercase">
                  PROTECTION THAT ADAPTS.
                </p>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-xl text-xs leading-relaxed text-white/60 sm:text-sm sm:leading-7">
                  ASTRA X1 combines nano-engineered materials with an adaptive shell architecture designed to transform between everyday and ultra-safety configurations.
                </p>

                {/* SPECS GRID WITH CUSTOM MATCHING ICONS */}
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6">
                  <div className="flex flex-col items-start">
                    <NanoLatticeIcon className="w-7 h-7 mb-3" />
                    <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                      NANO-ENGINEERED
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                      Ultra-strong. Ultra-light.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <DualConfigIcon className="w-7 h-7 mb-3" />
                    <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                      DUAL CONFIGURATION
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                      City mode. Race mode.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <AdaptiveShellIcon className="w-7 h-7 mb-3" />
                    <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                      ADAPTIVE SHELL
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                      Engineered to respond.
                    </p>
                  </div>
                </div>

                {/* VIEW X1 LINK */}
                <div className="mt-10">
                  <a
                    href="#helmets"
                    className="inline-flex items-center gap-2 border-b border-red-600 pb-1 text-xs font-bold tracking-[0.2em] text-white transition-all hover:gap-3 hover:text-red-500 sm:text-sm uppercase"
                  >
                    <span>VIEW X1</span>
                    <ArrowRight className="h-4 w-4 text-red-500" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — BRIGHT & VIBRANT TRANSFORMATION VIDEO */}
            <div className="relative min-h-[400px] lg:min-h-full w-full overflow-hidden bg-black flex items-center justify-center">
              <video
                className="absolute inset-0 h-full w-full object-cover object-center contrast-[1.15] brightness-[1.18] saturate-[1.1]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/x1-transformation.mp4" type="video/mp4" />
              </video>

              {/* Minimal Left Edge Fade to smooth text transition without darkening the video center */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent lg:w-32" />
            </div>
          </div>

          {/* SCROLL DOWN INDICATOR */}
          <div className="relative z-10 flex justify-center pb-4 pt-2">
            <a
              href="#helmets"
              className="flex flex-col items-center gap-1 text-[10px] tracking-[0.3em] text-white/40 transition-colors hover:text-red-500"
            >
              <span>SCROLL TO EXPLORE</span>
              <ChevronDown className="h-4 w-4 animate-float text-red-500" />
            </a>
          </div>
        </section>

        {/* FADE SEPARATOR */}
        <div className="h-12 bg-gradient-to-b from-black via-black to-zinc-950" />

        {/* =====================================================
            FEATURED MODELS SECTION (#helmets) — Full Bleed
        ===================================================== */}
        <section id="helmets" className="relative w-full bg-zinc-950 px-4 py-16 sm:px-8 lg:px-12 md:py-24">
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-widest text-white sm:text-4xl uppercase">
                    FEATURED MODELS
                  </h2>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-red-500 transition-colors hover:text-red-400 uppercase"
                >
                  <span>VIEW ALL HELMETS</span>
                  <ArrowRight className="h-3.5 w-3.5 text-red-500" />
                </a>
              </div>
            </ScrollReveal>

            {/* PRODUCT CARDS GRID */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <ScrollReveal
                  key={product.name}
                  direction="up"
                  delay={index * 150}
                  duration={800}
                >
                  <ProductCard
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    image={product.image}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FADE SEPARATOR */}
        <div className="h-16 bg-gradient-to-b from-zinc-950 via-black to-black" />

        {/* =====================================================
            ABOUT ASTRA (#about) — Full Bleed
        ===================================================== */}
        <section id="about" className="relative w-full overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-12 md:py-24">
          {/* Background Accent glow */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[450px] bg-red-600/5 blur-[140px] rounded-full" />

          <div className="grid w-full items-center gap-10 lg:grid-cols-2">
            {/* TEXT CONTENT */}
            <ScrollReveal direction="right" duration={900}>
              <div className="relative z-10 lg:pr-6">
                <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-red-500 uppercase">
                  ABOUT ASTRA
                </p>

                <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
                  WE DON'T BUILD HELMETS. <br />
                  <span className="text-white">WE ENGINEER PROTECTION.</span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base sm:leading-8">
                  Born from a relentless pursuit of innovation, ASTRA exists to create gear that protects more, weighs less, and adapts better. Every detail, every material, every decision is made with one purpose — to keep you safe, always.
                </p>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border-b border-red-600 pb-1 text-xs font-bold tracking-[0.2em] text-white transition-all hover:gap-3 hover:text-red-500 sm:text-sm uppercase"
                  >
                    <span>DISCOVER ASTRA</span>
                    <ArrowRight className="h-4 w-4 text-red-500" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* IMAGE WITH VIBRANT HIGH-CONTRAST RENDER */}
            <ScrollReveal direction="left" duration={900}>
              <div className="relative overflow-hidden rounded-md border border-white/10 group shadow-2xl shadow-red-950/20">
                <img
                  src="/about-astra.jpg"
                  alt="Astra rider on the road"
                  className="w-full h-auto max-h-[550px] object-cover object-center contrast-[1.08] brightness-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FADE SEPARATOR */}
        <div className="h-16 bg-gradient-to-b from-black via-black to-zinc-950" />

        {/* =====================================================
            TECHNOLOGY (#technology) — Fully Visible Image & Custom Icons
        ===================================================== */}
        <section id="technology" className="relative w-full bg-zinc-950 px-4 py-16 sm:px-8 lg:px-12 md:py-24">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2">
            {/* FULLY VISIBLE HIGH-RES NANO CORE IMAGE */}
            <ScrollReveal direction="right" duration={900} className="order-2 lg:order-1">
              <div className="relative w-full flex items-center justify-center p-4 rounded-lg bg-black border border-white/10 group transition-all duration-300 hover:border-red-600/40 shadow-2xl shadow-red-950/20">
                <img
                  src="/technology.jpg"
                  alt="Astra nano engineered technology"
                  className="w-full h-auto max-h-[550px] object-contain rounded-md contrast-[1.1] brightness-[1.08] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>

            {/* TEXT */}
            <ScrollReveal direction="left" duration={900} className="order-1 lg:order-2">
              <div className="relative z-10 lg:pl-6">
                <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-red-500 uppercase">
                  OUR TECHNOLOGY
                </p>

                <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
                  NANO-ENGINEERED. <br />
                  <span className="text-white">NEXT-LEVEL PROTECTION.</span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base sm:leading-8">
                  From NANOCORE™ shell construction to adaptive impact systems, our technologies are built to outperform the standards and redefine what's possible.
                </p>

                {/* TECHNOLOGY FEATURES WITH EXACT MATCHING ICONS */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  <div className="flex flex-col items-start">
                    <NanoLatticeIcon className="w-8 h-8 mb-3" />
                    <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                      NANOCORE™ SHELL
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                      Maximum strength. Minimal weight.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <AdaptiveImpactIcon className="w-8 h-8 mb-3" />
                    <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                      ADAPTIVE IMPACT SYSTEM
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                      Smarter absorption. Better protection.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <DynamicAirflowIcon className="w-8 h-8 mb-3" />
                    <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                      DYNAMIC AIRFLOW
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                      Stay cool. Stay focused.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border-b border-red-600 pb-1 text-xs font-bold tracking-[0.2em] text-white transition-all hover:gap-3 hover:text-red-500 sm:text-sm uppercase"
                  >
                    <span>EXPLORE TECHNOLOGY</span>
                    <ArrowRight className="h-4 w-4 text-red-500" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FADE SEPARATOR */}
        <div className="h-16 bg-gradient-to-b from-zinc-950 via-black to-black" />

        {/* =====================================================
            LIFESTYLE HERO BANNER — Full Bleed
        ===================================================== */}
        <section className="relative min-h-[65vh] w-full flex items-center overflow-hidden">
          <img
            src="/astra-lifestyle.jpg"
            alt="Astra rider on the road"
            className="absolute inset-0 h-full w-full object-cover object-center contrast-[1.08] brightness-[1.05]"
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          <div className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-12">
            <ScrollReveal direction="up" duration={900}>
              <div className="max-w-2xl">
                <h2 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl text-white uppercase">
                  BUILT FOR <br />
                  <span>THE RIDE.</span>
                </h2>
                <div className="mt-3 h-1 w-20 bg-red-600" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FINAL FADE */}
        <div className="h-12 bg-black" />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;