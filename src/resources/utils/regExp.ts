const regExp = (text: string) => {
  return text
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '-')
    .replaceAll(':', '')
    .replaceAll("'", '')
    .replaceAll(/[._/()]/g, '-')
    .replaceAll('--', '-')
    .replace(/\-$/, '')
    .toLocaleLowerCase()
}

export default regExp
