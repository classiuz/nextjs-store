'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Video from './Video'
import Games from '@/types/games'
import dragScroll from '@/resources/utils/dragScroll'

import { MdNavigateBefore, MdNavigateNext, MdPlayArrow } from 'react-icons/md'

type Props = Pick<Games, 'name' | 'galery'>

export default function ImageSlider({ name, galery }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  const handlePrev = () => {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? galery.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const isLast = currentIndex === galery.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const handleGoTo = (goTo: number) => {
    setCurrentIndex(goTo)
  }

  const handleScrollLeft = () => {
    handlePrev()
    // if (listRef.current?.scrollWidth === 1224) {
    //   return (listRef.current!.scrollLeft += 1224)
    // }
    return (listRef.current!.scrollLeft -= 50)
  }

  const handleScrollRight = () => {
    handleNext()
    // return (listRef.current!.scrollLeft += 1224)
    return (listRef.current!.scrollLeft += 50)
  }

  const handleDragScroll = () => {
    dragScroll(listRef)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative">
        {galery[currentIndex].type === 'video' ? (
          // <Video
          //   showControls
          //   src={galery[currentIndex].src}
          //   title={`${name} video`}
          //   poster={galery[currentIndex].thumbnail}
          //   className="aspect-video rounded-lg"
          // />
          <>
            <video
              src={galery[currentIndex].src}
              title={`${name} video`}
              poster={galery[currentIndex].thumbnail}
              className="aspect-video rounded-lg"
            />
            <span className="invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-neutral-800 text-4xl group-hover:visible">
              <MdPlayArrow />
            </span>
          </>
        ) : (
          <Image
            width={1920}
            height={1080}
            src={galery[currentIndex].src}
            alt={`${name} image`}
            className="aspect-video rounded-lg"
          />
        )}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 transform rounded-full text-3xl hover:bg-neutral-800 hover:bg-opacity-80 group-hover:block"
        >
          <MdNavigateBefore />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 transform rounded-full text-3xl hover:bg-neutral-800 hover:bg-opacity-80 group-hover:block"
        >
          <MdNavigateNext />
        </button>
      </div>
      <div className="mx-auto flex w-10/12 items-center gap-6">
        <button onClick={handleScrollLeft} className="rounded-full text-3xl hover:bg-neutral-800 hover:bg-opacity-80">
          <MdNavigateBefore />
        </button>
        <ul ref={listRef} className="flex gap-2 overflow-hidden" onMouseMove={handleDragScroll}>
          {galery.map((item, itemIndex) => {
            return (
              <li
                key={itemIndex}
                onClick={() => handleGoTo(itemIndex)}
                className={`relative cursor-pointer rounded-sm hover:opacity-100 ${
                  currentIndex === itemIndex ? 'opacity-100' : 'opacity-20'
                }`}
              >
                <Image
                  src={item.type === 'video' ? item.thumbnail : item.src}
                  alt={`${name} image`}
                  width={120}
                  height={67.5}
                  style={{ maxWidth: 'none', width: 'auto', height: 'auto' }}
                />
                {item.type === 'video' ? (
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-neutral-800 text-2xl">
                    <MdPlayArrow />
                  </span>
                ) : (
                  false
                )}
              </li>
            )
          })}
        </ul>
        <button onClick={handleScrollRight} className="rounded-full text-3xl hover:bg-neutral-800 hover:bg-opacity-80">
          <MdNavigateNext />
        </button>
      </div>
    </div>
  )
}
