import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/:lang?" element={<HomePage />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
