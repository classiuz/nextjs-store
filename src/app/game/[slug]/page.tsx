import Image from 'next/image'
import Price from '@/components/Price'
import Tags from '@/components/Tags'
import Button from '@/components/Button'
import Table, { Row } from '@/components/Table'
import LineClamp from '@/components/LineClamp'
import Rating from '@/components/Rating'
import Requirements from '@/components/Requirements'
import GalerySlider from '@/components/GalerySlider'
import getGame from '@/games/getGame'
import RatingWarning from '@/components/RatingWarning'

import { FaFlag, FaPlus, FaShareAlt, FaShoppingCart } from 'react-icons/fa'

interface Props {
  params: { slug: string }
}

export default function Product({ params }: Props) {
  const game = getGame(params.slug)

  // <RatingWarning name={game.name} logo={game.logo} rating={game.rating} />
  return (
    <main className="mx-auto w-9/12">
      <div className="mb-4 gap-4">
        <p className="mb-4 cursor-default text-3xl font-semibold tracking-wide">{game.name}</p>
        <div className="ml-4 flex gap-4 text-neutral-400">
          <a className="underline-offset-8 hover:underline" href={'#description'}>
            Descripción
          </a>
          <a className="underline-offset-8 hover:underline" href={'#requirements'}>
            Requisitos
          </a>
          <a className="underline-offset-8 hover:underline" href={'#reviews'}>
            Reseñas
          </a>
        </div>
      </div>

      <div className="flex gap-12">
        <article className="flex w-3/4 flex-col gap-4">
          <GalerySlider name={game.name} galery={game.galery} />
          <section id="description">
            <h1 className="mt-4 cursor-default border-l-4 border-blue-400 bg-gradient-to-r from-neutral-900 to-transparent px-4 py-2 text-lg">
              Descripción general e información
            </h1>
            <p className="p-6">{game.description}</p>
            <div id="description-information" className="flex flex-col gap-6 p-5">
              <div className="flex gap-4">
                <div className="h-fit w-1/2 border-l-2 border-neutral-600 px-4">
                  <p className=" text-neutral-400">Desarrollador</p>
                  <span>{game.developer.join(', ')}</span>
                </div>
                <div className="h-fit w-1/2 border-l-2 border-neutral-600 px-4">
                  <p className="text-neutral-400">Plataformas</p>
                  <span>{game.platforms.join(', ')}</span>
                </div>
              </div>
              <div className="border-l-2 border-neutral-600 px-4">
                <p className="text-neutral-400">Lenguages</p>
                <span>{game.lenguages.join(', ')}</span>
              </div>
            </div>
          </section>
          <section id="requirements">
            <h1 className="mt-4 cursor-default border-l-4 border-blue-400 bg-gradient-to-r from-neutral-900 to-transparent px-4 py-2 text-lg">
              Requisitos del sistema
            </h1>
            <Requirements requirements={game.requirements} />
            <p className="pb-1 text-center text-neutral-400">
              Nota: Los requisitos mínimos y recomendados son solamente para la versión de PC.
            </p>
          </section>
          <section id="reviews" className="flex flex-col gap-6 p-5">
            <h1 className="mt-4 cursor-default border-l-4 border-blue-400 bg-gradient-to-r from-neutral-900 to-transparent px-4 py-2 text-lg">
              Reseñas de los usuarios
            </h1>
            <p className="px-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum blanditiis perspiciatis voluptates,
              explicabo quibusdam modi unde pariatur assumenda in sunt. Aut ab libero assumenda mollitia pariatur facere
              nulla soluta dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae optio vero
              suscipit odio placeat repellendus iure veritatis asperiores voluptatibus aperiam? Commodi officiis
              necessitatibus vitae quisquam assumenda porro fuga provident incidunt!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, labore? Dolores accusamus, neque
              mollitia tenetur omnis impedit aperiam, esse dolorem optio delectus et deleniti voluptas non! Ullam
              tempora optio sed.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, labore? Dolores accusamus, neque
              mollitia tenetur omnis impedit aperiam, esse dolorem optio delectus et deleniti voluptas non! Ullam
              tempora optio sed.
            </p>
          </section>
        </article>

        <div className="sticky top-4 flex h-fit w-1/4 flex-col gap-5">
          <Image
            src={game.banner}
            alt={`${game.name} logo`}
            width={616}
            height={353}
            className="rounded-lg shadow-lg"
          />
          <Tags tags={game.tags} />
          <Price price={game.price} offer={game.offer} showDate={true} showPercentage={true} />
          <div className="flex flex-col gap-2">
            <Button
              text="Añadir al carrito"
              style="outline"
              icon={<FaPlus />}
              className="border-blue-400 py-2 text-blue-400"
            />
            <Button
              text={game.price === 0 ? 'Obtener juego' : 'Comprar ahora'}
              style="outline"
              icon={<FaShoppingCart />}
              className="border-blue-400 py-2 text-blue-400"
            />
          </div>
          <Table>
            <Row
              left="Desarrollador"
              right={<LineClamp text={game.developer} limitLenght={20} link="#description-information" />}
            />
            <Row
              left="Editora"
              right={<LineClamp text={game.publisher} limitLenght={20} link="#description-information" />}
            />
            <Row left="Fecha de lanzamiento" right={game.releaseDate} />
            <Row
              left="Plataformas"
              right={<LineClamp text={game.platforms} limitLenght={20} link="#description-information" />}
            />
          </Table>
          <div className="flex gap-2">
            <Button
              text="Compartir"
              style="outline"
              icon={<FaShareAlt />}
              className="w-full py-1 hover:border-blue-400"
            />
            <Button text="Reportar" style="outline" icon={<FaFlag />} className="w-full py-1 hover:border-blue-400" />
          </div>
          <Rating rating={game.rating} />
        </div>
      </div>
    </main>
  )
}
