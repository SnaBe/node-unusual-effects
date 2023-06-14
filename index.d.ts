/** A Backpack.tf particle effect image object. */
export interface ParticleImage {
    size: '94x94' | '188x188' | '380x380', // The various image sizes
    source: { // The source of the particle image
        text: 'Backpack.tf', // The name of the source
        url: 'https://backpack.tf' // A link to the image
    },
    url: string // The particle image url
}

/** An object that represents an Unusual effect. */
export interface UnusualEffect {
    id: number, // The Unusual effect's unique id
    name: string, // The Unusual effect's name
    type: 'cosmetics' | 'weapons' | 'taunts', // The type of Unusual effect
    series: string, // The crate series associated with the effect
    images: { // A nested object of Backpack.tf particle images
        small: ParticleImage, // Small particle image object
        medium: ParticleImage, // Medium particle image object
        large: ParticleImage // Large particle image object
    },
    crates: Array<{ // An array of crates and cases
        name: string, // The name of the crate or case
        series_start?: string, // The numerical start of the crate series
        series_end?: string, // The numerical end of the crate series
        availability: 'active' | 'retired' // If the effect is available in the crate
    }>,
    date_added: number, // The date the effect was added to the game
    update_name: string, // The name of the in-game update
    last_update: number // The last time the object was updated
}

/** A Backpack.tf standardized Unusual effect object. */
export interface StandardizedUnusualEffect extends UnusualEffect {
    standardized_name: string // The effect's standardized name
}

/** An EconItem object represents a Team Fortress 2 item on Steam. */
export interface EconItem {
    appid: number, // The item's app id
    contexid: string, // The item's context id 
    assetid: string, // The inventory id for the item
    classid: string, // The item's class id
    instanceid: string, // The item's instance id
    amount: number, // The amount of matching items found in the inventory
    pos: number, // The item's position in the inventory
    id: string, // The item's unique id
    background_color: string, // The background color for the item on Steam
    icon_url: string, // The icon URL for the item on Steam
    icon_url_large: string, // The larger icon URL for the item on Steam
    tradable: boolean, // The item's tradable status
    actions: [ // Array of Steam actions 
        {
            link: string, // Link to perform the action
            name: string // Name of the action
        }
    ],
    market_actions?: [ // Array of Steam market actions 
        {
            link: string, // Link to perform the action
            name: string // Name of the action
        }
    ],
    name: string, // The item's display name
    name_color: string, // The hex color for the item's name
    type: string, // The item or category on Steam
    market_name: string, // The item's market name
    market_hash_name: string, // The item's market hash name
    commodity: boolean, // If the item is a commodity
    market_tradable_restriction: number, // Level of restrictions for trading
    market_marketable_restriction: number, // Level of restrictions for the Steam market
    marketable: boolean, // Can the item be listed on the Steam Community Market
    tags: [
        {
            internal_name: string, // Tag's internal name
            category: string, // Tag category or type
            name: string, // Name of the tag
            localized_tag_name: string, // Localized tag name
            color: string, // The name or background color 
            category_name: string, // The category name
            localized_category_name: string // Localized category name 
        }
    ],
    is_currency: boolean, // Is the item a type of Steam currency
    fraudwarnings: any[], // Warnings about market fraud for this item
    descriptions: [
        {
            value: string, // The description value 
            color?: string // The color of the description text or background
        }
    ]
}

/**
 * Check if a String or Number is an Unusual effect.
 * @description This function is used as middleware by the following functions; getEffectByName and getEffectById.
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { boolean } True if the specified `effect` matches any known Unusual effect, otherwise, false.
 */
export function isUnusual(effect: string | number): boolean;
/**
 * Get all the Unusual effects currently available in-game.
 * @description There are currently 240 cosmetic effects, 99 taunt effects, and 5 weapon effects available in-game.
 * @returns { Array<UnusualEffect> } An array of Unusual effect objects.
 */
export function getAllEffects(): Array<UnusualEffect>;
/**
 * Get the Unusual effect whose `id` property matches the specified string or number.
 * @description An Unusual effect's `id` can usually be obtained from a Backpack.tf API response.
 * @param { string | number } id The `id` of the Unusual effect.
 * @returns { UnusualEffect | null } An Unusual effect object matching the specified `id`, or null if no matching Unusual was found.
 */
export function getEffectById(id: string | number): UnusualEffect | null;
/**
 * Get the Unusual effect whose `name` property matches the specified string.
 * @description An Unusual effect's `name` can be obtained from an `EconItem` object or a Steam Web API response.
 * @param { string } effect The `name` of the Unusual effect.
 * @returns { UnusualEffect | null } An Unusual effect object matching the specified `effect`, or null if no matching Unusual was found.
 */
export function getEffectByName(effect: string): UnusualEffect | null;
/**
 * Get all the Unusual effects whose `type` property matches the specified string.
 * @description This function can be used to filter Unusual effects for a specific item `type`.
 * @param { string } type The `type` of in-game item that an Unusual effect is associated with.
 * @returns { Array<UnusualEffect> } An array of Unusual effect objects matching the specified `type`.
 */
export function getEffectsByType(type: string): Array<UnusualEffect> | null;
/**
 * Get all the Unusual effects whose `series` property matches the specified string.
 * @description This function can be used to filter Unusual effects for a specific crate `series`.
 * @param { string } series The series of crates or cases that an Unusual effect is associated with.
 * @returns { Array<UnusualEffect> } An array of Unusual effect objects matching the specified `series`.
 */
export function getEffectsBySeries(series: string): Array<UnusualEffect> | null;
/**
 * Get an Unusual effect from an `EconItem` object.
 * @description This function relies on `EconItem` objects returned from node-steamcommunity, node-steam-tradeoffer-manager or the Steam Web API.
 * @param { EconItem } item An `EconItem` object that represents an item within the Steam economy.
 * @returns { StandardizedUnusualEffect | null } An Unusual effect object matching the specified `item`, or null if no matching Unusual was found.
 */
export function getEffectFromObject(item: EconItem): StandardizedUnusualEffect | null;
