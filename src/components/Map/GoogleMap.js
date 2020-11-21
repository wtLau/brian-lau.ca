import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
}))

const GoogleMap = ({ eventData, center, zoom }) => {
  const classes = useStyles()

  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          key={index}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        ></LocationMarker>
      )
    }
    return null
  })
  return (
    <Box className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDSn0LPvmhcwpfCTKvZ4xhEHvLnEIBFUTQ' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </Box>
  )
}

GoogleMap.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
}

export default GoogleMap
