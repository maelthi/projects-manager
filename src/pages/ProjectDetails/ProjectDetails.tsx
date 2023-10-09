import { useNavigate, useParams } from "react-router-dom"
import { Heading } from "../../components/Heading/Heading"
import { ProjectDetailsContainer } from "../../containers/ProjectDetailsContainer/ProjectDetailsContainer"
import { useGetProjectById } from "../../hooks/useGetProjects"
import back from "../../assets/back.svg"

export const ProjectDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { data } = useGetProjectById(params?.projectId)

  const handleBackButtonClick = () => navigate(-1)

  if (!data) return null

  return (
    <section>
      <button
        onClick={() => handleBackButtonClick()}
        aria-label="Go back to the list of projects"
        className="flex items-center"
      >
        <img className="my-4 mr-2" src={back} alt="Back button" />
        Back
      </button>
      <Heading className="font-semibold" label={`Project ${data?.nom}`} />
      <ProjectDetailsContainer {...data} />
    </section>
  )
}
