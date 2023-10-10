import { useState } from "react"
import { ETAPE } from "../../constants/project"
import { useGetProjectsByEtape } from "../../hooks/useGetProjects"
import { useAppDispatch } from "../../redux/hooks/useRedux"
import { setStoreFilter } from "../../redux/slices/filterSlice"

export const Filter = () => {
  const [filter, setFilter] = useState("")
  const dispatch = useAppDispatch()

  useGetProjectsByEtape(filter)

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEtape = e.target.value
    setFilter(selectedEtape)
    dispatch(setStoreFilter(selectedEtape))
  }

  return (
    <select name="etapes" id="etapes" onChange={handleFilterChange}>
      <option value="">Choose an etape</option>
      <option value={ETAPE.EN_ATTENTE}>{ETAPE.EN_ATTENTE}</option>
      <option value={ETAPE.EN_COURS}>{ETAPE.EN_COURS}</option>
      <option value={ETAPE.TERMINE}>{ETAPE.TERMINE}</option>
    </select>
  )
}
