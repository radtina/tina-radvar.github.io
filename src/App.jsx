import './App.css'

const selectedWork = [
  {
    title: 'AI RAG Knowledge Management Platform',
    category: 'Mercedes-Benz R&D / Master Thesis',
    description:
      'Built a full-stack AI knowledge management platform for domain-specific engineering knowledge retrieval in electric drive software development.',
    impact:
      'Implemented hybrid search, query expansion, HyDE, cross-encoder reranking, adaptive chunking, and Azure-based retrieval infrastructure.',
    stack: ['FastAPI', 'React', 'Azure OpenAI', 'FAISS', 'BM25', 'Azure SQL'],
    liveLink: '',
    repoLink: '',
  },
  {
    title: 'RAG Evaluation & GPT-4.1 Fine-Tuning',
    category: 'LLM Evaluation / AI Optimization',
    description:
      'Evaluated 9 RAG configurations and fine-tuned GPT-4.1 models using SFT and DPO for domain-specific AI tasks.',
    impact:
      'Focused on improving domain-specific AI performance compared with baseline frontier models.',
    stack: ['LLM Evaluation', 'SFT', 'DPO', 'GPT-4.1', 'Python'],
    liveLink: '',
    repoLink: '',
  },
  {
    title: 'Philosoph AI',
    category: 'Personal Project / Multi-Agent LLM Simulation',
    description:
      'Built a multi-agent LLM simulation platform using prompt-chaining and frontend deployment.',
    impact:
      'Explores AI-driven reasoning, dialogue simulation, and interactive LLM behavior.',
    stack: ['LLMs', 'Prompt Chaining', 'Frontend Deployment'],
    liveLink: 'https://philosoph.onrender.com/',
    repoLink: 'https://github.com/radtina/Philosoph',
  },
  {
    title: 'CarPool App',
    category: 'Full-Stack Web Application',
    description:
      'Developed a ride-sharing web application with backend logic, user authentication, database integration, and a React frontend.',
    impact:
      'Built as a full-stack application with JWT authentication and PostgreSQL database support.',
    stack: ['Go', 'React', 'PostgreSQL', 'JWT Authentication'],
    liveLink: 'https://carpoolapp-q00v.onrender.com/',
    repoLink: 'https://github.com/radtina/Carpool',
  },
  {
    title: 'Jira & Confluence Automation Tools',
    category: 'Workflow Automation / Mercedes-Benz R&D',
    description:
      'Automated Jira and Confluence workflows using REST APIs and custom scripts to support release teams.',
    impact:
      'Built interactive dashboards with HTML and JavaScript integrating real-time Jira data.',
    stack: ['REST APIs', 'Jira', 'Confluence', 'HTML', 'JavaScript'],
    liveLink: '',
  },
  {
    title: 'Machine Learning for Tire Compound Quality Modeling',
    category: 'Published Bachelor Thesis',
    description:
      'Developed a machine learning-based approach for tire compound quality modeling during a Mechatronic Engineering bachelor thesis.',
    impact:
      'Bachelor thesis published with Elsevier in 2022.',
    stack: ['Machine Learning', 'Data Analysis', 'Engineering', 'Quality Modeling'],
    liveLink: '',
    repoLink: '',
  },
]

const experience = [
  {
    period: 'Feb 2026 — Present',
    role: 'AI RAG System Intern',
    company: 'Mercedes-Benz AG — Electric Drive Systems R&D',
    details:
      'Implemented and maintained CI/CD pipelines using GitHub Actions, supported automated testing, developed agentic test frameworks, optimized Azure-based cloud architecture, and integrated authentication and access management services.',
  },
  {
    period: 'Aug 2025 — Feb 2026',
    role: 'AI RAG System Master Thesis',
    company: 'Mercedes-Benz AG — Electric Drive Systems R&D',
    details:
      'Built a full-stack AI knowledge management platform using FastAPI, React, Azure OpenAI, FAISS, BM25, and Azure SQL for domain-specific engineering knowledge retrieval.',
  },
  {
    period: 'Jul 2024 — Aug 2025',
    role: 'Software Engineering PMO Working Student',
    company: 'Mercedes-Benz AG — R&D Electric Drive Transmission',
    details:
      'Automated Jira and Confluence workflows with REST APIs and custom scripts, and built interactive dashboards in Confluence using HTML and JavaScript.',
  },
  {
    period: 'Oct 2022 — Jun 2023',
    role: 'IT Product Owner Working Student',
    company: 'Daimler Truck AG — IT for Treasury & Procurement',
    details:
      'Migrated Python 2 scripts to Python 3 and refactored a legacy treasury automation codebase.',
  },
  {
    period: '2020 — 2022',
    role: 'Engineering & Automation Intern',
    company: 'Continental / PETRONAS Sdn Bhd — Malaysia',
    details:
      'Developed automation scripts, dashboards, and reporting tools to support engineering functions.',
  },
]

