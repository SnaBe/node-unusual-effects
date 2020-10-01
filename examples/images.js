//Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const Unusual = require('../index');

//Example of finding particle images for Unusual effects based on names and ids
//You can change the effect name and id to see different results
//Get the particle images for the Nebula Unusual effect
console.log(Unusual.getEffectImages('Nebula'));

//Get the particle images matching the effect id of 9
console.log(Unusual.getEffectImages(9));

//An example of an Unusual Effect that doesn't exist, meaning, no images could be found
console.log(Unusual.findEffectByName('Aurora Borealis'));