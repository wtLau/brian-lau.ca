import React from 'react'
import GoogleMapReact from 'google-map-react'

import PropTypes from 'prop-types'

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDSn0LPvmhcwpfCTKvZ4xhEHvLnEIBFUTQ' }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
}

Map.propTypes = {
  center: PropTypes.number,
  zoom: PropTypes.number,
}

export default Map
