import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path="/collection" element={
          <ProtectedRoute><Collection /></ProtectedRoute>
        } />
        <Route path="/favoris" element={
          <ProtectedRoute><Favorites /></ProtectedRoute>
        } />
        <Route path="/panier" element={
          <ProtectedRoute><Cart /></ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
