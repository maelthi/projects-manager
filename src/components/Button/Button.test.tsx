import { it, describe, vi, expect } from "vitest"
import { render } from "../../helpers/helpers"
import { Button } from "./Button"
import { fireEvent } from "@testing-library/react"

describe("Button component", () => {
  it("should call onClick function when user clicks on button", () => {
    const onClickFunction = vi.fn()
    const { getByTestId } = render(
      <Button
        label="button"
        dataTestId="test-button"
        onClick={onClickFunction}
      />
    )
    fireEvent.click(getByTestId("test-button"))
    expect(onClickFunction).toHaveBeenCalledOnce()
  })
})
