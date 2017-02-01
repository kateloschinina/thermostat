'use strict';

describe('Feature tests:', function(){

  var thermo;
  var tempChange = 3;
  var defaultTemp;
  var minTemperature;
  var maxTempSavingOn;
  var maxTempSavingOff;

  beforeEach(function(){
    thermo = new Thermostat();
    defaultTemp = thermo._defaultTemp;
    minTemperature = thermo._minTemperature;
    maxTempSavingOn = thermo._maxTempSavingOn;
    maxTempSavingOff = thermo._maxTempSavingOff;
  });

  //User Story One: Thermostat starts at 20 degrees
  it('Thermostat defaults to'+defaultTemp+' degrees', function(){
    expect(thermo.getDegrees()).toEqual(defaultTemp);
  });
  // You can increase the temperature with an up function
  it('User can increase temp of thermostat', function(){
    thermo.increaseTemperature(tempChange);
    expect(thermo.getDegrees()).toEqual(defaultTemp + tempChange);
  });
  // You can decrease the temperature with a down function
  it('User can decrease temp of thermostat', function(){
    thermo.decreaseTemperature(tempChange);
    expect(thermo.getDegrees()).toEqual(defaultTemp - tempChange);
  });
  // The minimum temperature is 10 degrees
  it('cannot go below '+minTemperature+' degrees', function(){
    thermo._degrees = minTemperature;
    thermo.decreaseTemperature(tempChange);
    expect(thermo.getDegrees()).toEqual(minTemperature);
  });
  // If power saving mode is on, the maximum temperature is 25 degrees
  it('cannot go above '+maxTempSavingOn+' if power save mode is on', function(){
    thermo._powerSaving = true;
    thermo._degrees = maxTempSavingOn;
    thermo.increaseTemperature(tempChange);
    expect(thermo.getDegrees()).toEqual(maxTempSavingOn);
  });
  // If power saving mode is off, the maximum temperature is 32 degrees
  it('cannot go above '+maxTempSavingOff+' if power save mode is on', function(){
    thermo._powerSaving = false;
    thermo._degrees = maxTempSavingOff;
    thermo.increaseTemperature(tempChange);
    expect(thermo.getDegrees()).toEqual(maxTempSavingOff);
  });
  // Power saving mode is on by default
  it('power saving mode is on by default', function(){
    thermo._degrees = maxTempSavingOn;
    thermo.increaseTemperature(tempChange);
    expect(thermo.getDegrees()).toEqual(maxTempSavingOn);
  });
  // You can reset the temperature to 20 with a reset function
  it('User can reset temperature to default '+defaultTemp, function(){
    thermo._degrees = maxTempSavingOn;
    thermo.resetTemperatureToDefault();
    expect(thermo.getDegrees()).toEqual(defaultTemp);
  });
});
