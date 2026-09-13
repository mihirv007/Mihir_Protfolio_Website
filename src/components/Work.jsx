export default function Work() {
  return (
    <section className="relative bg-[#fdfbf7] pt-space-3xl lg:pt-space-4xl" id="work">
      {/* Peeking character tag */}
      <div className="absolute top-6 right-10 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8ebe2] border border-[#233e34]/20 text-[#172d25] font-hand text-base shadow-xs">
        <span>🐇 &quot;chapter 03: adventures in production&quot;</span>
      </div>

      <div className="max-w-[1120px] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
        <div className="flex flex-col gap-space-xl">
          {/* Section Heading */}
          <div className="flex flex-col items-start gap-2">
            <span className="font-label-sm text-label-sm text-[#df735e] uppercase tracking-widest flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
              03 — Selected Works
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#172d25]">
              Things I&apos;ve Built.
            </h2>
            <p className="font-body-sm text-body-sm text-[#466056] max-w-xl mt-1">
              Curated solutions addressing computer vision, sentiment understanding, and customer churn analysis.
            </p>
          </div>

          {/* PROJECT 01 */}
          <article className="bg-white rounded-3xl p-space-lg lg:p-space-xl shadow-sm border-2 border-[#233e34]/20 transition-all hover:border-[#df735e] hover:shadow-md relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="px-3 py-1 rounded-full bg-[#dbeef1] text-[#172d25] font-mono text-label-sm font-semibold border border-[#233e34]/20">PROJECT 01</span>
                  <span className="font-label-sm text-label-sm text-[#3d5c52] font-medium">Computer Vision &amp; Deep Learning</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#172d25] tracking-tight">
                  Wildlife Image Detection
                </h3>
                <p className="font-body-md text-body-md text-[#466056] leading-relaxed">
                  A computer vision application that identifies wildlife from images using a CNN-based deep learning model. Designed with robust preprocessing pipelines to accurately handle varied lighting, camouflage, and natural habitat environments.
                </p>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  {['Python', 'TensorFlow', 'CNN Architecture', 'Flask', 'OpenCV'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#d8ebe2] text-[#172d25] font-label-sm text-label-sm font-semibold border border-[#233e34]/15">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-space-md pt-space-sm">
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-[#faf8f4] text-[#172d25] font-label-md text-label-md hover:bg-[#e8f3ed] transition-colors border border-[#233e34]/20" href="https://github.com/mihirv007/Wildlife_Image_detection" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    <span>Source Code</span>
                  </a>
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-[#df735e] text-white font-label-md text-label-md hover:bg-[#d46752] transition-colors border border-[#c15e4a] shadow-xs" href="https://wildlife-image-detection.vercel.app/">
                    <span>View Live Demo</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Journal Card Viz */}
              <div className="lg:col-span-5 bg-[#eaf4ef] rounded-2xl p-space-md shadow-inner border border-[#233e34]/20 flex flex-col justify-between gap-space-md">
                <div className="flex items-center justify-between font-mono text-label-sm text-[#3d5c52]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#df735e]">filter_center_focus</span>
                    cnn_architecture.py
                  </span>
                  <span className="text-[#3d5c52] font-semibold">Loss: 0.22</span>
                </div>
                <div className="bg-white rounded-xl p-space-sm space-y-2 border border-[#233e34]/15">
                  <div className="flex items-center justify-between text-label-sm text-[#466056] font-mono">
                    <span>Multi-Class CNN</span>
                    <span>ResNet Backbone</span>
                  </div>
                  <div className="h-20 bg-[#faf8f4] rounded-lg relative overflow-hidden flex items-center justify-center p-2 border border-[#233e34]/10">
                    <div className="w-3/4 h-5/6 border-2 border-dashed border-[#df735e] rounded-lg flex items-start justify-end p-1">
                      <span className="bg-[#df735e] text-white text-[11px] font-mono px-1 rounded">Panthera tigris 90.0%</span>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-[#eaf4ef] font-mono text-body-sm text-[#172d25] flex items-center justify-between">
                    <span>Confidence Score:</span>
                    <strong className="text-[#df735e] font-bold">90.0% Match</strong>
                  </div>
                </div>
                <div className="flex items-center justify-between text-body-sm text-[#3d5c52] font-label-sm">
                  <span>5 Wildlife Classes</span>
                  <span>Batch Image Processing</span>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 02 */}
          <article className="bg-white rounded-3xl p-space-lg lg:p-space-xl shadow-sm border-2 border-[#233e34]/20 transition-all hover:border-[#df735e] hover:shadow-md relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="px-3 py-1 rounded-full bg-[#f9eed5] text-[#172d25] font-mono text-label-sm font-semibold border border-[#233e34]/20">PROJECT 02</span>
                  <span className="font-label-sm text-label-sm text-[#3d5c52] font-medium">NLP &amp; Machine Learning</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#172d25] tracking-tight">
                  Zomato Review Sentiment Analysis
                </h3>
                <p className="font-body-md text-body-md text-[#466056] leading-relaxed">
                  A sentiment analysis application that classifies restaurant reviews using NLP and machine learning. Employs TF-IDF text vectorization and Naive Bayes modeling paired with a clean Flask web interface for real-time customer sentiment scoring.
                </p>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  {['Python', 'TF-IDF', 'Naive Bayes', 'scikit-learn', 'Flask'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#d8ebe2] text-[#172d25] font-label-sm text-label-sm font-semibold border border-[#233e34]/15">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-space-md pt-space-sm">
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-[#faf8f4] text-[#172d25] font-label-md text-label-md hover:bg-[#e8f3ed] transition-colors border border-[#233e34]/20" href="https://github.com" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    <span>Source Code</span>
                  </a>
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-[#df735e] text-white font-label-md text-label-md hover:bg-[#d46752] transition-colors border border-[#c15e4a] shadow-xs" href="#">
                    <span>View Live Demo</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Journal Card Viz */}
              <div className="lg:col-span-5 bg-[#eaf4ef] rounded-2xl p-space-md shadow-inner border border-[#233e34]/20 flex flex-col justify-between gap-space-md">
                <div className="flex items-center justify-between font-mono text-label-sm text-[#3d5c52]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#df735e]">analytics</span>
                    sentiment_engine.py
                  </span>
                  <span className="text-[#2b684f] font-semibold">F1-Score: 0.91</span>
                </div>
                <div className="bg-white rounded-xl p-space-sm space-y-2 border border-[#233e34]/15">
                  <div className="flex items-center justify-between text-label-sm text-[#466056] font-mono">
                    <span>Input Vector: 5,000 Features</span>
                    <span>Naive Bayes</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#faf8f4] space-y-1 border border-[#233e34]/10">
                    <div className="flex items-center justify-between text-body-sm">
                      <span className="font-semibold text-[#172d25]">&quot;Food was exceptional &amp; fresh&quot;</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#d8ebe2] text-[#233e34] text-[11px] font-mono font-bold border border-[#233e34]/20">Positive (98%)</span>
                    </div>
                    <div className="w-full bg-[#e3f2eb] rounded-full h-2 overflow-hidden border border-[#233e34]/15">
                      <div className="bg-[#3d5c52] h-2 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div className="p-2 rounded bg-[#eaf4ef] font-mono text-body-sm text-[#172d25] flex items-center justify-between">
                    <span>Vocabulary:</span>
                    <span className="text-[#3d5c52] font-semibold">N-gram (1,2)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-body-sm text-[#3d5c52] font-label-sm">
                  <span>15,000+ Reviews Tested</span>
                  <span>Instant Prediction API</span>
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 03 */}
          <article className="bg-white rounded-3xl p-space-lg lg:p-space-xl shadow-sm border-2 border-[#233e34]/20 transition-all hover:border-[#df735e] hover:shadow-md relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="px-3 py-1 rounded-full bg-[#eddcd8] text-[#df735e] font-mono text-label-sm font-semibold border border-[#df735e]/30">PROJECT 03</span>
                  <span className="font-label-sm text-label-sm text-[#3d5c52] font-medium">Data Analysis &amp; Visualization</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#172d25] tracking-tight">
                  Customer Retention &amp; Churn Analysis
                </h3>
                <p className="font-body-md text-body-md text-[#466056] leading-relaxed">
                  A comprehensive data analysis project examining 7,000+ telecom records to identify key factors contributing to a 26.54% churn rate. Leverages data-driven insights across contract types, customer tenure, and service subscriptions to deliver actionable retention strategies.
                </p>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  {['Tableau', 'Python', 'Excel/CSV'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#d8ebe2] text-[#172d25] font-label-sm text-label-sm font-semibold border border-[#233e34]/15">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-space-md pt-space-sm">
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-[#faf8f4] text-[#172d25] font-label-md text-label-md hover:bg-[#e8f3ed] transition-colors border border-[#233e34]/20" href="https://github.com/mihirv007/FUTURE_DS_02" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[18px]">dataset</span>
                    <span>Source Code</span>
                  </a>
                  <a className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-full bg-[#df735e] text-white font-label-md text-label-md hover:bg-[#d46752] transition-colors border border-[#c15e4a] shadow-xs" href="https://public.tableau.com/app/profile/mihir.verma7477/viz/CustomerRetentionAndChurnAnalysis/CustomerRetentionAndChurnAnalysisDashboard#2" target="_blank" rel="noopener noreferrer">
                    <span>View Live Demo</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Journal Card Viz */}
              <div className="lg:col-span-5 bg-[#eaf4ef] rounded-2xl p-space-md shadow-inner border border-[#233e34]/20 flex flex-col justify-between gap-space-md">
                <div className="flex items-center justify-between font-mono text-label-sm text-[#3d5c52]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#df735e]">bar_chart</span>
                    churn_metrics_dashboard.twb
                  </span>
                  <span className="text-[#2b684f] font-semibold">Data Loaded</span>
                </div>
                <div className="bg-white rounded-xl p-space-sm space-y-2 border border-[#233e34]/15">
                  <div className="flex items-center justify-between text-label-sm text-[#466056] font-mono">
                    <span>Total Customers: 7,043</span>
                    <span>Avg Churn: 26.54%</span>
                  </div>
                  {/* Bar Chart visualization */}
                  <div className="flex flex-col gap-2 p-2 bg-[#faf8f4] rounded-lg border border-[#233e34]/10">
                    {[
                      { label: 'Month/Month', width: '85%', color: 'bg-[#df735e]', level: 'High', levelColor: 'text-[#df735e] font-bold' },
                      { label: 'One Year', width: '25%', color: 'bg-[#3d5c52]', level: 'Low', levelColor: '' },
                      { label: 'Two Year', width: '10%', color: 'bg-[#b1ccc5]', level: 'Min', levelColor: '' },
                    ].map((bar) => (
                      <div key={bar.label} className="flex items-center gap-2 text-[10px] font-mono text-[#466056]">
                        <span className="w-16 truncate text-right">{bar.label}</span>
                        <div className="flex-1 bg-[#e3f2eb] rounded-full h-1.5">
                          <div className={`${bar.color} h-1.5 rounded-full`} style={{ width: bar.width }} />
                        </div>
                        <span className={`w-6 text-left ${bar.levelColor}`}>{bar.level}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 rounded bg-[#eaf4ef] font-mono text-body-sm text-[#172d25]">
                    <span className="text-[#df735e] font-bold">&gt; Core Insight:</span> Month-to-month contracts drive &gt;40% of overall churn.
                  </div>
                </div>
                <div className="flex items-center justify-between text-body-sm text-[#3d5c52] font-label-sm">
                  <span>Fiber Optic: Elevated Risk</span>
                  <span>Action: Push Auto-Pay</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none mt-14 -mb-1">
        <svg className="relative block w-full h-10 md:h-14 text-[#e0eee7] align-bottom" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,30 C300,90 600,0 900,60 C1050,90 1150,20 1200,30 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
