import Image from 'next/image'
import LineClamp from './LineClamp'
import Games from '@/types/games'

type Props = Pick<Games, 'rating'>

export default function Rating({ rating }: Props) {
  return (
    <div className="mx-auto flex items-center gap-4 rounded-md border border-neutral-600 py-4 px-6">
      <Image src={rating.image} width={0} height={0} alt={rating.categorie} className='w-16' />
      <div className="flex flex-col gap-1">
        <p className="text-white">{rating.categorie}</p>
        <LineClamp
          text={rating.content}
          limitLenght={70}
          link="#rating"
          className="text-sm text-neutral-400"
        />
      </div>
    </div>
  )
}
