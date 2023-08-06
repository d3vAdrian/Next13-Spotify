import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    ...props
}, ref)=>{
    return(
        <button className={twMerge(`w-fit rounded-full px-3 py-1 border-transparent bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition  text-black`,className)} disabled={disabled} ref={ref}{...props}>
            {children}
        </button>
    )
})

Button.displayName ="Button"

export default Button