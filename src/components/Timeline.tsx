import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MessagesSquare, ClipboardList, Palette, PartyPopper, Sparkle } from "lucide-react";
import { GoldDivider } from "@/components/Decor";

const steps = [
    { icon: MessagesSquare, title: "Consultation", desc: "We listen deeply to your vision, story and dreams." },
    { icon: ClipboardList, title: "Planning", desc: "Tailored concepts, timelines and seamless logistics." },
    { icon: Palette, title: "Design", desc: "Curated décor, florals and moodboards brought to life." },
    { icon: PartyPopper, title: "Execution", desc: "Flawless on-day delivery, handled end to end." },
    { icon: Sparkle, title: "Celebration", desc: "You enjoy every moment while we make magic happen." },
];

export function Timeline() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 70%", "end 70%"],
    });
    const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="relative overflow-hidden bg-cream-gradient py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                <div className="text-center">
                    <p className="font-script text-3xl text-rosegold">The Journey</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                        Your Experience With Us
                    </h2>
                    <GoldDivider className="mt-5" />
                </div>

                <div ref={ref} className="relative mt-16">
                    {/* Center line */}
                    <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
                        <motion.div
                            style={{ scaleY: lineScale, transformOrigin: "top" }}
                            className="h-full w-full bg-gradient-to-b from-rosegold via-gold to-gold-soft"
                        />
                    </div>

                    <div className="space-y-12">
                        {steps.map((s, i) => {
                            const left = i % 2 === 0;
                            return (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className={`relative flex items-center gap-6 pl-16 md:pl-0 ${left ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className="md:w-1/2" />
                                    {/* Node */}
                                    <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-background shadow-gold ring-1 ring-gold/40 md:left-1/2">
                                        <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                                    </div>
                                    <div
                                        className={`md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                                    >
                                        <div className="rounded-2xl glass-card p-6 shadow-soft">
                                            <span className="text-xs uppercase tracking-[0.25em] text-gold">
                                                Step {i + 1}
                                            </span>
                                            <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">
                                                {s.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                {s.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
