"use client";

import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 no-underline ${className}`}>
      <div className="font-cormorant text-[22px] font-normal text-gold tracking-[2px] leading-none">
        FERGANA
        <span className="block text-[10px] tracking-[4px] font-jost font-light text-text-mid uppercase">Luxury Hotel</span>
      </div>
    </Link>
  );
}
