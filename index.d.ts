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
export function findEffectById(id: string | number): string;
/**
 * Get the particle images for any given Unusual effect.
 * @description Particle images are provided by Backpack.tf and comes in various sizes (small, medium, large).
 * @param { string | number } effect Any Unusual effect name or id.
 * @returns { any | null } An object containing the Unusual effect's name, id and images.
 */
export function getEffectImages(effect: string | number): any | null;
/**
 * Get an Unusual effect's name, standardized name, id & images from an EconItem object.
 * @description This function relies on EconItem objects returned from node-steamcommunity, node-steam-tradeoffer-manager or the Steam Web API.
 * @param { any } item An EconItem object that represents an item within the Steam Economy.
 * @returns { any | null } An object containing the available details for an Unusual effect, otherwise null.
 */
export function getEffectFromObject(item: any): any | null;
