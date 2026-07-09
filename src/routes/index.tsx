import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Timeline } from "@/components/Timeline";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Be Creative — Luxury Event Planning & Management" },
            {
                name: "description",
                content:
                    "Be Creative crafts unforgettable luxury weddings, mehndi, haldi, baby showers and celebrations. Complete event planning, design and execution.",
            },
            { property: "og:title", content: "Be Creative — Luxury Event Planning & Management" },
            {
                property: "og:description",
                content:
                    "From intimate gatherings to grand celebrations, Be Creative transforms every moment into a masterpiece.",
            },
        ],
        links: [{ rel: "canonical", href: "/" }],
    }),
    component: Index,
});

function Index() {
    return (
        <>
            <SmoothScroll />
            <Toaster position="top-center" richColors />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Showcase />
                <Timeline />
                <Stats />
                <Testimonials />
                <Gallery />
                <CTA />
                <Contact />
            </main>
            <Footer />
        </>
    );
}