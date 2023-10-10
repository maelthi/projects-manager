import { describe, expect, it, vi } from "vitest"
import { render } from "../../helpers/helpers"
import { ProjectsListActionsButtonsContainer } from "./ProjectsListActionsButtonsContainer"
import { fireEvent } from "@testing-library/dom"

describe("ProjectsListActionsButtonsContainer", () => {
  it("should call onHandleAddProjectButtonClick when clicking on button", () => {
    const props = {
      onHandleAddProjectButtonClick: vi.fn(),
    }
    const { getByTestId } = render(
      <ProjectsListActionsButtonsContainer {...props} />
    )

    fireEvent.click(getByTestId("add-project-button"))
    expect(props.onHandleAddProjectButtonClick).toHaveBeenCalledTimes(1)
  })
})
