import { o as __toESM } from "../_runtime.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as createFileRoute, f as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as Cake, a as Phone, c as MessagesSquare, d as Instagram, f as Heart, g as ClipboardList, h as Crown, i as Quote, l as MessageCircle, m as DoorOpen, n as Sparkles, o as PartyPopper, p as Gem, r as Sparkle, s as Palette, t as X, u as MapPin, v as Baby, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DvUyilha.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C_D6hnWD.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Be Creative — Luxury Event Planning & Management" },
			{
				name: "description",
				content: "Be Creative crafts unforgettable luxury weddings, mehndi, haldi, baby showers and celebrations. Complete event planning, design and execution."
			},
			{
				name: "author",
				content: "Be Creative"
			},
			{
				property: "og:title",
				content: "Be Creative — Luxury Event Planning & Management"
			},
			{
				property: "og:description",
				content: "From intimate gatherings to grand celebrations, Be Creative transforms every moment into a masterpiece."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@BeCreative"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&family=Pinyon+Script&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "EventPlanningBusiness",
				name: "Be Creative",
				description: "Luxury event planning and management for weddings, engagements, mehndi, haldi, baby showers, birthdays, anniversaries and corporate events.",
				founder: [
					{
						"@type": "Person",
						name: "Rashida Rampurawala"
					},
					{
						"@type": "Person",
						name: "Khadija Tajpurwala"
					},
					{
						"@type": "Person",
						name: "Arwa Khambati"
					}
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
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
var easeLux = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, delay = 0, y = 36, className, once = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		className,
		initial: "hidden",
		animate: "show",
		variants: { show: { transition: {
			staggerChildren: .08,
			delayChildren: delay
		} } },
		style: { display: "inline-block" },
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "inline-block",
				overflow: "hidden"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
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
	const ref = (0, import_react.useRef)(null);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
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
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
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
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex flex-col leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl font-semibold tracking-wide text-foreground",
						children: ["Be ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Creative"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground",
						children: "Luxury Events"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "story-link text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
						className: "rounded-full bg-foreground px-6 py-2.5 text-sm font-medium tracking-wide text-background transition-shadow hover:shadow-gold",
						children: "Book Now"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((o) => !o),
					className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}` })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: false,
			animate: {
				height: open ? "auto" : 0,
				opacity: open ? 1 : 0
			},
			className: "overflow-hidden glass-card md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 px-6 py-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/50 py-3 text-sm uppercase tracking-[0.18em] text-foreground/80",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-3 rounded-full bg-foreground px-6 py-3 text-center text-sm font-medium text-background",
					children: "Book Now"
				})]
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function GoldDivider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center justify-center my-6", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "120",
			height: "24",
			viewBox: "0 0 120 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "text-[#D4AF37]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 2C60 2 54 12 40 12C26 12 0 12 0 12",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 2C60 2 66 12 80 12C94 12 120 12 120 12",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "12",
					r: "4",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute inset-0 pointer-events-none opacity-50", className),
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-yellow-300 animate-pulse" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-yellow-200 animate-pulse",
				style: { animationDelay: "1s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse",
				style: { animationDelay: "0.5s" }
			})
		]
	});
}
function PetalField({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute inset-0 pointer-events-none opacity-30", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "absolute top-10 left-10 text-pink-300 w-6 h-6 animate-spin-slow",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C15 2 22 5 22 12C22 19 15 22 12 22C9 22 2 19 2 12C2 5 9 2 12 2Z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "absolute bottom-20 right-20 text-rose-300 w-8 h-8 animate-spin-slow",
			style: { animationDirection: "reverse" },
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C15 2 22 5 22 12C22 19 15 22 12 22C9 22 2 19 2 12C2 5 9 2 12 2Z" })
		})]
	});
}
var hero_default = "/assets/hero-Dp2L13R7.jpg";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);
	const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "top",
		className: "relative h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Luxury wedding stage with champagne gold florals by Be Creative",
						width: 1920,
						height: 1280,
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetalField, { count: 12 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SparkleField, { count: 22 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute left-[8%] top-[22%] hidden h-28 w-28 rounded-full border border-gold/40 lg:block animate-float"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute right-[12%] top-[60%] hidden h-16 w-16 rounded-full border border-rosegold/40 lg:block animate-float-rev"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: contentY,
					opacity: fade
				},
				className: "relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[2.6rem] font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
								text: "Crafting Unforgettable",
								delay: .5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold animate-shimmer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
									text: "Celebrations",
									delay: .9
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#showcase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								className: "rounded-full bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold",
								children: "Explore Events"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								className: "rounded-full border border-gold/60 bg-card/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-sm transition-colors hover:bg-card",
								children: "Book Consultation"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2.2,
					duration: 1
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-6 items-start justify-center rounded-full border border-gold/50 p-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
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
var founders_default = "/assets/founders-R292gaUJ.png";
var about_default = "/assets/about-VdV7gBS6.jpg";
var founder_1_default = "/assets/founder-1-CJqbwH4F.png";
var founder_2_default = "/assets/founder-2-D_NHgN_g.png";
var founder_3_default = "/assets/founder-3-BjszYAIU.png";
var groupPhoto = Object.values([founders_default])[0];
var founders = [
	{
		name: "Rashida Rampurawala",
		role: "Founder",
		img: founder_1_default
	},
	{
		name: "Khadija Tajpurwala",
		role: "Founder",
		img: founder_2_default
	},
	{
		name: "Arwa Khambati",
		role: "Founder",
		img: founder_3_default
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative bg-cream-gradient py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SparkleField, { count: 10 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-14 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden rounded-[2rem] shadow-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 -right-4 hidden rounded-2xl glass-card px-7 py-5 text-center shadow-gold sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl font-semibold text-gradient-gold",
									children: "10+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: "Years of Magic"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-champagne/60 blur-2xl" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-rosegold",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Where Vision Becomes" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
										text: "Timeless Memory",
										delay: .2
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base leading-relaxed text-muted-foreground",
								children: "Be Creative was born from a shared passion for turning fleeting moments into lifelong memories. We are a boutique event house that blends meticulous planning with artful design — orchestrating weddings, ceremonies and celebrations that feel deeply personal and breathtakingly beautiful."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted-foreground",
								children: "From the first consultation to the final toast, every detail is crafted with intention, elegance and heart. Your story deserves nothing less than a masterpiece."
							})]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-28 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-rosegold",
							children: "The Visionaries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Meet The Founders"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" })
					]
				}),
				groupPhoto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mx-auto mt-14 max-w-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-[2rem] glass-card p-3 shadow-soft transition-shadow hover:shadow-gold sm:p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[1.5rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: groupPhoto,
								alt: "Rashida Rampurawala, Khadija Tajpurwala and Arwa Khambati — founders of Be Creative",
								loading: "lazy",
								className: "w-full object-cover transition-transform duration-700 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-burgundy/50 via-transparent to-transparent opacity-70" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col items-center justify-center gap-4 px-3 pb-5 pt-6 sm:flex-row sm:gap-0",
							children: founders.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `text-center sm:flex-1 ${i > 0 ? "sm:border-l sm:border-gold/30" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-xl font-semibold text-foreground sm:text-2xl",
									children: f.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs uppercase tracking-[0.2em] text-gold",
									children: f.role
								})]
							}, f.name))
						})]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: staggerContainer,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-80px"
					},
					className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: founders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: staggerItem,
						whileHover: { y: -10 },
						transition: {
							type: "spring",
							stiffness: 250,
							damping: 18
						},
						className: "group relative overflow-hidden rounded-[1.75rem] glass-card p-3 shadow-soft transition-shadow hover:shadow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[1.4rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.img,
								alt: `${f.name}, ${f.role} at Be Creative`,
								width: 768,
								height: 960,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent opacity-70" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 pb-4 pt-5 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-2xl font-semibold text-foreground",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
