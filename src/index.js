'use strict'

/**
 * Convert from deg to dmm.
 *
 * @param {number} value - Degree in deg.
 * @param {number} [fixed] - Number of digits to fix.
 * @param {string} type - 'lat' or 'lng'.
 * @returns {string} - Degree in dmm.
 * @example
 * const dmm = degToDmm(-33.361225, 4, 'lat')
 */
const degToDmm = (value, fixed, type) => {
  fixed = fixed || 5
  let degPad, signs
  if (type === 'lat') {
    degPad = 2
    signs = ['S', 'N']
  } else {
    degPad = 3
    signs = ['W', 'E']
  }
  const tmp = value.toString().split('.')
  const deg = Math.abs(tmp[0])
    .toString()
    .padStart(degPad, '0')
  const mim = (('0.' + (tmp[1] || 0)) * 60).toFixed(fixed).padStart(7, '0')
  const sign = value < 0 ? signs[0] : signs[1]
  return `${deg}${mim},${sign}`
}

/**
 * Decimal latitude to degree [dmm].
 *
 * @param {number} lat - Latitude.
 * @param {number} fixed - Decimal fixed.
 * @returns {string} Degree [dmm].
 * @example
 * const { latToDmm } = require('dmm-parser')
 * const dmm = latToDmm(-33.361225, 4) // '3321.6735,S'
 */
const latToDmm = (lat, fixed) => degToDmm(lat, fixed, 'lat')

/**
 * Decimal longitude to degree [dmm].
 *
 * @param {number} lng - Longitude.
 * @param {number} fixed - Decimal fixed.
 * @returns {string} Degree [dmm].
 * @example
 * const { lngToDmm } = require('dmm-parser')
 * const dmm = dmm.lngToDmm(-70.51273333333333, 4) // '07030.7640,W'
 */
const lngToDmm = (lng, fixed) => degToDmm(lng, fixed, 'lng')

/**
 * Degree [dmm] to decimal.
 *
 * @param {string} raw -  .
 * @returns {number} Decimals.
 * @example
 * const { degToDec } = require('dmm-parser')
 * const dec = degToDec('3321.6735,S') // -33.361225
 */
const degToDec = raw => {
  let decimal = 0.0
  const data = raw.match(/(\d{2,3})(\d{2}[.]\d+),([NSWE])/).slice(1)
  const deg = data[0]
  const min = data[1]
  const sign = data[2]
  if (deg && min && sign) {
    decimal = parseFloat(deg) + parseFloat(min) / 60
    if (sign === 'S' || sign === 'W') {
      decimal *= -1
    }
  }
  return decimal
}

module.exports = {
  latToDmm: latToDmm,
  lngToDmm: lngToDmm,
  degToDec: degToDec
}
