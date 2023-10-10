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
      <Button
        className="bg-blue-500"
        label="Add project"
        onClick={handleAddProjectButtonClick}
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
