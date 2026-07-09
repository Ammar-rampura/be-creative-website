import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Toaster, toast } from "sonner";
import Lenis from "lenis";
import { AnimatePresence, motion, motion as motion$1, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Baby, Building2, Cake, ClipboardList, Facebook, Gem, Heart, Instagram, Mail, MapPin, MessageCircle, MessagesSquare, Palette, PartyPopper, Phone, Quote, Sparkle, Sparkles, Sun, Wine, X } from "lucide-react";
//#region src/components/SmoothScroll.tsx
function SmoothScroll() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
//#endregion
//#region src/lib/anim.tsx
var easeLux = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, delay = 0, y = 36, className, once = true }) {
	return /* @__PURE__ */ jsx(motion$1.div, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: easeLux
		},
		children
	});
}
var staggerContainer = {
	hidden: {},
	show: { transition: {
		staggerChildren: .12,
		delayChildren: .1
	} }
};
var staggerItem = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: easeLux
		}
	}
};
/** Word-by-word text reveal for premium headlines */
function RevealText({ text, className, delay = 0 }) {
	const words = text.split(" ");
	return /* @__PURE__ */ jsx(motion$1.span, {
		className,
		initial: "hidden",
		animate: "show",
		variants: { show: { transition: {
			staggerChildren: .08,
			delayChildren: delay
		} } },
		style: { display: "inline-block" },
		children: words.map((w, i) => /* @__PURE__ */ jsx("span", {
			style: {
				display: "inline-block",
				overflow: "hidden"
			},
			children: /* @__PURE__ */ jsx(motion$1.span, {
				style: {
					display: "inline-block",
					paddingRight: "0.25em"
				},
				variants: {
					hidden: {
						y: "110%",
						opacity: 0
					},
					show: {
						y: "0%",
						opacity: 1,
						transition: {
							duration: .85,
							ease: easeLux
						}
					}
				},
				children: w
			})
		}, i))
	});
}
function MagneticButton({ children, className, strength = .4, onClick }) {
	const ref = useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 200,
		damping: 15
	});
	const sy = useSpring(y, {
		stiffness: 200,
		damping: 15
	});
	return /* @__PURE__ */ jsx(motion$1.button, {
		ref,
		onClick,
		style: {
			x: sx,
			y: sy
		},
		onMouseMove: (e) => {
			const rect = ref.current?.getBoundingClientRect();
			if (!rect) return;
			x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
			y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
		},
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		whileTap: { scale: .96 },
		className,
		children
	});
}
function useCountUp(target, duration = 2e3) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!inView) return;
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(eased * target));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		target,
		duration
	]);
	return {
		ref,
		value
	};
}
//#endregion
//#region src/components/Navbar.tsx
var links = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Showcase",
		href: "#showcase"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs(motion$1.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-card shadow-soft" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex flex-col leading-none",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "font-display text-2xl font-semibold tracking-wide text-foreground",
						children: ["Be ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "Creative"
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground",
						children: "Luxury Events"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "story-link text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ jsx("a", {
					href: "#contact",
					className: "hidden md:block",
					children: /* @__PURE__ */ jsx(MagneticButton, {
						className: "rounded-full bg-foreground px-6 py-2.5 text-sm font-medium tracking-wide text-background transition-shadow hover:shadow-gold",
						children: "Book Now"
					})
				}),
				/* @__PURE__ */ jsxs("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((o) => !o),
					className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
					children: [
						/* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}` }),
						/* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}` }),
						/* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}` })
					]
				})
			]
		}), /* @__PURE__ */ jsx(motion$1.div, {
			initial: false,
			animate: {
				height: open ? "auto" : 0,
				opacity: open ? 1 : 0
			},
			className: "overflow-hidden glass-card md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1 px-6 py-4",
				children: [links.map((l) => /* @__PURE__ */ jsx("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/50 py-3 text-sm uppercase tracking-[0.18em] text-foreground/80",
					children: l.label
				}, l.href)), /* @__PURE__ */ jsx("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-3 rounded-full bg-foreground px-6 py-3 text-center text-sm font-medium text-background",
					children: "Book Now"
				})]
			})
		})]
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/Decor.tsx
function GoldDivider({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center justify-center my-6", className),
		...props,
		children: /* @__PURE__ */ jsxs("svg", {
			width: "120",
			height: "24",
			viewBox: "0 0 120 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "text-[#D4AF37]",
			children: [
				/* @__PURE__ */ jsx("path", {
					d: "M60 2C60 2 54 12 40 12C26 12 0 12 0 12",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M60 2C60 2 66 12 80 12C94 12 120 12 120 12",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "60",
					cy: "12",
					r: "4",
					fill: "currentColor"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "60",
					cy: "12",
					r: "8",
					stroke: "currentColor",
					strokeWidth: "1"
				})
			]
		})
	});
}
function SparkleField({ className, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("absolute inset-0 pointer-events-none opacity-50", className),
		...props,
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-300 animate-pulse" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-yellow-200 animate-pulse",
				style: { animationDelay: "1s" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse",
				style: { animationDelay: "0.5s" }
			})
		]
	});
}
function PetalField({ className, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("absolute inset-0 pointer-events-none opacity-30", className),
		...props,
		children: [/* @__PURE__ */ jsx("svg", {
			className: "absolute top-10 left-10 text-pink-300 w-6 h-6 animate-spin-slow",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2C15 2 22 5 22 12C22 19 15 22 12 22C9 22 2 19 2 12C2 5 9 2 12 2Z" })
		}), /* @__PURE__ */ jsx("svg", {
			className: "absolute bottom-20 right-20 text-rose-300 w-8 h-8 animate-spin-slow",
			style: { animationDirection: "reverse" },
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2C15 2 22 5 22 12C22 19 15 22 12 22C9 22 2 19 2 12C2 5 9 2 12 2Z" })
		})]
	});
}
//#endregion
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-Dp2L13R7.jpg";
//#endregion
//#region src/components/Hero.tsx
function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);
	const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ jsxs("section", {
		ref,
		id: "top",
		className: "relative h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				style: {
					y: bgY,
					scale: bgScale
				},
				className: "absolute inset-0",
				initial: {
					clipPath: "inset(12% 12% 12% 12%)",
					opacity: .4
				},
				animate: {
					clipPath: "inset(0% 0% 0% 0%)",
					opacity: 1
				},
				transition: {
					duration: 1.8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ jsx("img", {
						src: hero_default,
						alt: "Luxury wedding stage with champagne gold florals by Be Creative",
						width: 1920,
						height: 1280,
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" })
				]
			}),
			/* @__PURE__ */ jsx(PetalField, { count: 12 }),
			/* @__PURE__ */ jsx(SparkleField, { count: 22 }),
			/* @__PURE__ */ jsx(motion.div, {
				"aria-hidden": true,
				className: "absolute left-[8%] top-[22%] hidden h-28 w-28 rounded-full border border-gold/40 lg:block animate-float"
			}),
			/* @__PURE__ */ jsx(motion.div, {
				"aria-hidden": true,
				className: "absolute right-[12%] top-[60%] hidden h-16 w-16 rounded-full border border-rosegold/40 lg:block animate-float-rev"
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				style: {
					y: contentY,
					opacity: fade
				},
				className: "relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 text-center",
				children: [
					/* @__PURE__ */ jsx(motion.span, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: 1
						},
						className: "mb-5 font-script text-3xl text-rosegold sm:text-4xl",
						children: "Be Creative"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-[2.6rem] font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl",
						children: [
							/* @__PURE__ */ jsx(RevealText, {
								text: "Crafting Unforgettable",
								delay: .5
							}),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold animate-shimmer",
								children: /* @__PURE__ */ jsx(RevealText, {
									text: "Celebrations",
									delay: .9
								})
							})
						]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.4,
							duration: 1
						},
						className: "mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "From intimate gatherings to grand celebrations, Be Creative transforms every moment into a masterpiece."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.7,
							duration: 1
						},
						className: "mt-10 flex flex-col items-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ jsx("a", {
							href: "#showcase",
							children: /* @__PURE__ */ jsx(MagneticButton, {
								className: "rounded-full bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold",
								children: "Explore Events"
							})
						}), /* @__PURE__ */ jsx("a", {
							href: "#contact",
							children: /* @__PURE__ */ jsx(MagneticButton, {
								className: "rounded-full border border-gold/60 bg-card/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-sm transition-colors hover:bg-card",
								children: "Book Consultation"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2.2,
					duration: 1
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-6 items-start justify-center rounded-full border border-gold/50 p-1.5",
					children: /* @__PURE__ */ jsx(motion.span, {
						animate: { y: [
							0,
							12,
							0
						] },
						transition: {
							duration: 1.6,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "h-2 w-1 rounded-full bg-gold"
					})
				})
			})
		]
	});
}
//#endregion
//#region src/assets/about.jpg
var about_default = "/assets/about-VdV7gBS6.jpg";
//#endregion
//#region src/components/About.tsx
var founders = [
	{
		name: "Rashida Rampurawala",
		role: "Founder & Creative Director",
		img: "/assets/founder-1-CBtYN2bG.jpg"
	},
	{
		name: "Khadija Tajpurwala",
		role: "Founder & Design Lead",
		img: "/assets/founder-2-B-AORp4_.jpg"
	},
	{
		name: "Arwa Khambati",
		role: "Founder & Operations Head",
		img: "/assets/founder-3-mrV1w-Rd.jpg"
	}
];
function About() {
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "relative bg-cream-gradient py-24 sm:py-32",
		children: [/* @__PURE__ */ jsx(SparkleField, { count: 10 }), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid items-center gap-14 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "relative overflow-hidden rounded-[2rem] shadow-lift",
								children: /* @__PURE__ */ jsx(motion.img, {
									src: about_default,
									alt: "Be Creative luxury table styling",
									width: 1280,
									height: 1280,
									loading: "lazy",
									initial: { scale: 1.2 },
									whileInView: { scale: 1 },
									viewport: { once: true },
									transition: {
										duration: 1.4,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "aspect-[4/5] w-full object-cover"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute -bottom-6 -right-4 hidden rounded-2xl glass-card px-7 py-5 text-center shadow-gold sm:block",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-display text-4xl font-semibold text-gradient-gold",
									children: "10+"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: "Years of Magic"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-champagne/60 blur-2xl" })
						]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-script text-3xl text-rosegold",
							children: "Our Story"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl",
							children: [
								/* @__PURE__ */ jsx(RevealText, { text: "Where Vision Becomes" }),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient-gold",
									children: /* @__PURE__ */ jsx(RevealText, {
										text: "Timeless Memory",
										delay: .2
									})
								})
							]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: .1,
							children: [/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-base leading-relaxed text-muted-foreground",
								children: "Be Creative was born from a shared passion for turning fleeting moments into lifelong memories. We are a boutique event house that blends meticulous planning with artful design — orchestrating weddings, ceremonies and celebrations that feel deeply personal and breathtakingly beautiful."
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-base leading-relaxed text-muted-foreground",
								children: "From the first consultation to the final toast, every detail is crafted with intention, elegance and heart. Your story deserves nothing less than a masterpiece."
							})]
						})
					] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-28 text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-script text-3xl text-rosegold",
							children: "The Visionaries"
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Meet The Founders"
						}),
						/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" })
					]
				}),
				/* @__PURE__ */ jsx(motion.div, {
					variants: staggerContainer,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-80px"
					},
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: founders.map((f) => /* @__PURE__ */ jsxs(motion.div, {
						variants: staggerItem,
						whileHover: { y: -10 },
						transition: {
							type: "spring",
							stiffness: 250,
							damping: 18
						},
						className: "group relative overflow-hidden rounded-[1.75rem] glass-card p-3 shadow-soft transition-shadow hover:shadow-gold",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative overflow-hidden rounded-[1.4rem]",
							children: [/* @__PURE__ */ jsx("img", {
								src: f.img,
								alt: `${f.name}, ${f.role} at Be Creative`,
								width: 768,
								height: 960,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent opacity-70" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-3 pb-4 pt-5 text-center",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-2xl font-semibold text-foreground",
								children: f.name
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs uppercase tracking-[0.2em] text-gold",
								children: f.role
							})]
						})]
					}, f.name))
				})
			]
		})]
	});
}
//#endregion
//#region src/components/Services.tsx
var services$1 = [
	{
		icon: Heart,
		title: "Wedding Planning",
		desc: "Grand, soulful weddings designed and executed end to end."
	},
	{
		icon: Gem,
		title: "Engagement Events",
		desc: "Romantic ring ceremonies with refined, elegant staging."
	},
	{
		icon: Sparkles,
		title: "Mehndi Celebrations",
		desc: "Vibrant, festive setups bursting with color and joy."
	},
	{
		icon: Sun,
		title: "Haldi Ceremonies",
		desc: "Sunlit marigold décor for radiant traditional rituals."
	},
	{
		icon: Baby,
		title: "Baby Showers",
		desc: "Soft, dreamy themes to welcome your little blessing."
	},
	{
		icon: Cake,
		title: "Birthday Parties",
		desc: "Playful to opulent celebrations for every milestone."
	},
	{
		icon: Wine,
		title: "Anniversary Events",
		desc: "Intimate, heartfelt evenings honoring love and time."
	},
	{
		icon: Building2,
		title: "Corporate Events",
		desc: "Polished, impactful gatherings that elevate your brand."
	}
];
function Services() {
	return /* @__PURE__ */ jsxs("section", {
		id: "services",
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-champagne/50 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-rosegold/20 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-script text-3xl text-rosegold",
								children: "What We Create"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
								children: "Our Signature Services"
							}),
							/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" }),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
								children: "Full-service planning, design and flawless execution — crafted around your story and delivered with luxury at every touchpoint."
							})
						]
					}),
					/* @__PURE__ */ jsx(motion.div, {
						variants: staggerContainer,
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							margin: "-60px"
						},
						className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: services$1.map((s) => /* @__PURE__ */ jsxs(motion.div, {
							variants: staggerItem,
							whileHover: { y: -12 },
							transition: {
								type: "spring",
								stiffness: 260,
								damping: 18
							},
							className: "group relative overflow-hidden rounded-3xl glass-card p-7 shadow-soft transition-shadow hover:shadow-gold",
							children: [
								/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/30" }),
								/* @__PURE__ */ jsx("div", {
									className: "relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-rosegold/20 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
									children: /* @__PURE__ */ jsx(s.icon, {
										className: "h-7 w-7",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "relative mt-6 font-display text-2xl font-semibold text-foreground",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "relative mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								}),
								/* @__PURE__ */ jsx("span", {
									className: "relative mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-gold opacity-0 transition-all duration-300 group-hover:opacity-100",
									children: "Discover →"
								})
							]
						}, s.title))
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .1,
						className: "mt-14 text-center",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "Plus luxury décor, theme-based events, family gatherings & complete execution."
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/assets/gallery-wedding.jpg
var gallery_wedding_default = "/assets/gallery-wedding-CRlyKvkr.jpg";
//#endregion
//#region src/assets/gallery-mehndi.jpg
var gallery_mehndi_default = "/assets/gallery-mehndi-DKfpbFG4.jpg";
//#endregion
//#region src/assets/gallery-haldi.jpg
var gallery_haldi_default = "/assets/gallery-haldi-CRTf-3dk.jpg";
//#endregion
//#region src/assets/gallery-babyshower.jpg
var gallery_babyshower_default = "/assets/gallery-babyshower-Dnet69Zv.jpg";
//#endregion
//#region src/assets/gallery-engagement.jpg
var gallery_engagement_default = "/assets/gallery-engagement-BDwS5xsv.jpg";
//#endregion
//#region src/assets/gallery-dining.jpg
var gallery_dining_default = "/assets/gallery-dining-EQejlNwd.jpg";
//#endregion
//#region src/components/Showcase.tsx
var items = [
	{
		img: gallery_wedding_default,
		title: "Wedding Decor",
		tag: "Grand Stages"
	},
	{
		img: gallery_mehndi_default,
		title: "Mehndi Setups",
		tag: "Festive Color"
	},
	{
		img: gallery_haldi_default,
		title: "Haldi Decorations",
		tag: "Marigold Magic"
	},
	{
		img: gallery_babyshower_default,
		title: "Baby Shower Themes",
		tag: "Dreamy Pastels"
	},
	{
		img: gallery_engagement_default,
		title: "Stage Designs",
		tag: "Romantic Backdrops"
	},
	{
		img: gallery_dining_default,
		title: "Luxury Dining",
		tag: "Opulent Tables"
	}
];
function ShowcaseCard({ img, title, tag, index }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `group relative ${index % 2 === 1 ? "lg:mt-20" : ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-[2rem] shadow-lift",
			children: [
				/* @__PURE__ */ jsx(motion.img, {
					src: img,
					alt: `${title} by Be Creative`,
					loading: "lazy",
					style: { y },
					className: "h-[26rem] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-125 sm:h-[32rem]"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-burgundy/75 via-burgundy/10 to-transparent" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-x-0 bottom-0 p-7",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs uppercase tracking-[0.25em] text-gold-soft",
						children: tag
					}), /* @__PURE__ */ jsx("h3", {
						className: "mt-1 font-display text-3xl font-semibold text-ivory",
						children: title
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" })
			]
		})
	});
}
function Showcase() {
	return /* @__PURE__ */ jsx("section", {
		id: "showcase",
		className: "relative overflow-hidden bg-foreground py-24 text-ivory sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-script text-3xl text-rosegold",
						children: "Featured Work"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-1 font-display text-4xl font-semibold text-ivory sm:text-5xl",
						children: /* @__PURE__ */ jsx(RevealText, { text: "A Showcase of Celebrations" })
					}),
					/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ jsx(ShowcaseCard, {
						...it,
						index: i
					})
				}, it.title))
			})]
		})
	});
}
//#endregion
//#region src/components/Timeline.tsx
var steps = [
	{
		icon: MessagesSquare,
		title: "Consultation",
		desc: "We listen deeply to your vision, story and dreams."
	},
	{
		icon: ClipboardList,
		title: "Planning",
		desc: "Tailored concepts, timelines and seamless logistics."
	},
	{
		icon: Palette,
		title: "Design",
		desc: "Curated décor, florals and moodboards brought to life."
	},
	{
		icon: PartyPopper,
		title: "Execution",
		desc: "Flawless on-day delivery, handled end to end."
	},
	{
		icon: Sparkle,
		title: "Celebration",
		desc: "You enjoy every moment while we make magic happen."
	}
];
function Timeline() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 70%"]
	});
	const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return /* @__PURE__ */ jsx("section", {
		className: "relative bg-cream-gradient py-24 sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-5 sm:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-script text-3xl text-rosegold",
						children: "The Journey"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
						children: "Your Experience With Us"
					}),
					/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" })
				]
			}), /* @__PURE__ */ jsxs("div", {
				ref,
				className: "relative mt-16",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2",
					children: /* @__PURE__ */ jsx(motion.div, {
						style: {
							scaleY: lineScale,
							transformOrigin: "top"
						},
						className: "h-full w-full bg-gradient-to-b from-rosegold via-gold to-gold-soft"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-12",
					children: steps.map((s, i) => {
						const left = i % 2 === 0;
						return /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: left ? -40 : 40
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								duration: .8,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: `relative flex items-center gap-6 pl-16 md:pl-0 ${left ? "md:flex-row" : "md:flex-row-reverse"}`,
							children: [
								/* @__PURE__ */ jsx("div", { className: "md:w-1/2" }),
								/* @__PURE__ */ jsx("div", {
									className: "absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-background shadow-gold ring-1 ring-gold/40 md:left-1/2",
									children: /* @__PURE__ */ jsx(s.icon, {
										className: "h-5 w-5 text-gold",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: `md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`,
									children: /* @__PURE__ */ jsxs("div", {
										className: "rounded-2xl glass-card p-6 shadow-soft",
										children: [
											/* @__PURE__ */ jsxs("span", {
												className: "text-xs uppercase tracking-[0.25em] text-gold",
												children: ["Step ", i + 1]
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "mt-1 font-display text-2xl font-semibold text-foreground",
												children: s.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-2 text-sm leading-relaxed text-muted-foreground",
												children: s.desc
											})
										]
									})
								})
							]
						}, s.title);
					})
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/Stats.tsx
var stats = [
	{
		value: 500,
		suffix: "+",
		label: "Events Organized"
	},
	{
		value: 480,
		suffix: "+",
		label: "Happy Clients"
	},
	{
		value: 10,
		suffix: "+",
		label: "Years of Experience"
	},
	{
		value: 1200,
		suffix: "+",
		label: "Decorations Created"
	}
];
function Stat({ value, suffix, label }) {
	const { ref, value: v } = useCountUp(value);
	return /* @__PURE__ */ jsxs("div", {
		className: "text-center",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "font-display text-5xl font-semibold text-gradient-gold sm:text-6xl",
			children: [/* @__PURE__ */ jsx("span", {
				ref,
				children: v.toLocaleString()
			}), suffix]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm",
			children: label
		})]
	});
}
function Stats() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-foreground py-20 text-ivory",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 opacity-20",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/4 top-0 h-40 w-40 rounded-full bg-gold blur-3xl" }), /* @__PURE__ */ jsx("div", { className: "absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-rosegold blur-3xl" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ jsx(Stat, { ...s }, s.label))
		})]
	});
}
//#endregion
//#region src/components/Testimonials.tsx
var testimonials = [
	{
		quote: "Be Creative turned our wedding into a fairytale. Every detail was flawless, elegant and beyond what we imagined. Our guests are still talking about it.",
		name: "Aisha & Yusuf",
		event: "Wedding"
	},
	{
		quote: "The mehndi setup was a riot of color and joy. They understood our culture and elevated it with such taste. Truly world-class artistry.",
		name: "Fatima R.",
		event: "Mehndi Celebration"
	},
	{
		quote: "Our baby shower felt like a dream — soft, magical and so thoughtfully designed. The team handled everything with grace and warmth.",
		name: "Zainab & Ali",
		event: "Baby Shower"
	},
	{
		quote: "Professional, creative and deeply caring. They transformed our corporate gala into an unforgettable evening. Highly recommended.",
		name: "Mohammed I.",
		event: "Corporate Event"
	}
];
function Testimonials() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
		return () => clearInterval(t);
	}, []);
	const t = testimonials[index];
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/40 blur-3xl" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-4xl px-5 text-center sm:px-8",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-script text-3xl text-rosegold",
					children: "Kind Words"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
					children: "Loved By Our Clients"
				}),
				/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mt-12 min-h-[18rem]",
					children: [/* @__PURE__ */ jsx(Quote, { className: "mx-auto h-12 w-12 text-gold/40" }), /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsxs(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -24
							},
							transition: {
								duration: .6,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mt-6",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "font-display text-2xl font-medium italic leading-relaxed text-foreground sm:text-3xl",
								children: [
									"“",
									t.quote,
									"”"
								]
							}), /* @__PURE__ */ jsxs("footer", {
								className: "mt-7",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-display text-xl font-semibold text-foreground",
									children: t.name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs uppercase tracking-[0.2em] text-gold",
									children: t.event
								})]
							})]
						}, index)
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 flex justify-center gap-2",
					children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", {
						"aria-label": `Show testimonial ${i + 1}`,
						onClick: () => setIndex(i),
						className: `h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-gold" : "w-2 bg-border"}`
					}, i))
				})
			]
		})]
	});
}
//#endregion
//#region src/components/Gallery.tsx
var images = [
	{
		src: gallery_wedding_default,
		alt: "Luxury wedding stage"
	},
	{
		src: gallery_mehndi_default,
		alt: "Vibrant mehndi function decor"
	},
	{
		src: "/assets/gallery-floral-BkvYp1hZ.jpg",
		alt: "Champagne rose floral centerpiece"
	},
	{
		src: gallery_babyshower_default,
		alt: "Pastel baby shower setup"
	},
	{
		src: gallery_haldi_default,
		alt: "Marigold haldi ceremony decor"
	},
	{
		src: gallery_dining_default,
		alt: "Opulent luxury dining setup"
	},
	{
		src: gallery_engagement_default,
		alt: "Elegant engagement stage"
	},
	{
		src: "/assets/gallery-birthday-DXK1VDif.jpg",
		alt: "Golden birthday celebration decor"
	}
];
function Gallery() {
	const [active, setActive] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		id: "gallery",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-script text-3xl text-rosegold",
						children: "Moments We Made"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
						children: "The Gallery"
					}),
					/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4",
				children: images.map((img, i) => /* @__PURE__ */ jsxs(motion.button, {
					initial: {
						opacity: 0,
						scale: .92
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .6,
						delay: i % 4 * .06
					},
					onClick: () => setActive(i),
					className: "group relative block w-full overflow-hidden rounded-2xl shadow-soft",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-burgundy/0 transition-colors duration-500 group-hover:bg-burgundy/25" }),
						/* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" })
					]
				}, i))
			})]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: active !== null && /* @__PURE__ */ jsxs(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setActive(null),
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-burgundy/80 p-5 backdrop-blur-md",
			children: [/* @__PURE__ */ jsx("button", {
				"aria-label": "Close",
				className: "absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass-card text-ivory",
				children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
			}), /* @__PURE__ */ jsx(motion.img, {
				initial: {
					scale: .85,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .85,
					opacity: 0
				},
				transition: {
					duration: .4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				src: images[active].src,
				alt: images[active].alt,
				onClick: (e) => e.stopPropagation(),
				className: "max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
			}, active)]
		}) })]
	});
}
//#endregion
//#region src/components/CTA.tsx
function CTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-cream-gradient py-28 sm:py-36",
		children: [
			/* @__PURE__ */ jsx(SparkleField, { count: 16 }),
			/* @__PURE__ */ jsx(PetalField, { count: 8 }),
			/* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/40 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-3xl px-5 text-center sm:px-8",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-script text-3xl text-rosegold",
						children: "Ready When You Are"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl",
						children: [
							/* @__PURE__ */ jsx(RevealText, { text: "Let's Create Something" }),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold animate-shimmer",
								children: /* @__PURE__ */ jsx(RevealText, {
									text: "Beautiful Together",
									delay: .2
								})
							})
						]
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-xl text-muted-foreground",
							children: "Your dream celebration is one conversation away. Let's bring your vision to life with elegance, artistry and heart."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ jsx("a", {
								href: "#contact",
								children: /* @__PURE__ */ jsx(MagneticButton, {
									className: "rounded-full bg-foreground px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold",
									children: "Book Your Event"
								})
							}), /* @__PURE__ */ jsx("a", {
								href: "#contact",
								children: /* @__PURE__ */ jsx(MagneticButton, {
									className: "rounded-full border border-gold/60 bg-card/60 px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-sm transition-colors hover:bg-card",
									children: "Schedule Consultation"
								})
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/Contact.tsx
function Contact() {
	const [sending, setSending] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSending(true);
		setTimeout(() => {
			setSending(false);
			e.target.reset();
			toast.success("Thank you! We'll be in touch within 24 hours.");
		}, 900);
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -right-24 top-0 h-72 w-72 rounded-full bg-champagne/40 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-script text-3xl text-rosegold",
							children: "Get In Touch"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
							children: "Let's Plan Your Celebration"
						}),
						/* @__PURE__ */ jsx(GoldDivider, { className: "mt-5" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-16 grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("form", {
						onSubmit,
						className: "rounded-[2rem] glass-card p-7 shadow-soft sm:p-9",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsx(Field, {
									label: "Full Name",
									name: "name",
									placeholder: "Your name",
									required: true
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Phone",
									name: "phone",
									type: "tel",
									placeholder: "+91 00000 00000"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ jsx(Field, {
										label: "Email",
										name: "email",
										type: "email",
										placeholder: "you@email.com",
										required: true
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ jsx(Field, {
										label: "Event Type",
										name: "event",
										placeholder: "Wedding, Mehndi, Baby Shower…"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ jsx("label", {
										className: "mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Tell us about your dream event"
									}), /* @__PURE__ */ jsx("textarea", {
										name: "message",
										rows: 4,
										placeholder: "Share your vision, dates and guest count…",
										className: "w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
									})]
								})
							]
						}), /* @__PURE__ */ jsx(motion.button, {
							whileHover: { scale: 1.02 },
							whileTap: { scale: .98 },
							disabled: sending,
							className: "mt-6 w-full rounded-full bg-foreground py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold disabled:opacity-60",
							children: sending ? "Sending…" : "Send Enquiry"
						})]
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex h-full flex-col gap-5",
							children: [
								/* @__PURE__ */ jsx(InfoRow, {
									icon: Phone,
									label: "Call Us",
									value: "+91 98765 43210",
									href: "tel:+919876543210"
								}),
								/* @__PURE__ */ jsx(InfoRow, {
									icon: Mail,
									label: "Email Us",
									value: "hello@becreative.events",
									href: "mailto:hello@becreative.events"
								}),
								/* @__PURE__ */ jsx(InfoRow, {
									icon: MapPin,
									label: "Visit Us",
									value: "Mumbai, Maharashtra, India"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex gap-3",
									children: [
										/* @__PURE__ */ jsx(Social, {
											icon: Instagram,
											href: "https://instagram.com",
											label: "Instagram"
										}),
										/* @__PURE__ */ jsx(Social, {
											icon: Facebook,
											href: "https://facebook.com",
											label: "Facebook"
										}),
										/* @__PURE__ */ jsx(Social, {
											icon: MessageCircle,
											href: "https://wa.me/919876543210",
											label: "WhatsApp"
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-1 overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-border",
									children: /* @__PURE__ */ jsx("iframe", {
										title: "Be Creative location",
										src: "https://www.google.com/maps?q=Mumbai,India&output=embed",
										className: "h-64 w-full border-0",
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									})
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://wa.me/919876543210",
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110",
				children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" })
			})
		]
	});
}
function Field({ label, name, type = "text", placeholder, required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		name,
		type,
		required,
		placeholder,
		className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
	})] });
}
function InfoRow({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-4 rounded-2xl glass-card p-5 shadow-soft transition-transform hover:translate-x-1",
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-rosegold/20 text-gold",
			children: /* @__PURE__ */ jsx(Icon, {
				className: "h-5 w-5",
				strokeWidth: 1.5
			})
		}), /* @__PURE__ */ jsxs("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("span", {
				className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsx("span", {
				className: "block truncate font-display text-lg text-foreground",
				children: value
			})]
		})]
	});
	return href ? /* @__PURE__ */ jsx("a", {
		href,
		children: content
	}) : content;
}
function Social({ icon: Icon, href, label }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "flex h-12 w-12 items-center justify-center rounded-xl glass-card text-foreground shadow-soft transition-all hover:-translate-y-1 hover:text-gold",
		children: /* @__PURE__ */ jsx(Icon, {
			className: "h-5 w-5",
			strokeWidth: 1.5
		})
	});
}
//#endregion
//#region src/components/Footer.tsx
var sections = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Showcase",
		href: "#showcase"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var services = [
	"Weddings",
	"Engagements",
	"Mehndi & Haldi",
	"Baby Showers",
	"Corporate Events"
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-foreground text-ivory",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("p", {
						className: "font-display text-3xl font-semibold",
						children: ["Be ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "Creative"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-ivory/60",
						children: "Crafting unforgettable celebrations with elegance, artistry and heart. Luxury event planning for life's most precious moments."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-xs uppercase tracking-[0.2em] text-gold-soft",
						children: "Rashida · Khadija · Arwa"
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-lg font-semibold text-gold-soft",
					children: "Explore"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2.5",
					children: sections.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: s.href,
						className: "text-sm text-ivory/70 transition-colors hover:text-gold",
						children: s.label
					}) }, s.href))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-lg font-semibold text-gold-soft",
					children: "Services"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2.5",
					children: services.map((s) => /* @__PURE__ */ jsx("li", {
						className: "text-sm text-ivory/70",
						children: s
					}, s))
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-ivory/10 py-6",
			children: /* @__PURE__ */ jsxs("p", {
				className: "text-center text-xs text-ivory/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Be Creative. All rights reserved. Made with love."
				]
			})
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SmoothScroll, {}),
		/* @__PURE__ */ jsx(Toaster, {
			position: "top-center",
			richColors: true
		}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(Showcase, {}),
			/* @__PURE__ */ jsx(Timeline, {}),
			/* @__PURE__ */ jsx(Stats, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(Gallery, {}),
			/* @__PURE__ */ jsx(CTA, {}),
			/* @__PURE__ */ jsx(Contact, {})
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { Index as component };
