import "../styles/global.css"

export const metadata = {
  title: {
    template:"%s| Next app",
    default:"Next app"
  },
  description: 'Billionaires',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
