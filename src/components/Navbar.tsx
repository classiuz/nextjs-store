import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="flex justify-around py-4 text-xl pb-4">
      <p className="tracking-wider text-blue-400">
        <Link href="/">CLASSTORE</Link>
      </p>
      <ul className="flex gap-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </header>
  )
}
