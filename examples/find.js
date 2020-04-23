//Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const Unusual = require('../index');

//Example of finding Unusual effects based on names and ids with error handling 
//You can change the effect name and id to see different results
try {
    //Should log 17 (17 is the effect id matching Sunbeams)
    console.log(Unusual.findEffectByName('Sunbeams'));

    //Should log Scorching Flames (14 is the effect id for Scorching Flames)
    console.log(Unusual.findEffectById(14));
} catch (error) {
    //Log the error we caught
    console.log('Error finding Unusual effect: %s', error.message);
}