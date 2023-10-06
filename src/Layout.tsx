import Header from "./containers/Header/header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
