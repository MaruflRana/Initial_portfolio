import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { featuredProjects } from '../data/portfolioData';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section page-offset">
        <div className="container">
          <div className="glass-card detail-shell">
            <h2>Project not found</h2>
            <p>The selected case study does not exist in the current data file.</p>
            <Link to="/projects" className="button ghost">
              <ChevronLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-offset">
      <div className="container">
        <div className="detail-shell glass-card">
          <Link to="/projects" className="inline-link">
            <ChevronLeft size={16} />
            Back to all projects
          </Link>

          <SectionHeader
            eyebrow={project.category}
            title={project.title}
            description={project.summary}
          />

          <div className="detail-grid">
            <div>
              <h3>The challenge</h3>
              <p>{project.challenge}</p>

              <h3>Approach</h3>
              <ul className="detail-list">
                {project.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="detail-side">
              <div className={`project-visual accent-${project.accent || 'cyan'}`}>
                <span className="tag">Case Study</span>
                <h4>{project.title}</h4>
                <p>{project.category}</p>
              </div>

              <div className="glass-card nested-card">
                <h3>Stack / Focus</h3>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card nested-card">
                <h3>Key highlights</h3>
                <ul className="detail-list">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="detail-actions">
            <Link className="button ghost" to="/projects">
              <ChevronLeft size={18} />
              Back
            </Link>
            <Link className="button primary" to="/contact">
              Discuss this work
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
