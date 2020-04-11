//Use case examples for finding TF2 Unusual effects based on some known parameters.
const Unusual = require('../index');

console.log(Unusual.findEffectById(20));

console.log(Unusual.findEffectByName('Burning Flames'));

console.log(Unusual.findEffectById(32));

console.log(Unusual.isUnusual('Flying Tits'));

console.log(Unusual.getEffectImages(7));