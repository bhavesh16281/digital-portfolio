import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Terminal, Server, Shield, Database, Cloud, Code2, Workflow, Award, Download, Menu, X } from "lucide-react";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muthyalu Bhavesh — Java Backend Developer" },
      { name: "description", content: "Java Backend Developer with 3.5+ years building high-availability microservices and distributed systems at enterprise scale." },
      { property: "og:title", content: "Muthyalu Bhavesh — Java Backend Developer" },
      { property: "og:description", content: "Spring Boot 3 · Java 21 · AWS · Kubernetes. Microservices, async pipelines, and security remediation at AT&T scale." },
    ],
  }),
  component: Portfolio,
});

const skills = {
  Languages: ["Java"],
  Frameworks: ["Spring Boot 3", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate"],
  Databases: ["Oracle SQL", "MySQL", "PL/SQL"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Maven", "Git"],
  Security: ["JWT", "OAuth 2.0", "SAST", "SCA", "DAST"],
  Tools: ["IntelliJ", "Postman", "Bruno", "Swagger", "Log4j"],
};

const highlights = [
  { icon: Workflow, k: "~90%", v: "reduction in manual effort via async scheduler" },
  { icon: Shield, k: "100+", v: "security vulnerabilities remediated" },
  { icon: Server, k: "5+", v: "cloud-native microservices in production" },
  { icon: Code2, k: "20+", v: "data & timeout bugs resolved across REST/SOAP" },
];

const experience = [
  "Designed and deployed 5+ cloud-native microservices using Spring Boot, Docker, and Kubernetes across distributed AT&T production environments.",
  "Designed and implemented an asynchronous scheduler using Java's Executor Framework to periodically fetch and process database records in parallel using multithreading, significantly reducing processing time in the front-end workflow and automating operational tasks, resulting in a ~90% reduction in manual effort.",
  "Diagnosed and resolved 20+ data inconsistency and timeout bugs across REST (JAX-RS) and SOAP (JAX-WS) interfaces.",
  "Led end-to-end RCA, bug resolution, and regression testing — cutting repeat issue rates across the platform.",
  "Validated a large-scale Oracle DB migration from on-prem to cloud via API, stress, and load testing.",
  "Drove remediation of 100+ SAST/SCA/DAST vulnerabilities, achieving compliance targets.",
  "Led peer code reviews and mentored junior developers on clean code and scalability.",
];

function handleResumeDownload() {
  try {
    const current = parseInt(localStorage.getItem("resumeDownloads") || "0", 10);
    localStorage.setItem("resumeDownloads", String(current + 1));
  } catch (e) {
    // localStorage may be unavailable in some environments
  }
  toast.success("Resume download started", {
    description: "Thanks for your interest!",
  });
}

function Portfolio() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <Nav />
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Stack" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block size-2 rounded-full bg-primary shadow-glow" />
          <span className="text-muted-foreground">bhavesh</span>
          <span className="text-foreground">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="Muthyalu-Bhavesh-Resume.pdf" download onClick={handleResumeDownload} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md border border-border bg-surface text-foreground hover:border-primary/40 transition">
            <Download className="size-3.5" />
            <span>Resume</span>
          </a>
          <a href="mailto:muthyalubhavesh16281@gmail.com" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
            <span>Get in touch</span>
            <ArrowUpRight className="size-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-surface text-foreground hover:border-primary/40 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-wrap gap-2 border-t border-border/50">
              <a href="Muthyalu-Bhavesh-Resume.pdf" download onClick={handleResumeDownload} className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-md border border-border bg-surface text-foreground hover:border-primary/40 transition">
                <Download className="size-3.5" />
                <span>Resume</span>
              </a>
              <a href="mailto:muthyalubhavesh16281@gmail.com" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                <span>Get in touch</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-8">
        <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
        Available for product-driven engineering teams
      </div>
      <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
        Muthyalu <br />
        <span className="italic text-gradient">Bhavesh.</span>
      </h1>
      <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
        <p className="md:col-span-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Java Backend Developer building <span className="text-foreground">high-availability microservices</span> and distributed systems at enterprise scale. Currently shipping cloud-native services on the AT&amp;T account at Accenture.
        </p>
        <div className="md:col-span-5 font-mono text-xs space-y-2 text-muted-foreground border-l border-border pl-4">
          <div className="flex items-center gap-2"><MapPin className="size-3" /> Hyderabad, India</div>
          <div className="flex items-center gap-2"><Terminal className="size-3" /> Java 21 · Spring Boot 3 · AWS</div>
          <div className="flex items-center gap-2"><Award className="size-3" /> Skill Star Award · Accenture 2024</div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {highlights.map((h) => (
          <div key={h.v} className="space-y-2">
            <h.icon className="size-5 text-primary" />
            <div className="font-display text-4xl text-foreground">{h.k}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{h.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{tag}</div>
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHead tag="01 — About" title="Owning production stability, end to end." />
      <div className="grid md:grid-cols-12 gap-10">
        <p className="md:col-span-8 text-lg leading-relaxed text-muted-foreground">
          I'm a backend engineer with <span className="text-foreground">3.5+ years</span> shipping systems people actually depend on — async pipelines, distributed services, security remediation, the unglamorous work behind the dashboards. I care about <span className="text-foreground">clean code</span>, <span className="text-foreground">strong system design</span>, and writing services that don't wake anyone up at 3 AM.
        </p>
        <div className="md:col-span-4 space-y-4 text-sm">
          <div className="p-5 rounded-lg bg-surface border border-border shadow-card">
            <div className="font-mono text-xs text-muted-foreground mb-1">Education</div>
            <div className="text-foreground">B.E. Electronics & Communications</div>
            <div className="text-muted-foreground text-xs mt-1">Institute of Aeronautical Engineering · 8.42 CGPA · 2022</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
      <SectionHead tag="02 — Experience" title="What I've shipped." />
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 space-y-2">
          <div className="font-mono text-xs text-muted-foreground">Dec 2022 — Present</div>
          <div className="font-display text-2xl">Accenture</div>
          <div className="text-sm text-muted-foreground">Java Developer</div>
          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">Client: AT&amp;T</div>
        </div>
        <ul className="md:col-span-8 space-y-5">
          {experience.map((line, i) => (
            <li key={i} className="flex gap-4 group">
              <span className="font-mono text-xs text-primary mt-1.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const skillIcons: Record<string, typeof Server> = {
  Languages: Code2,
  Frameworks: Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  Security: Shield,
  Tools: Terminal,
};

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
      <SectionHead tag="03 — Stack" title="Tools I reach for." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([cat, items]) => {
          const Icon = skillIcons[cat];
          return (
            <div key={cat} className="p-6 rounded-lg bg-surface border border-border shadow-card hover:border-primary/40 transition">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="size-4 text-primary" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-background border border-border text-xs font-mono text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Project() {
  return (
    <section id="project" className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
      <SectionHead tag="04 — Project" title="Side build." />
      <div className="rounded-2xl bg-surface border border-border p-8 md:p-12 shadow-card relative overflow-hidden">
        <div className="absolute -top-32 -right-32 size-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-mono text-xs text-accent mb-2">E-COMMERCE · REST API</div>
            <h3 className="font-display text-4xl mb-4">LuxeLine</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A full-featured e-commerce REST API with microservices architecture — auth, product, and order domains cleanly separated. JWT-secured, JPA-modeled, AWS-deployed.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java 21", "Spring Boot 3", "MySQL", "JWT", "AWS EC2", "Swagger"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md border border-border text-xs font-mono">{t}</span>
              ))}
            </div>
          </div>
          <ul className="md:col-span-7 space-y-3 text-sm text-muted-foreground">
            {[
              "JWT-based auth with role-based access control for customer & admin flows",
              "Normalized MySQL schema with Spring Data JPA + Hibernate ORM optimization",
              "Spring Validation, Lombok, ModelMapper — 30%+ less boilerplate",
              "Centralized exception handling with meaningful HTTP error responses",
              "Swagger UI documentation for self-serve API testing",
              "Deployed on AWS EC2 with live environment configuration",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="text-primary mt-2 size-1 rounded-full bg-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32 border-t border-border">
      <div className="text-center max-w-3xl mx-auto">
        <div className="font-mono text-xs text-primary uppercase tracking-widest mb-6">05 — Contact</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
          Let's build <span className="italic text-gradient">something</span> reliable.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Open to backend roles where system design and ownership matter.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:muthyalubhavesh16281@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-glow">
            <Mail className="size-4" />
            <span>muthyalubhavesh16281@gmail.com</span>
          </a>
          <a href="tel:+918309828565" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-surface border border-border hover:border-primary/40 transition">
            <Phone className="size-4" />
            <span>+91 8309828565</span>
          </a>
          <a href="Muthyalu-Bhavesh-Resume.pdf" download onClick={handleResumeDownload} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-surface border border-border hover:border-primary/40 transition">
            <Download className="size-4" />
            <span>Download resume</span>
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
          <a href="https://linkedin.com/in/muthyalu-bhavesh/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition">
            <Linkedin className="size-4" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/bhavesh16281" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition">
            <Github className="size-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
        <div>© 2026 Muthyalu Bhavesh</div>
        <div>Built with Spring in mind. Shipped with React.</div>
      </div>
    </footer>
  );
}
