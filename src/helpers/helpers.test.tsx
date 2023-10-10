import { describe, it, expect } from "vitest"
import { getEtapeColorClass } from "./helpers"
import { ETAPE } from "../constants/project"

describe("getEtapeColorClass function", () => {
  it("should return class coresponding to etape", () => {
    expect(getEtapeColorClass(ETAPE.EN_ATTENTE)).toEqual(
      "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
    )

    expect(getEtapeColorClass(ETAPE.EN_COURS)).toEqual(
      "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10"
    )

    expect(getEtapeColorClass(ETAPE.TERMINE)).toEqual(
      "bg-grey-50 text-gray-600 ring-1 ring-inset ring-gray-500/10"
    )
  })
})
