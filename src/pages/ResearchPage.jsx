import SectionHeader from '../components/SectionHeader';
import TimelineCard from '../components/TimelineCard';
import { personal, researchItems } from '../data/portfolioData';

export default function ResearchPage() {
  return (
    <section className="section page-offset">
      <div className="container">
        <SectionHeader
          eyebrow="Research & Publications"
          title="Academic track and manuscript pipeline"
          description="This page separates research identity from general project work so the portfolio stays clean, professional, and easy to scan."
        />

        <div className="about-grid research-top">
          <div className="glass-card prose-card">
            <h3>Current academic direction</h3>
            <p>
              My academic work focuses on applied AI, medical AI, deep learning, and trustworthy evaluation. I am especially interested in building models that are useful in real-world settings instead of stopping at benchmark-only reporting.
            </p>
          </div>

          <div className="glass-card prose-card">
            <h3>Thesis</h3>
            <p>{personal.education.thesis}</p>
            <p className="muted">Institution: {personal.education.institution}</p>
          </div>
        </div>

        <div className="timeline-grid">
          {researchItems.map((item, index) => (
            <TimelineCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
