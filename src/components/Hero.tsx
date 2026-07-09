import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MagneticButton, RevealText } from "@/lib/anim";
import { SparkleField, PetalField } from "@/components/Decor";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} id="top" className="relative h-[100svh] overflow-hidden">
            {/* Parallax background with mask reveal */}
            <motion.div
                style={{ y: bgY, scale: bgScale }}
                className="absolute inset-0"
                initial={{ clipPath: "inset(12% 12% 12% 12%)", opacity: 0.4 }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <img
                    src={heroImg}
                    alt="Luxury wedding stage with champagne gold florals by Be Creative"
                    width={1920}
                    height={1280}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            </motion.div>

            <PetalField count={12} />
            <SparkleField count={22} />

            {/* Floating decorative rings */}
            <motion.div
                aria-hidden
                className="absolute left-[8%] top-[22%] hidden h-28 w-28 rounded-full border border-gold/40 lg:block animate-float"
            />
            <motion.div
                aria-hidden
                className="absolute right-[12%] top-[60%] hidden h-16 w-16 rounded-full border border-rosegold/40 lg:block animate-float-rev"
            />

            <motion.div
                style={{ y: contentY, opacity: fade }}
                className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 text-center"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mb-5 font-script text-3xl text-rosegold sm:text-4xl"
                >
                    Be Creative
                </motion.span>

                <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
                    <RevealText text="Crafting Unforgettable" delay={0.5} />
                    <br />
                    <span className="text-gradient-gold animate-shimmer">
                        <RevealText text="Celebrations" delay={0.9} />
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                    From intimate gatherings to grand celebrations, Be Creative transforms
                    every moment into a masterpiece.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 1 }}
                    className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
                >
                    <a href="#showcase">
                        <MagneticButton className="rounded-full bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold">
                            Explore Events
                        </MagneticButton>
                    </a>
                    <a href="#contact">
                        <MagneticButton className="rounded-full border border-gold/60 bg-card/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-sm transition-colors hover:bg-card">
                            Book Consultation
                        </MagneticButton>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/50 p-1.5">
                    <motion.span
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className="h-2 w-1 rounded-full bg-gold"
                    />
                </div>
            </motion.div>
        </section>
    );
}