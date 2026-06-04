"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface TracingBeamProps {
    children?: React.ReactNode
    className?: string
    showLeftBeam?: boolean
    showRightBeam?: boolean
}

/**
 * TracingBeam component — OpsLabs-style edge-aligned beam.
 * The beam is an overlay pinned to the left edge of the page.
 * It does NOT add padding or push content — purely decorative.
 */
export const TracingBeam = ({
    children,
    className,
    showLeftBeam = true,
    showRightBeam = false
}: TracingBeamProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                const viewportHeight = window.innerHeight
                const componentTop = rect.top
                const componentHeight = rect.height

                const startTrigger = viewportHeight * 0.8
                const endTrigger = viewportHeight * 0.2

                let progress = 0
                if (componentTop < startTrigger) {
                    progress = (startTrigger - componentTop) / (componentHeight + startTrigger - endTrigger)
                }

                setScrollY(Math.min(Math.max(progress * 100, 0), 100))
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div ref={containerRef} className={cn("relative w-full", className)}>
            {/* The Tracing Beam (Left Side) — fixed to viewport left edge */}
            {showLeftBeam && (
                <div className="absolute top-0 bottom-0 left-0 w-0 pointer-events-none z-20 hidden md:block"
                    style={{ left: 'calc((100vw - 100%) / -2)' }}
                >
                    {/* Hatched Background Area — flush to page left edge */}
                    <div
                        className="absolute inset-y-0 left-0 w-[70px] border-r border-border/40 opacity-[0.08]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                -45deg,
                #000,
                #000 1px,
                transparent 1px,
                transparent 14px
              )`
                        }}
                    >
                        <div className="absolute inset-y-0 left-0 w-px bg-border/20" />
                    </div>

                    {/* The Primary Vertical Line */}
                    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-border/5 via-border/60 to-border/5"
                        style={{ left: '70px' }}
                    >
                        {/* The Moving Dot — Brand Blue Pulse */}
                        <div
                            className="absolute left-[-5px] w-2.5 h-2.5 rounded-full bg-[#1549f0] shadow-[0_0_20px_#1549f0] transition-all duration-700 ease-out z-30"
                            style={{ top: `${scrollY}%`, transform: 'translateY(-50%)' }}
                        >
                            <div className="absolute inset-0 rounded-full bg-[#1549f0] animate-ping opacity-40 scale-150" />
                            <div className="absolute inset-[-4px] rounded-full bg-[#1549f0]/20" />
                        </div>

                        {/* The Light Stream (Gradient Trail) */}
                        <div
                            className="absolute left-[-1px] w-[2px] h-80 bg-gradient-to-b from-transparent via-[#1549f0]/30 to-transparent transition-all duration-700 ease-out"
                            style={{ top: `${scrollY}%`, transform: 'translateY(-50%)' }}
                        />

                        {/* Subtle glow near the dot */}
                        <div
                            className="absolute left-[-10px] w-[20px] h-40 transition-all duration-700 ease-out"
                            style={{
                                top: `${scrollY}%`,
                                transform: 'translateY(-50%)',
                                background: 'radial-gradient(circle at center, rgba(21,73,240,0.1) 0%, transparent 70%)'
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Content Area — NO padding offset, beam is purely decorative overlay */}
            <div className="relative">
                {children}
            </div>

            {/* The Tracing Beam (Right Side — Symmetrical) */}
            {showRightBeam && (
                <div className="absolute top-0 bottom-0 right-0 w-0 pointer-events-none z-20 hidden md:block scale-x-[-1]"
                    style={{ right: 'calc((100vw - 100%) / -2)' }}
                >
                    <div
                        className="absolute inset-y-0 left-0 w-[120px] border-r border-border/40 opacity-[0.08]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                -45deg,
                #000,
                #000 1px,
                transparent 1px,
                transparent 14px
              )`
                        }}
                    >
                        <div className="absolute inset-y-0 left-0 w-px bg-border/20" />
                    </div>
                    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-border/5 via-border/60 to-border/5"
                        style={{ left: '120px' }}
                    >
                        <div
                            className="absolute left-[-5px] w-2.5 h-2.5 rounded-full bg-[#1549f0] shadow-[0_0_15px_#1549f0] transition-all duration-500 ease-out z-30"
                            style={{ top: `${scrollY}%`, transform: 'translateY(-50%)' }}
                        >
                            <div className="absolute inset-0 rounded-full bg-[#1549f0] animate-ping opacity-40 scale-150" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
