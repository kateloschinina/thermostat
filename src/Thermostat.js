'use strict';

function Thermostat(){
  this._degrees = 20;
};

Thermostat.prototype.getDegrees = function(){
  return this._degrees;
};
