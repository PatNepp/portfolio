"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const linkInfo = [
    {text: 'Home', href: '/'},
    {text: 'Case Studies', href: '/projects'},
    {text: 'Contact', href: '/contact'},
]

const Navbar = () => {
    const pathname = usePathname()
    console.log('pathname:', pathname)

  return (
    <nav className="flex justify-between h-12 p-10 items-center">
        <div className="p-5 bg-gradient-to-r from-primary to-text-light rounded-full">
            <h1 className="text-lg text-white">PN</h1>
        </div>
        <div className="flex">
            <ul className="flex gap-6">
            {
                linkInfo.map((info) => (
                    <li className={`${pathname === info.href ? 'text-primary' : 'text-text-primary'} text-xs font-bold uppercase`} key={info.text}>
                        <Link href={info.href}>
                            {info.text}
                        </Link>
                    </li>
                ))
            }
            </ul>
            <button className="flex ml-6">
                <Image src='/assets/download.png' width={12} height={12} alt='download'/>
                <p className="text-black text-xs font-bold uppercase ml-1">Resume</p>
            </button>
        </div>
    </nav>
  )
}

export default Navbar