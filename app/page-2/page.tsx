"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, MapPin } from "lucide-react";

const paths = [
  { name: "1:1 coaching", price: "Personalized", copy: "A plan built around your body, your schedule, and the goal you keep thinking about.", featured: true },
  { name: "Small group", price: "Community-led", copy: "The energy of a crew with the attention you need to keep progressing.", featured: false },
  { name: "Youth performance", price: "Built to grow", copy: "Strength, speed, and confidence for athletes who want to show up differently.", featured: false },
];

export default function PageTwo() {
  return (
    <main className="page-two">
      <nav className="nav wrap page-two-nav"><a className="wordmark" href="/"><span>CREOLE</span><b>FITNESS</b></a><div className="page-two-nav-links"><a href="/">Page 1</a><a href="/#contact">Contact</a></div></nav>
      <section className="page-two-hero wrap"><div className="page-two-kicker">CREOLE FITNESS / DALLAS, TX</div><motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>Start where<br /><em>you are.</em></motion.h1><div className="page-two-hero-bottom"><p>One good decision can change the way you move through the rest of your week. Find your path, meet your coach, and make the next move yours.</p><a className="button button-light" href="mailto:creolefitness1804@gmail.com">Book your first session <ArrowUpRight size={18} /></a></div></section>
      <section className="path-section"><div className="wrap"><div className="page-two-section-head"><div><div className="page-two-kicker">01 / CHOOSE YOUR PATH</div><h2>Built around<br /><span>your life.</span></h2></div><p>There is no “right” way to start. There is only the way that gets you moving.</p></div><div className="path-grid">{paths.map((path, i) => <motion.a href="/#contact" className={`path-card ${path.featured ? "featured" : ""}`} key={path.name} whileHover={{ y: -8 }}><div className="path-card-top"><span>0{i + 1}</span><ArrowUpRight size={20} /></div><h3>{path.name}</h3><strong>{path.price}</strong><p>{path.copy}</p><div className="path-card-link">See what&apos;s included <ArrowUpRight size={15} /></div></motion.a>)}</div></div></section>
      <section className="results-section wrap"><div className="page-two-kicker">02 / THE FEELING</div><div className="results-grid"><h2>More than<br />a workout.</h2><div><p>Creole Fitness is a place to build strength that follows you outside the gym. The goal is not perfection—it&apos;s a body and a routine you trust.</p><ul><li><Check size={17} /> A plan you can repeat</li><li><Check size={17} /> Coaching that meets you where you are</li><li><Check size={17} /> A community that notices when you show up</li></ul></div></div></section>
      <section className="location-section"><div className="wrap location-inner"><div><div className="page-two-kicker">03 / DALLAS, TEXAS</div><h2>Come as you are.<br /><em>Leave different.</em></h2></div><div className="location-card"><MapPin size={20} /><div><strong>Creole Fitness</strong><p>Dallas, TX<br />Personal training • Small group • Youth performance</p><a href="mailto:creolefitness1804@gmail.com">Ask about your first session <ArrowUpRight size={15} /></a></div></div></div></section>
      <footer className="page-two-footer wrap"><a href="/"><ArrowLeft size={16} /> Back to Page 1</a><a className="button button-light" href="mailto:creolefitness1804@gmail.com">Let&apos;s get moving <ArrowUpRight size={17} /></a></footer>
    </main>
  );
}
