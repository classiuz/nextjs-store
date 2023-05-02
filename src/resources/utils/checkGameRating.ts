import Games from '../types/games'

type Props = Pick<Games, 'rating'>

const checkGameRating = ({ rating }: Props) => {
  if (rating.categorie === 'Mature 17+') {
    return {
      state: true,
      age: 17,
    }
  }
  if (rating.categorie === 'Adults Only 18+') {
    return {
      state: true,
      age: 18,
    }
  }
  if (rating.categorie === 'Reting Pending - Likely Mature 17+') {
    return {
      state: true,
      age: 17,
    }
  }
  return {
    state: false,
    age: 0,
  }
}

export default checkGameRating
