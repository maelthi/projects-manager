import "./App.css"
import { Home } from "./pages/Home/Home"
import { Layout } from "./Layout"
import { Route, Routes } from "react-router-dom"
import { Projects } from "./pages/Projects/Projets"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<p>Furur composant</p>} />
      </Routes>
    </Layout>
  )
}

export default App
