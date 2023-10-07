import { describe, it, expect, beforeEach } from "vitest"

import { cleanup, render } from "@testing-library/react"

import "./TableBody"
import { TableBody } from "./TableBody"

describe("TableBody component", () => {
  beforeEach(() => {
    cleanup()
  })

  it("should display - when content is undefined", () => {
    const props = [
      {
        id: 1,
        cols: [
          {
            id: 1,
            content: null,
          },
        ],
      },
    ]
    const { getByTestId } = render(<TableBody rows={props} />)
    expect(getByTestId("row-col-1").textContent).toEqual("-")
  })

  it("should not display - when content is defined", () => {
    const props = [
      {
        id: 1,
        cols: [
          {
            id: 1,
            content: "titre",
          },
        ],
      },
    ]
    const { getByTestId } = render(<TableBody rows={props} />)
    expect(getByTestId("row-col-1").textContent).toEqual("titre")
  })
})
