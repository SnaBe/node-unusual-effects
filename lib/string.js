module.exports = {
    /**
     * Check if a variable or parsed value is a String.
     * @description Can be used to check whether or not parsed parameter is of type String.
     * @param {String} value Any predefined value with any given data type.
     * @returns {Boolean} True if the parameter is a String, otherwise false.
     */
    isString (value) {
        //Return the Boolean value of the expression
        return (typeof value === 'string');
    },

    /**
     * Check if an EconItem description value contains any Unusual effect.
     * @description Checks whether or not an EconItem contains any Unusual effect in its description.
     * @param {String} value A string from an EconItem description value.
     * @returns {Boolean} True if the string contains an Unusual effect, otherwise false.
     */
    hasUnusualEffect (value) {
        //Return the Boolean value of the expression
        return (value.includes('Unusual Effect'));
    },

    /**
     * Check if a Steam item is an Unusual item.
     * @description Checks whether or not an EconItem is an Unusual item within the Steam Economy. 
     * @param {String} name The market_hash_name of the EconItem. 
     * @returns {Boolean} True if the item is an Unusual, otherwise false.
     */
    itemIsUnusual (name) {
        //Return the Boolean value of the expression
        return (name.includes('Unusual'));
    },

    /**
     * Get the Unusual effect from an EconItem description value.
     * @description Substrings the EconItem description value and returns an Unusual effect.
     * @param {String} value A string from an EconItem description value.
     * @returns {String} The Unusual effect retrieved from the original item descriptions value.
     */
    getUnsualEffect (value) {
        //Return the new string
        return value.substring(18);
    },

    /**
     * Get an Unusual item's standardized name.
     * @description Replace a String value in an item's market_hash_name and return the standardized name.
     * @param {String} name The market_hash_name of the EconItem. 
     * @param {String} effect The Unusual effect retrieved from the EconItem.
     * @returns {String} The standardized name of the Unusual item.
     */
    getStandardizedName (name, effect) {
        //Return the standardized name (Replace the Unusal part of the string with the effect)
        return name.replace('Unusual', effect);
    }
}