import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projects from './containers/Projects'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [UsingDarkMode, setUsingDarkMode] = useState(false)

  function changeTheme() {
    setUsingDarkMode(!UsingDarkMode)
  }

  return (
    <ThemeProvider theme={UsingDarkMode ? temaDark : temaLight}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
