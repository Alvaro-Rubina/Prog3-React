import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrimerComponente } from './components/PrimerComponente/PrimerComponente'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimerComponente text={"Texto desde propiedades" } color = "red"/>    
    <PrimerComponente text={"Texto desde propiedades 2" } color = "blue"/>    
  </StrictMode>,
)
