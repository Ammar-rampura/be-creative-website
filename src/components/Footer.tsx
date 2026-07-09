const sections = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "Weddings",
    "Engagements",
    "Mehndi & Haldi",
    "Baby Showers",
    "Corporate Events",
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-foreground text-ivory">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
                <div>
                    <p className="font-display text-3xl font-semibold">
                        Be <span className="text-gradient-gold">Creative</span>
                    </p>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
                        Crafting unforgettable celebrations with elegance, artistry and heart.
                        Luxury event planning for life's most precious moments.
                    </p>
                    <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-soft">
                        Rashida · Khadija · Arwa
                    </p>
                </div>

                <div>
                    <h4 className="font-display text-lg font-semibold text-gold-soft">Explore</h4>
                    <ul className="mt-4 space-y-2.5">
                        {sections.map((s) => (
                            <li key={s.href}>
                                <a
                                    href={s.href}
                                    className="text-sm text-ivory/70 transition-colors hover:text-gold"
                                >
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-display text-lg font-semibold text-gold-soft">Services</h4>
                    <ul className="mt-4 space-y-2.5">
                        {services.map((s) => (
                            <li key={s} className="text-sm text-ivory/70">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-ivory/10 py-6">
                <p className="text-center text-xs text-ivory/50">
                    © {new Date().getFullYear()} Be Creative. All rights reserved. Made with
                    love.
                </p>
            </div>
        </footer>
    );
}
