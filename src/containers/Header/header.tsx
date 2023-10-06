import { memo } from "react"

import classNames from "classnames"
import logo from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  const isProjectsPageRoute = (location.pathname as Routes) === "/projects"

  return (
    <>
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center bg-gray-800">
        <a href="/" aria-label="Retourner à la page Home de Projects manager">
          <img className="w-8" src={logo} alt="Projects manager logo" />
        </a>
        <nav className="flex ml-10 flex items-baseline">
          <Link
            to="/projects"
            className={classNames(
              isProjectsPageRoute
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
            aria-current={isProjectsPageRoute ? "page" : undefined}
          >
            Projects
          </Link>
        </nav>
      </header>
    </>
  )
}

export default memo(Header)
