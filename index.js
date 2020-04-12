//node-unusual-effects v1.0.0

//Import some self-written javascript libraries
const Obj = require('./lib/object');
const Str = require('./lib/string');

//Import our Unusual effect resources
const effects = require('./resources/effects');

module.exports = {
    /**
     * Check if a String (effect name) or Number (effect id) is an Unusual effect.
     * @description This function is used as middleware by the following methods; findEffectByName, findEffectById  
     * @param {String|Number} effect Any Unusual effect name or id.
     * @returns {Boolean} True, if the effect matches any known Unusual effect, otherwise, false.
     */
    isUnusual (effect) {
        //Return the Boolean value from the Object.includes() function.
        return (Obj.includes(effects, effect));
    },

    /**
     * Find the effect id matching the parsed Unusual effect's name.
     * @description Unusual effect names can be obtained from an EconItem object's description or a Steam Web API response.
     * @param {String} effect - The name of the Unusual effect. 
     * @returns {Number} The Unusual effect's id matching the 'effect' parameter. 
     */
    findEffectByName (effect) {
        //Check if the parsed effect parameter is a String
        if(!Str.isString(effect)) { 
            throw new Error(`Expected String but received a ${typeof effect}`); 
        }

        //Check if effect parameter is an actual Unusual effect
        if(!this.isUnusual(effect)) {
            //Not a valid Unusual effect
            throw new Error(`The effect name parameter does not match any known Unusual effects.`);
        }

        //Return the effect id 
        return effects[effect];
    },

    /**
     * Find the Unusual effect's name matching the parsed effect id.
     * @description Unusual effect ids can usually be obtained from a Backpack.tf API response.
     * @param {String|Number} id The id of the Unusual effect.
     * @returns {String} The name of the Unusual effect matching the 'id' parameter.
     */
    findEffectById (id) {
        //Check if the parsed id parameter is a Number
        if(isNaN(id)) { 
            throw new Error(`Expected Number but received a ${typeof effect}`); 
        }

        //Check if effect parameter is an actual Unusual effect
        if(!this.isUnusual(id)) {
            //Not a valid Unusual effect
            throw new Error(`The id parameter does not match any known Unusual effects.`);
        }

        //Return the effect name
        return effects[id];
    },

    /**
     * Get the particle images for a given Unusual effect.
     * @description Particle images are provided by Backpack.tf and comes in various sizes (small, medium, large). 
     * @param {String|Number} effect Any Unusual effect name or id.
     * @returns {Object} An object containing the Unusual effect's name, id and images.
     */
    getEffectImages (effect) {
        //Local Unusual object 
        var unusual = {};

        //Assign some new values to our Unusual object depending on the data type of the effect parameter
        if(Str.isString(effect) && isNaN(effect)) {
            //The name of the Unusual effect
            unusual.id = this.findEffectByName(effect);
            //The id of the Unusual effect
            unusual.name = effect;
        } else {
            //The id of the Unusual effect
            unusual.id = effect;
            //The name of the Unusual effect
            unusual.name = this.findEffectById(effect);
        }

        //Particle images for the Unusual effect in various sizes
        unusual.images = {
            small: `https://backpack.tf/images/440/particles/${unusual.id}_94x94.png`, //A small image is 94x94 pxiels
            medium: `https://backpack.tf/images/440/particles/${unusual.id}_188x188.png`, //A medium image is 188x188 pxiels
            large: `https://backpack.tf/images/440/particles/${unusual.id}_380x380.png` //A large image is 380x380 pxiels
        }

        //Return the Unusual object
        return unusual;
    },

    /**
     * Get the Unusual effect's name, standardized name, id & images from an EconItem Object. 
     * @description This function relies on EconItem objects returned from node-steamcommunity & node-steam-tradeoffer-manager methods.
     * @param {Object} item An EconItem object that represents an item within the Steam Economy. 
     * @returns {Object} If the EconItem object contains a description value matching 
     */
    getEffectFromObject (item) {
        //TODO
        if(!item.descriptions) {
            throw new Error('Your EconItem object seems to be missing an array of descriptions and therefore could not be an Unusual item.');
        }

        for(var n = 0; n < item.descriptions.length; n++) {
            if(item.descriptions[n].value.includes('Unusual Effect')) {
                console.log(item.market_hash_name);
            }
        }

        //throw new Error('This function has not been implemented.');
    }
}