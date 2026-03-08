import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-badge">{personal.initials}</span>
            <div>
              <strong>{personal.name}</strong>
              <small>{personal.role}</small>
            </div>
          </div>
          <p className="muted footer-copy">
            Designed as a futuristic, recruiter-ready showcase focused on AI, software, research, and proof of work.
          </p>
        </div>

        <div className="footer-links">
          <a href={personal.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <a href={`mailto:${personal.email}`}><Mail size={16} /> Email</a>
          <a href={personal.scholar} target="_blank" rel="noreferrer"><GraduationCap size={16} /> Scholar</a>
        </div>
      </div>
    </footer>
  );
}
