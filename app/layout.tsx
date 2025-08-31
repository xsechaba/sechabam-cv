import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sechaba Mohlabeng - Cloud Data Engineer',
  description: 'Professional CV and portfolio of Sechaba Itumeleng Mohlabeng, a Cloud Data Engineer with expertise in AWS, ETL pipelines, and data analytics.',
  keywords: 'Cloud Data Engineer, AWS, ETL, Data Analytics, Python, SQL, Johannesburg',
  authors: [{ name: 'Sechaba Mohlabeng' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
