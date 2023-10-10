type Button = {
  className?: string
  label: string
  onClick?: () => void
  buttonType?: "button" | "submit"
  dataTestId?: string
}

export const Button = ({
  className,
  label,
  onClick,
  buttonType = "button",
  dataTestId,
}: Button) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      data-testid={dataTestId}
      className={`middle none center mr-4 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] ${
        className ? className : ""
      }`}
    >
      {label}
    </button>
  )
}
