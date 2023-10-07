import { useQuery } from "@tanstack/react-query"
import { API_BASE_URL } from "../constants/utils"
import { mapProjects } from "../mappers/mappers"

export const useGetProjects = () => {
  const { isLoading, data, isError, refetch } = useQuery("projects", () =>
    fetch(`${API_BASE_URL}projects`).then((res) => res.json())
  )

  return { isLoading, data: mapProjects(data?.data), isError, refetch }
}
