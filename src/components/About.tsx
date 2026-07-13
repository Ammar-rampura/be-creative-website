import { motion } from "motion/react";
import { Reveal, RevealText, staggerContainer, staggerItem } from "@/lib/anim";
import { GoldDivider, SparkleField } from "@/components/Decor";
import aboutImg from "@/assets/about.jpg";
import f1 from "@/assets/founders/founder-1.png";
import f2 from "@/assets/founders/founder-2.png";
import f3 from "@/assets/founders/founder-3.png";

// Single group photo of all three founders — drop a file named
// "founders.jpg/jpeg/png" into src/assets/founders/ and it is used
// automatically; until then the three separate cards render.
const groupPhoto = Object.values(
    import.meta.glob("../assets/founders/founders*.{jpg,jpeg,png}", {
        eager: true,
        import: "default",
    }) as Record<string, string>,
)[0];

const founders = [
    { name: "Rashida Rampurawala", role: "Founder", img: f1 },
    { name: "Khadija Tajpurwala", role: "Founder", img: f2 },
    { name: "Arwa Khambati", role: "Founder", img: f3 },
];

export function About() {
    return (
        <section id="about" className="relative bg-cream-gradient py-24 sm:py-32">
            <SparkleField count={10} />
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Image composition */}
                    <Reveal className="relative">
                        <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
                            <motion.img
                                src={aboutImg}
                                alt="Be Creative luxury table styling"
                                width={1280}
                                height={1280}
                                loading="lazy"
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                                className="aspect-[4/5] w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass-card px-7 py-5 text-center shadow-gold sm:block">
                            <p className="font-display text-4xl font-semibold text-gradient-gold">10+</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Years of Magic
                            </p>
                        </div>
                        <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-champagne/60 blur-2xl" />
                    </Reveal>

                    {/* Story */}
                    <div>
                        <p className="font-script text-3xl text-rosegold">Our Story</p>
                        <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                            <RevealText text="Where Vision Becomes" />
                            <br />
                            <span className="text-gradient-gold">
                                <RevealText text="Timeless Memory" delay={0.2} />
                            </span>
                        </h2>
                        <Reveal delay={0.1}>
                            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                                Be Creative was born from a shared passion for turning fleeting
                                moments into lifelong memories. We are a boutique event house that
                                blends meticulous planning with artful design — orchestrating
                                weddings, ceremonies and celebrations that feel deeply personal
                                and breathtakingly beautiful.
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                From the first consultation to the final toast, every detail is
                                crafted with intention, elegance and heart. Your story deserves
                                nothing less than a masterpiece.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Founders */}
                <div className="mt-28 text-center">
                    <p className="font-script text-3xl text-rosegold">The Visionaries</p>
                    <h3 className="mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                        Meet The Founders
                    </h3>
                    <GoldDivider className="mt-5" />
                </div>

                {groupPhoto ? (
                    <Reveal className="mx-auto mt-14 max-w-4xl">
                        <div className="group relative overflow-hidden rounded-[2rem] glass-card p-3 shadow-soft transition-shadow hover:shadow-gold sm:p-4">
                            <div className="relative overflow-hidden rounded-[1.5rem]">
                                <img
                                    src={groupPhoto}
                                    alt="Rashida Rampurawala, Khadija Tajpurwala and Arwa Khambati — founders of Be Creative"
                                    loading="lazy"
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/50 via-transparent to-transparent opacity-70" />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 px-3 pb-5 pt-6 sm:flex-row sm:gap-0">
                                {founders.map((f, i) => (
                                    <div
                                        key={f.name}
                                        className={`text-center sm:flex-1 ${
                                            i > 0 ? "sm:border-l sm:border-gold/30" : ""
                                        }`}
                                    >
                                        <h4 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                                            {f.name}
                                        </h4>
                                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                                            {f.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ) : (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {founders.map((f) => (
                            <motion.div
                                key={f.name}
                                variants={staggerItem}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                                className="group relative overflow-hidden rounded-[1.75rem] glass-card p-3 shadow-soft transition-shadow hover:shadow-gold"
                            >
                                <div className="relative overflow-hidden rounded-[1.4rem]">
                                    <img
                                        src={f.img}
                                        alt={`${f.name}, ${f.role} at Be Creative`}
                                        width={768}
                                        height={960}
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent opacity-70" />
                                </div>
                                <div className="px-3 pb-4 pt-5 text-center">
                                    <h4 className="font-display text-2xl font-semibold text-foreground">
                                        {f.name}
                                    </h4>
                                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                                        {f.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}