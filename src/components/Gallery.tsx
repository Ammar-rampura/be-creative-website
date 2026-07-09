import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { GoldDivider } from "@/components/Decor";
import wedding from "@/assets/gallery-wedding.jpg";
import mehndi from "@/assets/gallery-mehndi.jpg";
import haldi from "@/assets/gallery-haldi.jpg";
import baby from "@/assets/gallery-babyshower.jpeg";
import engagement from "@/assets/gallery-engagement.jpg";
import floral from "@/assets/gallery-floral.jpg";
import dining from "@/assets/gallery-dining.jpg";
import birthday from "@/assets/gallery-birthday.jpg";

const images = [
    { src: wedding, alt: "Luxury wedding stage" },
    { src: mehndi, alt: "Vibrant mehndi function decor" },
    { src: floral, alt: "Champagne rose floral centerpiece" },
    { src: baby, alt: "Pastel baby shower setup" },
    { src: haldi, alt: "Marigold haldi ceremony decor" },
    { src: dining, alt: "Opulent luxury dining setup" },
    { src: engagement, alt: "Elegant engagement stage" },
    { src: birthday, alt: "Golden birthday celebration decor" },
];

export function Gallery() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="gallery" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="text-center">
                    <p className="font-script text-3xl text-rosegold">Moments We Made</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                        The Gallery
                    </h2>
                    <GoldDivider className="mt-5" />
                </div>

                <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
                    {images.map((img, i) => (
                        <motion.button
                            key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                            onClick={() => setActive(i)}
                            className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <span className="absolute inset-0 bg-burgundy/0 transition-colors duration-500 group-hover:bg-burgundy/25" />
                            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" />
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {active !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActive(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-burgundy/80 p-5 backdrop-blur-md"
                    >
                        <button
                            aria-label="Close"
                            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass-card text-ivory"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <motion.img
                            key={active}
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            src={images[active].src}
                            alt={images[active].alt}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
