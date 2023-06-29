import Image from "next/image"
import Logo from "../../../../public/Logo.svg"
import { navItems } from "@/constants/navItems"
import Link from "next/link"

function Mobile({ setShowMobileMenu }) {
  return (
    <div className="fixed inset-0 h-full w-full bg-header_bg p-5 lg:hidden">
      <Image src={Logo} alt="Next Cent" className="pt-2" />
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="absolute top-5 right-5 w-6"
          onClick={() => setShowMobileMenu(false)}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </>

      <div className="flex items-center justify-center flex-col gap-10 h-full">
        {navItems.map((item) => (
          <Link
            href={`/#${item}`}
            key={item}
            className=" text-gray-900 capitalize font-semibold text-xl tracking-wide "
            onClick={() => setShowMobileMenu(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Mobile
