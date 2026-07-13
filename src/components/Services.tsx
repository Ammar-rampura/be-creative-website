import { motion } from "motion/react";
import {
    Heart,
    Gem,
    Sparkles,
    Crown,
    Baby,
    Cake,
    DoorOpen,
    PartyPopper,
} from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/lib/anim";
import { GoldDivider } from "@/components/Decor";

// Each service maps to a Showcase category — "Discover" opens that
// category's photo gallery in the Showcase section.
const services = [
    { icon: Heart, title: "Wedding Stage Decor", desc: "Grand stages and floral backdrops crafted for your big day." },
    { icon: Cake, title: "Birthday Celebrations", desc: "Playful to opulent birthday setups for every milestone." },
    { icon: Baby, title: "Baby Shower Decor", desc: "Soft, dreamy themes to welcome your little blessing." },
    { icon: Sparkles, title: "Mehendi Decor", desc: "Vibrant, festive mehendi setups bursting with color and joy." },
    { icon: Crown, title: "Shitabi Backdrop", desc: "Traditional shitabi settings styled with timeless charm." },
    { icon: Gem, title: "Darees Backdrop", desc: "Regal darees drapery for graceful, elegant gatherings." },
    { icon: DoorOpen, title: "Entry Gates", desc: "Grand floral entryways that welcome your guests in style." },
    { icon: PartyPopper, title: "Interactive Activities", desc: "Fun, engaging activity corners your guests will love." },
];

function openShowcaseCategory(title: string) {
    window.dispatchEvent(
        new CustomEvent("open-showcase-category", { detail: title }),
    );
}

export function Services() {
    return (
        <section id="services" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-champagne/50 blur-3xl" />
            <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-rosegold/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <div className="text-center">
                    <p className="font-script text-3xl text-rosegold">What We Create</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                        Our Signature Services
                    </h2>
                    <GoldDivider className="mt-5" />
                    <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                        Full-service planning, design and flawless execution — crafted around
                        your story and delivered with luxury at every touchpoint.
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {services.map((s) => (
                        <motion.button
                            key={s.title}
                            type="button"
                            onClick={() => openShowcaseCategory(s.title)}
                            aria-label={`Discover ${s.title}`}
                            variants={staggerItem}
                            whileHover={{ y: -12 }}
                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            className="group relative overflow-hidden rounded-3xl glass-card p-7 text-left shadow-soft transition-shadow hover:shadow-gold"
                        >
                            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/30" />
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-rosegold/20 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                <s.icon className="h-7 w-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="relative mt-6 font-display text-2xl font-semibold text-foreground">
                                {s.title}
                            </h3>
                            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                                {s.desc}
                            </p>
                            <span className="relative mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                Discover →
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                <Reveal delay={0.1} className="mt-14 text-center">
                    <p className="text-muted-foreground">
                        Plus luxury décor, theme-based events, family gatherings & complete
                        execution.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}