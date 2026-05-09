import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Header from './components/header'
import Footer from './components/footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
