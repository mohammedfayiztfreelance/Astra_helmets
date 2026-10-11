import AstraLogo from "../Navbar/AstraLogo";
import { ArrowUp, ShieldCheck, Globe, Share2, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-red-600/40 bg-black text-white px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
      {/* GLOW DECORATION */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/5 blur-[120px] rounded-full" />

      <div className="w-full">
        {/* TOP ROW */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <AstraLogo className="mb-4" />
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-white/50 tracking-wide mt-2">
              Engineered protection for the next generation of riders. Combining nano-engineered composites, adaptive aero-shells, and dynamic ventilation systems.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs tracking-widest text-red-500 bg-red-950/30 border border-red-900/40 px-3.5 py-2 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>SAFETY CERTIFIED ECE 22.06 & DOT</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs tracking-[0.18em]">
            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-[0.25em] text-red-500">
                NAVIGATION
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#helmets" className="text-white/60 transition-colors hover:text-white">
                    HELMETS
                  </a>
                </li>
                <li>
                  <a href="#technology" className="text-white/60 transition-colors hover:text-white">
                    TECHNOLOGY
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/60 transition-colors hover:text-white">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#account" className="text-white/60 transition-colors hover:text-white">
                    ACCOUNT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-[0.25em] text-red-500">
                COLLECTION
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#helmets" className="text-white/60 transition-colors hover:text-white">
                    ASTRA X1
                  </a>
                </li>
                <li>
                  <a href="#helmets" className="text-white/60 transition-colors hover:text-white">
                    ASTRA R1
                  </a>
                </li>
                <li>
                  <a href="#helmets" className="text-white/60 transition-colors hover:text-white">
                    ASTRA S1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 transition-colors hover:text-white">
                    ACCESSORIES
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER / SOCIAL */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="mb-4 font-semibold uppercase tracking-[0.25em] text-xs text-red-500">
              JOIN THE FUTURE
            </h4>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              Subscribe for exclusive previews of upcoming helmet technologies and limited releases.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-zinc-900 border border-white/15 px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-red-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-widest px-5 py-2.5 transition-colors uppercase whitespace-nowrap cursor-pointer"
              >
                JOIN
              </button>
            </form>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Global Network"
                className="p-2 border border-white/10 rounded-full text-white/60 transition-colors hover:border-red-500 hover:text-red-500"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="p-2 border border-white/10 rounded-full text-white/60 transition-colors hover:border-red-500 hover:text-red-500"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Contact"
                className="p-2 border border-white/10 rounded-full text-white/60 transition-colors hover:border-red-500 hover:text-red-500"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© 2026 ASTRA PERFORMANCE HELMETS. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors ml-4 cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;