import getGame from '@/games/getGame'
import { NextResponse } from 'next/server'

interface Props {
  params: { slug: string }
}

export function GET(request: Request, { params }: Props) {
  const game = getGame(params.slug)
  return NextResponse.json(game)
}
