import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sechaba Itumeleng Mohlabeng - CV',
  description: 'Data and Software Engineer CV - Sechaba Itumeleng Mohlabeng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cv-bg min-h-screen">
        {children}
      </body>
    </html>
  )
}
