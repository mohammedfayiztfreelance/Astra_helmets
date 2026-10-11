import { useState, useEffect } from "react";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import AstraLogo from "./AstraLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HELMETS", href: "#helmets" },
    { name: "TECHNOLOGY", href: "#technology" },
    { name: "ABOUT", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-black/90 backdrop-blur-sm"
        } border-b border-red-600/90`}
    >
      <div className="w-full flex h-20 items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* LEFT SECTION: LOGO + NAV LINKS */}
        <div className="flex items-center gap-8 lg:gap-14">
          <AstraLogo />

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium tracking-[0.2em] text-white/90 transition-colors duration-200 hover:text-red-500"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION: ACCOUNT + DIVIDER + CART */}
        <div className="hidden md:flex items-center gap-6">
          {/* ACCOUNT */}
          <a
            href="#account"
            className="flex items-center gap-2.5 text-xs lg:text-sm font-medium tracking-[0.18em] text-white/90 transition-colors duration-200 hover:text-red-500 group"
          >
            <div className="flex items-center justify-center rounded-full border border-white/80 p-1 group-hover:border-red-500 transition-colors">
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2]" />
            </div>
            <span>ACCOUNT</span>
          </a>

          {/* VERTICAL DIVIDER */}
          <div className="h-5 w-[1px] bg-white/20" />

          {/* CART */}
          <a
            href="#cart"
            aria-label="Shopping Cart"
            className="relative flex items-center p-1.5 text-white/90 transition-colors duration-200 hover:text-red-500 group"
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.8]" />
            {/* RED BADGE COUNTER */}
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm">
              0
            </span>
          </a>
        </div>

        {/* MOBILE ACTIONS + HAMBURGER */}
        <div className="flex items-center gap-4 md:hidden">
          {/* MOBILE CART ICON */}
          <a
            href="#cart"
            aria-label="Shopping Cart"
            className="relative p-1 text-white/90 transition-colors hover:text-red-500"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              0
            </span>
          </a>

          {/* HAMBURGER TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/90 hover:text-red-500 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/98 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.2em] text-white/90 transition-colors hover:text-red-500 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="my-2 h-[1px] w-full bg-white/10" />
            <a
              href="#account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-white/90 transition-colors hover:text-red-500"
            >
              <div className="flex items-center justify-center rounded-full border border-white/80 p-1">
                <User className="h-4 w-4" />
              </div>
              <span>ACCOUNT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;