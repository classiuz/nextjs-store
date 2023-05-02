// type RatingCategorie = 'Everyone' | 'Everyone 10+' | 'Teen' | 'Mature 17+' | 'Adults Only 18+' | 'Reting Pending' | 'Reting Pending - Likely Mature 17+'
// type GaleryType = 'video' | 'image'

export default interface Games {
  name: string
  picture: string
  logo: string
  banner: string
  tags: string[]
  price: number
  offer: {
    available: boolean
    percentage: number
    date: string
  }
  releaseDate: string
  developer: string[]
  publisher: string[]
  platforms: string[]
  reviews: string
  requirements: {
    minimum: string[]
    recommended: string[]
  }
  description: string
  lenguages: string[]
  rating: {
    categorie: string
    content: string
    image: string
  }
  galery: {
    type: string
    thumbnail: string
    src: string
  }[]
}
