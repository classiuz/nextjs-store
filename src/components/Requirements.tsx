import Games from '@/types/games'

type Props = Pick<Games, 'requirements'>

export default function Requirements({ requirements }: Props) {
  const keys = [
    'Operating System',
    'Processor',
    'Memory',
    'Graphics',
    'DirectX',
    'Network',
    'Storage',
    'Adidicional Notes',
  ]
  const setKey = (item: string, index: number) => {
    if (item === '') {
      return {
        key: `${keys[index]}`,
        item: false,
      }
    }
    return {
      key: `${keys[index]}`,
      item: `${item}`,
    }
  }

  return (
    <div className="flex gap-4 px-6 pb-2 pt-6">
      <ul className="flex w-1/2 flex-col">
        <p className="mb-2 text-lg">Mínimos</p>
        {requirements.minimum.map(setKey).map(({ key, item }) => {
          if (item === false) return false
          return (
            <li key={key} className="mb-2 ml-2">
              <p className="text-neutral-400">{key}</p>
              <span>{item}</span>
            </li>
          )
        })}
      </ul>
      {requirements.recommended.length === 1 ? (
        <ul className="flex w-1/2 flex-col">
          <p className="mb-2 text-lg">Recomendados</p>
          <span className="ml-2 text-neutral-400">No se ha proporcionado información.</span>
        </ul>
      ) : (
        <ul className="flex w-1/2 flex-col">
          <p className="mb-2 text-lg">Recomendados</p>
          {requirements.recommended.map(setKey).map(({ key, item }) => {
            if (item === false) return false
            return (
              <li key={key} className="mb-2 ml-2">
                <p className="text-neutral-400">{key}</p>
                <span>{item}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
