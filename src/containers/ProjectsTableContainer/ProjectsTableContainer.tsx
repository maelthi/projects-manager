import { Table } from "../../components/Table/Table"
import { useGetProjects } from "../../hooks/useGetProjects"

export const ProjectsTableContainer = () => {
  const { data: projectsList } = useGetProjects()
  const headers = ["Titre du projet", "Description", "Etape"]

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
    ],
  }))

  return <Table rows={rows} headers={headers} />
}
