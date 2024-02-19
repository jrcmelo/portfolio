import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, TemaButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>John Robert</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        jrcmelo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={11}>
        Desenvolvedor full stack
      </Descricao>
      <TemaButton onClick={props.changeTheme}>Trocar tema</TemaButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
