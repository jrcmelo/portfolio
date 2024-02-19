import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Excelentes capacidades de análise, escrita, raciocínio relacionados a área
      da T.I. Dinâmico, ativo, determinado e com facilidade de adaptação em
      novos ambientes. Com boa fluência verbal e disposto a novos desafios.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=jrcmelo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jrcmelo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