var services$1 = [
	{
		icon: Heart,
		title: "Wedding Stage Decor",
		desc: "Grand stages and floral backdrops crafted for your big day."
	},
	{
		icon: Cake,
		title: "Birthday Celebrations",
		desc: "Playful to opulent birthday setups for every milestone."
	},
	{
		icon: Baby,
		title: "Baby Shower Decor",
		desc: "Soft, dreamy themes to welcome your little blessing."
	},
	{
		icon: Sparkles,
		title: "Mehendi Decor",
		desc: "Vibrant, festive mehendi setups bursting with color and joy."
	},
	{
		icon: Crown,
		title: "Shitabi Backdrop",
		desc: "Traditional shitabi settings styled with timeless charm."
	},
	{
		icon: Gem,
		title: "Darees Backdrop",
		desc: "Regal darees drapery for graceful, elegant gatherings."
	},
	{
		icon: DoorOpen,
		title: "Entry Gates",
		desc: "Grand floral entryways that welcome your guests in style."
	},
	{
		icon: PartyPopper,
		title: "Interactive Activities",
		desc: "Fun, engaging activity corners your guests will love."
	}
];
function openShowcaseCategory(title) {
	window.dispatchEvent(new CustomEvent("open-showcase-category", { detail: title }));
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-champagne/50 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-rosegold/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-3xl text-rosegold",
								children: "What We Create"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
								children: "Our Signature Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
								children: "Full-service planning, design and flawless execution — crafted around your story and delivered with luxury at every touchpoint."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: staggerContainer,
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							margin: "-60px"
						},
						className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: services$1.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							onClick: () => openShowcaseCategory(s.title),
							"aria-label": `Discover ${s.title}`,
							variants: staggerItem,
							whileHover: { y: -12 },
							transition: {
								type: "spring",
								stiffness: 260,
								damping: 18
							},
							className: "group relative overflow-hidden rounded-3xl glass-card p-7 text-left shadow-soft transition-shadow hover:shadow-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-rosegold/20 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "h-7 w-7",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative mt-6 font-display text-2xl font-semibold text-foreground",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-gold opacity-0 transition-all duration-300 group-hover:opacity-100",
									children: "Discover →"
								})
							]
						}, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "mt-14 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Plus luxury décor, theme-based events, family gatherings & complete execution."
						})
					})
				]
			})
		]
	});
}
var _1_default$8 = "/assets/1-Cfsxe6Y8.jpeg";
var _2_default$8 = "/assets/2-DRRnnLvT.jpeg";
var _3_default$8 = "/assets/3-DOXgPDxz.jpeg";
var _4_default$8 = "/assets/4-DWqES5Hg.jpeg";
var _5_default$8 = "/assets/5-DWBOrSZf.jpeg";
var _6_default$7 = "/assets/6-I6Co7c5s.jpeg";
var _7_default$6 = "/assets/7-QrQKdK67.jpeg";
var baby_shower_hero_default = "/assets/baby-shower-hero-LiVBl400.jpeg";
var _1_default$7 = "/assets/1-CrvI4Gvz.jpeg";
var _10_default$2 = "/assets/10-Lnj-LvJU.jpeg";
var _2_default$7 = "/assets/2-B1kZS8in.jpeg";
var _3_default$7 = "/assets/3-BNcmXf_I.jpeg";
var _4_default$7 = "/assets/4-CMUr0mw2.jpeg";
var _5_default$7 = "/assets/5-DCGcEpBt.jpeg";
var _6_default$6 = "/assets/6-C-iwNBMi.jpeg";
var _7_default$5 = "/assets/7-BokoTQdx.jpeg";
var _8_default$4 = "/assets/8-l6ihRIH-.jpeg";
var _9_default$4 = "/assets/9-BsFuCngl.jpeg";
var birthday_hero_default = "/assets/birthday-hero-DXK1VDif.jpg";
var _1_default$6 = "/assets/1-Ci5lNh5X.jpeg";
var _2_default$6 = "/assets/2-B-s-VmSJ.jpeg";
var _3_default$6 = "/assets/3-BUcSp-Jp.jpeg";
var _4_default$6 = "/assets/4-COSksiVC.jpeg";
var _5_default$6 = "/assets/5-ytFYoTvR.jpeg";
var _6_default$5 = "/assets/6-CiNDxkB_.jpeg";
var _7_default$4 = "/assets/7-B4gLCMmp.jpeg";
var _8_default$3 = "/assets/8-ZzXYcQcL.jpeg";
var _9_default$3 = "/assets/9--34Gzsg9.jpeg";
var darees_hero_default = "/assets/darees-hero-DVPXXiaH.jpeg";
var _1_default$5 = "/assets/1-B2nhS1TN.jpeg";
var _10_default$1 = "/assets/10-BSE_dqCM.jpeg";
var _11_default$2 = "/assets/11-CJR5xWPs.jpeg";
var _12_default$2 = "/assets/12-CM8otLwI.jpeg";
var _2_default$5 = "/assets/2-P8njV6MI.jpeg";
var _3_default$5 = "/assets/3-uH0AB6Ki.jpeg";
var _4_default$5 = "/assets/4-D5pkyGVT.jpeg";
var _5_default$5 = "/assets/5-E-eLjO6Y.jpeg";
var _6_default$4 = "/assets/6-DAHa8VYw.jpeg";
var _7_default$3 = "/assets/7-CxRZ7qQM.jpeg";
var _8_default$2 = "/assets/8-Be2njGWi.jpeg";
var _9_default$2 = "/assets/9-BIny0-q9.jpeg";
var entrygate_hero_default = "/assets/entrygate-hero-CTft8vx1.jpeg";
var _1_default$4 = "/assets/1-DsJ5HjZM.jpeg";
var _2_default$4 = "/assets/2-DyJO1pgf.jpeg";
var _3_default$4 = "/assets/3-CznglZVq.jpeg";
var _4_default$4 = "/assets/4-Be5jL88P.jpeg";
var _5_default$4 = "/assets/5-cUdaEuYn.jpeg";
var _6_default$3 = "/assets/6-B8cP4C0R.jpeg";
var housedecor_hero_default = "/assets/housedecor-hero-BE1vTzp2.jpeg";
var _1_default$3 = "/assets/1-DlhstwVm.jpeg";
var _2_default$3 = "/assets/2-B5NUdlJZ.jpeg";
var _3_default$3 = "/assets/3-CPEaOrk_.jpeg";
var _4_default$3 = "/assets/4-CfGcSdvf.jpeg";
var _5_default$3 = "/assets/5-DhDcD6Qx.jpeg";
var interactive_hero_default = "/assets/interactive-hero-I06FDCsV.jpeg";
var _1_default$2 = "/assets/1-DKfpbFG4.jpg";
var _11_default$1 = "/assets/11-PL9OWHPt.jpeg";
var _12_default$1 = "/assets/12-BMoFBTdK.jpeg";
var _13_default$1 = "/assets/13-uaQjkIEn.jpeg";
var _14_default$1 = "/assets/14-Jvba37sr.jpeg";
var _2_default$2 = "/assets/2-DfHK54RQ.jpeg";
var _3_default$2 = "/assets/3-abE8fwQs.jpeg";
var _4_default$2 = "/assets/4-DxZIUVTe.jpeg";
var _5_default$2 = "/assets/5-_8N6xMP9.jpeg";
var _6_default$2 = "/assets/entrygate-hero-CTft8vx1.jpeg";
var _7_default$2 = "/assets/7-DAKeSVfL.jpeg";
var _8_default$1 = "/assets/8-CMhfYxfr.jpeg";
var _9_default$1 = "/assets/11-CJR5xWPs.jpeg";
var mehendi_hero_default = "/assets/mehendi-hero-BnJbaXK6.jpeg";
var _1_default$1 = "/assets/1-DtCp_CHI.jpeg";
var _2_default$1 = "/assets/2-wVhCzqY4.jpeg";
var _3_default$1 = "/assets/3-BQrCKgNp.jpeg";
var _4_default$1 = "/assets/4-Beupro9T.jpeg";
var _5_default$1 = "/assets/5-CIhxuXYJ.jpeg";
var _6_default$1 = "/assets/6-BK0XjpI_.jpeg";
var _7_default$1 = "/assets/7-D-ciApoG.jpeg";
var shitabi_hero_default = "/assets/8-VnQGGKsP.jpeg";
var _1_default = "/assets/1-hv-64P8i.jpeg";
var _10_default = "/assets/10-C3Rs0u6a.jpeg";
var _11_default = "/assets/11-CBYQL0Jl.jpeg";
var _12_default = "/assets/12-B6i7maaN.jpeg";
var _13_default = "/assets/13-DIu-_cZJ.jpeg";
var _14_default = "/assets/14-DlNdSqVk.jpeg";
var _15_default = "/assets/15-BCxX3ZsE.jpeg";
var _16_default = "/assets/16-DFS_KAne.jpeg";
var _17_default = "/assets/17-uXn-XAo0.jpeg";
var _18_default = "/assets/18-DZ3HmjKr.jpeg";
var _2_default = "/assets/2-BTN3Y5R2.jpeg";
var _3_default = "/assets/3-mvItsGYN.jpeg";
var _4_default = "/assets/4-qx6lX9Af.jpeg";
var _5_default = "/assets/5-i6buHR44.jpeg";
var _6_default = "/assets/9--34Gzsg9.jpeg";
var _7_default = "/assets/7-BtVcILsW.jpeg";
var _8_default = "/assets/8-VnQGGKsP.jpeg";
var _9_default = "/assets/9-DkJ07sxC.jpeg";
var weddingstage_hero_default = "/assets/weddingstage-hero-D3xyxWip.jpeg";
var video_1_default = "/assets/video-1-4ajgJvZI.mp4";
var video_2_default = "/assets/video-2-Tjdrm4QZ.mp4";
var categoryImages = /* #__PURE__ */ Object.assign({
	"../assets/baby shower/1.jpeg": _1_default$8,
	"../assets/baby shower/2.jpeg": _2_default$8,
	"../assets/baby shower/3.jpeg": _3_default$8,
	"../assets/baby shower/4.jpeg": _4_default$8,
	"../assets/baby shower/5.jpeg": _5_default$8,
	"../assets/baby shower/6.jpeg": _6_default$7,
	"../assets/baby shower/7.jpeg": _7_default$6,
	"../assets/baby shower/baby-shower-hero.jpeg": baby_shower_hero_default,
	"../assets/birthday-celebration/1.jpeg": _1_default$7,
	"../assets/birthday-celebration/10.jpeg": _10_default$2,
	"../assets/birthday-celebration/2.jpeg": _2_default$7,
	"../assets/birthday-celebration/3.jpeg": _3_default$7,
	"../assets/birthday-celebration/4.jpeg": _4_default$7,
	"../assets/birthday-celebration/5.jpeg": _5_default$7,
	"../assets/birthday-celebration/6.jpeg": _6_default$6,
	"../assets/birthday-celebration/7.jpeg": _7_default$5,
	"../assets/birthday-celebration/8.jpeg": _8_default$4,
	"../assets/birthday-celebration/9.jpeg": _9_default$4,
	"../assets/birthday-celebration/birthday-hero.jpg": birthday_hero_default,
	"../assets/darees backdrop/1.jpeg": _1_default$6,
	"../assets/darees backdrop/2.jpeg": _2_default$6,
	"../assets/darees backdrop/3.jpeg": _3_default$6,
	"../assets/darees backdrop/4.jpeg": _4_default$6,
	"../assets/darees backdrop/5.jpeg": _5_default$6,
	"../assets/darees backdrop/6.jpeg": _6_default$5,
	"../assets/darees backdrop/7.jpeg": _7_default$4,
	"../assets/darees backdrop/8.jpeg": _8_default$3,
	"../assets/darees backdrop/9.jpeg": _9_default$3,
	"../assets/darees backdrop/darees-hero.jpeg": darees_hero_default,
	"../assets/entry gates/1.jpeg": _1_default$5,
	"../assets/entry gates/10.jpeg": _10_default$1,
	"../assets/entry gates/11.jpeg": _11_default$2,
	"../assets/entry gates/12.jpeg": _12_default$2,
	"../assets/entry gates/2.jpeg": _2_default$5,
	"../assets/entry gates/3.jpeg": _3_default$5,
	"../assets/entry gates/4.jpeg": _4_default$5,
	"../assets/entry gates/5.jpeg": _5_default$5,
	"../assets/entry gates/6.jpeg": _6_default$4,
	"../assets/entry gates/7.jpeg": _7_default$3,
	"../assets/entry gates/8.jpeg": _8_default$2,
	"../assets/entry gates/9.jpeg": _9_default$2,
	"../assets/entry gates/entrygate-hero.jpeg": entrygate_hero_default,
	"../assets/founders/founder-1.png": founder_1_default,
	"../assets/founders/founder-2.png": founder_2_default,
	"../assets/founders/founder-3.png": founder_3_default,
	"../assets/founders/founders.png": founders_default,
	"../assets/house decor/1.jpeg": _1_default$4,
	"../assets/house decor/2.jpeg": _2_default$4,
	"../assets/house decor/3.jpeg": _3_default$4,
	"../assets/house decor/4.jpeg": _4_default$4,
	"../assets/house decor/5.jpeg": _5_default$4,
	"../assets/house decor/6.jpeg": _6_default$3,
	"../assets/house decor/housedecor-hero.jpeg": housedecor_hero_default,
	"../assets/interactive activities/1.jpeg": _1_default$3,
	"../assets/interactive activities/2.jpeg": _2_default$3,
	"../assets/interactive activities/3.jpeg": _3_default$3,
	"../assets/interactive activities/4.jpeg": _4_default$3,
	"../assets/interactive activities/5.jpeg": _5_default$3,
	"../assets/interactive activities/interactive-hero.jpeg": interactive_hero_default,
	"../assets/mehendi/1.jpg": _1_default$2,
	"../assets/mehendi/11.jpeg": _11_default$1,
	"../assets/mehendi/12.jpeg": _12_default$1,
	"../assets/mehendi/13.jpeg": _13_default$1,
	"../assets/mehendi/14.jpeg": _14_default$1,
	"../assets/mehendi/2.jpeg": _2_default$2,
	"../assets/mehendi/3.jpeg": _3_default$2,
	"../assets/mehendi/4.jpeg": _4_default$2,
	"../assets/mehendi/5.jpeg": _5_default$2,
	"../assets/mehendi/6.jpeg": _6_default$2,
	"../assets/mehendi/7.jpeg": _7_default$2,
	"../assets/mehendi/8.jpeg": _8_default$1,
	"../assets/mehendi/9.jpeg": _9_default$1,
	"../assets/mehendi/mehendi-hero.jpeg": mehendi_hero_default,
	"../assets/shitabi backdrop/1.jpeg": _1_default$1,
	"../assets/shitabi backdrop/2.jpeg": _2_default$1,
	"../assets/shitabi backdrop/3.jpeg": _3_default$1,
	"../assets/shitabi backdrop/4.jpeg": _4_default$1,
	"../assets/shitabi backdrop/5.jpeg": _5_default$1,
	"../assets/shitabi backdrop/6.jpeg": _6_default$1,
	"../assets/shitabi backdrop/7.jpeg": _7_default$1,
	"../assets/shitabi backdrop/shitabi-hero.jpeg": shitabi_hero_default,
	"../assets/wedding stage decor/1.jpeg": _1_default,
	"../assets/wedding stage decor/10.jpeg": _10_default,
	"../assets/wedding stage decor/11.jpeg": _11_default,
	"../assets/wedding stage decor/12.jpeg": _12_default,
	"../assets/wedding stage decor/13.jpeg": _13_default,
	"../assets/wedding stage decor/14.jpeg": _14_default,
	"../assets/wedding stage decor/15.jpeg": _15_default,
	"../assets/wedding stage decor/16.jpeg": _16_default,
	"../assets/wedding stage decor/17.jpeg": _17_default,
	"../assets/wedding stage decor/18.jpeg": _18_default,
	"../assets/wedding stage decor/2.jpeg": _2_default,
	"../assets/wedding stage decor/3.jpeg": _3_default,
	"../assets/wedding stage decor/4.jpeg": _4_default,
	"../assets/wedding stage decor/5.jpeg": _5_default,
	"../assets/wedding stage decor/6.jpeg": _6_default,
	"../assets/wedding stage decor/7.jpeg": _7_default,
	"../assets/wedding stage decor/8.jpeg": _8_default,
	"../assets/wedding stage decor/9.jpeg": _9_default,
	"../assets/wedding stage decor/weddingstage-hero.jpeg": weddingstage_hero_default
});
var categoryVideos = /* #__PURE__ */ Object.assign({
	"../assets/interactive activities/video-1.mp4": video_1_default,
	"../assets/interactive activities/video-2.mp4": video_2_default
});
var categories = [
	{
		title: "Birthday Celebrations",
		tag: "Joyful Milestones",
		folder: "birthday-celebration"
	},
	{
		title: "Baby Shower Decor",
		tag: "Dreamy Pastels",
		folder: "baby shower"
	},
	{
		title: "Mehendi Decor",
		tag: "Festive Color",
		folder: "mehendi"
	},
	{
		title: "Shitabi Backdrop",
		tag: "Traditional Charm",
		folder: "shitabi backdrop"
	},
	{
		title: "Darees Backdrop",
		tag: "Regal Drapery",
		folder: "darees backdrop"
	},
	{
		title: "Wedding Stage Decor",
		tag: "Grand Stages",
		folder: "wedding stage decor"
	},
	{
		title: "Entry Gates",
		tag: "Grand Welcomes",
		folder: "entry gates"
	},
	{
		title: "House Decor",
		tag: "Intimate Spaces",
		folder: "house decor"
	},
	{
		title: "Interactive Activities",
		tag: "Fun & Engagement",
		folder: "interactive activities"
	}
].map(({ title, tag, folder }) => {
	const prefix = `../assets/${folder}/`;
	const imgs = Object.entries(categoryImages).filter(([p]) => p.startsWith(prefix));
	const hero = imgs.find(([p]) => p.toLowerCase().includes("hero"));
	const photoNumber = (p) => parseInt(p.slice(prefix.length)) || 0;
	const photos = imgs.filter(([p]) => p !== hero?.[0]).sort(([a], [b]) => photoNumber(a) - photoNumber(b)).map(([, src], i) => ({
		type: "image",
		src,
		alt: `${title} by Be Creative ${i + 1}`
	}));
	const videos = Object.entries(categoryVideos).filter(([p]) => p.startsWith(prefix)).sort(([a], [b]) => a.localeCompare(b)).map(([, src], i) => ({
		type: "video",
		src,
		alt: `${title} video ${i + 1}`
	}));
	return {
		title,
		tag,
		cover: hero?.[1] ?? photos[0]?.src ?? "",
		items: [...photos, ...videos]
	};
});
function ShowcaseCard({ category, index, onOpen }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `group relative ${index % 2 === 1 ? "lg:mt-20" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onOpen,
			"aria-label": `View ${category.title} gallery`,
			className: "relative block w-full overflow-hidden rounded-[2rem] text-left shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: category.cover,
					alt: `${category.title} by Be Creative`,
					loading: "lazy",
					style: { y },
					className: "h-[26rem] w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-125 sm:h-[32rem]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-burgundy/75 via-burgundy/10 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.25em] text-gold-soft",
							children: category.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-3xl font-semibold text-ivory",
							children: category.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft opacity-0 transition-all duration-500 group-hover:opacity-100",
							children: ["View Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" })
			]
		})
	});
}
function CategoryGallery({ category, onClose }) {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key !== "Escape") return;
			if (active !== null) setActive(null);
			else onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [active, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		"data-lenis-prevent": true,
		className: "fixed inset-0 z-[60] overflow-y-auto bg-burgundy/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Close gallery",
				onClick: onClose,
				className: "fixed right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-card text-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					y: 24
				},
				transition: {
					duration: .5,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				onClick: (e) => e.stopPropagation(),
				className: "mx-auto max-w-6xl px-5 py-20 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-rosegold",
							children: category.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-4xl font-semibold text-ivory sm:text-5xl",
							children: category.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 columns-2 gap-4 sm:columns-3 [&>*]:mb-4",
					children: category.items.map((item, i) => item.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .92
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .5,
							delay: Math.min(i, 8) * .06
						},
						className: "relative overflow-hidden rounded-2xl shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: item.src,
							"aria-label": item.alt,
							controls: true,
							playsInline: true,
							preload: "metadata",
							className: "w-full rounded-2xl"
						})
					}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							scale: .92
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .5,
							delay: Math.min(i, 8) * .06
						},
						onClick: () => setActive(i),
						className: "group relative block w-full overflow-hidden rounded-2xl shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt,
								loading: "lazy",
								className: "w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-burgundy/0 transition-colors duration-500 group-hover:bg-burgundy/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" })
						]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: (e) => {
					e.stopPropagation();
					setActive(null);
				},
				className: "fixed inset-0 z-[70] flex items-center justify-center bg-burgundy/85 p-5 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close image",
					className: "absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass-card text-ivory",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
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
					src: category.items[active].src,
					alt: category.items[active].alt,
					onClick: (e) => e.stopPropagation(),
					className: "max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
				}, active)]
			}) })
		]
	});
}
function Showcase() {
	const [openCategory, setOpenCategory] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			const title = e.detail;
			const cat = categories.find((c) => c.title === title);
			if (cat) {
				document.getElementById("showcase")?.scrollIntoView();
				setOpenCategory(cat);
			}
		};
		window.addEventListener("open-showcase-category", handler);
		return () => window.removeEventListener("open-showcase-category", handler);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "showcase",
		className: "relative overflow-hidden bg-foreground py-24 text-ivory sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-rosegold",
						children: "Featured Work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl font-semibold text-ivory sm:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "A Showcase of Celebrations" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: categories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowcaseCard, {
						category: cat,
						index: i,
						onOpen: () => setOpenCategory(cat)
					})
				}, cat.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGallery, {
			category: openCategory,
			onClose: () => setOpenCategory(null)
		}) })]
	});
}
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
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 70%"]
	});
	const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-cream-gradient py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-rosegold",
						children: "The Journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
						children: "Your Experience With Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: {
							scaleY: lineScale,
							transformOrigin: "top"
						},
						className: "h-full w-full bg-gradient-to-b from-rosegold via-gold to-gold-soft"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-12",
					children: steps.map((s, i) => {
						const left = i % 2 === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:w-1/2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-background shadow-gold ring-1 ring-gold/40 md:left-1/2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "h-5 w-5 text-gold",
										strokeWidth: 1.5
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `md:w-1/2 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl glass-card p-6 shadow-soft",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs uppercase tracking-[0.25em] text-gold",
												children: ["Step ", i + 1]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 font-display text-2xl font-semibold text-foreground",
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-5xl font-semibold text-gradient-gold sm:text-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref,
				children: v.toLocaleString()
			}), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm",
			children: label
		})]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-foreground py-20 text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 opacity-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/4 top-0 h-40 w-40 rounded-full bg-gold blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-rosegold blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, { ...s }, s.label))
		})]
	});
}
var testimonials = [
	{
		quote: "Be Creative turned our wedding into a fairytale. Every detail was flawless, elegant and beyond what we imagined. Our guests are still talking about it.",
		name: "Husain & Sakina",
		event: "Wedding"
	},
	{
		quote: "The mehendi setup was a riot of color and joy. They understood our culture and elevated it with such taste. Truly world-class artistry.",
		name: "Fatema M.",
		event: "Mehendi Celebration"
	},
	{
		quote: "Our baby shower felt like a dream — soft, magical and so thoughtfully designed. The team handled everything with grace and warmth.",
		name: "Insiya & Mohammed",
		event: "Baby Shower"
	},
	{
		quote: "Professional, creative and deeply caring. They transformed my daughter's birthday into an unforgettable evening. Highly recommended.",
		name: "Zahabiya B.",
		event: "Birthday Celebration"
	}
];
function Testimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
		return () => clearInterval(t);
	}, []);
	const t = testimonials[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/40 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-5 text-center sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-3xl text-rosegold",
					children: "Kind Words"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
					children: "Loved By Our Clients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-12 min-h-[18rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-12 w-12 text-gold/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-2xl font-medium italic leading-relaxed text-foreground sm:text-3xl",
								children: [
									"“",
									t.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-semibold text-foreground",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-gold",
									children: t.event
								})]
							})]
						}, index)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center gap-2",
					children: testimonials.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": `Show testimonial ${i + 1}`,
						onClick: () => setIndex(i),
						className: `h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-gold" : "w-2 bg-border"}`
					}, i))
				})
			]
		})]
	});
}
var images = [
	{
		src: "/assets/gallery-wedding-CRlyKvkr.jpg",
		alt: "Luxury wedding stage"
	},
	{
		src: mehendi_hero_default,
		alt: "Vibrant mehndi function decor"
	},
	{
		src: "/assets/gallery-floral-BkvYp1hZ.jpg",
		alt: "Champagne rose floral centerpiece"
	},
	{
		src: baby_shower_hero_default,
		alt: "Pastel baby shower setup"
	},
	{
		src: "/assets/gallery-haldi-CRTf-3dk.jpg",
		alt: "Marigold haldi ceremony decor"
	},
	{
		src: "/assets/gallery-dining-EQejlNwd.jpg",
		alt: "Opulent luxury dining setup"
	},
	{
		src: "/assets/gallery-engagement-BDwS5xsv.jpg",
		alt: "Elegant engagement stage"
	},
	{
		src: birthday_hero_default,
		alt: "Golden birthday celebration decor"
	}
];
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-rosegold",
						children: "Moments We Made"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
						children: "The Gallery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4",
				children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-burgundy/0 transition-colors duration-500 group-hover:bg-burgundy/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" })
					]
				}, i))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setActive(null),
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-burgundy/80 p-5 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Close",
				className: "absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass-card text-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
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
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-cream-gradient py-28 sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SparkleField, { count: 16 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetalField, { count: 8 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-5 text-center sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-rosegold",
						children: "Ready When You Are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, { text: "Let's Create Something" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold animate-shimmer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
									text: "Beautiful Together",
									delay: .2
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-muted-foreground",
							children: "Your dream celebration is one conversation away. Let's bring your vision to life with elegance, artistry and heart."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									className: "rounded-full bg-foreground px-9 py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold",
									children: "Book Your Event"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
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
var WHATSAPP_NUMBER = "919713002052";
var INSTAGRAM_URL = "https://www.instagram.com/_.becreative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
function Contact() {
	const onSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const message = [
			"New Enquiry — Be Creative Website",
			`Name: ${data.get("name")}`,
			`Phone: ${data.get("phone") || "—"}`,
			`Email: ${data.get("email")}`,
			`Event Type: ${data.get("event") || "—"}`,
			`Details: ${data.get("message") || "—"}`
		].join("\n");
		window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
		form.reset();
		toast.success("Opening WhatsApp — just press send!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 top-0 h-72 w-72 rounded-full bg-champagne/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-rosegold",
							children: "Get In Touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-4xl font-semibold text-foreground sm:text-5xl",
							children: "Let's Plan Your Celebration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldDivider, { className: "mt-5" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-[2rem] glass-card p-7 shadow-soft sm:p-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									name: "name",
									placeholder: "Your name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									name: "phone",
									type: "tel",
									placeholder: "+91 00000 00000"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										placeholder: "you@email.com",
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Event Type",
										name: "event",
										placeholder: "Wedding, Mehndi, Baby Shower…"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Tell us about your dream event"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 4,
										placeholder: "Share your vision, dates and guest count…",
										className: "w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: { scale: 1.02 },
							whileTap: { scale: .98 },
							className: "mt-6 w-full rounded-full bg-foreground py-4 text-sm font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-shadow hover:shadow-gold",
							children: "Send Enquiry on WhatsApp"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									icon: Phone,
									label: "Call Us",
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5 text-base w-full",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground uppercase tracking-widest text-[10px]",
													children: "Khadija"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+918109041331",
													className: "hover:text-gold transition-colors font-medium",
													children: "+91 81090 41331"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground uppercase tracking-widest text-[10px]",
													children: "Rashida"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+919713002052",
													className: "hover:text-gold transition-colors font-medium",
													children: "+91 97130 02052"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground uppercase tracking-widest text-[10px]",
													children: "Arwa"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:+919754032711",
													className: "hover:text-gold transition-colors font-medium",
													children: "+91 97540 32711"
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									icon: MapPin,
									label: "Visit Us",
									value: "Indore, Madhya Pradesh, India"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
										icon: Instagram,
										href: INSTAGRAM_URL,
										label: "Instagram"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: "Be Creative location",
										src: "https://www.google.com/maps?q=Indore,India&output=embed",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/${WHATSAPP_NUMBER}`,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" })
			})
		]
	});
}
function Field({ label, name, type = "text", placeholder, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
	})] });
}
function InfoRow({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 rounded-2xl glass-card p-5 shadow-soft transition-transform hover:translate-x-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-rosegold/20 text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "h-5 w-5",
				strokeWidth: 1.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate font-display text-lg text-foreground",
				children: value
			})]
		})]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		children: content
	}) : content;
}
function Social({ icon: Icon, href, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "flex h-12 w-12 items-center justify-center rounded-xl glass-card text-foreground shadow-soft transition-all hover:-translate-y-1 hover:text-gold",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "h-5 w-5",
			strokeWidth: 1.5
		})
	});
}
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
	"Wedding Stage Decor",
	"Mehendi Decor",
	"Baby Shower Decor",
	"Shitabi & Darees Backdrops",
	"Entry Gates & House Decor"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-foreground text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl font-semibold",
						children: ["Be ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Creative"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-ivory/60",
						children: "Crafting unforgettable celebrations with elegance, artistry and heart. Luxury event planning for life's most precious moments."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs uppercase tracking-[0.2em] text-gold-soft",
						children: "Rashida · Khadija · Arwa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/_.becreative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-block text-sm text-ivory/70 transition-colors hover:text-gold",
						children: "Instagram — @_.becreative"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg font-semibold text-gold-soft",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						className: "text-sm text-ivory/70 transition-colors hover:text-gold",
						children: s.label
					}) }, s.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg font-semibold text-gold-soft",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-ivory/70",
						children: s
					}, s))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-ivory/10 py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs text-ivory/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Be Creative. All rights reserved. Made with love."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-center text-[11px] text-ivory/35",
				children: [
					"Made by Ameroids Tech Studio · For any query contact",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+917723868522",
						className: "transition-colors hover:text-gold",
						children: "+91 77238 68522"
					})
				]
			})]
		})]
	});
}
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Be Creative — Luxury Event Planning & Management" },
			{
				name: "description",
				content: "Be Creative crafts unforgettable luxury weddings, mehndi, haldi, baby showers and celebrations. Complete event planning, design and execution."
			},
			{
				property: "og:title",
				content: "Be Creative — Luxury Event Planning & Management"
			},
			{
				property: "og:description",
				content: "From intimate gatherings to grand celebrations, Be Creative transforms every moment into a masterpiece."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: Index
});
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
