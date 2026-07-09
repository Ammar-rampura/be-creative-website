import { MagneticButton, RevealText, Reveal } from "@/lib/anim";
import { SparkleField, PetalField } from "@/components/Decor";

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-cream-gradient py-28 sm:py-36">
            <SparkleField count={16} />
            <PetalField count={8} />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/40 blur-3xl" />

            <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
                <p className="font-script text-3xl text-rosegold">Ready When You Are</p>
                <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
                    <RevealText text="Let's Create Something" />
                    <br />
                    <span className="text-gradient-gold animate-shimmer">
                        <RevealText text="Beautiful Together" delay={0.2} />
                    </span>
                </h2>
                <Reveal delay={0.2}>
                    <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                        Your dream celebration is one conversation away. Let's bring your
                        vision to life with elegance, artistry and heart.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="#contact">
                            <MagneticButton className="rounded-full bg-foreground px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold">
                                Book Your Event
                            </MagneticButton>
                        </a>
                        <a href="#contact">
                            <MagneticButton className="rounded-full border border-gold/60 bg-card/60 px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-sm transition-colors hover:bg-card">
                                Schedule Consultation
                            </MagneticButton>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
