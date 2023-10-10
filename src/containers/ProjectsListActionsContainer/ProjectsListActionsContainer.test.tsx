import { describe, expect, it, vi } from "vitest"
import { render } from "../../helpers/helpers"
import { ProjectsListActionsContainer } from "./ProjectsListActionsContainer"
import { fireEvent } from "@testing-library/dom"

describe("ProjectsListActionsContainer", () => {
  it("should call onHandleAddProjectButtonClick when clicking on button", () => {
    const props = {
      onHandleAddProjectButtonClick: vi.fn(),
    }
    const { getByTestId } = render(<ProjectsListActionsContainer {...props} />)

    fireEvent.click(getByTestId("add-project-button"))
    expect(props.onHandleAddProjectButtonClick).toHaveBeenCalledTimes(1)
  })
})
