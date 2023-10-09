import { it, describe, vi, expect } from "vitest"
import { render } from "../../helpers/helpers"
import { Projects } from "./Projects"
import * as React from "react"

describe("Projects page", () => {
  it("should show AddProjectContainer component when showAddProjectModal is true", () => {
    const setState = vi.fn()
    const useStateSpy = vi.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [true, setState])

    const onClickFunction = vi.fn()
    const { getByTestId } = render(<Projects />)
    expect(getByTestId("add-projects-modal")).toBeInTheDocument()
    expect(onClickFunction).toHaveBeenCalledOnce()
  })

  it("should not show AddProjectContainer component when showAddProjectModal is false", () => {})
})
