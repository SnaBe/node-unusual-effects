// We'll use Mocha and Chai for testing the module's methods
const expect = require('chai').expect

// Require the module itself
// Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const { findEffectByName, findEffectById, getEffectImages } = require('../index')

// Our unit tests
describe('unusual-effects tests', () => {
    // Test and verify the return value of findEffectByName()
    describe('findEffectByName test', () => {
        // Return type should be a numbrt
        it('should return 17', () => {
            // Get the effect id for Sunbeams
            const result = findEffectByName('Sunbeams')

            // The result should equal 17 (The effect id of Sunbeams)
            expect(result).to.equal(17)
        })
    })

    // Test and verify the return value of findEffectById()
    describe('findEffectById test', () => {
        // Return type should be a string
        it('should return Scorching Flames', () => {
            // Get the effect name for Scorching Flames
            const result = findEffectById(14)

            // The result should equal Scorching Flames (The effect name matching id 14)
            expect(result).to.equal('Scorching Flames')
        })
    })

    // Test and verify the return value of findEffectByName()
    describe('findEffectByName tests', () => {
        // Return type should be null
        it('should return null', () => {
            // Check if the Unusual effect exists (the expected result should be null)
            const result = findEffectByName('Banana Storm')

            // The result should equal null as no effect named Banana Storm exists
            expect(result).to.be.null
        })

        // Return type should be an array
        it('should return an array', () => {
            // Get the effect id(s) for Showstopper
            const result = findEffectByName('Showstopper')

            // The result should equal an array, as Showstopper has more than one variant (RED or BLU)
            expect(result).to.be.an('array')
        })
    })

    // Test and verify the return value of getEffectImages()
    describe('getEffectImages tests', () => {
        // Return type should be an object
        it('should return an object', () => {
            // Get the effect images(s) for Bonzo The All-Gnawing
            const result = getEffectImages('Bonzo The All-Gnawing')

            // The result should equal an object
            expect(result).to.be.an('object')
            expect(result).to.have.property('images')
            expect(result).to.have.property('name', 'Bonzo The All-Gnawing')
        })
    })
})
