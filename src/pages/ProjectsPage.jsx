import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <section className="section page-offset">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Project architecture finalized as case studies"
          description="This section is built for recruiter flow: fast scan first, deeper reading second."
        />
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
