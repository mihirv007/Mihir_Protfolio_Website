export default function Footer() {
  return (
    <footer className="w-full bg-[#faf8f4] border-t border-[#233e34]/15 py-8 pb-12">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Brand & Copyright */}
          <div className="flex items-center gap-2 text-left">
            <img
              alt="Mihir Verma Logo Mark"
              className="h-8 w-auto object-contain transition-transform group-hover:rotate-6"
              src="/assets/logo.png"
            />
            <div className="flex flex-col">
              <span className="font-title text-[15px] text-[#172d25] font-bold leading-tight">Mihir Verma</span>
              <p className="font-body-sm text-[12px] text-[#466056] leading-tight">© 2026 Mihir Verma · All rights reserved.</p>
            </div>
          </div>

          {/* Center: Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#172d25] text-xs font-medium border border-[#233e34]/15 shadow-xs">
            <span>Built with curiosity &amp; code</span>
            <span className="material-symbols-outlined text-[#3d5c52] text-[14px]">auto_awesome</span>
          </div>

          {/* Right: Nav Links */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#466056]">
            <a className="hover:text-[#172d25] transition-colors" href="#hero">Top</a>
            <a className="hover:text-[#172d25] transition-colors" href="#skills">Skills</a>
            <a className="hover:text-[#172d25] transition-colors" href="#work">Projects</a>
            <a className="hover:text-[#172d25] transition-colors" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
