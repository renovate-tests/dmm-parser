const dmm = require('@drivetech/dmm-parser')

const raw = [
  {type: 'dmm', raw: '3321.6735,S'},
  {type: 'dmm', raw: '07030.7640,W'},
  {type: 'dmm', raw: '4212.55809,N'},
  {type: 'dmm', raw: '00844.46606,W'},
  {type: 'latitude', raw: -33.361225, fixed: 4},
  {type: 'latitude', raw: 42.2093015, fixed: 4},
  {type: 'longitude', raw: -70.51273333333333, fixed: 5},
  {type: 'longitude', raw: -8.741101, fixed: 5}
]

const data = raw.map(data => {
  if (data.type === 'dmm') {
    return dmm.degToDec(data.raw)
  } else if (data.type === 'latitude') {
    return dmm.latToDmm(data.raw, data.fixed)
  } else if (data.type === 'longitude') {
    return dmm.lngToDmm(data.raw, data.fixed)
  }
})
