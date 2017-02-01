'use strict';

describe('Thermostat', function(){

  var thermo;
  var amount = 15;
  var tempChange = 3;
  var defaultTemp = 20;
  var minTemperature = 10;
  var maxTempSavingOn = 25;
  var maxTempSavingOff = 32;

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
    it('cannot go above '+maxTempSavingOn+' if power save mode is on', function(){
      thermo._powerSaving = true;
      thermo._degrees = maxTempSavingOn;
      thermo.increaseTemperature(tempChange);
      expect(thermo.getDegrees()).toEqual(maxTempSavingOn);
    });
    it('cannot go above '+maxTempSavingOff+' if power save mode is on', function(){
      thermo._powerSaving = false;
      thermo._degrees = maxTempSavingOff;
      thermo.increaseTemperature(tempChange);
      expect(thermo.getDegrees()).toEqual(maxTempSavingOff);
    });
    it('power saving mode is on by default', function(){
      thermo._degrees = maxTempSavingOn;
      thermo.increaseTemperature(tempChange);
      expect(thermo.getDegrees()).toEqual(maxTempSavingOn);
    });
  });

  describe("#decreaseTemperature", function(){
    it("Decreases degrees by specified amount", function(){
      thermo.decreaseTemperature(tempChange);
      expect(thermo.getDegrees()).toEqual(defaultTemp - tempChange);
    });
    it('does not allow temoperature to go below '+minTemperature, function(){
      thermo._degrees = minTemperature;
      thermo.decreaseTemperature(tempChange);
      expect(thermo.getDegrees()).toEqual(minTemperature);
    });
  });


});
