import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const formRef = useRef(null)
  const captchaLoaded = useRef(false)

  // Load the Web3Forms hCaptcha script dynamically
  useEffect(() => {
    if (captchaLoaded.current) return
    const script = document.createElement('script')
    script.src = 'https://web3forms.com/client/script.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    captchaLoaded.current = true

    return () => {
      // Cleanup if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check hCaptcha
    const hCaptcha = formRef.current?.querySelector('textarea[name=h-captcha-response]')
    if (hCaptcha && !hCaptcha.value) {
      alert('Please check the box to prove you are human!')
      return
    }

    setStatus('submitting')

    const data = new FormData(formRef.current)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Redirect after short delay
        setTimeout(() => {
          window.location.href = import.meta.env.VITE_REDIRECT_URL || 'https://mihirverma.vercel.app'
        }, 1500)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative py-space-3xl lg:py-space-4xl overflow-hidden bg-[#d8ebe2]" id="contact">
      <div className="max-w-[1024px] mx-auto px-gutter-mobile lg:px-6 relative z-10 py-8 lg:py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(23,45,37,0.06)] border border-[#233e34]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Column: Info + Contact Links */}
            <div className="flex flex-col justify-between h-full bg-[#faf8f4] rounded-2xl p-6 sm:p-8 border border-[#233e34]/15 shadow-xs">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#df735e] font-mono text-xs uppercase font-semibold tracking-wider mb-2">
                  <span className="material-symbols-outlined text-[16px]">outgoing_mail</span>
                  <span>06 — SAY HELLO</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-headline-lg font-bold text-[#172d25] tracking-tight leading-tight mb-4">
                  Let&apos;s Build Something.
                </h2>
                <p className="font-body-md text-sm sm:text-[15px] text-[#466056] leading-relaxed mb-6">
                  Have an idea, opportunity, or interesting problem? I&apos;d love to hear about it. Whether it&apos;s an API design inquiry, AI integration, or friendly coffee chat.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                {/* Email */}
                <a className="flex items-center gap-3.5 p-3 sm:p-3.5 px-4 rounded-2xl bg-[#e3f2eb] hover:bg-[#cae5de] border border-[#233e34]/10 transition-colors group text-left" href="mailto:mihirverma000@gmail.com">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#3d5c52] flex items-center justify-center group-hover:bg-[#df735e] group-hover:text-white transition-colors border border-[#233e34]/10 shadow-xs">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono font-medium text-[#466056] uppercase tracking-wider">Direct Mail</span>
                    <span className="font-title text-[14px] sm:text-[15px] text-[#172d25] font-semibold group-hover:text-[#df735e] transition-colors">mihirverma000@gmail.com</span>
                  </div>
                </a>

                {/* GitHub */}
                <a className="flex items-center gap-3.5 p-3 sm:p-3.5 px-4 rounded-2xl bg-[#e3f2eb] hover:bg-[#cae5de] border border-[#233e34]/10 transition-colors group text-left" href="https://github.com/mihirv007" rel="noopener noreferrer" target="_blank">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#3d5c52] flex items-center justify-center group-hover:bg-[#df735e] group-hover:text-white transition-colors border border-[#233e34]/10 shadow-xs">
                    <span className="material-symbols-outlined text-lg">code</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono font-medium text-[#466056] uppercase tracking-wider">GitHub Profile</span>
                    <span className="font-title text-[14px] sm:text-[15px] text-[#172d25] font-semibold group-hover:text-[#df735e] transition-colors">https://github.com/mihirv007</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a className="flex items-center gap-3.5 p-3 sm:p-3.5 px-4 rounded-2xl bg-[#e3f2eb] hover:bg-[#cae5de] border border-[#233e34]/10 transition-colors group text-left" href="https://www.linkedin.com/in/mihir-verma-380559266/a" rel="noopener noreferrer" target="_blank">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#3d5c52] flex items-center justify-center group-hover:bg-[#df735e] group-hover:text-white transition-colors border border-[#233e34]/10 shadow-xs">
                    <span className="material-symbols-outlined text-lg">link</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono font-medium text-[#466056] uppercase tracking-wider">Professional Network</span>
                    <span className="font-title text-[14px] sm:text-[15px] text-[#172d25] font-semibold group-hover:text-[#df735e] transition-colors">www.linkedin.com/in/mihir-verma</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-[#faf8f4] rounded-2xl p-6 sm:p-8 border border-[#233e34]/15 shadow-xs flex flex-col justify-between h-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-full gap-4"
                id="contactForm"
              >
                {/* Hidden fields */}
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
                <input type="hidden" name="redirect" value="https://mihirverma.vercel.app" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#172d25]" htmlFor="contact-name">Your Name</label>
                    <input
                      name="name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172d25] text-sm placeholder:text-[#466056]/60 border border-[#233e34]/20 focus:outline-none focus:border-[#df735e] focus:ring-1 focus:ring-[#df735e] transition-all shadow-xs"
                      id="contact-name"
                      placeholder="e.g. Alex Henderson"
                      required
                      type="text"
                      pattern="^[a-zA-Z\s]+$"
                      title="Name should only contain letters and spaces. No numbers or special characters."
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#172d25]" htmlFor="contact-email">Email Address</label>
                    <input
                      name="email"
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172d25] text-sm placeholder:text-[#466056]/60 border border-[#233e34]/20 focus:outline-none focus:border-[#df735e] focus:ring-1 focus:ring-[#df735e] transition-all shadow-xs"
                      id="contact-email"
                      placeholder="alex@example.com"
                      required
                      type="email"
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address format (e.g., alex@example.com)."
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-[#172d25]" htmlFor="contact-msg">Message or Project Note</label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-[#172d25] text-sm placeholder:text-[#466056]/60 border border-[#233e34]/20 focus:outline-none focus:border-[#df735e] focus:ring-1 focus:ring-[#df735e] transition-all resize-none shadow-xs"
                      id="contact-msg"
                      placeholder="Tell me about what you are looking to build or collaborate on..."
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* hCaptcha Widget */}
                <div className="h-captcha" data-captcha="true" />

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                  <button
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#df735e] hover:bg-[#d46752] text-white text-sm font-medium border border-[#c15e4a] shadow-[0_4px_12px_rgba(223,115,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    <span>{status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}</span>
                    {status === 'idle' && <span className="text-[14px]">→</span>}
                  </button>

                  <span className="text-xs text-[#466056] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-[#3d5c52]">lock</span>
                    Spam-protected communication
                  </span>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
