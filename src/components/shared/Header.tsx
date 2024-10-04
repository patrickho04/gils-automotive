"use client"

import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-[#00008a] py-4">
        <div className="container flex justify-between text-white mx-auto items-center">
            <div>
                <Link href="/" className="font-bold text-2xl">{"Gil's Automotive"}</Link>
            </div>

            <div className="flex gap-3">
                <Link href="/services" className="px-3 py-1 hover:bg-red-600 hover:scale-105 rounded-md duration-100 font-semibold">
                    Services
                </Link>

                <Link href="/reviews" className="px-3 py-1 hover:bg-red-600 hover:scale-105 rounded-md duration-100 font-semibold">
                    Reviews
                </Link>

                <Link href="/contact" className="px-3 py-1 hover:bg-red-600 hover:scale-105 rounded-md duration-100 font-semibold">
                    Contact
                </Link>
            </div>
        </div>
        
    </header>
  )
}

export default Header