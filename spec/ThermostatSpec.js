'use strict';

describe('Thermostat', function(){

  var thermo;
  var amount = 15;

  beforeEach(function(){
    thermo = new Thermostat();
  });

  it('has 20 degrees by default', function(){
    expect(thermo._degrees).toEqual(20);
  });
  describe('#getDegrees', function(){
    it('returns degrees property', function(){
      thermo._degrees = amount;
      expect(thermo._degrees).toEqual(amount);
    });
  });
});
