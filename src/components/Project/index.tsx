import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const Projects = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Projects
