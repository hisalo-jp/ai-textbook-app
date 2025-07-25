import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '生成AIの教科書',
  description: '社会人向けの生成AI学習アプリケーション',
}

/**
 * ルートレイアウトコンポーネント
 * アプリケーション全体の基本構造を定義
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}