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
    showRightBeam = true
}: TracingBeamProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className={cn("relative h-full w-full tracing-beam-wrapper", className)}>
            <style dangerouslySetInnerHTML={{ __html: `
                .tracing-beam-wrapper {
                    --beam-width: 32px;
                    --beam-height: 100%;
                    --hatched-width: 24px;
                    --line-left: 24px;
                    --content-pl: 24px;
                }
                @media (min-width: 640px) {
                    .tracing-beam-wrapper {
                        --beam-width: 48px;
                        --beam-height: 100%;
                        --hatched-width: 36px;
                        --line-left: 36px;
                        --content-pl: 36px;
                    }
                }
                @media (min-width: 768px) {
                    .tracing-beam-wrapper {
                        --beam-width: 64px;
                        --beam-height: 100%;
                        --hatched-width: 48px;
                        --line-left: 48px;
                        --content-pl: 48px;
                    }
                }
                @media (min-width: 1280px) {
                    .tracing-beam-wrapper {
                        --line-left: 48px;
                        --hatched-width: 48px;
                        --beam-width: 64px;
                        --beam-height: 100%;
                        --content-pl: max(0px, calc(48px - (100vw - 1280px) / 2));
                    }
                }
                @keyframes beam-loop {
                    0% {
                        top: 0%;
                        transform: translateY(-50%);
                        opacity: 0;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        top: 100%;
                        transform: translateY(-50%);
                        opacity: 0;
                    }
                }
                .animate-beam-loop {
                    animation: beam-loop 60s linear infinite;
                }
            `}} />

            {/* The Tracing Beam (Left Side) — positioned relative to the centered max-w-7xl content column */}
            {showLeftBeam && (
                <div className="hidden sm:block absolute top-0 pointer-events-none z-20 left-0 w-[var(--beam-width)] h-[var(--beam-height)]"
                >
                    {/* Hatched Background Area — aligned to the left of the line */}
                    <div
                        className="absolute inset-y-0 left-0 border-r border-border opacity-[0.25] w-[var(--hatched-width)]"
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

                    {/* The Primary Vertical Line (20px to the left of the content boundary) */}
                    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10 left-[var(--line-left)]"
                    >
                        {/* The Moving Dot — Brand Gold Pulse */}
                        <div
                            className="absolute top-0 left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.9),0_0_6px_rgba(212,175,55,0.5)] animate-beam-loop z-30"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] animate-ping opacity-45 scale-150" />
                            <div className="absolute inset-[-3px] rounded-full bg-[#D4AF37]/20" />
                        </div>

                        {/* The Light Stream (Gradient Trail) */}
                        <div
                            className="absolute top-0 left-[-1px] w-[2px] h-80 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent animate-beam-loop"
                        />

                        {/* Subtle glow near the dot */}
                        <div
                            className="absolute top-0 left-[-10px] w-[20px] h-40 animate-beam-loop"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)'
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Content Area */}
            <div className={cn(
                "relative transition-all duration-300 pl-0 sm:pl-[var(--content-pl)]",
                showRightBeam && "pr-0 sm:pr-[var(--content-pl)]"
            )}>
                {children}
            </div>

            {/* The Tracing Beam (Right Side — Symmetrical) */}
            {showRightBeam && (
                <div className="hidden sm:block absolute top-0 pointer-events-none z-20 right-0 w-[var(--beam-width)] h-[var(--beam-height)]"
                >
                    {/* Hatched Background Area — aligned to the right edge of the screen */}
                    <div
                        className="absolute inset-y-0 right-0 border-l border-border opacity-[0.25] w-[var(--hatched-width)]"
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
                        <div className="absolute inset-y-0 right-0 w-px bg-border/20" />
                    </div>

                    {/* The Primary Vertical Line */}
                    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10 right-[var(--line-left)]"
                    >
                        {/* The Moving Dot — Brand Gold Pulse */}
                        <div
                            className="absolute top-0 right-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.9),0_0_6px_rgba(212,175,55,0.5)] animate-beam-loop z-30"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] animate-ping opacity-45 scale-150" />
                            <div className="absolute inset-[-3px] rounded-full bg-[#D4AF37]/20" />
                        </div>

                        {/* The Light Stream (Gradient Trail) */}
                        <div
                            className="absolute top-0 right-[-1px] w-[2px] h-80 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent animate-beam-loop"
                        />

                        {/* Subtle glow near the dot */}
                        <div
                            className="absolute top-0 right-[-10px] w-[20px] h-40 animate-beam-loop"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)'
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
