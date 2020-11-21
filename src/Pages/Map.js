// Tutorial on YouTube "Build a Wildfire Tracker With React & NASA API"
//https://www.youtube.com/watch?v=ontX4zfVqK8&ab_channel=TraversyMedia

import React from 'react'
import { useState, useEffect } from 'react'

import GoogleMap from '../components/Map/GoogleMap'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
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

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

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