// Require Mocha and Chai's expect module for unit testing
const expect = require('chai').expect

// Required for interacting with various interfaces on Steamcommunity.com
const SteamCommunity = require('steamcommunity')

// Require the module itself
// Replace '../index' with 'unusual-effects' if used outside of the module directory
const { getAllEffects, getEffectById, getEffectByName, getEffectsBySeries, getEffectsByType, getEffectFromObject } = require('../index')

// Steam Community instance for getting user inventories
const community = new SteamCommunity()

// The unit tests for each function
describe('unusual-effects tests', () => {
    // Test and verify the return value of getEffectByName()
    describe('getEffectByName test', () => {
        // Return type should be an Unusual effect object
        it('should return an Unusual effect by its name', () => {
            // Get the Unusual effect object for Sunbeams
            const result = getEffectByName('Sunbeams')

            // The result should be an Unusual effect object
            // and must have a property named "id" of type number
            // and it should equal 17 (the effect id of Sunbeams)
            expect(result).to.be.an('object')
            expect(result).to.have.property('id')
            expect(result.id).to.be.a('number')
            expect(result.id).to.equal(17)
        })
    })

    // Test and verify the return value of getEffectById()
    describe('getEffectById test', () => {
        // Return type should be an Unusual effect object
        it('should return Scorching Flames', () => {
            // Get the Unusual effect object for Scorching Flames
            const result = getEffectById(14)

            // The result should be an Unusual effect object
            // and must have a property named "name" of type string
            // and it should equal Scorching Flames (the effect name matching id 14)
            expect(result).to.be.an('object')
            expect(result).to.have.property('name')
            expect(result.name).to.be.a('string')
            expect(result.name).to.equal('Scorching Flames')
        })
    })

    // Test and verify the return value of getEffectByName()
    describe('getEffectByName tests', () => {
        // Return type should be null
        it('should return null', () => {
            // Check if the Unusual effect exists (the expected result should be null)
            const result = getEffectByName('Banana Storm')

            // The result should equal null as no effect named Banana Storm exists
            expect(result).to.be.null
        })

        // Return type should be an Unusual effect object
        it('should return an array', () => {
            // Get the Unusual effect object for Showstopper
            const result = getEffectByName('Showstopper')

            // The result should be an Unusual effect object
            // and must have a property named "id" of type array
            // as Showstopper has more than one variant (RED or BLU)
            expect(result).to.be.an('object')
            expect(result).to.have.property('id')
            expect(result.id).to.be.an('array')
            expect(result.id).to.have.length(2)
        })
    })

    // Test and verify the return value of getEffectsBySeries()
    describe('getEffectsBySeries tests', () => {
        // Return type should be an array of Unusual effect objects
        it('should return an array of Unusual effect objects', () => {
            // Get all the Unusual effects from Smissmas 2022
            const result = getEffectsBySeries('Smissmas 2022')

            // The result should be an array of Unusual effect objects
            // and must have a length of 15 (excluding colour variants)
            expect(result).to.be.an('array')
            expect(result.length).to.equal(15)
        })
    })

    // Test and verify the return value of getEffectsByType()
    describe('getEffectsByType tests', () => {
        // Return type should be an array of Unusual effect objects
        it('should return an array of Unusual effect objects', () => {
            // Get all the Unusual weapon effects
            const result = getEffectsByType('weapons')

            // The result should be an array of Unusual effect objects
            // and must have a length of 4 (including removed effects)
            expect(result).to.be.an('array')
            expect(result.length).to.equal(4)
        })
    })

    // Test and verify the return value of getAllEffects()
    describe('getAllEffects tests', () => {
        // Return type should be an array of Unusual effect objects
        it('should return an array of Unusual effect objects', () => {
            // Get all the Unusual effects
            const result = getAllEffects()

            // The result should be an array of Unusual effect objects
            // and must have a length of 407 (277 cosmetic, 125 taunt and 5 weapon effects)
            expect(result).to.be.an('array')
            expect(result.length).to.equal(407)
        })
    })

    // Test and verify the return value of getEffectFromObject()
    describe('getEffectFromObject tests', () => {
        // Return type should be an Unusual effect object
        it('should return an Unusual effect object', (done) => {
            // A "random" Steam user's unique id
            const user = '76561198122604075'

            // Get that user's Team Fortress 2 inventory
            community.getUserInventoryContents(user, 440, 2, true, (err, inventory) => {
                // Error getting currency data
                if (err) return done(err)

                // Filter the inventory for items with "Unusual" in their name
                const unusuals = inventory.filter((item => item.market_hash_name.includes('Unusual')))

                // Get the Unusual Effect from the first EconItem object in the array
                const result = getEffectFromObject(unusuals[0])

                // The result should be an Unusual effect object
                // and must have a property named "images" of type object
                // and it should be a nested object of different image sizes
                expect(result).to.be.an('object')
                expect(result).to.have.property('images')
                expect(result.images).to.have.property('small')
                expect(result.images.small).to.have.property('url')
                expect(result.images.small.url).to.be.a('string')

                // Call done to end the test when the callback is invoked
                done()
            })
        })
    })
})
