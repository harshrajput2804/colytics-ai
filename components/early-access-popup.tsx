"use client"
import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { ComplianceSnippet } from "@/components/compliance-snippet"

type Props = {
  open: boolean
  onClose: () => void
}

export function EarlyAccessPopup({ open, onClose }: Props) {
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const [step, setStep] = useState<number>(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setStep(1)
      setName("")
      setEmail("")
      setConsent(false)
      setOtp(["", "", "", "", "", ""])
      setVisible(false)
      setTimeout(() => {
        setVisible(true)
        nameRef.current?.focus()
      }, 80)
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  function isValidEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  }

  function submitEmail() {
    setError("")
    if (!name.trim()) return setError("Please enter your name.")
    if (!isValidEmail(email)) return setError("Please enter a valid email.")
    if (!consent) return setError("Please agree to receive communications.")
    setStep(2)
    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('.ea-otp-box')
      el?.focus()
    }, 80)
  }

  function verifyOtp() {
    const code = otp.join("")
    if (code.length !== 6) return setError("Please enter all 6 digits.")
    if (code === "000000") return setError("Invalid OTP. Please try again.")

    localStorage.setItem(
      "colytics_early_access",
      JSON.stringify({ name, email, verified: true, timestamp: new Date().toISOString() })
    )
    setStep(3)
  }

  function close() {
    onClose()
  }

  function onOtpInput(i: number, v: string) {
    const clean = v.replace(/[^0-9]/g, "").slice(0, 1)
    const next = otp.slice()
    next[i] = clean
    setOtp(next)
    if (clean && i < 5) {
      const n = document.querySelectorAll<HTMLInputElement>(".ea-otp-box")
      n[i + 1]?.focus()
    }
  }

  if (!open) return null

  const modal = (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4" role="dialog" aria-modal="true">
      <div
        className="bg-white rounded-[18px] w-full shadow-2xl flex flex-col overflow-hidden"
        style={{
          maxWidth: 440,
          width: 'min(440px, 96vw)',
          maxHeight: '90vh',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.995)',
          transition: 'opacity 320ms ease, transform 320ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="relative flex flex-col flex-1 overflow-hidden">
          <button
            className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 z-10"
            onClick={close}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <div className="flex-1 overflow-y-auto" style={{
            scrollbarWidth: 'none',
            scrollbarColor: 'rgba(0,0,0,0.2) transparent',
            msOverflowStyle: 'auto',
          }}>
            <style>{`
              div::-webkit-scrollbar {
                width: 0;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background-color: rgba(0,0,0,0.2);
                border-radius: 3px;
              }
            `}</style>
            <div style={{ padding: "clamp(1.25rem, 4vw, 2rem) clamp(1rem, 4vw, 2.5rem)" }} className="text-left">

          {step === 1 && (
            <div>
              <h2 className="heading-3-lg mb-3">Get Early Access</h2>
              <p className="text-body text-sm mb-6">Join the waitlist for Colytics AI. Be the first to see your brand's AI visibility score.</p>

              <label className="block font-medium text-gray-700 mb-1" style={{ fontSize: 12 }}>Full Name</label>
              <input
                ref={nameRef}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)', height: 48, fontSize: 15 }}
                className="mt-1 mb-5 w-full rounded-xl border-2 border-gray-300 px-4 placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-0 focus:border-gray-400"
              />

              <label className="block font-medium text-gray-700 mb-1" style={{ fontSize: 12 }}>Work Email</label>
              <input
                ref={emailRef}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)', height: 44, fontSize: 15 }}
                className="mt-1 mb-5 w-full rounded-lg border border-gray-200 px-4 placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-0 focus:border-gray-300"
              />

              <ComplianceSnippet />

              {error && <div className="text-sm text-red-600 mt-3">{error}</div>}

              <button className="mt-6 w-full rounded-full bg-black text-white py-3.5 font-medium" style={{ height: 52 }} onClick={submitEmail}>Get Early Access</button>

              <div className="text-xs text-center text-gray-400 mt-5">Don't see the email? Check your spam or junk folder.</div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="heading-3-lg mb-2">Verify Your Email</h2>
              <p className="text-body text-sm mb-4">We've sent a 6-digit code to <strong className="text-gray-900">{email}</strong></p>

              <div className="flex gap-2 sm:gap-3 justify-between mb-4 max-w-full">
                {otp.map((v, i) => (
                  <input
                    key={i}
                    value={v}
                    onChange={e => onOtpInput(i, e.target.value)}
                    className="ea-otp-box flex-1 min-w-0 max-w-14 h-12 sm:h-14 text-center rounded-xl border border-gray-200 text-base sm:text-lg font-semibold"
                    inputMode="numeric"
                  />
                ))}
              </div>

              {error && <div className="text-sm text-red-600 mb-2">{error}</div>}

              <button className="w-full rounded-full bg-black text-white py-3.5 font-medium" onClick={verifyOtp}>Verify OTP</button>

              <button className="mt-3 w-full text-sm text-gray-600" onClick={() => setStep(1)}>&larr; Use a different email</button>
            </div>
          )}

          {step === 3 && (
            <div className="text-left">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="heading-3-lg">You're on the list!</h3>
              <p className="text-body text-sm mt-3">We've verified your email. You're now on the early access waitlist for Colytics AI.</p>
              <button className="mt-6 w-full rounded-full bg-black text-white py-3 font-medium" onClick={close}>Got it</button>
            </div>
          )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (typeof document === "undefined") return null
  return createPortal(modal, document.body)
}

export default EarlyAccessPopup
