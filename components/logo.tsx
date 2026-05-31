export function IPELogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue circle (top left) */}
      <circle cx="28" cy="28" r="16" fill="#001f5c" />
      
      {/* Red P shape */}
      <path d="M 45 20 L 45 80 M 45 20 L 70 20 Q 78 20 78 32 Q 78 44 70 44 L 45 44" stroke="#c41e3a" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Blue e */}
      <circle cx="100" cy="60" r="22" fill="#001f5c" />
      <text x="100" y="68" fontSize="28" fontWeight="bold" fill="#ffffff" textAnchor="middle" dominantBaseline="middle">e</text>
    </svg>
  );
}
