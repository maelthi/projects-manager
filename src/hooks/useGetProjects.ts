import { useQuery } from "@tanstack/react-query"
import { API_BASE_URL } from "../constants/utils"
import { mapProjects } from "../mappers/projectsMappers/mappers"

export const useGetProjectById = (projectId: string | undefined) => {
  const {
    isLoading,
    data,
    isError,
  }: { isLoading: boolean; data: APIProject | undefined; isError: boolean } =
    useQuery(
      ["project"],
      () =>
        fetch(`${API_BASE_URL}projects/${projectId}`).then((res) => res.json()),
      { refetchOnWindowFocus: false }
    )

  return { isLoading, data, isError }
}

export const useGetProjectsByEtape = (etape: string, query: string = "") => {
  let queryString = ""

  if (etape !== "" && query === "") {
    queryString = `?etape=${etape}`
  }

  if (query !== "") {
    queryString = `?q=${query}`
  }

  const { isLoading, data, isError, refetch } = useQuery(
    ["projects", etape, query],
    () =>
      fetch(`${API_BASE_URL}projects${queryString}`).then((res) => res.json()),
    { refetchOnWindowFocus: false }
  )

  return { isLoading, data: mapProjects(data), isError, refetch }
}
