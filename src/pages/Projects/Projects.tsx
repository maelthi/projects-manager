import { useState } from "react"
import { Heading } from "../../components/Heading/Heading"
import { AddProjectContainer } from "../../containers/AddProjectContainer/AddProjectContainer"
import { ProjectsTableContainer } from "../../containers/ProjectsTableContainer/ProjectsTableContainer"
import { ProjectsListActionsContainer } from "../../containers/ProjectsListActionsContainer/ProjectsListActionsContainer"

export const Projects = () => {
  const [showAddProjectModal, setShowAddProjectModal] = useState(false)
  const handleAddProjectButtonClick = () => setShowAddProjectModal(true)
  return (
    <section>
      <Heading label="Projects" />
      <ProjectsListActionsContainer
        onHandleAddProjectButtonClick={handleAddProjectButtonClick}
      />
      {showAddProjectModal ? (
        <AddProjectContainer
          onSetShowAddProjectModal={setShowAddProjectModal}
        />
      ) : null}
      <ProjectsTableContainer />
    </section>
  )
}
