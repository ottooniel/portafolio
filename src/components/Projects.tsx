import { projects, projectsHeader } from "@/content/projects";
import ProjectRow from "./ProjectRow";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <Section id="proyectos" alt>
      <SectionHeader id="proyectos-title" className="mb-12 md:mb-[72px]" {...projectsHeader} />
      {projects.map(({ meta, Body }) => (
        <ProjectRow key={meta.number} meta={meta}>
          <Body />
        </ProjectRow>
      ))}
    </Section>
  );
}
