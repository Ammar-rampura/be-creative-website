import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import { GoldDivider } from "@/components/Decor";

const testimonials = [
    {
        quote:
            "Shukran! Ap ghana cooperative hata, ghanu fine decoration hato. Jem apna ghar ma shaadi hoe em apne kaam karea che — ap sagla ghanu dil si kaam karo che, apna samjhi ne. Hmne khabar bhi na pari. Everything well organised. Thanks 💐",
        name: "Tasneem Wardhawala",
        event: "Wedding",
    },
    {
        quote:
            "Dil se shukriya Be Creative ki poori team ko ❤️ Hamare is khaas mauke ko itni khoobsurti aur perfection ke saath sajane aur yaadgaar banane ke liye hum dil se aabhari hain. Aap sab ne hamari expectations se bhi badhkar har function ko beautifully execute kiya. Aapki mehnat, professionalism aur har chhoti se chhoti detail ka khayal rakhne ke liye dil se thank you. Aapke saath yeh journey hamare liye bhi bahut hi special rahi. Aap sab ko dher saari duaayein aur best wishes. Allah aapko hamesha taraqqi aur kamyabi ata farmaaye 💖",
        name: "Mariya Sabunwala",
        event: "Wedding Celebrations",
    },
    {
        quote:
            "Our baby shower felt like a dream — soft, magical and so thoughtfully designed. The team handled everything with grace and warmth.",
        name: "Insiya & Mohammed",
        event: "Baby Shower",
    },
    {
        quote:
            "Professional, creative and deeply caring. They transformed my daughter's birthday into an unforgettable evening. Highly recommended.",
        name: "Zahabiya B.",
        event: "Birthday Celebration",
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

                <div className="relative mt-12 min-h-[18rem] sm:min-h-[22rem]">
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
                            <p
                                className={`font-display font-medium italic leading-relaxed text-foreground ${
                                    t.quote.length > 300
                                        ? "text-lg sm:text-xl"
                                        : "text-2xl sm:text-3xl"
                                }`}
                            >
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
