import { notFound } from 'next/navigation'
import games from './games.json'
import Games from '../types/games'
import regExp from '../utils/regExp'

const getGame = (slug: string): Games => {
    const data = games.find((game) => regExp(game.name) === regExp(slug))
    if (!data) notFound()
    return data
}

export default getGame
