const request = require('request')

const geocode = (address, callback) => {
  const encodedURI = encodeURIComponent(address)
  
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedURI}.json?access_token=pk.eyJ1Ijoic2NydWJieWRvZG9sbyIsImEiOiJjanZkZmc2N20wY29yM3pvNnl2Nm9kN2FqIn0.SRIKBpGLXuRj-Sm6IlyaKg`
  
  request({url, json: true}, (error, {body}) => {
    
    if (error) {
      callback('Unable to connect to geolocator.', undefined)
    } else if (body.error || !body.features ) {
      callback('Unable to find location', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another location', undefined)
    } else {
      const data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      }
      callback(undefined, data)
    }
  })
}

module.exports = geocode
