'use client'
import './globals.css'
import { AuthContextProvider } from "../context/AuthContext";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
      </AuthContextProvider>
    </html>
  )
}
