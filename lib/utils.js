module.exports = {
    /**
     * Check if a variable or reference is of type Object.
     * @description Can be used to check whether or not parsed parameter is of type Object.
     * @param data - Variable or a reference to any data type.
     * @returns { boolean } True if the parameter is of type Object, otherwise false.
     */
    isObject (data) {
        // Return the Boolean value of the expression
        return (typeof data === 'object');
    },

    /**
     * Check if an Object includes a value of a certain data type.
     * @description Can be used to check wheter or not a object contains a desired value.
     * @param { any } obj The Object to check.
     * @param { string | number } value The value to look for in the Object, either as a String or Number.
     * @returns { boolean } True if the obj parameter is of type object, otherwise false.
     */
    includes (obj, value) {
        // Check if parsed parameter is an Object
        if (!this.isObject(obj)) {
            // Not an object
            throw new Error('The obj parameter is not of type Object.');
        }

        // Return the Boolean value of the expression
        return Object.prototype.hasOwnProperty.call(obj, value);
    },

    /**
     * Check if a variable or parsed value is a String.
     * @description Can be used to check whether or not parsed parameter is of type String.
     * @param { string } value Any predefined value with any given data type.
     * @returns { boolean } True if the parameter is a String, otherwise false.
     */
     isString (value) {
        // Return the Boolean value of the expression
        return (typeof value === 'string');
    },

    /**
     * Check if an EconItem description value contains any Unusual effect.
     * @description Checks whether or not an EconItem contains any Unusual effect in its description.
     * @param { string } value A string from an EconItem description value.
     * @returns { boolean } True if the string contains an Unusual effect, otherwise false.
     */
    hasUnusualEffect (value) {
        // Return the Boolean value of the expression
        return (value.includes('Unusual Effect'));
    },

    /**
     * Check if a Steam item is an Unusual item.
     * @description Checks whether or not an EconItem is an Unusual item within the Steam Economy. 
     * @param { string } name The market_hash_name of the EconItem. 
     * @returns { boolean } True if the item is an Unusual, otherwise false.
     */
    itemIsUnusual (name) {
        // Return the Boolean value of the expression
        return (name.includes('Unusual'));
    },

    /**
     * Get the Unusual effect from an EconItem description value.
     * @description Substrings the EconItem description value and returns an Unusual effect.
     * @param { string } value A string from an EconItem description value.
     * @returns { string } The Unusual effect retrieved from the original item descriptions value.
     */
    getUnsualEffect (value) {
        // Return the new string
        return value.substring(18);
    },

    /**
     * Get an Unusual item's standardized name.
     * @description Replace a String value in an item's market_hash_name and return the standardized name.
     * @param { string } name The market_hash_name of the EconItem. 
     * @param { string } effect The Unusual effect retrieved from the EconItem.
     * @returns { string } The standardized name of the Unusual item.
     */
    getStandardizedName (name, effect) {
        // Return the standardized name (Replace the Unusal part of the string with the effect)
        return name.replace('Unusual', effect);
    }
};