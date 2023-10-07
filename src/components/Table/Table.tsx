import { TableBody } from "../TableBody/TableBody"
import { TableHeader } from "../TableHeader/TableHeader"

type Table = {
  headers: string[]
  rows: Row[]
}

export const Table = ({ headers, rows }: Table) => {
  console.log("rows:", rows)
  return (
    <section className="flex flex-col">
      <table className="min-w-full">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </section>
  )
}
