const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

export function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14.25 9.11h3.02l-.46 3.47h-2.56v11.4h-3.74V12.58H8.25V9.11h2.26V7.48c0-1.95.93-4.96 4.96-4.96h2.88v3.22h-1.66c-.78 0-1.86.39-1.86 1.7v1.67Z" />
    </svg>
  );
}

export function TripAdvisorIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.05 8.35 6.35 7.55 4.55 4.55Z" fill="currentColor" />
      <path d="M20.95 8.35 17.65 7.55 19.45 4.55Z" fill="currentColor" />
      <path
        d="M6.2 8.2c2.55-2.35 9.05-2.35 11.6 0"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <circle cx="7.25" cy="13.45" r="5.15" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="7.25" cy="13.45" r="2.55" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="7.25" cy="13.45" r="1.05" fill="currentColor" />
      <circle cx="16.75" cy="13.45" r="5.15" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="16.75" cy="13.45" r="2.55" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="16.75" cy="13.45" r="1.05" fill="currentColor" />
    </svg>
  );
}
