module.exports = {
    /**
     * Check if a variable or parsed value is a String.
     * @description Can be used to check whether or not parsed parameter is of type String.
     * @param {String} value Any predefined value with any given data type.
     * @returns {Boolean} True, if the parameter is a String, otherwise, false.
     */
    isString (value) {
        //Return the Boolean value of the expression
        return (typeof value === 'string');
    }
}