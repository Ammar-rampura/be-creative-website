import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import { GoldDivider } from "@/components/Decor";

const testimonials = [
    {
        quote:
            "Be Creative turned our wedding into a fairytale. Every detail was flawless, elegant and beyond what we imagined. Our guests are still talking about it.",
        name: "Aisha & Yusuf",
        event: "Wedding",
    },
    {
        quote:
            "The mehndi setup was a riot of color and joy. They understood our culture and elevated it with such taste. Truly world-class artistry.",
        name: "Fatima R.",
        event: "Mehndi Celebration",
    },
    {
        quote:
            "Our baby shower felt like a dream — soft, magical and so thoughtfully designed. The team handled everything with grace and warmth.",
        name: "Zainab & Ali",
        event: "Baby Shower",
    },
    {
        quote:
            "Professional, creative and deeply caring. They transformed our corporate gala into an unforgettable evening. Highly recommended.",
        name: "Mohammed I.",
        event: "Corporate Event",
    },
];

export function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(
            () => setIndex((i) => (i + 1) % testimonials.length),
            5500,
        );
        return () => clearInterval(t);
    }, []);

    const t = testimonials[index];

    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/40 blur-3xl" />
            <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
                <p className="font-script text-3xl text-rosegold">Kind Words</p>
                <h2 className="mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                    Loved By Our Clients
                </h2>
                <GoldDivider className="mt-5" />

                <div className="relative mt-12 min-h-[18rem]">
                    <Quote className="mx-auto h-12 w-12 text-gold/40" />
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6"
                        >
                            <p className="font-display text-2xl font-medium italic leading-relaxed text-foreground sm:text-3xl">
                                “{t.quote}”
                            </p>
                            <footer className="mt-7">
                                <p className="font-display text-xl font-semibold text-foreground">
                                    {t.name}
                                </p>
                                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                                    {t.event}
                                </p>
                            </footer>
                        </motion.blockquote>
                    </AnimatePresence>
                </div>

                <div className="mt-8 flex justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Show testimonial ${i + 1}`}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-gold" : "w-2 bg-border"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
