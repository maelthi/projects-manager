type Modal = {
  children: React.ReactNode
  title: string
  dataTestId?: string
}

export const Modal = ({ children, title, dataTestId }: Modal) => {
  return (
    <>
      <div
        data-testid={dataTestId}
        role="dialog"
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div className="flex flex-col  items-center h-[100vh]">
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white ">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white mb-3">
            {title}
          </h4>
          {children}
        </div>
      </div>
    </>
  )
}
