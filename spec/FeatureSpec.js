'use strict';

describe('Feature tests:', function(){
  //User Story One: Thermostat starts at 20 degrees
  it('Thermostat defaults to 20 degrees', function(){
    var thermo = new Thermostat();
    expect(thermo.getDegrees()).toEqual(20);
  });
});
