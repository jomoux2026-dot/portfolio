import { PROJECTS } from '@/content/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function WorkSection() {
  return (
    <section
      id="work"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box' as const,
      }}
    >
      {/* Section heading */}
      <h2 style={{
        fontSize: 'clamp(22px, 2.2vw, 28px)',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.01em',
        marginBottom: '16px',
      }}>
        Recent Work
      </h2>

      {/* Project list */}
      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} hideBorderTop={i === 0} />
        ))}
      </div>
    </section>
  )
}
