export default function About() {
  return (
    <section className="relative bg-[#faf8f4] pt-space-3xl lg:pt-space-4xl" id="about">
      {/* Whimsical margin doodle */}
      <div className="absolute top-10 right-8 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#e3f2eb] text-[#3d5c52] font-hand text-lg border border-[#233e34]/20 rotate-2 shadow-xs pointer-events-none">
        <span>🐱 zzz... warm coffee &amp; code</span>
      </div>

      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        <div className="flex flex-col gap-space-xl">
          {/* Section Heading */}
          <div className="flex flex-col items-start gap-space-2xs">
            <span className="font-label-sm text-label-sm text-[#df735e] uppercase tracking-widest flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              01 — Background &amp; Philosophy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#172d25]">
              A Little About Me.
            </h2>
          </div>

          {/* Two-column narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-stretch">
            {/* Left Column: Story Bio */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-space-lg lg:p-space-xl shadow-sm border border-[#233e34]/20 flex flex-col justify-between gap-space-md relative">
              {/* Botanical sketch accent */}
              <div className="absolute top-4 right-4 text-[#3d5c52]/30 pointer-events-none">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" width="24">
                  <path d="M12 22C12 17 8 13 4 11C8 11 12 8 12 2C12 8 16 11 20 11C16 13 12 17 12 22Z" />
                </svg>
              </div>

              <div className="space-y-space-md">
                <p className="font-body-lg text-body-lg text-[#172d25] leading-relaxed">
                  I&apos;m a <strong className="font-semibold text-[#df735e]">Python Backend Developer and AI/ML Engineer</strong> who enjoys turning ideas into practical applications. I work with Python, Django, Flask, REST APIs, databases, and machine learning technologies.
                </p>
                <p className="font-body-md text-body-md text-[#466056] leading-relaxed">
                  My journey began with a natural curiosity about how systems communicate beneath the surface. From designing modular API architectures to fine-tuning machine learning models for visual classification, I treat code like an analog journal—clean, deliberate, and built for purpose.
                </p>
              </div>

              {/* Quick Highlights */}
              <div className="pt-space-md flex flex-wrap gap-space-xs border-t border-[#233e34]/10">
                {['B.Tech in AI & ML', 'REST Architectures', 'Computer Vision', 'Clean Code Advocate'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#d8ebe2] text-[#172d25] text-label-sm font-label-sm border border-[#233e34]/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Notebook Card */}
            <div className="lg:col-span-5 bg-[#e3f2eb] rounded-3xl p-space-lg shadow-sm border-2 border-[#233e34]/25 flex flex-col justify-between relative overflow-hidden">
              {/* Notebook header */}
              <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-[#233e34]/20">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#df735e]" />
                  <span className="w-3 h-3 rounded-full bg-[#dbeef1] border border-[#233e34]/20" />
                  <span className="w-3 h-3 rounded-full bg-[#f9eed5] border border-[#233e34]/20" />
                </div>
                <span className="font-mono text-label-sm text-[#3d5c52] font-semibold">mihir_notes.py</span>
              </div>

              {/* Code snippet */}
              <div className="bg-white rounded-2xl p-space-md font-mono text-body-sm text-[#466056] space-y-1.5 shadow-xs border border-[#233e34]/15">
                <p className="text-[#3d5c52]"><span className="text-[#df735e] font-semibold">class</span> <span className="text-[#172d25] font-semibold">Developer</span>:</p>
                <p className="pl-4">name = <span className="text-[#df735e] font-sans">&quot;Mihir Verma&quot;</span></p>
                <p className="pl-4">passions = [<span className="text-[#3d5c52] font-sans">&quot;Clean Backend&quot;</span>, <span className="text-[#3d5c52] font-sans">&quot;Applied AI&quot;</span>]</p>
                <p className="pl-4">loves = <span className="text-[#3d5c52] font-sans">&quot;Problem Solving&quot;</span></p>
                <p className="pl-4"><span className="text-[#df735e] font-semibold">def</span> <span className="text-[#172d25] font-semibold">craft_solution</span>(idea):</p>
                <p className="pl-8 text-[#3d5c52]">return deploy(test(refine(idea)))</p>
              </div>

              {/* Everyday Habits */}
              <div className="mt-space-md pt-space-xs space-y-2">
                <div className="flex items-center gap-space-xs text-[#172d25] font-title text-body-md">
                  <span className="material-symbols-outlined text-[#df735e] text-[18px]">draw</span>
                  <span>Everyday Habits &amp; Rituals</span>
                </div>
                <ul className="font-body-sm text-body-sm text-[#466056] space-y-1 pl-1">
                  {[
                    'Writing lightweight endpoints with FastAPI & Django',
                    'Sketching data pipelines before writing SQL queries',
                    'Exploring real-world multimodal vision models',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#3d5c52] text-[14px]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logo watermark */}
              <div className="pt-space-sm flex items-center justify-end">
                <img alt="Mihir Verma Logo Mark" className="w-6 h-6 object-contain opacity-70" src="/assets/logo.png" />
              </div>
            </div>
          </div>

          {/* Three Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md lg:gap-space-lg pt-space-xs">
            {[
              {
                icon: 'dns',
                num: '01 — BACKEND DEVELOPMENT',
                title: 'Robust & Clean APIs',
                desc: 'Building REST APIs and practical backend applications with Django, Flask, and FastAPI centered on reliability, modular design, and throughput.',
              },
              {
                icon: 'neurology',
                num: '02 — ARTIFICIAL INTELLIGENCE',
                title: 'Applied Intelligence',
                desc: 'Creating useful AI and machine learning solutions using computer vision, NLP, and deep learning architectures to decipher real patterns.',
              },
              {
                icon: 'psychology_alt',
                num: '03 — PROBLEM SOLVING',
                title: 'Intentional Debugging',
                desc: 'Enjoying algorithms, debugging, and solving real-world problems through patient breakdown, data structures, and continuous empirical validation.',
              },
            ].map((block) => (
              <div key={block.num} className="bg-white rounded-3xl p-space-lg shadow-sm border border-[#233e34]/20 hover:-translate-y-1 hover:border-[#df735e] transition-all duration-300 flex flex-col items-start gap-space-sm group">
                <div className="w-12 h-12 rounded-2xl bg-[#d8ebe2] flex items-center justify-center text-[#3d5c52] border border-[#233e34]/20 group-hover:bg-[#df735e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{block.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-label-sm text-[#df735e] font-semibold">{block.num}</span>
                  <h3 className="font-title text-title text-[#172d25]">{block.title}</h3>
                </div>
                <p className="font-body-sm text-body-sm text-[#466056] leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none mt-14 -mb-1">
        <svg className="relative block w-full h-10 md:h-14 text-[#d8ebe2] align-bottom" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,40 C300,10 600,80 900,20 C1050,-10 1150,50 1200,40 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
