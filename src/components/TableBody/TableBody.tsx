type TableBody = {
  rows: Row[]
}

export const TableBody = ({ rows }: TableBody) => {
  return rows?.map(({ id: rowId, cols }) => (
    <tbody>
      <tr key={`row-${rowId}`} className="bg-gray-100 border-b">
        {cols.map(({ id: colId, content }) => (
          <td
            key={`row-${rowId}-col-${colId}`}
            data-testid={`row-col-${colId}`}
            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            {content || "-"}
          </td>
        ))}
      </tr>
    </tbody>
  ))
}
