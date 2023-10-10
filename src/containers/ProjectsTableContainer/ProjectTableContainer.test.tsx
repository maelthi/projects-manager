import { render } from "../../helpers/helpers"
import { ProjectsTableContainer } from "./ProjectsTableContainer"

import * as useDeleteProject from "../../hooks/useDeleteProject"
import * as useGetProjects from "../../hooks/useGetProjects"

import { describe, it, expect, vi, beforeEach } from "vitest"
import { cleanup, fireEvent } from "@testing-library/react"
import { ETAPE } from "../../constants/project"

const navigate = vi.fn()

describe("ProjectTableContainer", () => {
  beforeEach(() => {
    cleanup()
  })

  vi.spyOn(useGetProjects, "useGetProjectsByEtape").mockReturnValue({
    data: [
      {
        id: 2,
        nom: " projet 2",
        description: "description 2",
        etape: ETAPE.EN_COURS,
      },
    ],
    isLoading: false,
    isError: false,
    refetch: vi.fn(),
  })

  vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual<any>("react-router-dom")),
    useNavigate: () => navigate,
  }))

  it("should render component", () => {
    render(<ProjectsTableContainer />)
  })

  it("should call mutation when remove project button is clicked", () => {
    const mockSpy = vi.spyOn(useDeleteProject, "useDeleteProjectById")

    const { getByTestId } = render(<ProjectsTableContainer />)

    fireEvent.click(getByTestId("remove-project-button"))

    expect(mockSpy).toHaveBeenCalled()
  })

  it("should call navigate function when user clicks on navigation to project details button", () => {
    const { getByTestId } = render(<ProjectsTableContainer />)

    fireEvent.click(getByTestId("navigate-button"))
    expect(navigate).toHaveBeenCalledWith("/projects/2")
  })
})
