/** EconItem object for describing Team Fortress 2 items on Steam. */
export interface EconItem {
    appid: number, // The item's app id
    contexid: string, // The item's context id 
    assetid: string, // The inventory id for the item
    classid: string, // The item's class id
    instanceid: string, // The item's instance id
    amount: number, // The amount of matching items found in the inventory
    pos: number, // The item's position in the inventory
    id: string, // The item's unique id
    background_color: string, // The background color for the item on Steamcommunity
    icon_url: string, // The icon URL for the item on Steamcommunity
    icon_url_large: string, // The larger icon URL for the item on Steamcommunity
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
    marketable: boolean, // Can the item be listed on the Steamcommunity market
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

/** Response object for the getEffectImages function. */
export interface GetEffectImagesResponse {
    id: number, // The Unusual effect's unique id
    name: string, // The name of the Unusual effect
    images: { // An object of external links to Backpack.tf images
        small: string, // A small image is 94x94 pixels
        medium: string, // A medium image is 188x188 pixels
        large: string // A large image is 380x380 pixels
    }
}

/** Response object for the getEffectFromObject function. */
export interface GetEffectFromObjectResponse {
    id: number, // The Unusual effect's unique id
    name: string, // The name of the Unusual effect
    images: { // An object of external links to Backpack.tf images
        small: string, // A small image is 94x94 pixels
        medium: string, // A medium image is 188x188 pixels
        large: string // A large image is 380x380 pixels
    },
    standardized_name: string // The effect's standardized name (as seen on Backpack.tf)
}

/**
 * Check if a String (effect name) or Number (effect id) is an Unusual effect.
 * @description This function is used as middleware by the following methods; findEffectByName, findEffectById and getEffectImages.
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { boolean } True if the effect matches any known Unusual effect, otherwise false.
 */
export function isUnusual(effect: string | number): boolean;
/**
 * Find the effect id matching the parsed Unusual effect's name.
 * @description Unusual effect names can be obtained from an EconItem object's description or a Steam Web API response.
 * @param { string } effect The name of the Unusual effect.
 * @returns { number | null } The Unusual effect's id matching the 'effect' parameter, otherwise null.
 */
export function findEffectByName(effect: string): number | null;
/**
 * Find the Unusual effect's name matching the parsed effect id.
 * @description Unusual effect ids can usually be obtained from a Backpack.tf API response.
 * @param { string | number } id The id of the Unusual effect.
 * @returns { string } The name of the Unusual effect matching the 'id' parameter, otherwise null.
 */
export function findEffectById(id: string | number): string | null;
/**
 * Get the particle images for any given Unusual effect.
 * @description Particle images are provided by Backpack.tf and come in various sizes (small, medium, large).
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { GetEffectImagesResponse | null } An object containing the Unusual effect's name, id and images.
 */
export function getEffectImages(effect: string | number): GetEffectImagesResponse | null;
/**
 * Get an Unusual effect's name, standardized name, id and images from an EconItem object.
 * @description This function relies on EconItem objects returned from node-steamcommunity, node-steam-tradeoffer-manager or the Steam Web API.
 * @param { EconItem } item An EconItem object that represents an item within the Steam economy.
 * @returns { GetEffectFromObjectResponse | null } An object containing the available details for the Unusual effect, otherwise null.
 */
export function getEffectFromObject(item: EconItem): GetEffectFromObjectResponse | null;
