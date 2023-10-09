type Row = {
  id: string | number
  cols: Column[]
}

type Column = {
  id: number | string
  content: string | null | React.ReactNode
}
