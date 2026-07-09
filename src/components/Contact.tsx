import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/lib/anim";
import { GoldDivider } from "@/components/Decor";

export function Contact() {
    const [sending, setSending] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            (e.target as HTMLFormElement).reset();
            toast.success("Thank you! We'll be in touch within 24 hours.");
        }, 900);
    };

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

                <div className="mt-16 grid gap-10 lg:grid-cols-2">
                    {/* Form */}
                    <Reveal>
                        <form
                            onSubmit={onSubmit}
                            className="rounded-[2rem] glass-card p-7 shadow-soft sm:p-9"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field label="Full Name" name="name" placeholder="Your name" required />
                                <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                                <div className="sm:col-span-2">
                                    <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <Field label="Event Type" name="event" placeholder="Wedding, Mehndi, Baby Shower…" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                        Tell us about your dream event
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Share your vision, dates and guest count…"
                                        className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                                    />
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={sending}
                                className="mt-6 w-full rounded-full bg-foreground py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold disabled:opacity-60"
                            >
                                {sending ? "Sending…" : "Send Enquiry"}
                            </motion.button>
                        </form>
                    </Reveal>

                    {/* Info */}
                    <Reveal delay={0.1}>
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
                            <InfoRow icon={Mail} label="Email Us" value="hello@becreative.events" href="mailto:hello@becreative.events" />
                            <InfoRow icon={MapPin} label="Visit Us" value="Indore, Madhya Pradesh, India" />

                            <div className="flex gap-3">
                                <Social icon={Instagram} href="https://instagram.com" label="Instagram" />
                                <Social icon={Facebook} href="https://facebook.com" label="Facebook" />
                                <Social icon={MessageCircle} href="https://wa.me/919876543210" label="WhatsApp" />
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

            {/* Floating WhatsApp */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110"
            >
                <MessageCircle className="h-7 w-7" />
            </a>
        </section>
    );
}

function Field({
    label,
    name,
    type = "text",
    placeholder,
    required,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {label}
            </label>
            <input
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
            />
        </div>
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
            <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                </span>
                <span className="block truncate font-display text-lg text-foreground">
                    {value}
                </span>
            </span>
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
