import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Store - By ClaSSius',
  description: 'Nextjs store made by ClaSSius',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
