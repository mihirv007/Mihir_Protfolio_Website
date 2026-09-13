import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero', path: 'home' },
  { label: 'About Me', href: '#about', path: 'about-me' },
  { label: 'Skills', href: '#skills', path: 'skills' },
  { label: 'Work', href: '#work', path: 'work' },
  { label: 'Contact', href: '#contact', path: 'contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'work', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const map = { hero: 'home', about: 'about-me', skills: 'skills', work: 'work', contact: 'contact' }
            setActiveSection(map[id] || id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#d8ebe2]/90 backdrop-blur-md border-b border-[#233e34]/15">
      <div className="h-20 max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center gap-space-sm group" href="#hero">
          <img
            alt="Mihir Verma Logo Mark"
            className="h-8 w-auto object-contain transition-transform group-hover:rotate-6"
            src="/assets/logo.png"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-title text-title text-[#172d25] tracking-tight font-bold group-hover:text-[#df735e] transition-colors">
                Mihir Verma
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-[#466056] hidden sm:inline-block">
              Python &amp; AI Engineer
            </span>
          </div>
        </a>

        <div className="flex items-center gap-space-md lg:gap-space-lg">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#e3f2eb] border border-[#233e34]/20 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${
                  activeSection === link.path
                    ? 'bg-[#c6e4d5] text-[#172d25] font-semibold shadow-xs'
                    : 'text-[#466056] hover:text-[#172d25] hover:bg-[#d8ece2]'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-5 py-2.5 rounded-full bg-[#df735e] text-white font-label-md text-label-md border border-[#c15e4a] shadow-[0_4px_12px_rgba(223,115,94,0.3)] hover:bg-[#d46752] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            href="#contact"
          >
            <span>Let&apos;s Connect</span>
            <span className="text-[15px]">→</span>
          </a>

          {/* Profile Photo */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#233e34] shadow-xs flex items-center justify-center bg-[#3d5c52]">
            <img
              src="/assets/profile_photo.jpg"
              alt="Mihir Verma"
              className="w-full h-full object-cover"
              style={{ objectPosition: '35% 20%', transform: 'scale(1.15)' }}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#e3f2eb] border border-[#233e34]/20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[#172d25]">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#d8ebe2]/95 backdrop-blur-md border-t border-[#233e34]/10 px-gutter-mobile py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className={`px-space-md py-2.5 rounded-xl font-label-md text-label-md transition-all ${
                  activeSection === link.path
                    ? 'bg-[#c6e4d5] text-[#172d25] font-semibold'
                    : 'text-[#466056] hover:text-[#172d25] hover:bg-[#d8ece2]'
                }`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
