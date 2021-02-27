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
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    borderRadius: (props: Props) =>
      props.borderRadius
        ? props.borderRadius
        : '32px',
    boxShadow:
      '10px 10px 10px rgba(33, 36, 41, 0.25)',
    background: (props: Props) =>
      props.background
        ? props.background
        : theme.palette.grey[300],
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

const Card = ({ ...props }: Props) => {
  const classes = useStyles(props)
  return (
    <MaterialCard
      raised={props.raised ? props.raised : false}
      className={classes.card}
    >
      {props.children}
    </MaterialCard>
  )
}
Card.propTypes = {
  props: PropTypes.node,
  raised: PropTypes.bool,
  children: PropTypes.node,
}
export default Card
