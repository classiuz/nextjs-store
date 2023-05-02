import Games from '@/types/games'

interface Props extends Pick<Games, 'price' | 'offer'> {
  showDate?: boolean
  showPercentage?: boolean
}

export default function Price({ price, offer, showDate = false, showPercentage = false }: Props) {
  const [priceNum, priceDec] = price.toString().split('.')
  if (price === 0) return <p className="text-green-300">Juego gratuito!</p>

  if (offer.available === false) {
    return (
      <div className="flex gap-2 text-left">
        <p className="text-green-300">
          ${priceNum}
          <sup>{priceDec}</sup>
        </p>
      </div>
    )
  }

  const calculatePercentage = price - (price * offer.percentage) / 100
  const offerPrice = calculatePercentage.toFixed(2)
  const [offerNum, offerDec] = offerPrice.toString().split('.')
  return (
    <div className="flex flex-col gap-2 text-left">
      <div className="flex items-center gap-2">
        {showPercentage ? (
          <p className="rounded-md bg-red-500 px-2 py-1 text-xs text-white">-{offer.percentage}%</p>
        ) : (
          false
        )}
        <p className="text-red-400 line-through">
          ${priceNum}
          <sup>{priceDec}</sup>
        </p>
        {calculatePercentage === 0 ? (
          <p className="text-green-300">Juego gratuito!</p>
        ) : (
          <p className="text-green-300">
            ${offerNum}
            <sup>{offerDec}</sup>
          </p>
        )}
      </div>
      {showDate ? <p className="text-sm">La oferta finaliza el {offer.date}</p> : false}
    </div>
  )
}
