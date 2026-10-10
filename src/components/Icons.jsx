const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
export const SearchIcon = () => <svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
export const HeartIcon = ({ filled }) => <svg {...p} fill={filled ? "currentColor" : "none"}><path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9Z" /></svg>;
export const BagIcon = () => <svg {...p}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>;
export const UserIcon = () => <svg {...p} fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6Z" /></svg>;
export const ArrowRight = () => <svg {...p} width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ChevronL = () => <svg {...p}><path d="m15 5-7 7 7 7" /></svg>;
export const ChevronR = () => <svg {...p}><path d="m9 5 7 7-7 7" /></svg>;
export const TrashIcon = () => <svg {...p} width="16" height="16"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>;
export const Lotus = () => (
  <svg width="38" height="30" viewBox="0 0 48 36" fill="#c2185b" aria-hidden="true">
    <path d="M24 34C17 30 13 24 14 14c5 3 8 9 10 20Z" opacity=".85" />
    <path d="M24 34c7-4 11-10 10-20-5 3-8 9-10 20Z" opacity=".85" />
    <path d="M24 34C20 26 18 16 24 3c6 13 4 23 0 31Z" />
    <path d="M24 35C12 33 4 26 2 17c9 0 17 6 22 18Z" opacity=".7" />
    <path d="M24 35c12-2 20-9 22-18-9 0-17 6-22 18Z" opacity=".7" />
  </svg>
);
