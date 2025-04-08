// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Меню на неделю',
  description: 'Здоровое питание при АИТ, анемии и повышенном холестерине',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
