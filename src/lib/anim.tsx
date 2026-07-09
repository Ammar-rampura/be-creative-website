import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const easeLux = [0.22, 1, 0.36, 1] as const;

export function Reveal({
    children,
    delay = 0,
    y = 36,
    className,
    once = true,
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
    once?: boolean;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-80px" }}
            transition={{ duration: 0.9, delay, ease: easeLux }}
        >
            {children}
        </motion.div>
    );
}

export const staggerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLux } },
};

/** Word-by-word text reveal for premium headlines */
export function RevealText({
    text,
    className,
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const words = text.split(" ");
    return (
        <motion.span
            className={className}
            initial="hidden"
            animate="show"
            variants={{
                show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
            }}
            style={{ display: "inline-block" }}
        >
            {words.map((w, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
                    <motion.span
                        style={{ display: "inline-block", paddingRight: "0.25em" }}
                        variants={{
                            hidden: { y: "110%", opacity: 0 },
                            show: {
                                y: "0%",
                                opacity: 1,
                                transition: { duration: 0.85, ease: easeLux },
                            },
                        }}
                    >
                        {w}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}

export function MagneticButton({
    children,
    className,
    strength = 0.4,
    onClick,
}: {
    children: ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            style={{ x: sx, y: sy }}
            onMouseMove={(e) => {
                const rect = ref.current?.getBoundingClientRect();
                if (!rect) return;
                x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
                y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            whileTap={{ scale: 0.96 }}
            className={className}
        >
            {children}
        </motion.button>
    );
}

export function useCountUp(target: number, duration = 2000) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, target, duration]);

    return { ref, value };
}

export { motion };
