'use strict';

function Thermostat(){
  this._degrees = 20;
  this._minTemperature = 10;
  this._powerSaving = true;
};

Thermostat.prototype.getDegrees = function(){
  return this._degrees;
};

Thermostat.prototype.increaseTemperature = function(tempChange){
  this._degrees = Math.min(this._maxTemperature(), this._degrees + tempChange);
};

Thermostat.prototype.decreaseTemperature = function(tempChange){
  this._degrees = Math.max(this._minTemperature, this._degrees - tempChange);
};

Thermostat.prototype._maxTemperature = function() {
  return this._powerSaving ? 25 : 32;
};
