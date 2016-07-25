'use strict';

const pad = require('pad');

/**
 * Decimal latitude to degree [dmm]
 *
 * @param {number} raw - raw data
 * @param {number} fixed - decimal fixed
 * @return {string} degree [dmm]
 */
const latToDmm = (raw, fixed) => {
  fixed = fixed || 5;
  const tmp = raw.toString().split('.');
  const deg = pad(2, Math.abs(tmp[0]), '0');
  const mim = pad(7, (('0.' + (tmp[1] || 0)) * 60).toFixed(fixed), '0');
  const sign = raw < 0 ? 'S' : 'N';
  return `${deg}${mim},${sign}`;
};

/**
 * Decimal longitude to degree [dmm]
 *
 * @param {number} raw - raw data
 * @param {number} fixed - decimal fixed
 * @return {string} degree [dmm]
 */
const lngToDmm = (raw, fixed) => {
  fixed = fixed || 5;
  const tmp = raw.toString().split('.');
  const deg = pad(3, Math.abs(tmp[0]), '0');
  const mim = pad(7, (('0.' + (tmp[1] || 0)) * 60).toFixed(fixed), '0');
  const sign = raw < 0 ? 'W' : 'E';
  return `${deg}${mim},${sign}`;
};

/**
 * Degree [dmm] to decimal
 *
 * @param {string} data - Degree in dmm.
 * @return {number} decimals
 */
const degToDec = raw => {
  let decimal = 0.0;
  const data = raw.match(/(\d{2,3})(\d{2}[.]\d+)\,([NSWE])/).slice(1);
  const deg = data[0];
  const min = data[1];
  const sign = data[2];
  if (deg && min && sign) {
    decimal = parseFloat(deg) + parseFloat(min) / 60;
    if ((sign === 'S') || (sign === 'W')) {
      decimal *= -1;
    }
  }
  return decimal;
};

module.exports = {
  latToDmm: latToDmm,
  lngToDmm: lngToDmm,
  degToDec: degToDec
};