const skills = [
  {
    title: 'AI & Machine Learning',
    items: ['RAG', 'LLM Fine-Tuning', 'SFT/DPO', 'AI Evaluation', 'FAISS', 'BM25'],
  },
  {
    title: 'Software Development',
    items: ['Python', 'FastAPI', 'React', 'TypeScript', 'REST APIs', 'Go'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Cloud Architecture', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Data & Databases',
    items: ['Azure SQL', 'Redis', 'Blob Storage', 'PostgreSQL', 'Database Optimization'],
  },
]

const education = [
  {
    period: 'Oct 2022 — Feb 2026',
    degree: 'M.Sc. Information Technology',
    school: 'University of Stuttgart, Germany',
    details:
      'Focus areas: software/hardware, deep learning, distributed systems, data pipelines, and mobile app development. Master thesis grade: 1.7.',
  },
  {
    period: 'Jan 2018 — Jan 2022',
    degree: 'B.Eng. Mechatronic Engineering',
    school: 'UCSI University, Malaysia',
    details:
      'Grade 1.7 / 3.53 GPA. 4× Dean’s List Awards. Bachelor thesis published with Elsevier in 2022.',
  },
]

function App() {
  return (
    <main className="site">
      <nav className="nav">
        <a href="#top" className="brand" aria-label="Go to homepage">
          <span>TR</span>
        </a>

        <div className="navLinks" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#case-study">Case Study</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow">AI RAG Systems · Full-Stack Engineering · Cloud Architecture</p>

          <h1>
            Building AI systems that make technical knowledge easier to retrieve,
            evaluate, and use.
          </h1>

          <p className="intro">
            I’m Tina Radvar, an M.Sc. Information Technology student at the University of
            Stuttgart with experience in AI RAG systems, LLM evaluation, full-stack
            development, cloud architecture, and engineering automation.
          </p>

          <p className="openTo">
            Open to AI Engineering, RAG, LLM Evaluation, Full-Stack Development, and Cloud
            Engineering roles.
          </p>

          <div className="heroActions">
            <a href="#work" className="btn primary">
              View selected work
            </a>
            <a href="/CV_TinaRadvar.pdf" target="_blank" rel="noreferrer" className="btn secondary">
              Download CV
            </a>
            <a href="#contact" className="btn secondary">
              Contact me
            </a>
          </div>
        </div>

        <aside className="profilePanel" aria-label="Profile highlights">
          <div className="statusPill">Currently focused on AI knowledge systems</div>

          <div className="profileCard">
            <div className="profileInitials">TR</div>
            <div>
              <h2>Tina Radvar</h2>
              <p>AI / RAG · Software Engineering · Automation</p>
            </div>
          </div>

          <div className="quickStats">
            <div>
              <strong>9</strong>
              <span>RAG configurations evaluated</span>
            </div>
            <div>
              <strong>1.7</strong>
              <span>Master thesis grade</span>
            </div>
            <div>
              <strong>4×</strong>
              <span>Dean’s List Awards</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section about">
        <div className="sectionHeader">
          <p className="label">Profile</p>
          <h2>Engineering depth with an AI product mindset.</h2>
        </div>

        <p>
          My work sits at the intersection of AI, software engineering, and technical
          workflows. I have built RAG systems, evaluated LLM configurations, developed
          full-stack applications, automated engineering processes, and worked across
          cloud, data, and product-oriented environments.
        </p>
      </section>

      <section id="work" className="section">
        <div className="sectionHeader">
          <p className="label">Selected Work</p>
          <h2>Projects with practical engineering value.</h2>
        </div>

        <div className="projectGrid">
          {selectedWork.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectTop">
                <span className="projectNumber">0{index + 1}</span>
                <p>{project.category}</p>
              </div>

              <h3>{project.title}</h3>
              <p className="projectDescription">{project.description}</p>

              <div className="impactBox">
                <span>Focus</span>
                <p>{project.impact}</p>
              </div>

              <div className="cardFooter">
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="projectLinks">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      Live demo →
                    </a>
                  )}

                  {project.repoLink && !project.repoLink.includes('YOUR-USERNAME') && (
                    <a href={project.repoLink} target="_blank" rel="noreferrer">
                      GitHub repo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="case-study" className="section caseStudy">
        <div className="caseStudyCard">
          <div className="caseStudyIntro">
            <p className="label">Case Study</p>
            <h2>AI knowledge platform for engineering teams.</h2>
            <p>
              During my master thesis at Mercedes-Benz AG, I built a full-stack AI RAG
              platform for domain-specific engineering knowledge retrieval in electric drive
              software development.
            </p>
          </div>

          <div className="caseStudyGrid">
            <div>
              <span>01</span>
              <h3>Problem</h3>
              <p>
                Technical engineering knowledge is often distributed across documentation,
                tools, and project workflows, making retrieval slow and difficult.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Approach</h3>
              <p>
                Built a full-stack retrieval platform using FastAPI, React, Azure OpenAI,
                FAISS, BM25, and Azure SQL, with advanced RAG techniques including hybrid
                search, HyDE, reranking, and adaptive chunking.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Evaluation</h3>
              <p>
                Evaluated 9 RAG configurations and fine-tuned GPT-4.1 models using SFT and
                DPO for domain-specific AI tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionHeader">
          <p className="label">Experience</p>
          <h2>Industry experience in AI, software, and automation.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={`${item.role}-${item.period}`}>
              <p className="time">{item.period}</p>

              <div className="timelineContent">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHeader">
          <p className="label">Skills</p>
          <h2>Technical toolkit.</h2>
        </div>

        <div className="skillsGrid">
          {skills.map((group) => (
            <article className="skillCard" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="sectionHeader">
          <p className="label">Education</p>
          <h2>Academic background.</h2>
        </div>

        <div className="educationGrid">
          {education.map((item) => (
            <article className="educationCard" key={item.degree}>
              <p className="time">{item.period}</p>
              <h3>{item.degree}</h3>
              <p className="company">{item.school}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contactSection">
        <p className="label">Contact</p>
        <h2>Open to AI engineering, RAG, software development, and technical product roles.</h2>

        <div className="contactActions">
          <a href="mailto:radvar.tina41@gmail.com" className="btn primary">
            Email me
          </a>

          <a href="/CV_TinaRadvar.pdf" target="_blank" rel="noreferrer" className="btn secondary">
            Download CV
          </a>

          <a href="https://github.com/radtina" target="_blank" rel="noreferrer" className="btn secondary">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/tinaradvar/" target="_blank" rel="noreferrer" className="btn secondary">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App