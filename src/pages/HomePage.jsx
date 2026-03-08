import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, GraduationCap, Sparkles, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import SkillGroup from '../components/SkillGroup';
import ProjectCard from '../components/ProjectCard';
import TimelineCard from '../components/TimelineCard';
import { personal, skills, featuredProjects, researchItems, certificates, kaggleCourses } from '../data/portfolioData';

const orbitSkills = [
  { label: 'Python', angle: -88, radius: 136 },
  { label: 'Deep Learning', angle: -42, radius: 166 },
  { label: 'Medical AI', angle: 6, radius: 146 },
  { label: 'Computer Vision', angle: 48, radius: 168 },
  { label: 'Research', angle: 96, radius: 144 },
  { label: 'PyTorch', angle: 146, radius: 162 },
  { label: 'GitHub', angle: 198, radius: 146 },
  { label: 'C++', angle: 240, radius: 164 },
];

const orbitPositions = orbitSkills.map((skill) => {
  const radians = (skill.angle * Math.PI) / 180;
  return {
    ...skill,
    x: Math.cos(radians) * skill.radius,
    y: Math.sin(radians) * skill.radius,
  };
});

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">
              <Sparkles size={14} />
              Architecture A • Professional + Research Portfolio
            </span>
            <h1>
              A modern portfolio for <span className="text-gradient">applied AI</span>, research-led
              problem solving, and software that turns ideas into working systems.
            </h1>
            <p className="hero-text">{personal.tagline}</p>

            <div className="hero-actions">
              <Link className="button primary" to="/projects">
                Explore Projects
                <ArrowRight size={18} />
              </Link>
              <a className="button ghost" href={personal.cv} target="_blank" rel="noreferrer">
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="hero-mini-links">
              <a href={personal.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a href={personal.scholar} target="_blank" rel="noreferrer"><GraduationCap size={16} /> Scholar</a>
              <a href={`mailto:${personal.email}`}><Mail size={16} /> Email</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual glass-card"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="identity-card">
              <div className="identity-top">
                <div className="avatar-ring">
                  <span>{personal.initials}</span>
                </div>
                <div>
                  <p className="muted tiny">Now showcasing</p>
                  <h2>{personal.name}</h2>
                  <p className="identity-role">{personal.role}</p>
                </div>
              </div>

              <div className="radar-orbit">
                <div className="orbit orbit-1" />
                <div className="orbit orbit-2" />
                <div className="orbit orbit-3" />
                <div className="radar-core">
                  <span className="radar-core-label">Research × Engineering</span>
                  <strong>Applied AI</strong>
                  <small>From experiments to polished builds</small>
                </div>
                {orbitPositions.map((skill) => (
                  <span
                    key={skill.label}
                    className="orbit-chip"
                    style={{ '--x': `${skill.x}px`, '--y': `${skill.y}px` }}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>

              <div className="stat-grid">
                {personal.quickStats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="About"
            title="A profile built around proof of work"
            description="This portfolio blends research identity, software development ability, and recruiter-friendly structure so both hiring teams and academic reviewers can scan it fast."
          />
          <div className="about-grid">
            <div className="glass-card prose-card">
              <p>{personal.summary}</p>
              <div className="meta-list">
                <div>
                  <span>Education</span>
                  <strong>{personal.education.degree}</strong>
                </div>
                <div>
                  <span>Institution</span>
                  <strong>{personal.education.institution}</strong>
                </div>
                <div>
                  <span>Academic Window</span>
                  <strong>{personal.education.period}</strong>
                </div>
                <div>
                  <span>CGPA</span>
                  <strong>{personal.education.cgpa}</strong>
                </div>
                <div>
                  <span>Thesis</span>
                  <strong>{personal.education.thesis}</strong>
                </div>
              </div>
            </div>

            <div className="glass-card spotlight-card">
              <div className="stack-badge">
                <FileText size={18} />
                Relevant Coursework
              </div>
              <div className="chip-row">
                {personal.education.coursework.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
              <div className="divider" />
              <p className="muted">
                Best fit roles: AI/ML Engineer, Junior Software Engineer, Research Assistant, Computer Vision Intern, Data Science Intern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Skills"
            title="Core stack"
            description="Grouped for fast recruiter scanning and easy future editing."
          />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <SkillGroup key={group.title} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Case-study driven project showcase"
            description="Built to match Architecture A: every featured card can open into a fuller case-study view."
          />
          <div className="projects-grid">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="section-cta">
            <Link className="button ghost" to="/projects">
              View all project case studies
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Research"
            title="Publications and manuscript track"
            description="A separate research layer keeps the portfolio strong for both hiring and academic visibility."
          />
          <div className="timeline-grid">
            {researchItems.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container preview-grid">
          <div className="glass-card">
            <SectionHeader
              eyebrow="Certificates"
              title="Professional learning"
              description="Structured as visible credibility boosters, not as clutter."
            />
            {certificates.map((item) => (
              <div className="mini-panel" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.issuer}</p>
                <span className="muted">{item.date}</span>
              </div>
            ))}
            <Link className="inline-link" to="/certificates">
              Open certificates section
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="glass-card">
            <SectionHeader
              eyebrow="Kaggle Learn"
              title="Course highlights"
              description="A compact display of the completed learning path."
            />
            <div className="chip-row">
              {kaggleCourses.slice(0, 8).map((course) => (
                <span className="chip" key={course}>{course}</span>
              ))}
            </div>
            <p className="muted small-space">Plus 6 more courses showcased in the dedicated certificates page.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-banner glass-card">
          <div>
            <span className="eyebrow">Let’s build something valuable</span>
            <h2>Open to job opportunities, internships, collaborations, and research conversations.</h2>
          </div>
          <div className="hero-actions">
            <Link className="button primary" to="/contact">
              Contact Me
              <ArrowRight size={18} />
            </Link>
            <a className="button ghost" href={`mailto:${personal.email}`}>
              <Mail size={18} />
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
