import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"

import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppProduct/AppProduct"
import { MiPrimerComponente } from "./components/MiPrimerComponente/PrimerComponente"

export const App = () => {

  const[enableCounter, setEnableCounter] = useState(false)

  return (
    <div style={{display: 'flex', flexDirection:'column', gap: '2vh' }}>
      {/* <MiPrimerComponent text={"Texto desde propiedades"} color='red' fontSize={5}/>
      <ComponentCounter/>
      <ComponentUseEffect/> */}
      {/* <FormComponent/> */}
      <AppProduct/>
    </div>
  )
}