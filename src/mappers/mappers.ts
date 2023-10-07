export const mapProjects = (projects: APIProject[] | undefined) => {
  if (!projects) return []

  return projects?.map(({ id, nom, description }) => {
    return {
      id,
      nom,
      description,
    }
  })
}
