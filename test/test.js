'use strict';

const dmm = require('../src');
const expect = require('chai').expect;

describe('dmm', () => {
  describe('degToDec fix 4', () => {
    it('should return latitude -33.361225', () => {
      const raw = '3321.6735,S';
      const data = dmm.degToDec(raw);
      expect(data).to.eql(-33.361225);
    });
    it('should return longitude -70.51273333333333', () => {
      const raw = '07030.7640,W';
      const data = dmm.degToDec(raw);
      expect(data).to.eql(-70.51273333333333);
    });
  });

  describe('degToDec fix 5', () => {
    it('should return latitude 42.2093015', () => {
      const raw = '4212.55809,N';
      const data = dmm.degToDec(raw);
      expect(data).to.eql(42.2093015);
    });
    it('should return longitude -8.741101', () => {
      const raw = '00844.46606,W';
      const data = dmm.degToDec(raw);
      expect(data).to.eql(-8.741101);
    });
  });

  describe('latToDmm', () => {
    it('should return latitude 3321.6735,S', () => {
      const raw = -33.361225;
      const data = dmm.latToDmm(raw, 4);
      expect(data).to.eql('3321.6735,S');
    });
    it('should return latitude 4212.55809,N', () => {
      const raw = 42.2093015;
      const data = dmm.latToDmm(raw, 5);
      expect(data).to.eql('4212.55809,N');
    });
  });

  describe('lngToDmm', () => {
    it('should return latitude 07030.7640,W', () => {
      const raw = -70.51273333333333;
      const data = dmm.lngToDmm(raw, 4);
      expect(data).to.eql('07030.7640,W');
    });
    it('should return latitude 00844.46606,W', () => {
      const raw = -8.741101;
      const data = dmm.lngToDmm(raw, 5);
      expect(data).to.eql('00844.46606,W');
    });
  });
});
