import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Outer from './Outer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Outer />
  </StrictMode>,
)
