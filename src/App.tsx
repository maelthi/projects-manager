import "./App.css"
import { Home } from "./pages/Home/Home"
import { Layout } from "./Layout"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<p>Futur composant</p>} />
        <Route path="/projects/:projectId" element={<p>Furur composant</p>} />
      </Routes>
    </Layout>
  )
}

export default App
