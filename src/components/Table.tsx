interface tableProps {
  children: JSX.Element | JSX.Element[]
}

export default function Table({ children }: tableProps) {
  return <table className="flex cursor-default flex-col gap-2">{children}</table>
}

interface rowProps {
  left: string
  right: string | React.ReactElement
}

export function Row({ left, right }: rowProps) {
  return (
    <tbody>
      <tr className="flex justify-between gap-2 border-b border-neutral-600 pt-1 pb-3">
        <td className="text-neutral-400">{left}</td>
        <td className="text-right text-white">{right}</td>
      </tr>
    </tbody>
  )
}
