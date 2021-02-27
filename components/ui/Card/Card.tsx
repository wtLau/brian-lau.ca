import React from 'react'
import PropTypes from 'prop-types'

import { Card as MaterialCard } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: (props: any) =>
      props.borderRadius
        ? props.borderRadius
        : '32px',
    boxShadow:
      '10px 10px 10px rgba(33, 36, 41, 0.25)',
    background: (props: any) =>
      props.background
        ? props.background
        : theme.palette.grey[300],
    height: (props: any) => props.height,
    width: (props): any => props.width,
    margin: (props: any) => props.margin,

    padding: (props: any) =>
      props.padding
        ? props.padding
        : theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      margin: (props: any) => props.mobileMargin,
    },
  },
}))

const Card = ({ ...props }) => {
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
