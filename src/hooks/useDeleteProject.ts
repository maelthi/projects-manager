import { useMutation } from "@tanstack/react-query"
import { API_BASE_URL, METHODS } from "../constants/utils"

export const useDeleteProjectById = () => {
  const mutation = useMutation({
    mutationFn: (projectId: number) =>
      fetch(`${API_BASE_URL}projects/${projectId}`, { method: METHODS.DELETE }),
  })

  return mutation
}
