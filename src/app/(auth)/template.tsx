'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css";
import { useState } from "react";

const navlinks = [
  { name:"Register", href:"/register"},
  { name:"Login", href:"/login"},
  { name:"Forgot-password", href:"/forgot-password"},
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
      <div>
        <div>
          <input value={input} type="text" onChange={e => setInput(e.target.value)} />
        </div>
        {
          navlinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !=="/");
            return (
              <Link className={isActive? "font-bold mr-4":"text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
            )
          })
        }
        {children}
        <footer style={{background:"ghostwhite", padding:"1rem"}}>
          <p>Footer</p>
        </footer>
      </div>
  )
}
