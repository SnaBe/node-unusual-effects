//Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const Unusual = require('../index');

console.log(Unusual.findEffectById(20));

console.log(Unusual.findEffectByName('Burning Flames'));

console.log(Unusual.findEffectById(32));

console.log(Unusual.isUnusual('Flying Tits'));

console.log(Unusual.getEffectImages(7));

//Example of error handling
try {
    const effect = Unusual.findEffectByName('Sunbeams');

    console.log(effect);
} catch (error) {
    console.log(error.message);
}