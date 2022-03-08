module.exports = {
    /**
     * Check if a variable or reference is of type Object.
     * @description Can be used to check whether or not parsed parameter is of type Object.
     * @param data - Variable or a reference to any data type.
     * @returns { Boolean } True if the parameter is of type Object, otherwise false.
     */
    isObject (data) {
        //Return the Boolean value of the expression
        return (typeof data === 'object');
    },

    /**
     * Check if an Object includes a value of a certain data type.
     * @description Can be used to check wheter or not a object contains a desired value.
     * @param { Object } obj The Object to check.
     * @param { String | Number } value The value to look for in the Object, either as a String or Number.
     * @returns { Boolean } True if the obj parameter is of type object, otherwise false.
     */
    includes (obj, value) {
        //Check if parsed parameter is an Object
        if(!this.isObject(obj)) {
            //Not an object
            throw new Error('The obj parameter is not of type Object.');
        }

        //Return the Boolean value of the expression
        return Object.prototype.hasOwnProperty.call(obj, value);
    }
};