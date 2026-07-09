import { useEffect, useState } from "react";
import { motion, MagneticButton } from "@/lib/anim";

const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-card shadow-soft" : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                <a href="#top" className="flex flex-col leading-none">
                    <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
                        Be <span className="text-gradient-gold">Creative</span>
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
                        Luxury Events
                    </span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="story-link text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                <a href="#contact" className="hidden md:block">
                    <MagneticButton className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium tracking-wide text-background transition-shadow hover:shadow-gold">
                        Book Now
                    </MagneticButton>
                </a>

                <button
                    aria-label="Toggle menu"
                    onClick={() => setOpen((o) => !o)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                >
                    <span
                        className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
                    />
                </button>
            </nav>

            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden glass-card md:hidden"
            >
                <div className="flex flex-col gap-1 px-6 py-4">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="border-b border-border/50 py-3 text-sm uppercase tracking-[0.18em] text-foreground/80"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="mt-3 rounded-full bg-foreground px-6 py-3 text-center text-sm font-medium text-background"
                    >
                        Book Now
                    </a>
                </div>
            </motion.div>
        </motion.header>
    );
}