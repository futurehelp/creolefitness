"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, Menu, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "Classes", "Trainers", "Our story", "Page 2", "Page 3", "Page 4", "Contact"];
const classes = [
  { title: "1:1 training", detail: "Personal plans, real accountability.", image: "/images/d2a8dd1293f2cce8.jpg", tone: "coral" },
  { title: "Small group", detail: "High energy. Better together.", image: "/images/8e143c9dafed209b.jpg", tone: "aqua" },
  { title: "Youth performance", detail: "Confidence that shows up.", image: "/images/08c3eb115686b7fa.jpg", tone: "lime" },
];
const testimonials = [
  ["Shari White", "Alex has already had a huge shift in his confidence, stamina, and overall fitness."],
  ["Thomas Wheat", "Carll knows his stuff, works hard, and truly cares about his clients."],
  ["Jason Kulas", "We have seen a tremendous improvement in agility, attitude, and strength."],
];
const offers = [
  ["01", "Start strong", "A focused intro session to map your goals, movement, and next best step."],
  ["02", "Build momentum", "Personal coaching and small-group energy for a plan you can actually keep."],
  ["03", "Perform better", "Youth performance and athletic development built around confidence."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  return (
    <main className="site-shell">
      <nav className="nav wrap">
        <a className="wordmark" href="#top" aria-label="Creole Fitness home"><span>CREOLE</span><b>FITNESS</b></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => <a key={item} href={item.startsWith("Page ") ? `/${item.toLowerCase().replace(" ", "-")}` : `#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact">Book a session <ArrowUpRight size={16} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      <div className="page-switcher wrap"><span>CLIENT PREVIEW</span><a className="active" href="/">01 Brand</a><a href="/page-2">02 Offer</a><a href="/page-3">03 Method</a><a href="/page-4">04 Next move</a></div>

      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>Feel good fitness <span>—</span> Dallas energy</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .1 }}>Your strongest<br /><em>self</em> starts here.</motion.h1>
          <motion.p className="hero-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .35 }}>Training that meets you where you are—and takes you somewhere new. Personal coaching, community, and a plan built around your life.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .45 }}><a className="button button-dark" href="#contact">Start your transformation <ArrowUpRight size={18} /></a><a className="play-link" href="#story"><span className="play"><Play size={15} fill="currentColor" /></span> See how we move</a></motion.div>
          <div className="hero-proof"><div className="avatar-stack"><span>CE</span><span>CF</span><span>+</span></div><p><strong>500+</strong> people moving<br />with purpose</p></div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }}><div className="hero-image" /><div className="hero-sticker"><Sparkles size={18} /><span>SHOW UP<br /><b>FOR YOU</b></span></div><div className="hero-tag"><span>01</span><span>Build strength<br />that lasts.</span></div></motion.div>
      </section>

      <section className="ticker"><div className="ticker-track">TRAIN WITH PURPOSE <span>✳</span> FEEL LIKE YOURSELF AGAIN <span>✳</span> CREOLE FITNESS <span>✳</span> TRAIN WITH PURPOSE <span>✳</span></div></section>

      <section className="proof-strip"><div className="wrap proof-grid"><div><strong>500+</strong><span>people coached</span></div><div><strong>1:1</strong><span>attention, every plan</span></div><div><strong>Dallas</strong><span>built for this community</span></div><a href="#contact">Claim your first session <ArrowUpRight size={16} /></a></div></section>

      <section className="page-hub wrap"><div className="section-kicker">THE CLIENT PREVIEW</div><div className="page-hub-heading"><h2>Explore the<br /><span>four-page story.</span></h2><p>Start with the brand, then click through the offer, method, and next move.</p></div><div className="page-hub-grid"><a className="hub-card hub-one" href="/"><span>01 / BRAND</span><h3>Feel good fitness</h3><b>Start here <ArrowUpRight size={16} /></b></a><a className="hub-card hub-two" href="/page-2"><span>02 / OFFER</span><h3>Choose your path</h3><b>Explore page 2 <ArrowUpRight size={16} /></b></a><a className="hub-card hub-three" href="/page-3"><span>03 / METHOD</span><h3>Progress is personal</h3><b>Explore page 3 <ArrowUpRight size={16} /></b></a><a className="hub-card hub-four" href="/page-4"><span>04 / CTA</span><h3>Make it count</h3><b>Explore page 4 <ArrowUpRight size={16} /></b></a></div></section>

      <section id="our-story" className="story wrap section-grid"><div className="section-kicker">01 / OUR APPROACH</div><div><h2>Fitness should feel<br /><span>like a win.</span></h2><p className="section-lede">A Haitian-Creole lifestyle is the foundation for Feel Good Fitness—a complete approach to health created by founder Carll Edouard. Wherever you are on your journey, we build the plan around you.</p><a className="text-link" href="#contact">Meet your future self <ArrowUpRight size={17} /></a></div><div className="approach-card"><div className="approach-photo" /><div className="approach-caption"><span>CARLL EDOUARD</span><b>Founder & CEO</b></div></div></section>

      <section id="classes" className="classes-section"><div className="wrap"><div className="section-heading"><div><div className="section-kicker">02 / FIND YOUR FLOW</div><h2>Move your way.</h2></div><p>Different goals. Same good energy.<br />Find the room that fits you.</p></div><div className="class-grid">{classes.map((item, i) => <motion.a href="#contact" className={`class-card ${item.tone}`} key={item.title} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 260 }}><div className="class-image" style={{ backgroundImage: `url(${item.image})` }} /><div className="class-overlay" /><div className="class-content"><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.detail}</p><ArrowUpRight className="card-arrow" /></div></motion.a>)}</div></div></section>

      <section className="offers wrap"><div className="section-kicker">02.5 / PICK YOUR STARTING LINE</div><div className="offers-heading"><h2>There&apos;s a way in<br /><span>for everyone.</span></h2><p>No pressure. No one-size-fits-all. Just a clear next move.</p></div><div className="offer-list">{offers.map(([number, title, detail]) => <a className="offer-row" href="#contact" key={number}><span className="offer-number">{number}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight className="offer-arrow" /></a>)}</div></section>

      <section id="trainers" className="trainers wrap"><div className="section-kicker">03 / THE CREW</div><div className="trainers-heading"><h2>Good people.<br /><span>Great coaches.</span></h2><p>We bring expertise, empathy, and a little bit of “you got this” to every session.</p></div><div className="trainer-row"><div className="trainer-portrait carll"><span>CARLL EDOUARD</span></div><div className="trainer-copy"><span className="role">FOUNDER / PERFORMANCE COACH</span><h3>We don&apos;t just train bodies.<br />We build <em>belief.</em></h3><p>From 1:1 training to youth performance, every program is designed to make progress feel possible—and make showing up your favorite part.</p><a className="button button-coral" href="#contact">Work with us <ArrowUpRight size={18} /></a></div></div></section>

      <section className="community"><div className="wrap community-inner"><div><div className="section-kicker light">04 / THE WHY</div><h2>Strong bodies.<br /><em>Stronger community.</em></h2></div><div><p>Creole Fitness gives back because movement should open doors. We invest in youth sports, local programs, and the people who make this city move.</p><a className="text-link light-link" href="#contact">See our impact <ArrowUpRight size={17} /></a></div></div></section>

      <section className="testimonials wrap"><div className="section-kicker">05 / GOOD WORDS</div><div className="testimonial-layout"><div><h2>The energy<br />is <span>real.</span></h2><div className="testimonial-controls"><button onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)}>←</button><span>0{activeTestimonial + 1} / 03</span><button onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>→</button></div></div><AnimatePresence mode="wait"><motion.blockquote key={activeTestimonial} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .35 }}><div className="quote-mark">“</div><p>{testimonials[activeTestimonial][1]}</p><cite>{testimonials[activeTestimonial][0]} <span>· Member</span></cite></motion.blockquote></AnimatePresence></div></section>

      <section id="contact" className="contact wrap"><div className="contact-card"><div><div className="section-kicker light">READY WHEN YOU ARE</div><h2>Let&apos;s make<br /><em>good moves.</em></h2></div><div><p>Tell us a little about where you want to go. We&apos;ll help you find the best way to get there.</p><a className="button button-light" href="mailto:creolefitness1804@gmail.com">Book a session <ArrowUpRight size={18} /></a></div></div></section>
      <footer className="footer wrap"><a className="wordmark" href="#top"><span>CREOLE</span><b>FITNESS</b></a><p>Feel good. Move forward.</p><div className="socials"><a href="https://instagram.com/creolefitness" aria-label="Instagram"><Camera size={18} /></a><a href="#contact">Contact <ArrowUpRight size={15} /></a></div></footer>
    </main>
  );
}
