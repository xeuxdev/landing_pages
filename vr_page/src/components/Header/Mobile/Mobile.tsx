import Link from "next/link"
import { navlinks } from "@/constants/navItems"

function Mobile({
  setShowMobileMenu,
}: {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="fixed inset-0 z-50 w-full h-full p-5 bg-background lg:hidden">
      <p className="text-2xl text-white font-fell">Light</p>
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="absolute w-6 top-5 right-5"
          onClick={() => setShowMobileMenu(false)}
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff"
          />
        </svg>
      </>
      <div className="flex flex-col items-center justify-center h-full gap-10">
        {navlinks.map((item) => (
          <Link
            href={`${item.href}`}
            key={item.name}
            className="text-xl font-semibold tracking-wide text-gray-200 capitalize "
            onClick={() => setShowMobileMenu(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Mobile
