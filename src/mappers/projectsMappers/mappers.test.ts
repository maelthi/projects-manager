import { describe, it, expect } from "vitest"
import { APIProjectsMock } from "../../__mock__/APIProjects.mock"
import { mapProjects } from "./mappers"
import { ProjectsMock } from "../../__mock__/Projects.mock"

describe("projectsMapper function", () => {
  it("should map projects array into readable format", () => {
    expect(mapProjects(APIProjectsMock)).toEqual(ProjectsMock)
  })

  it("should return empty array when there is no data", () => {
    expect(mapProjects(undefined)).toEqual([])
  })
})
