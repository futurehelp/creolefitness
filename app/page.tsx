import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { assets, Footer, Header, Photo } from "./showcase";

export const metadata: Metadata = {
  title: "Feels Good Fitness | Creole Fitness Dallas",
  description: "Four bold directions. One Creole Fitness. Explore what training can feel like in Dallas, Texas.",
  openGraph: {
    title: "Feels Good Fitness | Creole Fitness Dallas",
    description: "A stronger way to show up. Explore four directions for Creole Fitness.",
    url: "/",
    siteName: "Creole Fitness",
    type: "website",
    images: [{ url: "/api/landing-share", width: 1200, height: 630, alt: "Feels Good Fitness — Creole Fitness Dallas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feels Good Fitness | Creole Fitness Dallas",
    description: "A stronger way to show up. Explore four directions for Creole Fitness.",
    images: ["/api/landing-share"],
  },
};

const directions = [
  { n: "01", title: "Feels Good Fitness.", label: "THE BRAND", copy: "A bold introduction to the people and the point of view behind Creole Fitness.", href: "/page-1", image: assets.lift },
  { n: "02", title: "Find your way in.", label: "THE EXPERIENCE", copy: "Personal coaching, small group energy, and a starting point that feels like yours.", href: "/page-2", image: assets.coach },
  { n: "03", title: "Built to move you.", label: "THE METHOD", copy: "Intentional training for strength, confidence, and the life beyond the session.", href: "/page-3", image: assets.form },
  { n: "04", title: "More than a workout.", label: "THE COMMUNITY", copy: "The people, the purpose, and the Dallas energy that make it matter.", href: "/page-4", image: assets.run },
];

export default function Home() {
  return <main className="selector">
    <Header />
    <section className="selector-hero">
      <div className="selector-copy">
        <span className="eyebrow">CREOLE FITNESS / DALLAS, TX</span>
        <h1>Feels good<br /><em>fitness.</em></h1>
        <p>Fitness that meets you where you are—and takes you somewhere new. Explore four ways to tell the Creole story.</p>
        <a href="#directions" className="scroll-cue">Explore the directions <ArrowDown size={18} /></a>
      </div>
      <Photo src={assets.lift} alt="Creole Fitness founder training in the gym" className="selector-portrait" priority />
    </section>
    <section id="directions" className="directions">
      <div className="directions-head"><span>FOUR DIRECTIONS / ONE CREOLE FITNESS</span><p>Click into each world.</p></div>
      <div className="direction-grid">
        {directions.map((d) => <Link href={d.href} className="direction-card" key={d.n}>
          <Photo src={d.image} alt={`${d.label.toLowerCase()} photograph`} />
          <div className="direction-shade" />
          <div className="direction-top"><span>{d.n} / {d.label}</span><ArrowUpRight size={24} /></div>
          <div className="direction-bottom"><h2>{d.title}</h2><p>{d.copy}</p><span className="direction-cta">EXPLORE DIRECTION {d.n} <ArrowUpRight size={15} /></span></div>
        </Link>)}
      </div>
    </section>
    <Footer />
  </main>;
}
