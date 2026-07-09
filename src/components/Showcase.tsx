import { useEffect, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { Reveal, RevealText } from "@/lib/anim";
import { GoldDivider } from "@/components/Decor";
import wedding from "@/assets/gallery-wedding.jpg";
import mehndi from "@/assets/gallery-mehndi.jpg";
import haldi from "@/assets/gallery-haldi.jpg";
import baby from "@/assets/gallery-babyshower.jpeg";
import babyArch from "@/assets/56.jpg";
import engagement from "@/assets/gallery-engagement.jpg";
import dining from "@/assets/gallery-dining.jpg";
import floral from "@/assets/gallery-floral.jpg";
import birthday from "@/assets/gallery-birthday.jpg";

type Category = {
    title: string;
    tag: string;
    cover: string;
    images: { src: string; alt: string }[];
};

// Placeholder images reused across categories until real photos are added.
const categories: Category[] = [
    {
        title: "Birthday Celebrations",
        tag: "Joyful Milestones",
        cover: birthday,
        images: [
            { src: birthday, alt: "Golden birthday celebration decor" },
            { src: floral, alt: "Birthday floral styling" },
            { src: dining, alt: "Birthday dining setup" },
            { src: engagement, alt: "Birthday stage backdrop" },
        ],
    },
    {
        title: "Baby Shower Decor",
        tag: "Dreamy Pastels",
        cover: baby,
        images: [
            { src: baby, alt: "Pastel baby shower setup" },
            { src: babyArch, alt: "Baby shower balloon arch" },
            { src: floral, alt: "Baby shower floral details" },
            { src: dining, alt: "Baby shower table styling" },
        ],
    },
    {
        title: "Mehendi Decor",
        tag: "Festive Color",
        cover: mehndi,
        images: [
            { src: mehndi, alt: "Vibrant mehendi function decor" },
            { src: haldi, alt: "Colorful mehendi seating" },
            { src: floral, alt: "Mehendi floral accents" },
            { src: birthday, alt: "Mehendi celebration corner" },
        ],
    },
    {
        title: "Shitabi Backdrop",
        tag: "Traditional Charm",
        cover: haldi,
        images: [
            { src: haldi, alt: "Shitabi backdrop styling" },
            { src: engagement, alt: "Shitabi stage arrangement" },
            { src: wedding, alt: "Shitabi drapery detail" },
            { src: floral, alt: "Shitabi floral framing" },
        ],
    },
    {
        title: "Darees Backdrop",
        tag: "Regal Drapery",
        cover: engagement,
        images: [
            { src: engagement, alt: "Darees backdrop setting" },
            { src: wedding, alt: "Darees stage drapery" },
            { src: dining, alt: "Darees seating arrangement" },
            { src: haldi, alt: "Darees decor detail" },
        ],
    },
    {
        title: "Wedding Stage Decor",
        tag: "Grand Stages",
        cover: wedding,
        images: [
            { src: wedding, alt: "Luxury wedding stage" },
            { src: engagement, alt: "Elegant engagement stage" },
            { src: floral, alt: "Wedding floral centerpiece" },
            { src: dining, alt: "Wedding reception dining" },
        ],
    },
    {
        title: "Entry Gates",
        tag: "Grand Welcomes",
        cover: floral,
        images: [
            { src: floral, alt: "Floral entry gate" },
            { src: wedding, alt: "Grand entrance styling" },
            { src: haldi, alt: "Marigold entry decor" },
            { src: mehndi, alt: "Festive entry arrangement" },
        ],
    },
    {
        title: "House Decor",
        tag: "Intimate Spaces",
        cover: dining,
        images: [
            { src: dining, alt: "Home celebration dining decor" },
            { src: floral, alt: "House floral styling" },
            { src: birthday, alt: "Home party decor" },
            { src: baby, alt: "Intimate home function setup" },
        ],
    },
    {
        title: "Interactive Activities",
        tag: "Fun & Engagement",
        cover: birthday,
        images: [
            { src: birthday, alt: "Interactive celebration activity" },
            { src: mehndi, alt: "Guest engagement corner" },
            { src: dining, alt: "Activity station styling" },
            { src: babyArch, alt: "Photo moment installation" },
        ],
    },
];

function ShowcaseCard({
    category,
    index,
    onOpen,
}: {
    category: Category;
    index: number;
    onOpen: () => void;
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
            <button
                type="button"
                onClick={onOpen}
                aria-label={`View ${category.title} gallery`}
                className="relative block w-full overflow-hidden rounded-[2rem] text-left shadow-lift"
            >
                <motion.img
                    src={category.cover}
                    alt={`${category.title} by Be Creative`}
                    loading="lazy"
                    style={{ y }}
                    className="h-[26rem] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-125 sm:h-[32rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/75 via-burgundy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold-soft">
                        {category.tag}
                    </span>
                    <h3 className="mt-1 font-display text-3xl font-semibold text-ivory">
                        {category.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft opacity-0 transition-all duration-500 group-hover:opacity-100">
                        View Gallery <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" />
            </button>
        </div>
    );
}

function CategoryGallery({
    category,
    onClose,
}: {
    category: Category;
    onClose: () => void;
}) {
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            if (active !== null) setActive(null);
            else onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-lenis-prevent
            className="fixed inset-0 z-[60] overflow-y-auto bg-burgundy/90 backdrop-blur-md"
        >
            <button
                aria-label="Close gallery"
                onClick={onClose}
                className="fixed right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-card text-ivory"
            >
                <X className="h-5 w-5" />
            </button>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
            >
                <div className="text-center">
                    <p className="font-script text-3xl text-rosegold">
                        {category.tag}
                    </p>
                    <h3 className="mt-1 font-display text-4xl font-semibold text-ivory sm:text-5xl">
                        {category.title}
                    </h3>
                    <GoldDivider className="mt-5" />
                </div>

                <div className="mt-12 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
                    {category.images.map((img, i) => (
                        <motion.button
                            key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
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
            </motion.div>

            <AnimatePresence>
                {active !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActive(null);
                        }}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-burgundy/85 p-5 backdrop-blur-md"
                    >
                        <button
                            aria-label="Close image"
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
                            src={category.images[active].src}
                            alt={category.images[active].alt}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function Showcase() {
    const [openCategory, setOpenCategory] = useState<Category | null>(null);

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
                    {categories.map((cat, i) => (
                        <Reveal key={cat.title} delay={i * 0.05}>
                            <ShowcaseCard
                                category={cat}
                                index={i}
                                onOpen={() => setOpenCategory(cat)}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {openCategory && (
                    <CategoryGallery
                        category={openCategory}
                        onClose={() => setOpenCategory(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
