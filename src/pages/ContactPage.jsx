import { useState } from 'react';
import { Check, Copy, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personal, references } from '../data/portfolioData';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section className="section page-offset">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Open for jobs, internships, and collaborations"
          description="Everything important is kept here in a clean, recruiter-friendly layout."
        />

        <div className="contact-grid">
          <div className="glass-card contact-card">
            <div className="contact-line"><Mail size={18} /> <a href={`mailto:${personal.email}`}>{personal.email}</a></div>
            <div className="contact-line"><Phone size={18} /> <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>{personal.phone}</a></div>
            <div className="contact-line"><MapPin size={18} /> <span>{personal.location}</span></div>

            <div className="hero-actions tight">
              <button className="button ghost" onClick={copyEmail}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Copied' : 'Copy Email'}
              </button>
              <a className="button primary" href={`mailto:${personal.email}`}>
                <Mail size={18} />
                Send Email
              </a>
            </div>

            <div className="hero-mini-links vertical">
              <a href={personal.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a href={personal.scholar} target="_blank" rel="noreferrer"><GraduationCap size={16} /> Scholar</a>
            </div>
          </div>

          <div className="glass-card">
            <h3>References</h3>
            <div className="references-grid">
              {references.map((item) => (
                <article key={item.email} className="reference-card">
                  <strong>{item.name}</strong>
                  <p>{item.role}</p>
                  <p className="muted">{item.meta}</p>
                  <div className="reference-links">
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                    <a href={`tel:${item.phone}`}>{item.phone}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
