import { useState } from "react"
import { Heading } from "../../components/Heading/Heading"
import { AddProjectContainer } from "../../containers/AddProjectContainer/AddProjectContainer"
import { ProjectsTableContainer } from "../../containers/ProjectsTableContainer/ProjectsTableContainer"
import { ProjectsListActionsButtonsContainer } from "../../containers/ProjectsListActionsButtonsContainer/ProjectsListActionsButtonsContainer"

export const Projects = () => {
  const [showAddProjectModal, setShowAddProjectModal] = useState(false)
  const handleAddProjectButtonClick = () => setShowAddProjectModal(true)
  return (
    <section>
      <Heading label="Projects" />
      <ProjectsListActionsButtonsContainer
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
