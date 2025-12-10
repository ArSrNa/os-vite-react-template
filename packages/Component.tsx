import { PropsWithChildren } from "react";


export default function Component({ children, ...props }: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    return <div>
        <h1>Powered by Ar-Sr-Na</h1>
        <button {...props}>{children}</button>
    </div>
}