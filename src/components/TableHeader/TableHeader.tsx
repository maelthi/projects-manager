type TableHeader = {
  headers: string[]
}

export const TableHeader = ({ headers }: TableHeader) => {
  return (
    <thead className="bg-white border-b">
      <tr>
        {headers?.map((header) => {
          return (
            <th
              scope="col"
              key={header}
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {header}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
