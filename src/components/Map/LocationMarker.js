import React from 'react'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import Papper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    color: red['A400'],
  },
}))

export const LocationMarker = ({ lat, lng, onClick }) => {
  const classes = useStyles()
  return (
    <Papper className={classes.location_marker} onClick={onClick}>
      <WhatshotIcon className={classes.icon} fontSize='large'></WhatshotIcon>
    </Papper>
  )
}

export default LocationMarker
