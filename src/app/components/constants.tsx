export const V = "#16A34A";
export const VL = "#22C55E";
export const ROSE = "#059669";
export const ROSEL = "#86EFAC";
export const DARK = "#061A0E";
export const DARK2 = "#0C2415";
export const LIGHT = "#FFFFFF";
export const LIGHT2 = "#F0FAF4";
export const SILVER = "#A3B8AC";

export const icons = {
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0c-3 4-3 12 0 20m0-20c3 4 3 12 0 20M2 12h20",
  factory: "M2 20V11l6-5v5l6-5v5l6-5v9M2 20h20",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "M20 6 9 17l-5-5",
};

export const Ico = ({ d, dark }: { d: string; dark?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={dark ? V : VL} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
