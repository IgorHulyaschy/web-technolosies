import Image1 from '../assets/images/1.jpeg'
import Image2 from '../assets/images/2.jpeg'
import Image3 from '../assets/images/3.png'
import Image4 from '../assets/images/4.jpg'
import Image5 from '../assets/images/5.jpg'
import Image6 from '../assets/images/6.jpg'
import { GoodsCard } from './GoodsCard'

const goods = [
  {
    image: Image1,
    price: 12,
    name: 'Alice',
  },
  {
    image: Image2,
    price: 13,
    name: 'Volodia',
  },
  {
    image: Image3,
    price: 14,
    name: 'Jack',
  },
  {
    image: Image4,
    price: 15,
    name: 'Heyboy',
  },
  {
    image: Image5,
    price: 16,
    name: 'Ayayaya',
  },
  {
    image: Image6,
    price: 17,
    name: 'Ihor',
  },
]

export const Gallery = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {goods.map((g) => (
        <GoodsCard name={g.name} price={g.price} image={g.image} key={g.name} />
      ))}
    </div>
  )
}
