import { describe, expect, it, vi, beforeEach } from "vitest"
import { render } from "../../helpers/helpers"
import { Filter } from "./Filter"
import { fireEvent, screen } from "@testing-library/dom"
import { ETAPE } from "../../constants/project"
import { setStoreFilter } from "../../redux/slices/filterSlice"
import { cleanup } from "@testing-library/react"
import * as reactRedux from "../../redux/hooks/useRedux"

describe("onChange events", () => {
  beforeEach(() => {
    cleanup()
    vi.spyOn(reactRedux, "useAppDispatch").mockReturnValue(dispatchMock)
  })
  const dispatchMock = vi.fn()

  it("should test onChange behavior", () => {
    render(<Filter />)

    const select: HTMLSelectElement = screen.getByRole("combobox")

    fireEvent.change(select, { target: { value: ETAPE.EN_COURS } })
    expect(select.value).toBe(ETAPE.EN_COURS)

    fireEvent.change(select, { target: { value: ETAPE.EN_ATTENTE } })
    expect(select.value).toBe(ETAPE.EN_ATTENTE)

    fireEvent.change(select, { target: { value: ETAPE.TERMINE } })
    expect(select.value).toBe(ETAPE.TERMINE)
  })

  it("should dispatch filter action with selected etape when changing option", () => {
    render(<Filter />)

    const select: HTMLSelectElement = screen.getByRole("combobox")

    fireEvent.change(select, { target: { value: ETAPE.TERMINE } })
    expect(select.value).toBe(ETAPE.TERMINE)

    expect(dispatchMock).toHaveBeenCalledWith(setStoreFilter(ETAPE.TERMINE))

    fireEvent.change(select, { target: { value: ETAPE.EN_COURS } })
    expect(select.value).toBe(ETAPE.EN_COURS)

    expect(dispatchMock).toHaveBeenCalledWith(setStoreFilter(ETAPE.EN_COURS))

    fireEvent.change(select, { target: { value: ETAPE.EN_ATTENTE } })
    expect(select.value).toBe(ETAPE.EN_ATTENTE)

    expect(dispatchMock).toHaveBeenCalledWith(setStoreFilter(ETAPE.EN_ATTENTE))
  })
})
