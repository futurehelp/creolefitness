import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./showcase-motion";

export const assets = {
  lift: "/images/ad87b67c49d2f8de.jpg",
  coach: "/images/73e096fbcb162102.jpg",
  run: "/images/08c3eb115686b7fa.jpg",
  form: "/images/d2a8dd1293f2cce8.jpg",
};

export function Photo({src, alt, className = "", priority = false, position}: {src:string; alt:string; className?:string; priority?:boolean; position?:string}) {
  return <div className={`photo ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 700px) 100vw, 70vw" style={{objectFit:"cover",objectPosition:position || "center"}}/></div>;
}

export function Header({active}: {active?:number}) {
  return <header className="global-header"><Link href="/" className="brand" aria-label="Creole Fitness preview home"><span>CREOLE</span><strong>FITNESS</strong></Link><nav aria-label="Page directions"><Link href="/" className={!active ? "active" : ""}>The four directions</Link><Link href="/page-1" className={active === 1 ? "active" : ""}>01</Link><Link href="/page-2" className={active === 2 ? "active" : ""}>02</Link><Link href="/page-3" className={active === 3 ? "active" : ""}>03</Link><Link href="/page-4" className={active === 4 ? "active" : ""}>04</Link></nav><a className="header-contact" href="mailto:creolefitness1804@gmail.com?subject=Creole%20Fitness%20introduction">Let&apos;s talk <ArrowUpRight size={15}/></a></header>;
}

export function Eyebrow({children}: {children:React.ReactNode}) { return <p className="eyebrow">{children}</p>; }
export function Action({children, href = "mailto:creolefitness1804@gmail.com?subject=Creole%20Fitness%20introduction", light = false}: {children:React.ReactNode;href?:string;light?:boolean}) {return <a className={`action ${light ? "action-light" : ""}`} href={href}>{children}<ArrowUpRight size={18}/></a>}
export function SectionIntro({number, eyebrow, title, copy}: {number:string;eyebrow:string;title:string;copy:string}) {return <Reveal className="section-intro"><div className="section-index">{number} / {eyebrow}</div><h2>{title}</h2><p>{copy}</p></Reveal>}
export function Closing({number, title, copy}: {number:number; title:string;copy:string}) {return <section className="closing"><Eyebrow>CREOLE FITNESS / DALLAS</Eyebrow><div className="closing-inner"><div><span className="outline-number">0{number}</span><h2>{title}</h2></div><div><p>{copy}</p><Action>Start a conversation</Action></div></div><Link href="/" className="back-link">Explore the other directions <ArrowDownRight size={17}/></Link></section>}
export function Footer() {return <footer className="site-footer"><Link href="/" className="brand"><span>CREOLE</span><strong>FITNESS</strong></Link><span>Feels Good Fitness. Dallas, Texas.</span><a href="mailto:creolefitness1804@gmail.com">Get in touch <ArrowUpRight size={16}/></a></footer>}
