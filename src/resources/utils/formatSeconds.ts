const formatSeconds = (s: number) => {
  const m = Math.floor(s / 60)
  const first = m >= 10 ? m : '0' + m
  s = Math.floor(s % 60)
  const second = s >= 10 ? s : '0' + s
  return first + ':' + second
}

export default formatSeconds
