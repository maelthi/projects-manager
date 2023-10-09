type Heading = {
  label: string
}

export const Heading = ({ label }: Heading) => {
  return <h1 className="text-3xl my-4">{label}</h1>
}
