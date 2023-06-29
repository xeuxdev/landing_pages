import { navItems } from "@/constants/navItems"
import Link from "next/link"
import styles from "./Desktop.module.css"

function Desktop() {
  return (
    <div className={styles.wrapper}>
      {navItems.map((item) => (
        <Link
          href={`/#${item}`}
          key={item}
          className={styles.links}
          scroll={false}
        >
          {item}
        </Link>
      ))}
    </div>
  )
}

export default Desktop
