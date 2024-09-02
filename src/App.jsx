import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import styled from 'styled-components'
import Rodape from './components/Rodape'
import Sobre from './pages/Sobre'
import Comps from './pages/Comps'
import Guias from './pages/Guias'

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/comps" element={<Comps />} />
          <Route path='/guias' element={<Guias />} />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
