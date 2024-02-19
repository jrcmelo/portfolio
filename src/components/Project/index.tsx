import React from 'react'
import PropTypes from 'prop-types'
import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkButton } from './styles'

interface ProjectProps {
  title: string
  description: string
  link: string
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => (
  <Card>
    <Title>{title}</Title>
    <Paragrafo tipo="secundario">{description}</Paragrafo>
    <LinkButton href={link} target="_blank">
      Visualizar
    </LinkButton>
  </Card>
)

export default Project
