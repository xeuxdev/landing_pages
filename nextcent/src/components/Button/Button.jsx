import styles from "./Button.module.css"

function Button({ content, variant }) {
  return (
    <button className={variant == "filled" ? styles.filled : styles.empty}>
      {content}
    </button>
  )
}

export default Button
