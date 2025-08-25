import '../src/global.scss'

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'Sean Kim | Portfolio',
  description: "Sean Kim's portfolio",
  openGraph: {
    title: 'Sean Kim | Portfolio',
    description: "Sean Kim's portfolio",
    type: 'website',
    url: 'https://yourdomain.com/',
    images: ['/images/sk-logo.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sean Kim | Portfolio',
    description: "Sean Kim's portfolio",
    images: ['/images/sk-logo.ico'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 