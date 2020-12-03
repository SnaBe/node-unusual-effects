//We'll use Mocha & Chai for testing the modules methods
const expect = require('chai').expect;

//Require the module itself
//Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const Unusual = require('../index');

//Our unit tests
describe('unusual-effects tests', () => {
    //Test & verify the return value of findEffectByName()
    describe('findEffectByName test', () => {
        it('should return 17', () => {
            //Get the effect id for Sunbeams
            const result = Unusual.findEffectByName('Sunbeams');

            //The result should equal 17 (The effect id of Sunbeams)
            expect(result).to.equal(17);
        });
    });

    //Test & verify the return value of findEffectById()
    describe('findEffectById test', () => {
        it('should return Scorching Flames', () => {
            //Get the effect name for Sunbeams
            const result = Unusual.findEffectById(14);

            //The result should equal Scorching Flames (The effect name matching id 14)
            expect(result).to.equal('Scorching Flames');
        });
    });

    //Test & verify the return value of findEffectByName()
    describe('findEffectByName tests', () => {
        it('should return null', () => {
            //Check if the Unusual effect exists (the expected result should be null)
            const result = Unusual.findEffectByName('Banana Storm');

            //The result should equal null as no effect named Banana Storm exists
            expect(result).to.be.null;
        });

        it('should return an array', () => {
            //Check if the Unusual effect exists (the expected result should be an array)
            const result = Unusual.findEffectByName('Showstopper');

            //The result should equal an array as Showstopper has more than one variant
            expect(result).to.be.an('array');
        });
    });
});