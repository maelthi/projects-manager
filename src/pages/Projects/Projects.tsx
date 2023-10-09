import { useState } from "react"
import { Button } from "../../components/Button/Button"
import { Heading } from "../../components/Heading/Heading"
import { AddProjectContainer } from "../../containers/AddProjectContainer/AddProjectContainer"
import { ProjectsTableContainer } from "../../containers/ProjectsTableContainer/ProjectsTableContainer"

export const Projects = () => {
  const [showAddProjectModal, setShowAddProjectModal] = useState(false)
  const handleAddProjectButtonClick = () => setShowAddProjectModal(true)
  return (
    <section>
      <Heading label="Projects" />
      <Button label="Add project" onClick={handleAddProjectButtonClick} />
      {showAddProjectModal ? <AddProjectContainer /> : null}
      <ProjectsTableContainer />
    </section>
  )
}
