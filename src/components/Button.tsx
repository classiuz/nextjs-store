interface Props {
  text: string
  style: 'classic' | 'outline'
  icon?: React.ReactElement
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ text, style, icon, className }: Props) {
  return (
    <button
      className={`${
        style === 'outline'
          ? 'rounded-md border hover:bg-blue-400 hover:text-black hover:shadow-lg'
          : 'rounded-md bg-blue-400 px-4 text-black shadow-lg hover:bg-blue-600'
      }${className ? ` ${className}` : ''}`}
    >
      {icon ? (
        <p className="flex items-center justify-center gap-1">
          {icon} <span>{text}</span>
        </p>
      ) : (
        <span>{text}</span>
      )}
    </button>
  )
}
