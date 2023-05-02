'use client'
import { useEffect, useRef, useState } from 'react'
import formatSeconds from '@/utils/formatSeconds'

import { MdFullscreen, MdFullscreenExit, MdPause, MdPlayArrow, MdVolumeOff, MdVolumeUp } from 'react-icons/md'

interface Props {
  src: string
  poster: string
  title: string
  className?: string
  showControls?: boolean
}

export default function Video({ src, poster, title, className, showControls = false }: Props) {
  const video = useRef<HTMLVideoElement>(null)

  const [pause, setPause] = useState(true)
  const [mute, setMute] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)

  const [currentTime, setCurrentTime] = useState('00:00')
  const [durationTime, setDurationTime] = useState('00:00')
  const [volume, setVolume] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('running...')
  //     setCurrentTime(formatSeconds(video.current?.current?.currentTime))
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [currentTime])

  const handlePause = () => {
    if (video.current?.paused || video.current?.ended) {
      video.current?.play().catch((error) => {
        console.log(`An error Occurred: ${error}`)
      })
      return setPause(false)
    }
    video.current?.pause()
    return setPause(true)
  }

  const handleMute = () => {
    if (video.current?.muted) {
      video.current.muted = false
      return setMute(false)
    }
    video.current!.muted = true
    return setMute(true)
  }

  const handleFullScreen = () => {
    video.current?.requestFullscreen().catch((error) => {
      console.log(`An error Occurred: ${error}`)
    })
    setFullScreen(true)
  }

  return (
    <>
      <video ref={video} poster={poster} src={src} title={title} className={className} />
      <div className={`absolute bottom-2 left-2 flex flex-col ${showControls ? 'block' : 'hidden'}`}>
        <div>
          <div className="progress">
            <progress id="progress" value="0" data-min="0">
              <span id="progress-bar" />
            </progress>
          </div>
        </div>
        <div className="flex justify-between text-2xl">
          <div className="flex gap-1">
            <span>
              <button onClick={handlePause}>{pause ? <MdPlayArrow /> : <MdPause />}</button>
            </span>
            <div className="flex">
              <button onMouseEnter={() => setVolume(true)} onMouseLeave={() => setVolume(false)} onClick={handleMute}>
                {mute ? <MdVolumeOff /> : <MdVolumeUp />}
              </button>
              <div className={`block text-sm `}>
                <button id="volinc" data-state="volup">
                  Vol+
                </button>
                <button id="voldec" data-state="voldown">
                  Vol-
                </button>
              </div>
            </div>
            <div className="flex gap-[2px] text-sm text-neutral-400">
              <span>{currentTime}</span>
              <span>/</span>
              <span>{durationTime}</span>
            </div>
          </div>
          <button onClick={handleFullScreen}>{fullScreen ? <MdFullscreenExit /> : <MdFullscreen />}</button>
        </div>
      </div>
    </>
  )
}
