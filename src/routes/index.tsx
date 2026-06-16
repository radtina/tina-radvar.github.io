import { createFileRoute } from "@tanstack/react-router";
import heroPixel from "@/assets/hero-pixel.jpg";
import avatarPixel from "@/assets/avatar-pixel.png";
import projectRobot from "@/assets/project-robot.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import projectBalloon from "@/assets/project-balloon.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const projects = [
  {
    img: projectCrystal,
    title: "MERCEDES RAG",
    tag: "Master Thesis · R&D",
    desc: "Full-stack AI knowledge platform for Mercedes-Benz e-drive engineering. Hybrid retrieval (FAISS + BM25), query expansion, HyDE, cross-encoder reranking, and adaptive chunking. Evaluated 9 RAG configurations and fine-tuned GPT-4.1 with SFT + DPO, beating frontier baselines on domain tasks.",
    stack: ["FastAPI", "React", "Azure OpenAI", "FAISS", "BM25"],
    href: "#",
  },
  {
    img: projectRobot,
    title: "PHILOSOPH.AI",
    tag: "Side quest",
    desc: "A multi-agent LLM playground where GPT characters argue philosophy with each other. Prompt-chaining, dialogue control, deployed live — mostly built for fun on weekends.",
    stack: ["LLMs", "Prompt Chains", "React"],
    href: "https://philosoph.onrender.com/",
  },
  {
    img: projectBalloon,
    title: "CARPOOL APP",
    tag: "Full-stack",
    desc: "Ride-sharing web app with JWT auth and a scalable Go backend on PostgreSQL. Built end-to-end with a friend to learn what shipping really feels like.",
    stack: ["Go", "React", "PostgreSQL"],
    href: "https://carpoolapp-q00v.onrender.com/",
  },
];

const skills = [
  { label: "RAG / Hybrid Retrieval (FAISS + BM25)", level: 92 },
  { label: "LLM Fine-Tuning (SFT / DPO)", level: 86 },
  { label: "LLM Eval & Benchmarking", level: 88 },
  { label: "Python / FastAPI", level: 90 },
  { label: "Azure (OpenAI, SQL, Blob, Cloud Arch.)", level: 84 },
  { label: "React / TypeScript", level: 80 },
  { label: "CI/CD (GitHub Actions)", level: 80 },
];

