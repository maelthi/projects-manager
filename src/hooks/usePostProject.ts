import { useMutation } from "@tanstack/react-query"
import { API_BASE_URL, METHODS } from "../constants/utils"

export const usePostNewProject = () => {
  const mutation = useMutation({
    mutationFn: (body: ProjectToPost) =>
      fetch(`${API_BASE_URL}projects`, {
        body: JSON.stringify(body),
        method: METHODS.POST,
        headers: {
          "Content-Type": "application/json",
        },
      }),
  })

  return mutation
}
