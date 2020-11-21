import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    minHeight: [100],
    flexGrow: 1,
    top: '80px',
    right: '70px',
    width: [300],
    borderRadius: 6,
    padding: [20],
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    background: 'rgba(0,0,0,0.7)',
  },
}))

const LocationInfoBox = ({ info }) => {
  const classes = useStyles()
  return (
    <Box color='white' bgcolor='background.paper' className={classes.root}>
      <Typography variant='h4'>Event Location Info</Typography>
      <Typography>ID: {info.id}</Typography>
      <Typography>Title: {info.title}</Typography>
    </Box>
  )
}
LocationInfoBox.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
}

export default LocationInfoBox
