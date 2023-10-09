import { useQuery } from "@tanstack/react-query"
import { API_BASE_URL } from "../constants/utils"
import { mapProjects } from "../mappers/projectsMappers/mappers"

export const useGetProjects = () => {
  const { isLoading, data, isError } = useQuery(
    ["projects"],
    () => fetch(`${API_BASE_URL}projects`).then((res) => res.json()),
    { refetchOnWindowFocus: false, staleTime: 50000 }
  )

  return { isLoading, data: mapProjects(data), isError }
}

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
