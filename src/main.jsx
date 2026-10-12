import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Github, Linkedin, Mail, Menu, Terminal, X, Sparkles, ExternalLink, Cpu, Database, Globe, Layers3, ChevronRight } from 'lucide-react';
import { projects } from './projects.js';
import './style.css';

const projectIcons = { BrainCircuit, Cpu, Layers3, Sparkles, Database, Globe };
const skillGroups = {
  'AI / ML': ['Azure OpenAI (GPT-4.1)', 'LLM document extraction', 'Prompt engineering', 'Hugging Face APIs', 'Facebook Prophet', 'TensorFlow / OpenCV'],
  'Development': ['Python', 'C# / .NET', 'JavaScript', 'React', 'Node.js / Express', 'Flask', 'REST APIs'],
  'Data / Tools': ['SQL Server / T-SQL', 'MySQL', 'MongoDB', 'Azure Blob & Table Storage', 'Azure Functions', 'AKS / Docker', 'Azure DevOps YAML', 'Git / GitHub'],
};
const nav = ['About', 'Projects', 'Skills', 'Journey', 'Contact'];
function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSkill, setActiveSkill] = useState('AI / ML');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: .12 });
    els.forEach(el => observer.observe(el)); return () => observer.disconnect();
  }, []);
  const shown = projects.filter(p => activeFilter === 'All' || p.type === activeFilter);
  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="tech-scan" aria-hidden="true"/>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Ankit Sharma home"><span className="brand-mark">A<span>S</span></span><span className="brand-label">ANKIT<span>.DEV</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map((item, i) => <a key={item} href={'#'+item.toLowerCase()} onClick={() => setMenuOpen(false)}><span className="nav-num">0{i+1}</span>{item}</a>)}</nav>
      <a className="resume-btn" href="/resume.pdf" download="Ankit-Kumar-Sharma-Resume.pdf">Resume <ArrowDown size={14}/></a>
      <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> COGNIZANT · PROGRAMMER ANALYST <span className="eyebrow-line"/></div>
          <p className="hero-greeting">Hello, world!</p>
          <h1>I'm Ankit<br/><span className="gradient-text">Sharma<span className="period">.</span></span></h1>
          <p className="role-line hero-role">Python &amp; Backend Engineer <span>·</span> Enterprise AI</p>
          <p className="hero-description">I build and support <span>production AI systems</span>—from Azure OpenAI invoice workflows processing 1,500+ daily comparisons to full-stack products.</p>
          <div className="hero-actions"><a className="btn-primary" href="#projects">View selected work <ArrowRight size={16}/></a><a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer"><ArrowDown size={16}/> View resume</a><a className="btn-ghost" href="mailto:ankit.personal11@gmail.com"><Mail size={16}/> Contact me</a></div>
          <div className="hero-stats"><div><strong>1,500<span>+</span></strong><small>DAILY COMPARISONS</small></div><div><strong>Production</strong><small>AZURE AI PLATFORM</small></div><div><strong>8.71</strong><small>DEGREE CGPA</small></div></div>
        </div>
        <div className="hero-visual" aria-label="Animated digital network illustration">
          <div className="visual-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <div className="core-glow"/><div className="core"><BrainCircuit size={88} strokeWidth={1.1}/><span className="core-label">PRODUCTION AI</span></div>
          <div className="node node-top"><span className="node-icon"><Code2 size={15}/></span><div><b>AZURE OPENAI</b><small>invoice.extraction()</small></div><i/></div>
          <div className="node node-left"><span className="node-icon purple"><Cpu size={15}/></span><div><b>PYTHON</b><small>transactions.compare()</small></div><i/></div>
          <div className="node node-right"><span className="node-icon blue"><Database size={15}/></span><div><b>SQL SERVER</b><small>review.queue()</small></div><i/></div>
          <div className="float-code"><span>01</span> extract(invoice);<br/><span>02</span> review.with_context();<br/><span className="code-ok">✓ PRODUCTION WORKFLOW</span></div>
          <div className="visual-caption"><span className="pulse-mini"/> ENTERPRISE AI SYSTEMS <span>PYTHON · AZURE · .NET</span></div>
          <div className="spark spark-one">âœ³</div><div className="spark spark-two">+</div><div className="spark spark-three">âœ§</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-wheel"/> SCROLL TO EXPLORE <ArrowDown size={13}/></a>
      </section>

      <section className="about section-wrap reveal" id="about">
        <SectionHead number="01" eyebrow="PROFILE" title={<>Production AI.<br/><span className="gradient-text">Purposeful systems.</span></>} />
        <div className="about-grid"><div className="about-copy"><p className="lead">Python and backend engineer at <strong>Cognizant</strong>, building a production platform for AI-assisted duplicate invoice validation.</p><p>I support Azure OpenAI invoice pipelines and deliver access control, reviewer workflows, and reporting features across Python, C#/.NET, and SQL Server. Promoted to Programmer Analyst in June 2026.</p><div className="terminal-card"><div className="terminal-head"><span/><span/><span/><label>ankit@portfolio:~</label><Terminal size={14}/></div><div className="terminal-body"><p><em>➜</em> whoami</p><strong>Production systems. Practical AI. Reliable delivery.</strong><p><em>➜</em> current_focus</p><strong className="terminal-green">Azure AI · Python · .NET · SQL Server</strong><p><em>➜</em> <span className="blink">_</span></p></div></div></div>
          <div className="about-side"><div className="side-title"><span className="tiny-square"/> MY OPERATING PRINCIPLES</div>{[['01','Stay curious','Learn deeply. Keep experimenting.'],['02','Build with purpose','Make the useful thing, beautifully.'],['03','Ship & improve','Get feedback. Iterate. Repeat.']].map(x=><div className="principle" key={x[0]}><span>{x[0]}</span><div><b>{x[1]}</b><p>{x[2]}</p></div><ChevronRight size={16}/></div>)}<div className="currently"><span className="currently-label">CORE TOOLKIT</span><div className="tag-row"><span>Azure OpenAI</span><span>Python</span><span>C# / .NET</span><span>SQL Server</span><span>AKS</span><span>Docker</span></div></div></div></div>
      </section>

      <section className="projects-section section-wrap reveal" id="projects">
        <SectionHead number="02" eyebrow="SELECTED WORK" title={<>Products with a <span className="gradient-text">purpose.</span></>} subtitle="Two end-to-end projects. Architecture, models, APIs, and user-facing outcomes." />
        <div className="project-toolbar"><span className="project-count">INDEX / <b>{String(shown.length).padStart(2,'0')}</b></span><div className="filters">{['All','AI / ML','Full-stack'].map(f=><button key={f} className={activeFilter===f?'filter active':'filter'} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div></div>
        <div className="project-grid">{shown.map(p=>{const Icon=projectIcons[p.icon] || Code2; return <article className={'project-card '+p.color} key={p.code}><div className="project-card-top"><span className="project-index">PROJECT_{p.code}</span><span className="project-icon"><Icon size={21}/></span>{p.repo && <a href={p.repo} target="_blank" rel="noreferrer" aria-label={'GitHub for '+p.title} className="external-link"><ArrowUpRight size={17}/></a>}</div><div className="project-art"><div className="art-grid"/><div className="art-orb"><Icon size={48} strokeWidth={1}/></div><div className="art-code">{p.code} // {p.type.toUpperCase()}<br/><span>modules ready...</span><br/><span className="art-success">● project active</span></div><div className="art-bars"><i/><i/><i/><i/><i/></div></div><div className="project-content"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p>{p.detail && <p className="project-detail">{p.detail}</p>}{p.outcomes && <ul className="project-outcomes">{p.outcomes.map(item => <li key={item}>{item}</li>)}</ul>}<div className="stack-tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div>{(p.repo || p.demo) && <div className="project-links">{p.repo && <a href={p.repo} target="_blank" rel="noreferrer"><Github size={14}/> Source code <ArrowUpRight size={13}/></a>}{p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13}/></a>}</div>}</div></article>})}</div>
        <div className="projects-foot"><span>PROJECT DATA: src/projects.js</span><div className="foot-line"/><a href="https://github.com/ankit-0-7" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={14}/></a></div></section>

      <section className="skills-section section-wrap reveal" id="skills">
        <SectionHead number="03" eyebrow="TECHNICAL SKILLS" title={<>A practical <span className="gradient-text">toolkit.</span></>} subtitle="Technologies applied across production engineering and independent builds." />
        <div className="skills-layout"><div className="skill-tabs">{Object.keys(skillGroups).map((s,i)=><button className={activeSkill===s?'skill-tab active':'skill-tab'} key={s} onClick={()=>setActiveSkill(s)}><span>0{i+1}</span>{s}<ArrowUpRight size={15}/></button>)}<div className="skill-note"><Sparkles size={16}/><p>Always learning.<br/>Never standing still.</p></div></div><div className="skill-display"><div className="skill-display-head"><span><span className="tiny-square"/> SKILL_MODULE / {activeSkill.toUpperCase()}</span><span className="module-live"><i/> ACTIVE</span></div><div className="skill-pills">{skillGroups[activeSkill].map((s,i)=><div className="skill-pill" key={s} style={{'--delay':`${i*70}ms`}}><span className="skill-dot"/>{s}<ArrowUpRight size={13}/></div>)}</div><div className="skill-footer"><span>CONTINUOUS INTEGRATION: LEARNING</span><div className="meter"><i/><i/><i/><i/><i/><i/><i/><i/></div></div></div></div>
      </section>

      <section className="journey section-wrap reveal" id="journey"><SectionHead number="04" eyebrow="EXPERIENCE & EDUCATION" title={<>Production experience.<br/><span className="gradient-text">Measured impact.</span></>} /><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">COGNIZANT / JUNE 2026–PRESENT</div><div className="timeline-content"><h3>Programmer Analyst — Enterprise AI Platform</h3><p>Bengaluru · Promoted June 2026</p><span>Delivered region-based access control, reviewer attribution and personal queues, reportable review reasons, and status/reviewer dashboard filters. Implemented backend and SQL changes in C#/.NET and SQL Server, released through Azure DevOps pipelines.</span></div><span className="timeline-badge">CURRENT</span></div><div className="timeline-item"><span className="timeline-dot purple-dot"/><div className="timeline-date">COGNIZANT / JULY 2025–JUNE 2026</div><div className="timeline-content"><h3>Programmer Analyst Trainee</h3><p>Azure OpenAI · Python · Azure Functions · AKS</p><span>Supported production extraction and duplicate-comparison jobs processing 1,500+ daily transactions; investigated failures and improved memory use and throughput.</span></div><span className="timeline-badge muted">PROMOTED</span></div><div className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">EDUCATION / 2021–2025</div><div className="timeline-content"><h3>B.E. Artificial Intelligence & Machine Learning</h3><p>RNS Institute of Technology · Bengaluru · CGPA 8.71</p><span>Certifications in Azure, Docker, Data Science, and Python.</span></div><span className="timeline-badge muted">GRADUATED</span></div></div></section>

      <section className="contact-section section-wrap reveal" id="contact"><div className="contact-panel"><div className="contact-scanline"/><div className="contact-left"><div className="eyebrow"><span className="status-dot"/> OPEN TO THE RIGHT OPPORTUNITY</div><h2>Building AI that<br/>works in the <span className="gradient-text">real world.</span></h2><p>Interested in backend, applied AI, and platform engineering roles where I can build reliable systems and keep learning.</p><a className="btn-primary" href="mailto:ankit.personal11@gmail.com">Let us talk <ArrowUpRight size={16}/></a></div><div className="contact-right"><div className="contact-terminal"><div className="terminal-head"><span/><span/><span/><label>contact.sh</label><Terminal size={14}/></div><div className="contact-code"><p><em>$</em> connect --with ankit</p><p className="code-muted">// choose your channel</p><a href="mailto:ankit.personal11@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a><a href="https://linkedin.com/in/ankitt007" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/ankit-0-7" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div></div><div className="contact-orbit"/></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">A<span>S</span></span><span className="brand-label">ANKIT<span>.DEV</span></span></a><span>DESIGNED & BUILT WITH <b>âœ³</b> AND TOO MUCH COFFEE.</span><a href="#home" className="back-top">BACK TO TOP â†‘</a><small>Â© {new Date().getFullYear()} ANKIT SHARMA</small></footer>
  </div>;
}
function SectionHead({number, eyebrow, title, subtitle}) { return <div className="section-head"><div className="section-number">{number}<span/></div><div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div><div className="section-coordinate">FIG. {number} <span>â€”</span> PORTFOLIO.SYS</div></div>; }

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);



















