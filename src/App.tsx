import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projects from './containers/Projects'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
