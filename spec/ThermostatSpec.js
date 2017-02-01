'use strict';

describe('Thermostat', function(){

  var thermo;
  var amount = 15;
  var tempChange = 3;
  var defaultTemp = 20;

  beforeEach(function(){
    thermo = new Thermostat();
  });

  it('has '+defaultTemp+' degrees by default', function(){
    expect(thermo._degrees).toEqual(defaultTemp);
  });

  describe('#getDegrees', function(){
    it('returns degrees property', function(){
      thermo._degrees = amount;
      expect(thermo._degrees).toEqual(amount);
    });
  });

  describe("#increaseTemperature", function(){
    it("Increases degrees by specified amount", function(){    
      thermo.increaseTemperature(tempChange);
      expect(thermo.getDegrees()).toEqual(defaultTemp + tempChange);
    });

  });


});
