import {
  Card as MaterialCard,
  makeStyles,
  Theme,
} from '@material-ui/core'
import PropTypes from 'prop-types'
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

const Card = ({
  props,
  className,
  children,
}: Props) => {
  const classes = useStyles({
    ...props,
    className,
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
Card.propTypes = {
  props: PropTypes.node,
  raised: PropTypes.bool,
  children: PropTypes.node,
}
export default Card
