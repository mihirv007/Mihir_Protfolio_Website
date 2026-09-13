import { useState, useEffect } from 'react'

const words = ['Intelligent', 'Smart', 'Beautiful']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timerId = null

    function typeEffect() {
      const currentWord = words[wordIndex]

      if (isDeleting) {
        charIndex--
        setDisplayText(currentWord.substring(0, charIndex))
      } else {
        charIndex++
        setDisplayText(currentWord.substring(0, charIndex))
      }

      let typeSpeed = isDeleting ? 100 : 150

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 10000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        typeSpeed = 500
      }

      timerId = setTimeout(typeEffect, typeSpeed)
    }

    typeEffect()
    return () => clearTimeout(timerId)
  }, [])

  return (
    <section className="relative overflow-hidden pt-8 lg:pt-14 bg-[#d8ebe2]" id="hero">
      {/* Floating decorative elements */}
      <div className="absolute top-12 left-10 text-[#3d5c52]/35 pointer-events-none select-none hidden lg:block">
        <svg fill="currentColor" height="24" viewBox="0 0 40 24" width="40">
          <path d="M12 20c-5.5 0-10-4.5-10-10C2 5.5 5.5 2 10 2c1.2 0 2.3.2 3.3.6C15.2.9 17.9 0 21 0c6.6 0 12 5.4 12 12 0 .5 0 1-.1 1.5C36.3 14 39 16.7 39 20c0 3.3-2.7 6-6 6H12z" opacity="0.45" />
        </svg>
      </div>
      <div className="absolute top-20 right-16 text-[#df735e]/40 pointer-events-none select-none hidden lg:block">
        <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
          <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" opacity="0.45" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-8 text-[#3d5c52]/40 pointer-events-none select-none hidden sm:block">
        <svg fill="none" height="42" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" viewBox="0 0 32 42" width="32">
          <path d="M16 4v34M16 10l-8 7h16zM16 19l-10 8h20zM16 29l-12 9h24z" />
        </svg>
      </div>

      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#cbe3d7] text-[#172d25] text-label-sm font-label-sm tracking-wide shadow-xs border border-[#233e34]/25">
              <span className="w-2 h-2 rounded-full bg-[#df735e] inline-block animate-pulse" />
              <span>PYTHON • AI/ML • BACKEND</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-[#172d25] tracking-tight leading-tight">
              Building <span id="typewriter-text" className="text-[#df735e] italic font-serif cursor-blink">{displayText}</span> Things With Code.
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-body-lg text-body-lg text-[#466056] max-w-lg leading-relaxed mt-4">
              Python Backend Developer and AI/ML Engineer focused on building practical applications and solving real-world problems with code.
            </p>

            {/* Actions Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#df735e] text-white font-semibold text-sm border border-[#c15e4a] shadow-[0_6px_16px_rgba(223,115,94,0.35)] hover:bg-[#d46752] hover:-translate-y-0.5 transition-all"
                href="#work"
              >
                <span>View My Work</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#faf8f4] text-[#172d25] font-semibold text-sm shadow-xs hover:bg-white transition-all border border-[#233e34]/20"
                href="#about"
              >
                <span>About Me</span>
              </a>
            </div>

            {/* Status Pill */}
            <div className="flex items-center gap-space-sm pt-space-sm">
              <div className="flex -space-x-1 items-center">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3d5c52] ring-2 ring-[#d8ebe2]" />
              </div>
              <p className="font-body-sm text-body-sm text-[#466056]">
                Available for internships &amp; collaborative AI/backend projects.
              </p>
            </div>
          </div>

          {/* Right Column — Illustration Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#faf8f4] rounded-3xl p-space-md lg:p-space-lg shadow-[0_12px_32px_rgba(23,45,37,0.08)] border-2 border-[#233e34]/30">
              {/* Corner Badge */}
              <div className="absolute -top-3.5 right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbeef1] text-[#172d25] font-label-sm text-label-sm shadow-xs border border-[#233e34]/25">
                <span className="material-symbols-outlined text-[14px] text-[#3d5c52]">local_cafe</span>
                <span>Cozy Terminal Lab</span>
              </div>

              {/* Main Artwork */}
              <div className="relative overflow-hidden rounded-2xl bg-[#e3f2eb] aspect-[4/3] flex items-center justify-center border border-[#233e34]/20">
                <img
                  alt="Charming hand-drawn 2D vector-style illustration of a developer's cozy workspace"
                  className="w-full h-full object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
                  src="/assets/hero_photo.png"
                />
                {/* Floating code tags */}
                <div className="absolute bottom-3 left-3 bg-[#faf8f4]/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-label-sm font-label-sm text-[#172d25] shadow-xs flex items-center gap-1 border border-[#233e34]/20">
                  <span className="material-symbols-outlined text-[#df735e] text-[14px]">terminal</span>
                  <span className="font-mono text-xs">python3 -m app.ai</span>
                </div>
                <div className="absolute top-3 left-3 bg-[#faf8f4]/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-label-sm font-label-sm text-[#3d5c52] shadow-xs flex items-center gap-1 border border-[#233e34]/20">
                  <span className="material-symbols-outlined text-[14px]">psychology</span>
                  <span className="font-mono text-xs">98.2% Accuracy</span>
                </div>
              </div>

              {/* Caption Strip */}
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-[#466056] font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#df735e]">eco</span>
                  Built with relentless accuracy
                </span>
                <span className="text-[#3d5c52] font-mono text-body-sm">Indore, India</span>
              </div>
            </div>

            {/* Decorative badge behind card */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-[#f9eed5] p-2.5 rounded-2xl shadow-sm -z-10 rotate-3 border border-[#233e34]/25">
              <span className="material-symbols-outlined text-[#3d5c52] text-xl">code_blocks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none mt-12 block -mb-1">
        <svg className="relative block w-full h-10 md:h-16 text-[#faf8f4] align-bottom" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
