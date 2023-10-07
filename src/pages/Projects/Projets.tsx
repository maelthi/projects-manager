import { Heading } from "../../components/Heading/Heading"
import { ProjectsTableContainer } from "../../containers/ProjectsTableContainer/ProjectsTableContainer"

export const Projects = () => {
  return (
    <section>
      <Heading label="Projects" />
      <ProjectsTableContainer />
    </section>
  )
}
