"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

/**
 * SplashScreen component for "Crocodic Smart Farming"
 * - Drop this file in: /components/SplashScreen.tsx
 * - Put your logo at: /public/logo.png
 * - TailwindCSS + Framer Motion required.
 *
 * Integration (example) in app/layout.tsx:
 *
 * const [splashDone, setSplashDone] = useState(false);
 *
 * return (
 *  <body>
 *    {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
 *    <main className="...">{children}</main>
 *  </body>
 * )
 *
 * The component performs the sequence described:
 * 1. full white background with an oval "hole" (SVG mask)
 * 2. logo bounces from below into center while the oval closes
 * 3. background transitions to green while logo shifts left
 * 4. tagline slides/fades in
 * 5. whole splash fades out and calls onFinish()
 */

type Props = {
  onFinish?: () => void;
  // Optional override colors
  bgStart?: string; // tailwind class or css color like "#ffffff"
  bgEnd?: string; // tailwind class or css color like "#10b981" (emerald-500)
  durationMultiplier?: number; // speed tweak
};

export default function SplashScreen({
  onFinish,
  bgStart = "#F4FAF4",
  bgEnd = "#1F4E20",
  durationMultiplier = 1,
}: Props) {
  const [visible, setVisible] = useState(true);
  const [bgColor, setBgColor] = useState(bgStart);
  const [showTagline, setShowTagline] = useState(false);
  const [hideOverlayMask, setHideOverlayMask] = useState(false);

  const logoControls = useAnimation();
  const ellipseControls = useAnimation();
  const shiftControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    let mounted = true;

    async function sequence() {
      // 0) initial pause for visual stability
      await new Promise((r) => setTimeout(r, 100 * durationMultiplier));

      // 1) Start logo bounce (from below) & start shrinking oval mask
      logoControls.start({
        y: [120, -18, 0],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.9 * durationMultiplier,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      // Shrink ellipse (mask) to nearly closed
      ellipseControls.start({
        rx: 0,
        ry: 0,
        transition: { duration: 0.7 * durationMultiplier, ease: "easeInOut" },
      });

      // Wait until the mask is nearly closed
      await new Promise((r) => setTimeout(r, 800 * durationMultiplier));

      // Hide the overlay mask (so we don't keep the SVG active) and switch background color
      if (!mounted) return;
      setHideOverlayMask(true);
      setBgColor(bgEnd);

      // 2) shift logo slowly to the left
      shiftControls.start({
        x: [0, "-30vw"],
        transition: { duration: 0.8 * durationMultiplier, ease: "easeInOut" },
      });

      // 3) show tagline with slide-in from left
      await new Promise((r) => setTimeout(r, 450 * durationMultiplier));
      setShowTagline(true);

      // Pause on final state for a bit (1.6s default)
      await new Promise((r) => setTimeout(r, 1600 * durationMultiplier));

      // 4) Fade out entire splash
      await containerControls.start({
        opacity: 0,
        transition: { duration: 0.45 * durationMultiplier },
      });

      if (!mounted) return;
      setVisible(false);
      onFinish?.();
    }

    sequence();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={containerControls}
      style={{ background: bgColor }}
      className={`fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden`}
    >
      {/* --- Overlay with oval "hole" implemented using an SVG mask. --- */}
      {!hideOverlayMask && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          // keep this div above the background but below the logo while mask exists
        >
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            className="block w-full h-full"
          >
            <defs>
              <mask id="oval-mask">
                {/* white = visible, black = masked (transparent hole) */}
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <motion.ellipse
                  cx="50"
                  cy="50"
                  // initial rx/ry as percentages of viewBox; larger to look like an oval hole
                  rx={20}
                  ry={12}
                  fill="black"
                  animate={ellipseControls}
                />
              </mask>
            </defs>

            {/* This rect uses the mask: the black ellipse area becomes transparent (hole) */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="#ffffff"
              mask="url(#oval-mask)"
            />
          </svg>
        </motion.div>
      )}

      {/* --- Main splash content: logo + tagline --- */}
      <div className="relative w-full px-6 flex items-center justify-center">
        <motion.div
          className="z-20 flex items-center"
          animate={shiftControls}
          initial={{ x: 0 }}
        >
          <motion.div
            className="flex-shrink-0 w-24 h-20 md:w-36 md:h-36 relative"
            animate={logoControls}
            initial={{ y: 120, opacity: 0 }}
          >
            {/* Use next/image to optimize. Keep alt text for accessibility. */}
            <Image
              src="/logo.png"
              alt="Crocodic Smart Farming logo"
              fill
              sizes="(max-width: 640px) 7rem, 9rem"
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Tagline container - appears after logo shift */}
          {/* <div className="ml-4 md:ml-8">
            <motion.h1
              initial={{ opacity: 0, x: -18 }}
              animate={showTagline ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Crocodic Smart Farming
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={showTagline ? { opacity: 0.9, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-sm md:text-base text-white/90 mt-1"
            >
              Panen Lebih Pintar — Pantau & Optimalkan Lahan Anda
            </motion.p>
          </div> */}
        </motion.div>
      </div>

      <motion.div
        className="absolute w-2/3 right-0 flex flex-col pr-14"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold text-white mb-2"
        >
          Crocodic Smart Farming
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-sm md:text-base text-white/90 max-w-md"
        >
          Panen Lebih Pintar — Pantau & Optimalkan Lahan Anda
        </motion.p>
      </motion.div>

      {/* subtle decorative gradient / shape if desired (keeps look polished) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" aria-hidden />
      </div>
    </motion.div>
  );
}
