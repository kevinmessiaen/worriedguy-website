import { twMerge } from 'tailwind-merge'

function IconButton({className, children, ...props}) {
    return (
     <a className={twMerge("block py-2 px-3 text-black rounded hover:bg-granite-green-300", className)} {...props}>
       {children}
     </a>
    )
}

export default IconButton;