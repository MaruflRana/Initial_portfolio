import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { certificates, kaggleCourses } from '../data/portfolioData';

export default function CertificatesPage() {
  const [filter, setFilter] = useState('All');

  const visibleItems = useMemo(() => {
    if (filter === 'All') return certificates;
    return certificates.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <section className="section page-offset">
      <div className="container">
        <SectionHeader
          eyebrow="Certificates"
          title="Certifications and structured learning"
          description="Presented cleanly so the page adds credibility without becoming noisy."
        />

        <div className="filter-row">
          {['All', 'Professional', 'Kaggle'].map((item) => (
            <button
              key={item}
              className={`filter-pill ${filter === item ? 'active' : ''}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="certificate-grid">
          {visibleItems.map((item) => (
            <article className="glass-card certificate-card" key={item.title}>
              <span className="tag">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
              <p className="muted">{item.subtitle}</p>
              <div className="divider" />
              <div className="meta-list compact">
                <div>
                  <span>Date</span>
                  <strong>{item.date}</strong>
                </div>
                <div>
                  <span>Credential</span>
                  <strong>{item.credential}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="glass-card kaggle-panel">
          <SectionHeader
            eyebrow="Kaggle Learn"
            title="14 completed courses"
            description="Arranged as individual learning badges for a more premium visual presentation."
          />
          <div className="chip-row">
            {kaggleCourses.map((course) => (
              <span className="chip large" key={course}>{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
