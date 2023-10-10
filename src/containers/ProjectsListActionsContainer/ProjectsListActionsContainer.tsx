import { Button } from "../../components/Button/Button"
import { Filter } from "../../components/Filter/Filter"
import { SearchBar } from "../../components/SearchBar/SearchBar"

type ProjectsListActionsContainer = {
  onHandleAddProjectButtonClick: () => void
}

export const ProjectsListActionsContainer = ({
  onHandleAddProjectButtonClick,
}: ProjectsListActionsContainer) => {
  return (
    <section className="flex justify-between items-center">
      <Button
        className="bg-blue-500"
        label="Add project"
        onClick={onHandleAddProjectButtonClick}
        dataTestId="add-project-button"
      />
      <SearchBar />
      <Filter />
    </section>
  )
}
