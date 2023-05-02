import Link from 'next/link'
import Price from './Price'
import Tags from './Tags'
import Button from './Button'
import regExp from '@/utils/regExp'
import Games from '@/types/games'

type Props = Pick<Games, 'name' | 'picture' | 'tags' | 'price' | 'offer' | 'description'>

export default function Card({ name, picture, tags, price, offer, description }: Props) {
  return (
    <div
      className="h-[408px] w-[294px] rounded-xl duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:transition-all hover:ease-in"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex h-full w-full cursor-default flex-col justify-between rounded-xl bg-black bg-opacity-70 py-6 px-4 opacity-0 hover:opacity-100">
        <p className="text-center text-2xl text-white">{name}</p>
        <div className="flex flex-col gap-4">
          <Tags tags={tags} />
          <Price price={price} offer={offer} showDate={false} />
          <p className="text-sm line-clamp-3">{description.replace(/(\r\n|\n|\r)/gm, " ")}</p>
          <Link className="mx-auto" href={`game/${regExp(name)}`}>
            <Button text="Ver juego" style="classic" />
          </Link>
        </div>
      </div>
    </div>
  )
}
