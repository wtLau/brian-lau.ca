import { Card as MaterialCard, Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'

const PREFIX = 'Card'

const classes = {
  card: `${PREFIX}-card`,
}

const StyledMaterialCard = styled(MaterialCard)(({ theme }) => ({
  [`&.${classes.card}`]: {
    borderRadius: '32px',
    background: theme.palette.background.paper,
    boxShadow: '10px 10px 10px rgba(33, 36, 41, 0.25)',
    height: (props: Props) => props.height,
    width: (props: Props) => props.width,
    margin: (props: Props) => props.margin,
    padding: (props: Props) =>
      props.padding ? props.padding : theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('xl')]: {
      margin: (props: Props) => props.mobileMargin,
    },
  },
}))

type Props = {
  borderRadius?: string
  raised?: boolean
  background?: string
  height?: string
  width?: string
  margin?: string
  padding?: string
  mobileMargin?: string
  children?: React.ReactNode
  className?: any
  props?: any
}

const Card = ({ props, children }: Props) => (
  <StyledMaterialCard className={classes.card} {...props}>
    {children}
  </StyledMaterialCard>
)

export default Card
