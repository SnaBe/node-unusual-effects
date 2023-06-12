/**
 * Check if a variable or reference is an Object.
 * @description Can be used to check whether or not a argument is an Object.
 * @param { any } data Variable or a reference to any data type.
 * @returns { boolean } True if the argument is an Object, otherwise, false.
 */
function isObject (data) {
    // Return the Boolean value of the typeof expression
    return (typeof data === 'object')
}

/**
 * Check if an Object includes a value of a certain data type.
 * @description Can be used to check wheter or not a object contains a desired value.
 * @param { any } obj The Object in question.
 * @param { string | number } value The value to look for in the Object, either as a String or Number.
 * @returns { boolean } True if the object argument contains the value, otherwise, false.
 */
function includes (obj, value) {
    // Check if parsed argument is an Object
    if (!isObject(obj)) {
        // Not an object
        throw new Error('The obj argument is not an Object.')
    }

    // Return the Boolean value of the expression
    return Object.prototype.hasOwnProperty.call(obj, value)
}

/**
 * Check if a variable or parsed value is a String.
 * @description Can be used to check whether or not an argument is a String.
 * @param { string } value Variable or a reference to any data type.
 * @returns { boolean } True if the argument is a String, otherwise, false.
 */
function isString (value) {
    // Return the Boolean value of the typeof expression
    return (typeof value === 'string')
}

/**
 * Check if a Steam item is an Unusual item.
 * @description Checks whether or not an `EconItem` is an Unusual item within the Steam economy.
 * @param { string } name The market_hash_name of the `EconItem`. 
 * @returns { boolean } True if the item is an Unusual, otherwise, false.
 */
function itemIsUnusual (name) {
    // Return the Boolean value of the expression
    return (name.includes('Unusual'))
}

/**
 * Check if an `EconItem` description value contains any Unusual effect.
 * @description Checks whether or not an `EconItem` contains any Unusual effect in its description.
 * @param { string } value A string from an `EconItem` description value.
 * @returns { boolean } True if the string contains an Unusual effect, otherwise, false.
 */
function hasUnusualEffect (value) {
    // Return the Boolean value of the includes expression
    return (value.includes('Unusual Effect'))
}

/**
 * Get the Unusual effect from an `EconItem` description value.
 * @description Substrings the `EconItem` description value and returns an Unusual effect.
 * @param { string } value A string from an `EconItem` description value.
 * @returns { string } The Unusual effect retrieved from the original item descriptions value.
 */
function getUnusualEffect (value) {
    // Return the new string
    return value.substring(18)
}

/**
 * Get an Unusual item's standardized name.
 * @description Replaces certain characters in an item's market_hash_name and returns the standardized name.
 * @param { string } name The market_hash_name of the `EconItem`. 
 * @param { string } effect The Unusual effect retrieved from the `EconItem`.
 * @returns { string } The standardized name of the Unusual item.
 */
function getStandardizedName (name, effect) {
    // Return the standardized item name 
    return name.replace('Unusual', effect)
}

// Export the utility functions
module.exports = {
    isObject,
    isString,
    includes,
    itemIsUnusual,
    hasUnusualEffect,
    getUnusualEffect,
    getStandardizedName
}
