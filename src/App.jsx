import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import styled from 'styled-components'
import Rodape from './components/Rodape'
import Sobre from './pages/Sobre'
import Comps from './pages/Comps'
import Guias from './pages/Guias'
import Login from './pages/Login'
import EnviarComps from './pages/EnviarComps'

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
          <Route path= '/login' element={<Login />}/>
          <Route path= '/enviarcomps' element={<EnviarComps />}/>
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
