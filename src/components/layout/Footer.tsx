import Logo from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-[#1a1108] text-cream px-5 py-[60px] pb-[120px] md:px-12 md:py-[80px] md:pb-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-14 pb-10 md:pb-[60px] border-b border-[#faf8f2]/10">
        <div className="footer-brand">
          <Logo className="mb-5 !text-gold" />
          <p className="mt-5 text-sm leading-[1.8] text-[#faf8f2]/55 font-light">
            Where the sky is not the limit — it is the beginning. Experience hospitality that elevates every sense and moment.
          </p>
          <div className="flex gap-3 mt-7">
            <a className="w-9 h-9 border border-[#faf8f2]/20 flex items-center justify-center text-sm cursor-pointer transition-colors duration-300 text-[#faf8f2]/60 no-underline hover:border-gold hover:text-gold" href="#">𝕏</a>
            <a className="w-9 h-9 border border-[#faf8f2]/20 flex items-center justify-center text-sm cursor-pointer transition-colors duration-300 text-[#faf8f2]/60 no-underline hover:border-gold hover:text-gold" href="#">in</a>
            <a className="w-9 h-9 border border-[#faf8f2]/20 flex items-center justify-center text-sm cursor-pointer transition-colors duration-300 text-[#faf8f2]/60 no-underline hover:border-gold hover:text-gold" href="#">📷</a>
            <a className="w-9 h-9 border border-[#faf8f2]/20 flex items-center justify-center text-sm cursor-pointer transition-colors duration-300 text-[#faf8f2]/60 no-underline hover:border-gold hover:text-gold" href="#">▶</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-6 font-normal">Explore</h4>
          <ul className="list-none flex flex-col gap-3 m-0 p-0">
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#about">About Hotel</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#gallery">Gallery</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#services">Services</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#location">Location</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-6 font-normal">Rooms</h4>
          <ul className="list-none flex flex-col gap-3 m-0 p-0">
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Levitation Suite</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Cloud Deluxe</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Horizon Penthouse</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Float Studio</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-6 font-normal">Legal</h4>
          <ul className="list-none flex flex-col gap-3 m-0 p-0">
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Privacy Policy</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Terms of Service</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Cookie Policy</a></li>
            <li><a className="text-sm text-[#faf8f2]/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="#">Cancellation</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs text-[#faf8f2]/35 tracking-[1px]">© 2026 Fergana Hotel. All rights reserved.</p>
        <p className="text-[11px] text-[#faf8f2]/20 tracking-[2px]">ABOVE THE ORDINARY</p>
      </div>
    </footer>
  );
}
