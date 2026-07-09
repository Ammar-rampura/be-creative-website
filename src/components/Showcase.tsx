import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, RevealText } from "@/lib/anim";
import { GoldDivider } from "@/components/Decor";
import wedding from "@/assets/gallery-wedding.jpg";
import mehndi from "@/assets/gallery-mehndi.jpg";
import haldi from "@/assets/gallery-haldi.jpg";
import baby from "@/assets/gallery-babyshower.jpeg";
import engagement from "@/assets/gallery-engagement.jpg";
import dining from "@/assets/gallery-dining.jpg";

const items = [
    { img: wedding, title: "Wedding Decor", tag: "Grand Stages" },
    { img: mehndi, title: "Mehndi Setups", tag: "Festive Color" },
    { img: haldi, title: "Haldi Decorations", tag: "Marigold Magic" },
    { img: baby, title: "Baby Shower Themes", tag: "Dreamy Pastels" },
    { img: engagement, title: "Stage Designs", tag: "Romantic Backdrops" },
    { img: dining, title: "Luxury Dining", tag: "Opulent Tables" },
];

function ShowcaseCard({
    img,
    title,
    tag,
    index,
}: {
    img: string;
    title: string;
    tag: string;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
    const offset = index % 2 === 1 ? "lg:mt-20" : "";

    return (
        <div ref={ref} className={`group relative ${offset}`}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
                <motion.img
                    src={img}
                    alt={`${title} by Be Creative`}
                    loading="lazy"
                    style={{ y }}
                    className="h-[26rem] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-125 sm:h-[32rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/75 via-burgundy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-soft">
                        {tag}
                    </span>
                    <h3 className="mt-1 font-display text-3xl font-semibold text-ivory">
                        {title}
                    </h3>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" />
            </div>
        </div>
    );
}

export function Showcase() {
    return (
        <section
            id="showcase"
            className="relative overflow-hidden bg-foreground py-24 text-ivory sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="text-center">
                    <p className="font-script text-3xl text-rosegold">Featured Work</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold text-ivory sm:text-5xl">
                        <RevealText text="A Showcase of Celebrations" />
                    </h2>
                    <GoldDivider className="mt-5" />
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it, i) => (
                        <Reveal key={it.title} delay={i * 0.05}>
                            <ShowcaseCard {...it} index={i} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}