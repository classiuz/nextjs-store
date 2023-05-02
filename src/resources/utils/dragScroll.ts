import { RefObject } from 'react'

const dragScroll = (elementRef: RefObject<HTMLUListElement>) => {
  let mouseDown = false
  let startX: number
  let scrollLeft: number

  const startDragging = (e: MouseEvent) => {
    mouseDown = true
    startX = e.pageX - elementRef.current!.offsetLeft
    scrollLeft = elementRef.current!.scrollLeft
  }

  elementRef.current!.addEventListener('mousemove', (e: MouseEvent) => {
    e.preventDefault()
    if (!mouseDown) return false
    const x = e.pageX - elementRef.current!.offsetLeft
    const scroll = x - startX
    elementRef.current!.scrollLeft = scrollLeft - scroll
  })

  elementRef.current!.addEventListener('mousedown', startDragging)
  elementRef.current!.addEventListener('mouseup', () => (mouseDown = false))
  elementRef.current!.addEventListener('mouseleave', () => (mouseDown = false))
}

export default dragScroll
