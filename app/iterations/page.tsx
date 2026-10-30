import { ArrowUpRight } from "lucide-react";
import "../iterations.css";

const iterations = [
  ["01", "THE EDITORIAL CLUB", "A quiet-luxury direction inspired by Equinox: black, bone, brass, and confident restraint.", "/"],
  ["02", "THE MEMBERSHIP ENGINE", "A conversion-first studio experience built around paths, proof, and the first booking.", "/page-2"],
  ["03", "THE PERFORMANCE LAB", "A sharper athletic system for clients who want measurable progress and serious coaching.", "/page-3"],
  ["04", "THE DALLAS MOVEMENT", "A community-led direction with local energy, color, culture, and a clear next move.", "/page-4"],
];

export default function Iterations() {
  return <main className="iterations-page"><header><a href="/" className="iteration-logo">CREOLE <span>FITNESS</span></a><span>DESIGN STUDY / 2026</span></header><section className="iterations-intro"><p>FOUR DIRECTIONS / ONE STANDARD</p><h1>Find the<br/><em>feeling.</em></h1><span>Choose the world that makes the client stop scrolling.</span></section><section className="iteration-grid">{iterations.map(([num, title, copy, href]) => <a className={`iteration-card iteration-${num}`} href={href} key={num}><span className="iteration-num">{num}</span><div><p>CREOLE FITNESS</p><h2>{title}</h2><span>{copy}</span></div><ArrowUpRight /></a>)}</section></main>;
}
