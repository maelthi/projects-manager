import Header from "./containers/Header/Header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
