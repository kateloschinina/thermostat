'use strict';

function Thermostat(){
  this._degrees = 20;
  this._minTemperature = 10;
};

Thermostat.prototype.getDegrees = function(){
  return this._degrees;
};

Thermostat.prototype.increaseTemperature = function(tempChange){
  this._degrees += tempChange;
};

Thermostat.prototype.decreaseTemperature = function(tempChange){
  this._degrees = Math.max(this._minTemperature, this._degrees - tempChange);
};
