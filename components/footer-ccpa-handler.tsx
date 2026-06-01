'use client'

export function CcpaOptOutButton() {
  const openCcpaOptOut = () => {
    const floatButton = document.getElementById("cb-float") as HTMLButtonElement | null
    floatButton?.click()

    window.setTimeout(() => {
      const ccpaOptOut = document.getElementById("cb-ccpa-optout") as HTMLAnchorElement | null
      ccpaOptOut?.click()
    }, 50)
  }

  return (
    // <button
    //   type="button"
    //   onClick={openCcpaOptOut}
    //   className="text-left text-[12px] text-[#737373] hover:text-[#0a0a0a] transition-colors leading-snug"
    // >
    //   CCPA opt-out
    // </button>
    null
  )
}
