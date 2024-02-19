import Project from '../../components/Project'
import Title from '../../components/Title'

import { List } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <Project
          title="Clone Disneyplus"
          description=""
          link="https://clone-disneyplus-rho-seven.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Espolio do aventureiro"
          description=""
          link="https://espolio-do-aventureiro.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Board Games Shop"
          description=""
          link="https://site-board-games-ivlbfpaee-jrcmelo.vercel.app/"
        />
      </li>
    </List>
  </section>
)

export default Projects