const timeline = [
  {
    when: "Feb 2026 — Current",
    where: "Mercedes-Benz AG · Internship (R&D)",
    role: "AI RAG System — Electric Drive Systems",
    body: "Owning CI/CD pipelines in GitHub Actions for automated testing and faster deployments. Running alpha/beta user testing and building agentic test frameworks. Designing Azure cloud architecture integrated with Mercedes auth/access services — improving DB performance, scalability, and reliability.",
  },
  {
    when: "Aug 2025 — Feb 2026",
    where: "Mercedes-Benz AG · Master Thesis (R&D)",
    role: "AI RAG System — Electric Drive Systems",
    body: "Built a full-stack AI knowledge platform on FastAPI + React + Azure OpenAI + FAISS + BM25 + Azure SQL. Implemented hybrid search, query expansion, HyDE, cross-encoder reranking and adaptive chunking. Evaluated 9 RAG configurations and fine-tuned GPT-4.1 with SFT and DPO. Group leader at the Mercedes AI Hackathon on hybrid RAG. Thesis grade 1.7.",
  },
  {
    when: "Jul 2024 — Aug 2025",
    where: "Mercedes-Benz · Working Student",
    role: "Software Engineering PMO — E-Drive Transmission",
    body: "Automated Jira & Confluence workflows over REST APIs with custom scripts for release teams. Shipped interactive HTML/JS dashboards inside Confluence with real-time Jira data.",
  },
  {
    when: "Oct 2022 — Jun 2023",
    where: "Daimler Truck AG · IT Treasury & Procurement",
    role: "IT Product Owner (Working Student)",
    body: "Migrated Python 2 scripts to Python 3 and refactored a legacy treasury automation codebase across finance and procurement teams.",
  },
  {
    when: "2020 — 2022",
    where: "Continental & PETRONAS · Malaysia",
    role: "Engineering & Automation Intern",
    body: "Built automation scripts, dashboards and reporting tools for engineering teams. ANN tire-compound quality model later published with Elsevier (2022).",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b-[3px] border-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-7 bg-moss pixel-border-sm" />
          <span className="font-pixel text-[11px] sm:text-xs text-ink">T.RADVAR</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 font-display text-xl text-ink">
          <a href="#about" className="hover:text-sunset transition-colors">about</a>
          <a href="#work" className="hover:text-sunset transition-colors">work</a>
          <a href="#journey" className="hover:text-sunset transition-colors">journey</a>
          <a href="#skills" className="hover:text-sunset transition-colors">skills</a>
          <a href="#contact" className="hover:text-sunset transition-colors">contact</a>
        </nav>
        <a
          href="#contact"
          className="font-pixel text-[8px] sm:text-[9px] bg-sunset text-cream px-2.5 sm:px-3 py-2 pixel-border-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          SAY HI
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative scroll-mt-36 sm:scroll-mt-40">
      <div className="relative h-[88vh] lg:h-[78vh] min-h-[640px] lg:min-h-[560px] overflow-hidden border-b-[4px] border-ink">
        <img
          src={heroPixel}
          alt="Pixel art of a figure coding under a great tree at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover pixel-img"
        />
        <div className="absolute inset-0 scanlines" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />

        <div className="absolute top-12 left-0 w-full pointer-events-none">
          <div className="animate-drift-cloud inline-block">
            <PixelCloud />
          </div>
        </div>
        <div className="absolute top-32 left-0 w-full pointer-events-none opacity-70">
          <div
            className="animate-drift-cloud inline-block"
            style={{ animationDuration: "90s", animationDelay: "-30s" }}
          >
            <PixelCloud small />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-start pt-8 sm:pt-8 lg:pt-8 pb-12 sm:pb-24">
          <div className="inline-flex items-center gap-2 font-display text-lg sm:text-xl text-ink bg-cream pixel-border-sm px-2.5 sm:px-3 py-1 w-fit mb-3 sm:mb-4">
            <span className="size-2 bg-sunset animate-pixel-shimmer" />
            currently shipping AI at Mercedes-Benz R&D
          </div>
          <h1 className="font-pixel text-[20px] sm:text-4xl md:text-5xl lg:text-6xl text-cream text-pixel-shadow leading-[1.35] sm:leading-[1.3] max-w-3xl mt-0.5 sm:mt-1">
            I TEACH<br />MACHINES TO<br />
            <span className="text-sunset">REMEMBER WELL.</span>
            <span className="inline-block w-3 h-[1em] bg-cream ml-2 align-middle animate-blink-cursor" />
          </h1>
          <p className="mt-6 sm:mt-7 max-w-xl font-body text-[15px] sm:text-lg text-ink bg-cream/95 pixel-border-sm px-4 py-3">
            I'm <strong className="text-sunset">Tina</strong> — an AI engineer with a mechatronics
            background and a soft spot for systems that quietly do the right
            thing. I wrote my master's thesis at <strong>Mercedes-Benz R&amp;D</strong>
            {" "}on hybrid RAG and fine-tuned LLMs for engineering knowledge, in collaboration with Uni Stuttgart.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#work"
              className="font-pixel text-[9px] sm:text-xs bg-moss text-cream px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              ▶ SEE MY WORK
            </a>
            <a
              href="mailto:radvar.tina41@gmail.com"
              className="font-pixel text-[9px] sm:text-xs bg-cream text-ink px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              ✉ EMAIL ME
            </a>
            <a
              href="/cv.pdf"
              download
              className="font-pixel text-[9px] sm:text-xs bg-sunset text-cream px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              ↓ CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PixelCloud({ small = false }: { small?: boolean }) {
  const size = small ? 6 : 10;
  return (
    <div className="flex items-end gap-0">
      {[3, 5, 7, 6, 4].map((h, i) => (
        <div key={i} style={{ width: size * 4, height: size * h }} className="bg-cream/90" />
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream relative scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
        <div className="relative">
          <div className="bg-sky pixel-border-lg p-4 inline-block animate-float-pixel">
            <img
              src={avatarPixel}
              alt="Pixel avatar of Tina Radvar"
              width={512}
              height={512}
              loading="lazy"
              className="w-full max-w-[280px] pixel-img"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 bg-sunset text-cream font-pixel text-[10px] px-3 py-2 pixel-border-sm">
            M.Sc IT
          </div>
        </div>
        <div>
          <div className="font-display text-xl text-moss mb-2">// chapter_01.txt</div>
          <h2 className="font-pixel text-2xl sm:text-3xl text-ink mb-6">
            HELLO,<br />TRAVELER.
          </h2>
          <div className="space-y-4 font-body text-lg text-ink/85 leading-relaxed">
            <p>
              I grew up between continents — Iran, Malaysia, now Germany —
              and somewhere along the way I picked up the habit of treating
              engineering as translation. From ambiguity into specs, from
              papers into pipelines, from "it kinda works" into something a
              team can actually rely on.
            </p>
            <p>
              These days I build retrieval-augmented systems and evaluate
              LLMs at <strong>Mercedes-Benz R&amp;D</strong>. My master's
              thesis — written with <strong>Uni Stuttgart</strong> — was a hybrid RAG
              chatbot with a fine-tuned GPT-4.1 on Azure for the electric drive team:
              faster answers, fewer hallucinations, a feedback loop that keeps
              it honest. I was also invited to the Mercedes-Benz R&amp;D AI
              Hackathon, where I led a team focused on hybrid RAG ideas.
            </p>
            <p>
              My route here wasn't very linear: a mechatronics B.Eng. in
              Kuala Lumpur, an ANN tire-quality model that ended up in an
              Elsevier paper, then a slow pivot toward AI. When I'm not
              in front of a screen I'm on a volleyball court, playing tennis,
              or painting — whatever mood the week left behind. Most of my
              best ideas show up on long walks, usually at inconvenient times.
            </p>
            <p>
              Working at Mercedes means German is everywhere — hallway
              conversations, documentation, the lunch table. I'm surrounded
              by it daily and I'm genuinely into it; currently pushing toward
              B2 and finding the language more fun the further I get.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Leonberg, DE",
              "M.Sc IT · Uni Stuttgart",
              "B.Eng Mechatronics",
              "Elsevier-published",
              "EN · C1",
              "DE · B1 → B2",
            ].map((t) => (
              <span
                key={t}
                className="font-display text-lg bg-moss text-cream px-3 py-1 pixel-border-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-muted border-y-[4px] border-ink scanlines scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-display text-xl text-ink/70 mb-2">// /quests</div>
            <h2 className="font-pixel text-2xl sm:text-4xl text-ink">
              SELECTED<br />ADVENTURES
            </h2>
          </div>
          <div className="font-display text-xl text-ink/70">[ thesis + side quests ]</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-cream pixel-border-lg overflow-hidden hover:-translate-y-1 transition-transform block"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-ink">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover pixel-img group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 font-pixel text-[8px] bg-ink text-cream px-2 py-1">
                  {p.tag.toUpperCase()}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-pixel text-sm text-ink mb-3">{p.title}</h3>
                <p className="font-body text-sm text-ink/80 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-display text-base bg-sky/60 text-ink px-2 py-0.5 pixel-border-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-cream scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="font-display text-xl text-moss mb-2">// journey.log</div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-ink mb-12">
          THE<br />JOURNEY
        </h2>
        <ol className="relative border-l-[3px] border-ink pl-5 sm:pl-8 space-y-9 sm:space-y-10">
          {timeline.map((t) => (
            <li key={t.when} className="relative">
              <span className="absolute -left-[34px] sm:-left-[42px] top-1 size-4 bg-sunset pixel-border-sm" />
              <div className="font-pixel text-[10px] text-moss mb-2">{t.when}</div>
              <div className="font-pixel text-sm text-ink mb-1">{t.role}</div>
              <div className="font-display text-lg text-ink/70 mb-2">{t.where}</div>
              <p className="font-body text-base text-ink/80 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted border-y-[4px] border-ink scanlines scroll-mt-20 sm:scroll-mt-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12">
        <div>
          <div className="font-display text-xl text-ink/70 mb-2">// stats.json</div>
          <h2 className="font-pixel text-2xl sm:text-4xl text-ink mb-6">
            PARTY<br />STATS
          </h2>
          <p className="font-body text-lg text-ink/80 max-w-md mb-6">
            Comfortable across the stack — from retrieval pipelines and
            fine-tuning loops to the React frontend that puts them in front
            of real users.
          </p>
          <div className="bg-cream pixel-border p-4 inline-block">
            <div className="font-pixel text-[10px] text-ink mb-2">EQUIPPED ITEMS</div>
            <div className="flex flex-wrap gap-1.5">
              {["GPT-4.1 (Azure)", "LangChain", "Azure AI Foundry", "Data Factory", "Cosmos DB", "GitHub Actions", "PostgreSQL", "Power BI"].map((t) => (
                <span key={t} className="font-display text-base bg-moss text-cream px-2 py-0.5 pixel-border-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {skills.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-pixel text-[11px] text-ink">{s.label}</span>
                <span className="font-display text-xl text-ink">{s.level}/100</span>
              </div>
              <div className="h-5 bg-cream pixel-border-sm p-[2px]">
                <div
                  className="h-full bg-sunset"
                  style={{
                    width: `${s.level}%`,
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent 0, transparent 6px, oklch(0 0 0 / 0.15) 6px, oklch(0 0 0 / 0.15) 8px)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-moss text-cream relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="absolute inset-0 scanlines opacity-50" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <div className="font-display text-xl text-cream/70 mb-2">// open_inbox()</div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-cream text-pixel-shadow-sm mb-6">
          LET'S BUILD<br />SOMETHING<br />
          <span className="text-sunset">SMART.</span>
        </h2>
        <p className="font-body text-lg text-cream/90 max-w-xl mx-auto mb-10">
          Open to AI engineering roles in Germany & remote — RAG, LLM
          fine-tuning, agentic systems, or full-stack ML. Always up for a chat.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="mailto:radvar.tina41@gmail.com"
            className="font-pixel text-[9px] sm:text-xs bg-cream text-ink px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            ✉ RADVAR.TINA41@GMAIL.COM
          </a>
          <a
            href="https://github.com/radtina"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-[9px] sm:text-xs bg-sunset text-cream px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            ⌨ GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/tinaradvar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-[9px] sm:text-xs bg-forest text-cream px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            in LINKEDIN
          </a>
          <a
            href="/cv.pdf"
            download
            className="font-pixel text-[9px] sm:text-xs bg-cream text-ink px-4 sm:px-5 py-3.5 sm:py-4 pixel-border hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            ↓ DOWNLOAD CV
          </a>
        </div>
        <div className="mt-8 font-display text-lg text-cream/80">
          Leonberg 71229 · Germany
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream py-8 border-t-[4px] border-soot">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-wrap justify-between items-center gap-3">
        <div className="font-pixel text-[10px]">© 2026 TINA RADVAR</div>
        <div className="font-display text-lg text-cream/70">
          made with pixels, tea, and patience.
        </div>
      </div>
    </footer>
  );
}
