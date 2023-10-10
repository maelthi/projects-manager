import { TableBody } from "../TableBody/TableBody"
import { TableHeader } from "../TableHeader/TableHeader"

import { memo } from "react"

type Table = {
  headers: string[]
  rows: Row[]
}

const Table = ({ headers, rows }: Table) => {
  return (
    <section className="flex flex-col">
      <table className="min-w-full">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </section>
  )
}

export default memo(Table)
