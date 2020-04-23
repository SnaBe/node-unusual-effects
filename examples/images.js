//Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const Unusual = require('../index');

//Example of finding particle images for Unusual effects on based names and ids with error handling 
//You can change the effect name and id to see different results
try {
    //Get the particle images for the Nebula Unusual effect
    console.log(Unusual.getEffectImages('Nebula'));

    //Get the particle images matching the effect id of 9
    console.log(Unusual.getEffectImages(9));
} catch (error) {
    //Log the error we caught
    console.log('Error getting particle images for Unusual effect: %s', error.message);    
}