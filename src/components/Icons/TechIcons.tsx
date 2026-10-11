export function NanoLatticeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Hexagon lattice structure */}
      <polygon points="16,4 26,9.5 26,22.5 16,28 6,22.5 6,9.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
      {/* Inner connected nodes */}
      <line x1="16" y1="4" x2="16" y2="12" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="26" y1="9.5" x2="19" y2="14" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="26" y1="22.5" x2="19" y2="18" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="16" y1="28" x2="16" y2="20" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="6" y1="22.5" x2="13" y2="18" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="6" y1="9.5" x2="13" y2="14" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      {/* Outer Nodes */}
      <circle cx="16" cy="4" r="1.8" fill="white" />
      <circle cx="26" cy="9.5" r="1.8" fill="white" />
      <circle cx="26" cy="22.5" r="1.8" fill="white" />
      <circle cx="16" cy="28" r="1.8" fill="white" />
      <circle cx="6" cy="22.5" r="1.8" fill="white" />
      <circle cx="6" cy="9.5" r="1.8" fill="white" />
      {/* Inner Glowing Red Core */}
      <polygon points="16,12 19,14 19,18 16,20 13,18 13,14" fill="#ef4444" />
      <circle cx="16" cy="16" r="2" fill="white" />
    </svg>
  );
}

export function DualConfigIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back Offset Frame (Red glow) */}
      <rect x="11" y="5" width="15" height="15" rx="1.5" stroke="#ef4444" strokeWidth="1.8" />
      {/* Front Frame (White) */}
      <rect x="6" y="11" width="15" height="15" rx="1.5" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

export function AdaptiveShellIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Hexagon */}
      <polygon points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5" stroke="white" strokeWidth="1.8" />
      {/* Inner Red Diamond */}
      <polygon points="16,10 21,16 16,22 11,16" fill="#ef4444" />
    </svg>
  );
}

export function AdaptiveImpactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="16" y1="3" x2="16" y2="29" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="3" y1="16" x2="29" y2="16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="6.8" y1="6.8" x2="25.2" y2="25.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25.2" y1="6.8" x2="6.8" y2="25.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.2" fill="#ef4444" />
    </svg>
  );
}

export function DynamicAirflowIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9C8 6 12 12 16 9C20 6 24 12 28 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 16C8 13 12 19 16 16C20 13 24 19 28 16" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 23C8 20 12 26 16 23C20 20 24 26 28 23" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
