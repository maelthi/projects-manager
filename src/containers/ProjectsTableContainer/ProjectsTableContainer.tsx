import { Table } from "../../components/Table/Table"
import { useGetProjects } from "../../hooks/useGetProjects"

import arrow from "../../assets/arrow.svg"
import remove from "../../assets/remove.svg"
import { useNavigate } from "react-router-dom"

export const ProjectsTableContainer = () => {
  const { data: projectsList } = useGetProjects()
  const headers = ["Titre du projet", "Description", "Etape"]
  const navigate = useNavigate()

  const handleOnNavigateButtonClick = (id: number) =>
    navigate(`/projects/${id}`)

  const rows = projectsList.map(({ nom, description, etape, id }) => ({
    id,
    cols: [
      {
        id: `row-${id}-col-1`,
        content: nom,
      },
      {
        id: `row-${id}-col-2`,
        content: description,
      },
      {
        id: `row-${id}-col-3`,
        content: (
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            {etape}
          </span>
        ),
      },
      {
        id: `row-${id}-col-4`,
        content: (
          <img
            className="cursor-pointer"
            src={remove}
            alt={`This icon removes the ${nom} project`}
            aria-label={`Remove the ${nom} project`}
          />
        ),
      },
      {
        id: `row-${id}-col-5`,
        content: (
          <button onClick={() => handleOnNavigateButtonClick(id)}>
            <img
              className="cursor-pointer"
              src={arrow}
              alt={`This icon navigates you to the ${nom} project`}
              aria-label={`Navigate to the ${nom} project`}
            />
          </button>
        ),
      },
    ],
  }))

  return <Table rows={rows} headers={headers} />
}
