import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 183px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }

    &:first-child {
      margin-right: 20px;
    }
  }
`
