import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import "./globals.css"
import { ConvexClientProvider } from "@/providers/convex-client-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Board-Project",
  description:
    "A collaborative whiteboard application that allows users to draw on a shared canvas in real time.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  )
}