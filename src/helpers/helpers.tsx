import { render as rtlRender } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../redux/store/configureStore"
import { ETAPE } from "../constants/project"

export const queryClient = new QueryClient()

export const render = (ui: React.ReactNode) =>
  rtlRender(
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
      </Provider>
    </BrowserRouter>
  )

export const getEtapeColorClass = (etape: ETAPE): string => {
  if (etape === ETAPE.EN_ATTENTE) {
    return "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
  }
  if (etape === ETAPE.EN_COURS) {
    return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10"
  }

  return "bg-grey-50 text-gray-600 ring-1 ring-inset ring-gray-500/10"
}
