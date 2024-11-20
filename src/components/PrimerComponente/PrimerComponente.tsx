import { FC } from "react"

interface IPropsPrimerComponente {
    text:string
    color:string
}

export const PrimerComponente: FC<IPropsPrimerComponente> = ({text, color}) => {
  return (
    <div style={{color: `${color}`}}><p>{text}</p></div>
  )
}
