// Require Mocha and Chai for unit testing the functions
const expect = require('chai').expect

// Required for interacting with the Steamcommunity API
const SteamCommunity = require('steamcommunity')

// Require the module itself
// Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const { findEffectByName, findEffectById, getEffectImages, getEffectFromObject } = require('../index')

// Steamcommunity instance for getting user inventories
const community = new SteamCommunity()

// The unit tests for each function
describe('unusual-effects tests', () => {
    // Test and verify the return value of findEffectByName()
    describe('findEffectByName test', () => {
        // Return type should be a number
        it('should return 17', () => {
            // Get the effect id for Sunbeams
            const result = findEffectByName('Sunbeams')

            // The result should equal 17 (The effect id of Sunbeams)
            expect(result).to.be.a('number')
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
            expect(result).to.be.a('string')
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
            expect(result).to.have.length(2)
        })
    })

    // Test and verify the return value of getEffectImages()
    describe('getEffectImages tests', () => {
        // Return type should be an GetEffectImagesResponse object
        it('should return an object', () => {
            // Get the effect images(s) for Bonzo The All-Gnawing
            const result = getEffectImages('Bonzo The All-Gnawing')

            // The result should equal an object
            // and must have a property named "images" 
            expect(result).to.be.an('object')
            expect(result).to.have.property('images')
            expect(result).to.have.property('name', 'Bonzo The All-Gnawing')
        })
    })

    // Test and verify the return value of getEffectFromObject()
    describe('getEffectFromObject tests', () => {
        // Return type should be an GetEffectFromObjectResponse object
        it('should return an Unusual object', (done) => {
            // A "random" Steam user's unique id
            const user = '76561197977733292'

            // Get that user's Team Fortress 2 inventory
            community.getUserInventoryContents(user, 440, 2, true, (err, inventory) => {
                // Error getting currency data
                if (err) return done(err)

                // Filter the inventory for items with "Unusual" in their name
                const unusuals = inventory.filter((item => item.market_hash_name.includes('Unusual')))

                // Get the Unusual Effect from the first EconItem object in the array
                const result = getEffectFromObject(unusuals[0])

                // The Steam response should have status code 200 (ok),
                // it should also be an object
                // and must have a property named "images" 
                expect(result).to.be.an('object')
                expect(result).to.have.property('images')
                expect(result.images).to.have.property('small')

                // Call done to end the test when the callback is invoked
                done()
            })
        })
    })
})
