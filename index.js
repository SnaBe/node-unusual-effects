// Import some Javascript utilities
const { includes, isString, isObject, itemIsUnusual, hasUnusualEffect, getUnsualEffect, getStandardizedName } = require('./lib/utils')

// Import the Unusual effect resources
const effects = require('./resources/effects')

/**
 * Check if a String (effect name) or Number (effect id) is an Unusual effect.
 * @description This function is used as middleware by the following methods; findEffectByName, findEffectById and getEffectImages.
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { boolean } True if the effect matches any known Unusual effect, otherwise false.
 */
function isUnusual (effect) {
    // Return the Boolean value from the Object.includes() function
    return (includes(effects, effect))
}

/**
 * Find the effect id matching the parsed Unusual effect's name.
 * @description Unusual effect names can be obtained from an EconItem object's description or a Steam Web API response.
 * @param { string } effect The name of the Unusual effect.
 * @returns { number | null } The Unusual effect's id matching the 'effect' parameter, otherwise null.
 */
function findEffectByName (effect) {
    // Check if the parsed effect parameter is a String
    if (!isString(effect)) {
        // Not a valid parameter
        throw new Error(`Expected String but received a ${typeof effect}`)
    }

    // Check if the effect parameter is a known Unusual effect
    if (!isUnusual(effect)) {
        // Not a valid Unusual effect
        return null
    }

    // Return the effect id
    return effects[effect]
}

/**
 * Find the Unusual effect's name matching the parsed effect id.
 * @description Unusual effect ids can usually be obtained from a Backpack.tf API response.
 * @param { string | number } id The id of the Unusual effect.
 * @returns { string } The name of the Unusual effect matching the 'id' parameter, otherwise null.
 */
function findEffectById (id) {
    // Check if the parsed id parameter is a Number
    if (isNaN(id)) {
        // Not a valid parameter
        throw new Error(`Expected Number but received a ${typeof id}`)
    }

    // Check if the id parameter is a known Unusual effect
    if (!isUnusual(id)) {
        // Not a valid Unusual effect
        return null
    }

    // Return the effect name
    return effects[id]
}

/**
 * Get the particle images for any given Unusual effect.
 * @description Particle images are provided by Backpack.tf and come in various sizes (small, medium, large).
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { GetEffectImagesResponse | null } An object containing the Unusual effect's name, id and images.
 */
function getEffectImages (effect) {
    // Check if the effect parameter is a known Unusual effect
    if (!isUnusual(effect)) {
        // Not a valid Unusual effect
        return null
    }

    // Store the local Unusual object here
    let unusual = {}

    // Assign some new values to the Unusual object depending on the data type of the effect parameter
    if (isString(effect) && isNaN(effect)) {
        // The name of the Unusual effect
        unusual.id = findEffectByName(effect)

        // The id of the Unusual effect
        unusual.name = effect
    } else {
        // The id of the Unusual effect
        unusual.id = effect
        
        // The name of the Unusual effect
        unusual.name = findEffectById(effect)
    }

    const id = (isObject(unusual.id)) ? unusual.id[0] : unusual.id

    // Particle images for the Unusual effect in various sizes
    unusual.images = {
        small: `https://backpack.tf/images/440/particles/${id}_94x94.png`, // A small image is 94x94 pxiels
        medium: `https://backpack.tf/images/440/particles/${id}_188x188.png`, // A medium image is 188x188 pxiels
        large: `https://backpack.tf/images/440/particles/${id}_380x380.png` // A large image is 380x380 pxiels
    }

    // Return the Unusual object
    return unusual
}

/**
 * Get an Unusual effect's name, standardized name, id and images from an EconItem object.
 * @description This function relies on EconItem objects returned from node-steamcommunity, node-steam-tradeoffer-manager or the Steam Web API.
 * @param { EconItem } item An EconItem object that represents an item within the Steam economy.
 * @returns { GetEffectFromObjectResponse | null } An object containing the available details for the Unusual effect, otherwise null.
 */
function getEffectFromObject (item) {
    // Make sure that the item parameter is an object
    if (!isObject(item)) {
        // Not a valid parameter
        throw new Error('The item parameter must be an EconItem object.')
    }

    // Check if the object contains a description value
    if (!item.descriptions && !Array.isArray(item.descriptions)) {
        // Not a valid EconItem object
        throw new Error('The EconItem object seems to be missing an array of descriptions.')
    }

    // Loop trough the item's descriptions
    for (let n = 0; n < item.descriptions.length; n++) {
        // Check if the item is an Unusual and has a effect listed in its description
        if (itemIsUnusual(item.market_hash_name) && hasUnusualEffect(item.descriptions[n].value)) {
            // The Unusual effect object
            let effect = {}

            // Get the Unusual effect from the item's description value at index n
            let unusual_effect = getUnsualEffect(item.descriptions[n].value)

            // Get the particle images for the Unusual effect
            effect = getEffectImages(unusual_effect)

            // Get the Unusual effect's standardized name
            effect.standardized_name = getStandardizedName(item.market_hash_name, unusual_effect)
            
            // Return the Unusual effect
            return effect
        }
    }
    
    // Return null if no Unusual effect was found
    return null
}

// Export the functions associated with the module
module.exports = {
    isUnusual,
    findEffectByName,
    findEffectById,
    getEffectImages,
    getEffectFromObject
}
