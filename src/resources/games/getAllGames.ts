import games from './games.json'
import Games from '../types/games'

const getAllGames = (): Games[] => {
  return games
}

export default getAllGames
