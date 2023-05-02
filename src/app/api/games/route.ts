import getAllGames from '@/games/getAllGames'
import { NextResponse } from 'next/server'

export function GET() {
  const games = getAllGames()
  return NextResponse.json(games)
}
