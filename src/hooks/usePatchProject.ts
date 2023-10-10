import { useMutation } from "@tanstack/react-query"
import { API_BASE_URL, METHODS } from "../constants/utils"
import { ETAPE } from "../constants/project"

export const usePatchProjectById = (projectId: number) => {
  const mutation = useMutation({
    mutationFn: (etape: { etape: ETAPE }) =>
      fetch(`${API_BASE_URL}projects/${projectId}`, {
        body: JSON.stringify(etape),
        method: METHODS.PATCH,
        headers: {
          "Content-Type": "application/json",
        },
      }),
  })

  return mutation
}
