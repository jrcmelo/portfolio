import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur
      obcaecati repellat quia accusantium labore, fugit maxime non numquam quae
      blanditiis accusamus omnis sequi quod qui distinctio rem sed voluptatibus.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=jrcmelo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jrcmelo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
