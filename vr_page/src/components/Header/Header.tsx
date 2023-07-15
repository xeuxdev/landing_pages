"use client"
import React, { useState } from "react"
import Desktop from "./Desktop"
import Blurred from "../Blurred"
import Mobile from "./Mobile/Mobile"
import HamburgerIcon from "./HamburgerIcon"

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="relative w-full">
      <nav className="container flex items-center justify-between w-full px-5 py-5 overflow-x-hidden">
        {/* logo */}

        <>
          <p className="text-2xl text-white font-fell">Light</p>
        </>

        {/* desktop links */}

        <Desktop />
        <Blurred classNames="absolute -top-20 lg:-top-64 lg:left-5" />

        <div onClick={() => setShowMobileMenu(true)} className="lg:hidden">
          <HamburgerIcon />
        </div>

        {showMobileMenu && <Mobile setShowMobileMenu={setShowMobileMenu} />}
      </nav>
    </header>
  )
}

export default Header
