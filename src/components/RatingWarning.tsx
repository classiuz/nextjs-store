'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import Games from '@/types/games'
import checkGameRating from '@/utils/checkGameRating'

type Props = Pick<Games, 'name' | 'logo' | 'rating'>

export default function RatingWarning({ name, logo, rating }: Props) {
  const [status, setStatus] = useState(false)
  const { state, age } = checkGameRating({ rating })

  return state ? (
    <div className="mt-16 flex flex-col items-center gap-6">
      <Image src={logo} alt={`${name} logo`} width={460} height={215} className="rounded-lg shadow-lg" />
      <p className="text-center text-2xl">
        Este juego muestra contenido para mayores de edad.
        <br />
        Es recomendable tener más de {age} años antes de continuar.
      </p>
      <Button
        onClick={() => setStatus(() => !status)}
        text="Entiendo y deseo continuar"
        style="classic"
        className="px-4 py-1"
      />
      <div className="flex flex-col items-center gap-1">
        <Link className="underline-offset-2 hover:underline" href="/">
          Navegar al inicio
        </Link>
        <Link className="underline-offset-2 hover:underline" href="/help/rating-warning">
          ¿Por qué este mensaje?
        </Link>
      </div>
    </div>
  ) : null
}
