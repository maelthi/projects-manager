import { render as rtlRender } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"

export const queryClient = new QueryClient()

export const render = (ui: React.ReactNode) =>
  rtlRender(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </BrowserRouter>
  )
