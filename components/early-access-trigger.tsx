"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import EarlyAccessPopup from "@/components/early-access-popup"

type Props = {
  label?: string
  className?: string
}

export default function EarlyAccessTrigger({ label = "Run my free audit →", className }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        className={className ?? "h-11 px-6 rounded-full text-[14px] font-medium bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] border-0 transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg"}
        onClick={() => setOpen(true)}
      >
        {label}
      </Button>
      <EarlyAccessPopup open={open} onClose={() => setOpen(false)} />
    </>
  )
}
