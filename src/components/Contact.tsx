import { Phone, MapPin, Instagram } from "lucide-react";
import { Reveal } from "@/lib/anim";
import { GoldDivider } from "@/components/Decor";

const WHATSAPP_NUMBER = "919713002052";
const INSTAGRAM_URL =
    "https://www.instagram.com/_.becreative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-champagne/40 blur-3xl" />
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="text-center">
                    <p className="font-script text-3xl text-rosegold">Get In Touch</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                        Let's Plan Your Celebration
                    </h2>
                    <GoldDivider className="mt-5" />
                </div>

                <div className="mt-16 mx-auto max-w-xl">
                    {/* Info */}
                    <Reveal>
                        <div className="flex h-full flex-col gap-5">
                            <InfoRow 
                                icon={Phone} 
                                label="Call Us" 
                                value={
                                    <div className="flex flex-col gap-1.5 text-base w-full">
                                        <div className="flex justify-between items-center gap-4">
                                            <span className="text-sm text-muted-foreground uppercase tracking-widest text-[10px]">Khadija</span>
                                            <a href="tel:+918109041331" className="hover:text-gold transition-colors font-medium">+91 81090 41331</a>
                                        </div>
                                        <div className="flex justify-between items-center gap-4">
                                            <span className="text-sm text-muted-foreground uppercase tracking-widest text-[10px]">Rashida</span>
                                            <a href="tel:+919713002052" className="hover:text-gold transition-colors font-medium">+91 97130 02052</a>
                                        </div>
                                        <div className="flex justify-between items-center gap-4">
                                            <span className="text-sm text-muted-foreground uppercase tracking-widest text-[10px]">Arwa</span>
                                            <a href="tel:+919754032711" className="hover:text-gold transition-colors font-medium">+91 97540 32711</a>
                                        </div>
                                    </div>
                                } 
                            />
                            <InfoRow icon={MapPin} label="Visit Us" value="Indore, Madhya Pradesh, India" />

                            <div className="flex gap-3">
                                <Social icon={Instagram} href={INSTAGRAM_URL} label="Instagram" />
                            </div>

                            <div className="mt-1 overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-border">
                                <iframe
                                    title="Be Creative location"
                                    src="https://www.google.com/maps?q=Indore,India&output=embed"
                                    className="h-64 w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

        </section>
    );
}

function InfoRow({
    icon: Icon,
    label,
    value,
    href,
}: {
    icon: typeof Phone;
    label: string;
    value: React.ReactNode;
    href?: string;
}) {
    const content = (
        <div className="flex items-center gap-4 rounded-2xl glass-card p-5 shadow-soft transition-transform hover:translate-x-1">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-rosegold/20 text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                </span>
                <div className="block truncate font-display text-lg text-foreground">
                    {value}
                </div>
            </div>
        </div>
    );
    return href ? <a href={href}>{content}</a> : content;
}

function Social({
    icon: Icon,
    href,
    label,
}: {
    icon: typeof Instagram;
    href: string;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-xl glass-card text-foreground shadow-soft transition-all hover:-translate-y-1 hover:text-gold"
        >
            <Icon className="h-5 w-5" strokeWidth={1.5} />
        </a>
    );
}
