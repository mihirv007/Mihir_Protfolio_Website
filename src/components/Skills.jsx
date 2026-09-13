const skillCategories = [
  {
    icon: 'terminal',
    title: 'Backend',
    desc: 'Server orchestration, REST APIs, and application lifecycle.',
    tags: ['Python', 'Django', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    icon: 'insights',
    title: 'AI • ML',
    desc: 'Neural models, deep learning, NLP, and numeric computation.',
    tags: ['Machine Learning', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    icon: 'database',
    title: 'Database',
    desc: 'Structured persistence, query optimization, and schema design.',
    tags: ['MySQL', 'SQL', 'MongoDB', 'ChromaDB'],
  },
  {
    icon: 'construction',
    title: 'Tools & Workflow',
    desc: 'Version control, analysis canvases, and developer environments.',
    tags: ['Git', 'GitHub', 'VS Code', 'Claude', 'Excel'],
  },
]

export default function Skills() {
  return (
    <section className="relative bg-[#d8ebe2] pt-space-3xl lg:pt-space-4xl" id="skills">
      {/* Storybook Margin Detail */}
      <div className="absolute top-8 left-6 hidden lg:flex items-center gap-1.5 text-[#3d5c52] font-hand text-lg opacity-85 select-none">
        <span>☕ brew tea • sketch pipelines</span>
      </div>

      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        <div className="flex flex-col gap-space-xl">
          {/* Header */}
          <div className="flex flex-col items-start gap-space-2xs">
            <span className="font-label-sm text-label-sm text-[#df735e] uppercase tracking-widest flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">handyman</span>
              02 — Tech Stack &amp; Toolkit
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#172d25]">
              Things I Work With.
            </h2>
            <p className="font-body-md text-body-md text-[#466056]">
              No arbitrary percentage meters—just dependable tools I reach for daily to build reliable software.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-white bg-paper-grid rounded-3xl p-space-lg shadow-sm border border-[#233e34]/20 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
                <div>
                  <div className="flex items-center gap-2 pb-space-sm mb-space-sm border-b border-[#233e34]/15">
                    <span className="material-symbols-outlined text-[#df735e] text-xl">{cat.icon}</span>
                    <h3 className="font-title text-title text-[#172d25] tracking-tight">{cat.title}</h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#466056] mb-space-md">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-[#d8ebe2] text-[#172d25] font-label-md text-label-md border border-[#233e34]/15 hover:bg-[#cae5de] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none mt-14 -mb-1">
        <svg className="relative block w-full h-10 md:h-14 text-[#fdfbf7] align-bottom" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 C200,10 450,110 700,50 C950,-10 1100,70 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
