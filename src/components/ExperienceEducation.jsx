export default function ExperienceEducation() {
  return (
    <section className="relative bg-[#e0eee7] pt-space-3xl lg:pt-space-4xl">
      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* EXPERIENCE (Left column) */}
          <div className="flex flex-col h-full gap-space-md" id="experience">
            <div className="flex flex-col items-start gap-space-2xs min-h-[72px] justify-end">
              <span className="font-label-sm text-label-sm text-[#df735e] uppercase tracking-widest flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[16px]">history_edu</span>
                04 — Journey &amp; Practice
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#172d25]">
                Where I&apos;ve Been Learning.
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#233e34]/20 flex flex-col justify-between h-full gap-space-md hover:border-[#df735e] transition-all">
              {/* Header */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-xs border-b border-[#233e34]/15">
                  <span className="font-mono text-label-sm text-[#df735e] uppercase font-bold tracking-wider">Internship Experience</span>
                  <span className="font-mono text-label-sm text-[#df735e] px-3 py-0.5 rounded-full bg-[#eddcd8] font-semibold self-start sm:self-auto border border-[#df735e]/30">
                    Feb 2026 – Mar 2026
                  </span>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="font-headline-md text-headline-md text-[#172d25] leading-tight font-semibold">
                    Data Science &amp; Analytics Intern
                  </h3>
                  <div className="flex items-center gap-space-xs text-[#466056] font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px] text-[#3d5c52]">apartment</span>
                    <span className="font-semibold text-[#172d25]">Future Interns</span>
                    <span>•</span>
                    <span className="text-[#3d5c52]">Remote</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="font-body-md text-body-md text-[#466056] leading-relaxed">
                Spearheaded exploratory data analysis and visualization pipelines across substantial real-world datasets, converting high-volume marketing records into interactive executive dashboards.
              </p>

              {/* Metric Badge */}
              <div className="bg-[#d8ebe2]/80 rounded-2xl p-space-md flex items-center justify-between shadow-inner border border-[#233e34]/20">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#df735e] text-white flex items-center justify-center border border-[#c15e4a] shadow-xs">
                    <span className="material-symbols-outlined text-2xl">query_stats</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-[#466056]">Processed Dataset</span>
                    <span className="font-title text-title text-[#172d25] font-bold">41,000+ Records</span>
                  </div>
                </div>
                <span className="text-[#3d5c52] font-label-sm text-label-sm font-medium">Tableau Dashboards</span>
              </div>

              {/* Tech Chips */}
              <div className="space-y-space-xs pt-space-xs border-t border-[#233e34]/10">
                <span className="font-label-sm text-label-sm font-semibold text-[#172d25] uppercase tracking-wide">Tools &amp; Capabilities:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Python', 'Pandas', 'NumPy', 'Tableau', 'Business Insights'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#e3f2eb] text-[#172d25] font-mono text-label-sm border border-[#233e34]/15">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Corner mark */}
              <div className="flex items-center justify-end pt-space-xs text-[#3d5c52]/60">
                <span className="material-symbols-outlined text-3xl">timeline</span>
              </div>
            </div>
          </div>

          {/* EDUCATION (Right column) */}
          <div className="flex flex-col h-full gap-space-md" id="education">
            <div className="flex flex-col items-start gap-space-2xs min-h-[72px] justify-end">
              <span className="font-label-sm text-label-sm text-[#df735e] uppercase tracking-widest flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[16px]">school</span>
                05 — Academics
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#172d25]">
                Learning &amp; Growing.
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#233e34]/20 flex flex-col justify-between h-full gap-space-md hover:border-[#df735e] transition-all">
              {/* Notebook tab */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between pb-space-xs border-b border-[#233e34]/15">
                  <span className="font-mono text-label-sm text-[#df735e] uppercase font-bold tracking-wider">Undergraduate Degree</span>
                  <span className="px-3 py-0.5 rounded-full bg-[#e3f2eb] text-[#172d25] font-mono text-label-sm font-semibold border border-[#233e34]/15">2022 – 2026</span>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="font-headline-md text-headline-md text-[#172d25] leading-tight font-semibold">
                    B.Tech — Artificial Intelligence / Machine Learning
                  </h3>
                  <p className="font-title text-title text-[#3d5c52] font-medium">
                    SAGE University, Indore
                  </p>
                </div>
              </div>

              {/* Synopsis */}
              <p className="font-body-md text-body-md text-[#466056] leading-relaxed">
                Comprehensive study of core computer science fundamentals, neural networks, machine learning algorithms, and real-world system architecture design.
              </p>

              {/* CGPA Badge */}
              <div className="bg-[#d8ebe2]/80 rounded-2xl p-space-md flex items-center justify-between shadow-inner border border-[#233e34]/20">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#df735e] text-white flex items-center justify-center border border-[#c15e4a] shadow-xs">
                    <span className="material-symbols-outlined text-2xl">grade</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-[#466056]">Cumulative Grade</span>
                    <span className="font-title text-title text-[#172d25] font-bold">CGPA: 8.0</span>
                  </div>
                </div>
                <span className="text-[#3d5c52] font-label-sm text-label-sm font-medium">Class of 2026</span>
              </div>

              {/* Key Coursework */}
              <div className="space-y-space-xs pt-space-xs border-t border-[#233e34]/10">
                <span className="font-label-sm text-label-sm font-semibold text-[#172d25] uppercase tracking-wide">Key Focus Areas:</span>
                <ul className="font-body-sm text-body-sm text-[#466056] space-y-1">
                  {[
                    'Neural Networks & Deep Learning Foundations',
                    'Database Management & Query Optimization',
                    'Object-Oriented Programming with Python',
                    'Natural Language Processing & Information Retrieval',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#df735e] inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leaf mark */}
              <div className="flex items-center justify-end pt-space-xs text-[#3d5c52]/60">
                <span className="material-symbols-outlined text-3xl">nature_people</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none mt-14 -mb-1">
        <svg className="relative block w-full h-10 md:h-14 text-[#d8ebe2] align-bottom" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 C250,110 500,-10 750,70 C1000,140 1150,20 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
