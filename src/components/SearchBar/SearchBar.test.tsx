import { describe, expect, it, vi, beforeEach } from "vitest"
import { render } from "../../helpers/helpers"
import { fireEvent } from "@testing-library/dom"
import { cleanup } from "@testing-library/react"
import * as reactRedux from "../../redux/hooks/useRedux"
import { setStoreQuery } from "../../redux/slices/filterSlice"
import { SearchBar } from "./SearchBar"

describe("onChange events", () => {
  beforeEach(() => {
    cleanup()
    vi.spyOn(reactRedux, "useAppDispatch").mockReturnValue(dispatchMock)
  })
  const dispatchMock = vi.fn()

  it("should dispatch query action when user type in the searchBar", () => {
    const { getByTestId } = render(<SearchBar />)

    const searchBar = getByTestId("search-bar")
    fireEvent.change(searchBar, { target: { value: "project" } })

    expect(dispatchMock).toHaveBeenCalledWith(setStoreQuery("project"))
  })
})
