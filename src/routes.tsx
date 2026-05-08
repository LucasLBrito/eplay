import { Routes, Route } from 'react-router-dom'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}

export default Rotas
