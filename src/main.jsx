import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AssignmentPage from './Pages/assignmentPage/AssignmentPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssignmentPage/>
  </StrictMode>,
)
