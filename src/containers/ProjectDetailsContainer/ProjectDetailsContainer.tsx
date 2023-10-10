import { ETAPE } from "../../constants/project"
import { usePatchProjectById } from "../../hooks/usePatchProject"

export const ProjectDetailsContainer = ({
  description,
  commentaire,
  etape,
  id,
}: APIProject) => {
  const { mutate } = usePatchProjectById(id)
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEtape = e.target.value
    mutate({ etape: selectedEtape as ETAPE })
  }

  return (
    <>
      <div className="flex justify-between">
        <p className="text-1xl py-1 w-2/3">{description}</p>
        <select
          className="rounded-md bg-red-50 px-2 py-1 text-base font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
          name="etapes"
          id="etapes"
          onChange={handleFilterChange}
        >
          <option
            selected={etape === ETAPE.EN_ATTENTE}
            value={ETAPE.EN_ATTENTE}
          >
            {ETAPE.EN_ATTENTE}
          </option>
          <option selected={etape === ETAPE.EN_COURS} value={ETAPE.EN_COURS}>
            {ETAPE.EN_COURS}
          </option>
          <option selected={etape === ETAPE.TERMINE} value={ETAPE.TERMINE}>
            {ETAPE.TERMINE}
          </option>
        </select>
      </div>
      <h3 className="mt-10 text-xl font-semibold">Commentaires</h3>
      <ul>
        <li>{commentaire}</li>
      </ul>
    </>
  )
}
