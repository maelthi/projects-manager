export const ProjectDetailsContainer = ({
  description,
  commentaire,
  etape,
}: APIProject) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-1xl py-1 w-2/3">{description}</p>
        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-base font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {etape}
        </span>
      </div>
      <h3 className="mt-10 text-xl font-semibold">Commentaires</h3>
      <ul>
        <li>{commentaire}</li>
      </ul>
    </>
  )
}
