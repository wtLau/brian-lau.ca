// Tutorial on YouTube "Build a Wildfire Tracker With React & NASA API"
//https://www.youtube.com/watch?v=ontX4zfVqK8&ab_channel=TraversyMedia

import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

import GoogleMap from '../components/Map/GoogleMap'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    overflow: 'hidden',
    height: '91vh',
  },
  loadingIcon: {},
}))

const Map = () => {
  const classes = useStyles()
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchEvents = async () => {
    setLoading(true)
    const res = await axios('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

    setEventData(res.data.events)
    setLoading(false)
  }
  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <Box className={classes.root}>
      {!loading ? (
        <GoogleMap eventData={eventData} />
      ) : (
        <CircularProgress size={68} className={classes.loadingIcon} />
      )}
    </Box>
  )
}
export default Map
