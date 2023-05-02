import Games from '@/types/games'

type Props = Pick<Games, 'tags'>

export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-1 text-xs">
      {tags
        .sort((a, b) => a.length - b.length)
        .map((tag) => {
          return (
            <span key={tag} className="rounded-sm bg-blue-400 px-2 text-black hover:cursor-pointer">
              {tag}
            </span>
          )
        })}
    </div>
  )
}
