type Heading = {
  label: string
  className?: string
}

export const Heading = ({ label, className }: Heading) => {
  return (
    <h1 className={`text-3xl my-4 ${className ? className : ""}`}>{label}</h1>
  )
}
