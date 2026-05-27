"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import EarlyAccessPopup from "@/components/early-access-popup"

export default function EarlyAccessTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        className="h-11 px-6 rounded-full text-[14px] font-bold bg-white text-[#0E0E0F] hover:bg-[#f5f5f5] border-0 transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        Claim Early Access
      </Button>
      <EarlyAccessPopup open={open} onClose={() => setOpen(false)} />
    </>
  )
}
