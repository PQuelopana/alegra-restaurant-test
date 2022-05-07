import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props}>{ children }</button>
  )
}

Button.defaultProps = {
  type: 'button'
}

export default Button
