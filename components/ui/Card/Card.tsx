import {
  Card as MaterialCard,
  makeStyles,
  Theme,
} from '@material-ui/core'

import React from 'react'

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

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    borderRadius: '32px',
    background: theme.palette.background.paper,
    boxShadow:
      '10px 10px 10px rgba(33, 36, 41, 0.25)',
    height: (props: Props) => props.height,
    width: (props: Props) => props.width,
    margin: (props: Props) => props.margin,
    padding: (props: Props) =>
      props.padding
        ? props.padding
        : theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      margin: (props: Props) =>
        props.mobileMargin,
    },
  },
}))

const Card = ({ props, children }: Props) => {
  const classes = useStyles({
    ...props,
  })
  return (
    <MaterialCard
      className={classes.card}
      {...props}
    >
      {children}
    </MaterialCard>
  )
}


export default Card
