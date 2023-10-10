import { useCallback, useState } from "react"
import { debounce } from "lodash-es"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/useRedux"
import { useGetProjectsByEtape } from "../../hooks/useGetProjects"
import { setStoreQuery } from "../../redux/slices/filterSlice"

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("")
  const { filter, query: storeQuery } = useAppSelector(({ filter }) => filter)

  useGetProjectsByEtape(filter, inputValue)
  const dispatch = useAppDispatch()

  const debounceBooks = useCallback(
    debounce((query) => {
      setInputValue(query)
    }, 350),
    []
  )

  return (
    <input
      data-testid="search-bar"
      onChange={(e) => {
        debounceBooks(e.target.value)
        dispatch(setStoreQuery(e.target.value))
      }}
      className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      type="text"
      placeholder="Search for a project"
      aria-label="Search for a project"
      onBlur={(e) => {
        e.target.blur()
      }}
      autoComplete="off"
      aria-expanded={false}
      role="search"
      value={storeQuery}
    />
  )
}
