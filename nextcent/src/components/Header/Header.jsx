"use client"
import Image from "next/image"
import React, { useState } from "react"
import Logo from "../../../public/Logo.svg"
import HamburgerIcon from "./HamburgerIcon"
import Desktop from "./Desktop/Desktop"
import Button from "../Button/Button"
import Mobile from "./Mobile/Mobile"

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <header className="h-[5.25rem] bg-header_bg">
      <nav className="container flex items-center justify-between h-full px-5 md:px-0">
        {/* logo */}
        <Image src={Logo} alt="Next Cent" />

        <Desktop />

        <div className="hidden lg:flex items-center gap-[0.875rem]">
          <Button content={"Login"} variant={"empty"} />
          <Button content={"Sign Up"} variant={"filled"} />
        </div>

        {/* hamburger */}
        <div onClick={() => setShowMobileMenu(true)} className="lg:hidden">
          <HamburgerIcon />
        </div>

        {showMobileMenu && <Mobile setShowMobileMenu={setShowMobileMenu} />}
      </nav>
    </header>
  )
}

export default Header
