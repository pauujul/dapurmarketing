import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp, Camera, CalendarDays, ChartNoAxesCombined, Check, ChefHat, Flame, Instagram, Mail, Menu, MessageCircle, Sparkles, Sprout, Target, Utensils, X, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContactLinks, getProjectUrl } from "@/config/contact";
import hero from "@/assets/dapur-hero.jpg.asset.json";
import coffee from "@/assets/dapur-coffee.jpg.asset.json";
import dessert from "@/assets/dapur-dessert.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dapur Marketing — Dapur Kreatif untuk Bisnis F&B" },
    { name: "description", content: "Dapur Marketing mengolah rasa menjadi konten. Konten kreatif, pengelolaan media sosial, dan strategi digital khusus bisnis makanan dan minuman." },
    { property: "og:title", content: "Dapur Marketing — Dapur Kreatif untuk Bisnis F&B" },
    { property: "og:description", content: "Processing taste into visuals, turning audiences into buyers. Temukan layanan dan dapur kreatif untuk brand F&B Anda." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navItems = [{ id: "beranda", label: "Beranda" }, { id: "layanan", label: "Layanan" }, { id: "proses", label: "Proses" }, { id: "karya", label: "Karya" }, { id: "paket", label: "Paket" }, { id: "tentang", label: "Tentang" }];
const services = [
  { name: "Content Creation", icon: Camera, tone: "service-blue", text: "Foto yang menggugah selera, video yang bercerita, dan desain yang menunjukkan karakter brandmu.", tags: ["Foto & video", "Reels & TikTok", "Copywriting"] },
  { name: "Social Media Management", icon: CalendarDays, tone: "service-peach", text: "Dari jadwal hingga interaksi audiens, media sosialmu dikelola dengan rapi dan konsisten.", tags: ["Penjadwalan", "Publikasi", "Monitoring"] },
  { name: "Content Strategy", icon: Target, tone: "service-sage", text: "Bukan sekadar posting. Setiap konten punya arah, cerita, dan tujuan yang sesuai dengan bisnismu.", tags: ["Pilar konten", "Kalender konten", "Kampanye"] },
  { name: "Performance & Optimization", icon: ChartNoAxesCombined, tone: "service-butter", text: "Kami membaca respons audiens, mengevaluasi performa, lalu menyempurnakan strategi berikutnya.", tags: ["Analisis data", "Evaluasi", "Optimasi"] },
];
const processes = [
  { title: "Discover", text: "Kenali brand, produk, audiens, dan tujuan bisnismu." },
  { title: "Plan", text: "Susun strategi, pilar konten, dan kalender yang terarah." },
  { title: "Create", text: "Olah ide menjadi foto, video, desain, dan cerita." },
  { title: "Publish", text: "Sajikan konten secara terjadwal dan konsisten." },
  { title: "Optimize", text: "Baca hasilnya, pelajari, lalu sempurnakan." },
];
const packages = [
  { name: "Starter", icon: Sprout, type: "Mulai dari sini", text: "Untuk UMKM F&B yang mulai membangun kehadiran digital.", items: ["Rencana konten dasar", "Produksi konten bulanan", "Materi siap publikasi"] },
  { name: "Growth", icon: Flame, type: "Lebih terarah", text: "Untuk brand yang ingin hadir lebih konsisten dengan strategi yang jelas.", items: ["Strategi konten", "Produksi konten rutin", "Pengelolaan media sosial", "Evaluasi bulanan"] },
  { name: "Full Kitchen", icon: ChefHat, type: "Dapur lengkap", text: "Partner kreatif untuk seluruh kebutuhan digital brand F&B-mu.", items: ["Produksi konten lengkap", "Pengelolaan media sosial", "Strategi kampanye", "Optimasi performa"] },
];

function Logo() {
  return <a href="#beranda" className="logo" aria-label="DM Dapur Marketing — Beranda"><span className="logo-mark">DM</span><strong className="logo-name">Dapur<br />Marketing</strong></a>;
}
function ProjectButton({ children = "Mulai Proyek", inverse = false }: { children?: ReactNode; inverse?: boolean }) {
  return <Button asChild variant={inverse ? "inverse" : "brand"} size="pill"><a href={getProjectUrl()} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight /></a></Button>;
}
function ContactRow() {
  const icons = { instagram: Instagram, whatsapp: MessageCircle, email: Mail, tiktok: Music2 };
  return <div className="contact-row">{getContactLinks().map((link) => {
    const Icon = icons[link.id as keyof typeof icons];
    return <Button asChild variant="contact" size="pill" key={link.id}><a href={link.href} target={link.id === "email" ? undefined : "_blank"} rel="noopener noreferrer"><Icon />{link.label}<ArrowUpRight /></a></Button>;
  })}</div>;
}
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("reveal-pending");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.remove("reveal-pending"); element.classList.add("reveal-visible"); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("beranda");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    navItems.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <main className="page">
    <header className="navbar">
      <Logo />
      <nav id="main-nav" className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Navigasi utama">
        {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
      </nav>
      <ProjectButton />
      <Button className="mobile-toggle" variant="ghost" size="icon" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </header>

    <section id="beranda" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <Eyebrow>Dapur kreatif untuk bisnis F&B</Eyebrow>
            <h1>We Turn Your<br />Taste Into<br /><span className="headline-highlight">Content That<svg viewBox="0 0 400 18" preserveAspectRatio="none" aria-hidden="true"><path d="M3 13 Q185 -5 397 10" /></svg></span><br /><span className="headline-highlight">Sells.</span></h1>
            <p className="hero-description">Produkmu sudah punya rasa. Kami bantu mengolahnya menjadi konten yang menarik, media sosial yang konsisten, dan strategi yang terarah.</p>
            <div className="hero-actions"><ProjectButton /><Button asChild variant="soft" size="pill"><a href="#karya">Lihat Karya<ArrowDown /></a></Button></div>
            <p className="tagline">Processing taste into visuals,<br />turning audiences into buyers.</p>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src={hero.url} alt="Rice bowl ayam sambal dengan telur, disajikan hangat untuk konten kuliner" fetchPriority="high" />
            <div className="photo-note"><Sparkles /><span>Rasa jadi cerita.</span><span>Cerita jadi konten.</span></div>
            <div className="photo-label"><ChefHat /><div><strong>Diolah di dapur kreatif kami.</strong><span>Rasa · Cerita · Strategi</span></div></div>
          </div>
        </div>
        <div className="hero-bottom"><span><Utensils size={13} />Khusus makanan & minuman</span><span>Konten kreatif. Strategi yang punya arah.</span><a href="#masalah" className="text-muted-foreground"><span>Kenali dapur kami<ArrowDown size={13} /></span></a></div>
      </div>
    </section>

    <section id="masalah" className="section problem-section">
      <Reveal className="container">
        <div className="problem-heading"><Eyebrow>Kami paham tantangannya</Eyebrow><h2>Sibuk di dapur.<br />Konten jangan ikut tertunda.</h2></div>
        <div className="problem-grid">{[
          ["Waktu terbatas", "Operasional menyita energi. Media sosial sering jadi urusan nanti."],
          ["Konten tidak konsisten", "Posting saat sempat, tanpa jadwal dan arah yang jelas."],
          ["Visual kurang menggugah", "Rasanya istimewa, tapi tampilannya belum bercerita."],
          ["Hasil sulit dibaca", "Belum tahu konten mana yang benar-benar relevan untuk audiens."],
        ].map(([title, text], i) => <div className="problem" key={title}><span className="problem-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </Reveal>
    </section>

    <section id="layanan" className="section services-section">
      <div className="container"><Reveal className="section-heading"><div><Eyebrow>What's cooking</Eyebrow><h2>Resep kreatif untuk<br />brand yang ingin tumbuh.</h2></div><p className="section-description">Dari ide pertama hingga evaluasi terakhir, kami bantu menyajikan brandmu dengan lebih baik.</p></Reveal>
        <div className="service-grid">{services.map((service, i) => <Reveal className={`service-card ${service.tone}`} key={service.name}><div className="service-top"><span className="service-icon"><service.icon /></span><span className="service-number">0{i + 1} / LAYANAN</span></div><h3>{service.name}</h3><p>{service.text}</p><div className="service-bottom"><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Button asChild variant="ghost" size="icon" className="rounded-full"><a href={getProjectUrl()} target="_blank" rel="noopener noreferrer" aria-label={`Diskusikan ${service.name}`}><ArrowUpRight /></a></Button></div></Reveal>)}</div>
      </div>
    </section>

    <section id="proses" className="section"><Reveal className="container"><div className="section-heading"><div><Eyebrow>Cara kami meracik</Eyebrow><h2>Dari kenalan,<br />sampai konten disajikan.</h2></div><p className="section-description">Lima langkah yang jelas. Dikerjakan bersama, dengan tujuan yang sama.</p></div><div className="process-grid">{processes.map((step, i) => <div className="process-item" key={step.title}><span className="process-step">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></Reveal></section>

    <section id="karya" className="section dark-section work-section"><div className="container"><Reveal className="section-heading"><div><Eyebrow>Dari dapur kami</Eyebrow><h2>Rasa yang punya cerita.</h2></div><p className="section-description">Tiga contoh konsep kreatif untuk mengeksplorasi karakter brand F&B. Bukan proyek klien.</p></Reveal><div className="work-grid">
      <Reveal className="work-card"><div className="work-visual"><div className="sambal-art"><Flame /><strong>SAMBAL<br />STUDIO.</strong><em>Berani rasa. Berani beda.</em></div><span className="concept-tag">Contoh konsep</span></div><div className="work-meta"><div><h3>Sambal Studio</h3><p>Arah visual · Kampanye peluncuran</p></div><span className="work-arrow"><Sparkles size={15} /></span></div></Reveal>
      <Reveal className="work-card"><div className="work-visual"><img src={coffee.url} alt="Konsep Pagi Coffee: kopi dan suasana hangat di meja kafe" className="work-image" loading="lazy" /><span className="concept-tag">Contoh konsep</span></div><div className="work-meta"><div><h3>Pagi Coffee</h3><p>Media sosial · Cerita keseharian</p></div><span className="work-arrow"><Camera size={15} /></span></div></Reveal>
      <Reveal className="work-card"><div className="work-visual"><img src={dessert.url} alt="Konsep Lapis Lokal: sajian dessert dengan karakter warna dan rasa lokal" className="work-image" loading="lazy" /><span className="concept-tag">Contoh konsep</span></div><div className="work-meta"><div><h3>Lapis Lokal</h3><p>Identitas visual · Cerita rasa lokal</p></div><span className="work-arrow"><Camera size={15} /></span></div></Reveal>
    </div></div></section>

    <section id="paket" className="section dark-section packages-section"><div className="container packages-inner"><Reveal className="section-heading"><div><Eyebrow>Pilih dapurmu</Eyebrow><h2>Kebutuhan berbeda.<br />Racikan yang tepat.</h2></div><p className="section-description">Mulai dari konten esensial hingga tim kreatif lengkap. Kita sesuaikan dengan kebutuhan brandmu.</p></Reveal><div className="package-grid">{packages.map((pkg, i) => <Reveal key={pkg.name} className={`package-card ${i === 1 ? "package-featured" : ""}`}><div className="package-top"><pkg.icon /><span className="package-type">{pkg.type}</span></div><h3>{pkg.name}</h3><p>{pkg.text}</p><ul>{pkg.items.map(item => <li key={item}><Check />{item}</li>)}</ul><Button asChild variant={i === 1 ? "brand" : "contact"} size="pill"><a href={getProjectUrl()} target="_blank" rel="noopener noreferrer">Konsultasi Kebutuhan<ArrowUpRight /></a></Button></Reveal>)}</div><p className="package-note">Lingkup kerja dan biaya dibahas sesuai kebutuhan. Tidak ada satu menu untuk semua brand.</p></div></section>

    <section id="tentang" className="section"><Reveal className="container about-grid"><div className="kitchen-graphic"><span className="kitchen-input">Produk + cerita + ide brandmu</span><ChefHat /><strong>Our Creative<br />Kitchen</strong><p>Ide segar. Eksekusi rapi. Strategi terarah.</p><div className="kitchen-outputs"><span>Konten</span><span>Koneksi</span><span>Pertumbuhan</span></div></div><div className="about-copy"><Eyebrow>Tentang Dapur Marketing</Eyebrow><h2>Bukan sekadar memotret.<br />Kami mengolah cerita.</h2><p>Dapur Marketing adalah creative digital agency khusus bisnis makanan dan minuman. Kami mengolah produk, cerita, dan ide menjadi konten yang terhubung dengan audiens.</p><p>Kami percaya makanan bukan hanya soal rasa. Ada proses, budaya, dan momen di baliknya. Itulah yang kami bawa ke dalam visual—dengan kreativitas, strategi, dan kolaborasi.</p><div className="about-values"><span><Check />Fokus F&B</span><span><Check />Kreatif & relevan</span><span><Check />Dikerjakan bersama</span></div></div></Reveal></section>

    <section id="kontak" className="cta-section"><Reveal className="container"><div className="eyebrow">Mari masak sesuatu yang istimewa</div><h2>Rasanya sudah enak.<br />Sekarang, buat dunia tahu.</h2><p>Ceritakan brand dan kebutuhanmu.<br />Kita mulai dari obrolan yang sederhana.</p><ProjectButton inverse>Hubungi Kami</ProjectButton><ContactRow /></Reveal></section>
    <footer className="footer"><div className="container"><div className="footer-main"><div><Logo /><p className="footer-tagline">Processing taste into visuals,<br />turning audiences into buyers.</p></div><div className="footer-right"><p>Obrolan pertama, racikan berikutnya.</p><ContactRow /></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dapur Marketing. Semua hak dilindungi.</span><a href="#beranda">Kembali ke atas<ArrowUp size={13} /></a></div></div></footer>
  </main>;
}
