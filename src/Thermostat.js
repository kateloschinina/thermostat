'use strict';

function Thermostat(){
  this._degrees = 20;
  this._powerSaving = true;

  this._defaultTemp = 20;
  this._minTemperature = 10;
  this._maxTempSavingOn = 25;
  this._maxTempSavingOff = 32;
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
  return this._powerSaving ? this._maxTempSavingOn : this._maxTempSavingOff;
};

Thermostat.prototype.resetTemperatureToDefault = function() {
  this._degrees = this._defaultTemp;
};

Thermostat.prototype.currentUsage = function() {
  if (this.getDegrees() < 18) {
    return 'low-usage'
  };
  if (this.getDegrees() < 25) {
    return 'medium-usage'
  };
  return 'high-usage';
};
