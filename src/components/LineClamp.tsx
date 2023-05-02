interface Props {
  text: string | string[]
  limitLenght: number
  link?: string
  className?: string
}

export default function LineClamp({ text, link, limitLenght, className }: Props) {
  if (Array.isArray(text)) text = text.join(', ')

  return (
    <p className={`${className ? ` ${className}` : ''}`}>
      {text.length > limitLenght ? (
        <>
          {text.slice(0, limitLenght - 1)}
          <a href={link} className="cursor-pointer" title="View All">
            &hellip;
          </a>
        </>
      ) : (
        text
      )}
    </p>
  )
}
