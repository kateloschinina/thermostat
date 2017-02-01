'use strict';

describe('Feature tests:', function(){

  var thermo;
  var tempChange = 3;
  var defaultTemp = 20;

  beforeEach(function(){
    thermo = new Thermostat();
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
});
