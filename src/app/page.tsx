import Card from '@/components/Card'
import getAllGames from '@/games/getAllGames'

export default function Home() {
  const games = getAllGames()
  return (
    <main className="mx-auto grid w-10/12 grid-cols-5 justify-center gap-y-6">
      {games.map(({ name, picture, tags, price, offer, description }) => {
        return (
          <Card
            key={name}
            name={name}
            picture={picture}
            tags={tags}
            price={price}
            offer={offer}
            description={description}
          />
        )
      })}
    </main>
  )
}
