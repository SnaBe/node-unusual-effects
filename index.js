// Import some JavaScript utility functions
const { includes, isString, isObject, itemIsUnusual, hasUnusualEffect, getUnusualEffect, getStandardizedName } = require('./lib/utils')

// Import the Unusual effect resources
const effects = require('./resources/effects')

/**
 * Check if a String or Number is an Unusual effect.
 * @description This function is used as middleware by the following functions; getEffectByName and getEffectById.
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { boolean } True if the specified `effect` matches any known Unusual effect, otherwise, false.
 */
function isUnusual (effect) {
    // Return the Boolean value from the Object.includes() function
    return (includes(effects, effect))
}

/**
 * Get all the Unusual effects currently available in-game.
 * @description There are currently 240 cosmetic effects, 99 taunt effects, and 5 weapon effects available in-game.
 * @returns { Array<UnusualEffect> } An array of Unusual effect objects.
 */
function getAllEffects () {
    // An array to store the Unusual effect objects
    let unusuals = []

    // Loop over the Unusual effects
    for (let key in effects) {
        // Check if the effects object has a property with the specified key
        if (Object.prototype.hasOwnProperty.call(effects, key)) {
            // Only return Unusual effect objects with their name as the entry key
            if (isNaN(key)) unusuals.push(effects[key])
        }
    }

    // Return the Unusual effects
    return unusuals
}

/**
 * Get the Unusual effect whose `id` property matches the specified string or number.
 * @description An Unusual effect's `id` can usually be obtained from a Backpack.tf API response.
 * @param { string | number } id The `id` of the Unusual effect.
 * @returns { UnusualEffect | null } An Unusual effect object matching the specified `id`, or null if no matching Unusual was found.
 */
function getEffectById (id) {
    // Check if the id argument is a valid Number
    if (isNaN(id)) {
        // The id argument is not a valid Number
        throw new Error(`Expected a Number but received ${typeof id}`)
    }

    // Check if the id argument is a known Unusual effect
    if (!isUnusual(id)) {
        // Not a valid Unusual effect
        return null
    }

    // Return the Unusual effect object
    return effects[id]
}

/**
 * Get the Unusual effect whose `name` property matches the specified string.
 * @description An Unusual effect's name can be obtained from an `EconItem` object or a Steam Web API response.
 * @param { string } effect The name of the Unusual effect.
 * @returns { UnusualEffect | null } An Unusual effect object matching the specified `effect`, or null if no matching Unusual was found.
 */
function getEffectByName (effect) {
    // Check if the effect argument is a valid string
    if (!isString(effect)) {
        // The effect argument is not a valid string
        throw new Error(`Expected a String but received ${typeof effect}`)
    }

    // Check if the effect argument is a known Unusual effect
    if (!isUnusual(effect)) {
        // Not a valid Unusual effect
        return null
    }

    // Return the Unusual effect object
    return effects[effect]
}

/**
 * Get all the Unusual effects whose `type` property matches the specified string.
 * @description This function can be used to filter Unusual effects for a specific item `type`.
 * @param { string } type The `type` of in-game item that an Unusual effect is associated with.
 * @returns { Array<UnusualEffect> } An array of Unusual effect objects matching the specified `type`.
 */
function getEffectsByType (type) {
    // Check if the type argument is a valid string
    if (!isString(type)) {
        // The type argument is not a valid string
        throw new Error(`Expected a String but received ${typeof type}`)
    }

    // An array to store the Unusual effect objects
    let unusuals = []

    // Loop over the Unusual effects
    for (let key in effects) {
        // Check if the effects object has a property with the specified key
        if (Object.prototype.hasOwnProperty.call(effects, key)) {
            // Only return Unusual effect objects with their name as the entry key
            if (effects[key].type === type && isNaN(key)) unusuals.push(effects[key])
        }
    }

    // Return the Unusual effects
    return unusuals
}

/**
 * Get all the Unusual effects whose `series` property matches the specified string.
 * @description This function can be used to filter Unusual effects for a specific crate `series`.
 * @param { string } series The series of crates or cases that an Unusual effect is associated with.
 * @returns { Array<UnusualEffect> } An array of Unusual effect objects matching the specified `series`.
 */
function getEffectsBySeries (series) {
    // Check if the series argument is a valid string
    if (!isString(series)) {
        // The series argument is not a valid string
        throw new Error(`Expected a String but received ${typeof series}`)
    }

    // An array to store the Unusual effect objects
    let unusuals = []

    // Loop over the Unusual effects
    for (let key in effects) {
        // Check if the effects object has a property with the specified key
        if (Object.prototype.hasOwnProperty.call(effects, key)) {
            // Only return Unusual effect objects with their name as the entry key
            if (effects[key].series === series && isNaN(key)) unusuals.push(effects[key])
        }
    }

    // Return the Unusual effects
    return unusuals
}

/**
 * Get an Unusual effect from an `EconItem` object.
 * @description This function relies on `EconItem` objects returned from node-steamcommunity, node-steam-tradeoffer-manager or the Steam Web API.
 * @param { EconItem } item An `EconItem` object that represents an item within the Steam economy.
 * @returns { StandardizedUnusualEffect | null } An Unusual effect object matching the specified `item`, or null if no matching Unusual was found.
 */
function getEffectFromObject (item) {
    // Make sure that the item argument is an object
    if (!isObject(item)) {
        // The item argument is not a valid object
        throw new Error('The item argument must be an EconItem object.')
    }

    // Check if the item object has a description property
    if (!item.descriptions && !Array.isArray(item.descriptions)) {
        // Not a valid EconItem object
        throw new Error('The EconItem object seems to be missing an array of descriptions.')
    }

    // Check if the descriptions array holds any values
    if (item.descriptions.length === 0) return null

    // Check if the item has a market_hash_name property
    if (!item.market_hash_name && typeof item.market_hash_name !== 'string') {
        // Not a valid string
        throw new Error('The EconItem object seems to be missing the market_hash_name property.')
    }

    // Loop trough the item's descriptions array
    for (let n = 0; n < item.descriptions.length; n++) {
        // Check if the item is an Unusual and has an effect stored in its descriptions array
        if (itemIsUnusual(item.market_hash_name) && hasUnusualEffect(item.descriptions[n].value)) {
            // Get the Unusual effect's name from the item's description value at index n
            const name = getUnusualEffect(item.descriptions[n].value)

            // Get the Unusual effect object by its name
            let effect = getEffectByName(name)

            // Get the Unusual effect's standardized name
            effect.standardized_name = getStandardizedName(item.market_hash_name, effect.name)
            
            // Return the modified Unusual effect object
            return effect
        }
    }
    
    // Return null if no Unusual effect was found
    return null
}

// Export the functions associated with the module
module.exports = {
    isUnusual,
    getAllEffects,
    getEffectById,
    getEffectByName,
    getEffectsByType,
    getEffectsBySeries,
    getEffectFromObject
}
