interface AstraLogoProps {
  className?: string;
}

export function AstraLogo({ className = "" }: AstraLogoProps) {
  return (
    <a href="#" className={`flex items-center gap-1.5 sm:gap-2 tracking-[0.2em] font-medium text-white text-lg sm:text-xl md:text-2xl uppercase ${className}`}>
      {/* Stylized A with red dot */}
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 25.5L12 3L21.5 25.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="square" strokeLinejoin="miter"/>
          <circle cx="12" cy="19.5" r="2.2" fill="#ef4444"/>
        </svg>
      </div>
      <span>S</span>
      <span>T</span>
      <span>R</span>
      {/* Stylized A with red dot */}
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 25.5L12 3L21.5 25.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="square" strokeLinejoin="miter"/>
          <circle cx="12" cy="19.5" r="2.2" fill="#ef4444"/>
        </svg>
      </div>
    </a>
  );
}

export default AstraLogo;
