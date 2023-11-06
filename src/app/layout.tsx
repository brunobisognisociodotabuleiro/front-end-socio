import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_br">
      <body className='bg-white dark:bg-black text-black dark:text-white'>
      {children}
      </body> 
    </html>
  )
}
