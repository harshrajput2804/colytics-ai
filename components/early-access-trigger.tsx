"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import EarlyAccessPopup from "@/components/early-access-popup"

export default function EarlyAccessTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        className="h-11 px-6 rounded-full text-[14px] font-medium bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] border-0 transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        Run my free audit →
      </Button>
      <EarlyAccessPopup open={open} onClose={() => setOpen(false)} />
    </>
  )
}
