// Replace this with const Unusual = require('unusual-effects'); if used outside of the module directory
const Unusual = require('../index');

// We'll use the SteamCommunity module to retrieve a user's Steam inventory
// You could also you use the steam-tradeoffer-manager module or request the user's inventory from the Steam Wep API
const SteamCommunity = require('steamcommunity');

// Our new SteamCommunity instance
const community = new SteamCommunity();

// Example of getting Unusual effects from EconItem objects with error handling 
// You can change the Steam ID to see different results
try {
    // Retrieve Steam user 76561197977733292's Team Fortress 2 inventory
    community.getUserInventoryContents('76561197977733292', 440, 2, true, (err, inventory) => {
        // Check if the callback resulted in any errors
        if(err) {
            // We encountered an error attempting to get the user's inventory
            // So we throw an error to catch
            throw new Error(err.message);
        } else {
            // Loop trough the retrieved inventory
            inventory.forEach(item => {
                // Add an effect value to the item object
                item.effect = Unusual.getEffectFromObject(item);

                // Check if the item contains an Unusual effect
                if(item.effect !== null) {
                    // Log all the Unusual hats, taunts and weapons we find
                    console.log(item);
                }
            });
        }
    });    
} catch (error) {
    // Log the error we caught
    console.log('Error getting Unusual effects: %s', error.message);
}