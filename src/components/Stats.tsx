import { useCountUp } from "@/lib/anim";

const stats = [
    { value: 500, suffix: "+", label: "Events Organized" },
    { value: 480, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 1200, suffix: "+", label: "Decorations Created" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { ref, value: v } = useCountUp(value);
    return (
        <div className="text-center">
            <p className="font-display text-5xl font-semibold text-gradient-gold sm:text-6xl">
                <span ref={ref}>{v.toLocaleString()}</span>
                {suffix}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                {label}
            </p>
        </div>
    );
}

export function Stats() {
    return (
        <section className="relative overflow-hidden bg-foreground py-20 text-ivory">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-gold blur-3xl" />
                <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-rosegold blur-3xl" />
            </div>
            <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4">
                {stats.map((s) => (
                    <Stat key={s.label} {...s} />
                ))}
            </div>
        </section>
    );
}