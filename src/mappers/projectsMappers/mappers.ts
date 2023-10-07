export const mapProjects = (projects: APIProject[] | undefined) => {
  if (!projects) return []

  return projects?.map(({ id, nom, description, etape }) => {
    return {
      id,
      nom,
      description,
      etape,
    }
  })
}
