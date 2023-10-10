import { useState } from "react"
import { Modal } from "../../components/Modal/Modal"
import { Button } from "../../components/Button/Button"
import { usePostNewProject } from "../../hooks/usePostProject"
import { useGetProjects } from "../../hooks/useGetProjects"

type AddProjectContainer = {
  onSetShowAddProjectModal: (bool: boolean) => void
}

export const AddProjectContainer = ({
  onSetShowAddProjectModal,
}: AddProjectContainer) => {
  const [project, setProject] = useState<ProjectToPost>({
    nom: "",
    description: "",
    etape: "",
  })

  const { refetch: refetchProjects } = useGetProjects()

  const { mutate } = usePostNewProject()

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, etape: e.target.value as ETAPE })
  }

  const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    mutate(project, {
      onSuccess: () => {
        onSetShowAddProjectModal(false)
        refetchProjects()
      },
    })
  }

  const isEtapeNotChecked = project.etape === ""

  return (
    <Modal title="Add a new project" data-testid="add-projects-modal">
      <form className="mb-3" onSubmit={(e) => handleFormSubmit(e)}>
        <label
          htmlFor="email"
          className="text-sm text-navy-700 dark:text-white font-bold"
        >
          Titre*
        </label>
        <input
          type="text"
          id="title"
          placeholder="Add project title"
          className="my-1.5 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
          onChange={(e) => setProject({ ...project, nom: e.target.value })}
          required
        />

        <label
          htmlFor="email"
          className="text-sm text-navy-700 dark:text-white font-bold"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          placeholder="Add project description"
          className="my-1.5 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />
        <fieldset>
          <legend className="mb-1.5 text-sm text-navy-700 dark:text-white font-bold">
            Etape
          </legend>
          <label className="inline-flex items-center mr-3">
            <input
              type="radio"
              className="form-checkbox h-5 w-5 text-gray-600"
              name="etape"
              value={ETAPE.EN_ATTENTE}
              onChange={(e) => handleCheckboxChange(e)}
              required={isEtapeNotChecked}
              id={ETAPE.EN_ATTENTE}
            />
            <span className="ml-1 text-gray-700">En attente</span>
          </label>
          <label className="inline-flex items-center mr-3">
            <input
              type="radio"
              className="form-checkbox h-5 w-5 text-gray-600"
              name="etape"
              value={ETAPE.EN_COURS}
              onChange={(e) => handleCheckboxChange(e)}
              required={isEtapeNotChecked}
              id={ETAPE.EN_COURS}
            />
            <span className="ml-1 text-gray-700">En cours</span>
          </label>
          <label className="inline-flex items-center mr-3">
            <input
              type="radio"
              name="etape"
              value={ETAPE.TERMINE}
              id={ETAPE.TERMINE}
              className="form-checkbox h-5 w-5 text-gray-600"
              onChange={(e) => handleCheckboxChange(e)}
              required={isEtapeNotChecked}
            />
            <span className="ml-1 text-gray-700">Terminé</span>
          </label>
        </fieldset>
        <div className="flex justify-end mt-3">
          <Button
            className="bg-red-500"
            onClick={() => onSetShowAddProjectModal(false)}
            label="Cancel"
          />
          <Button
            className="bg-green-500"
            buttonType="submit"
            label="validate"
          />
        </div>
      </form>
    </Modal>
  )
}
