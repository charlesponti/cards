/**
 * @description Suits in a deck of cards
 * @type {[String]}
 */
export const SUITS = ['clubs', 'diamonds', 'hearts', 'spades']

/**
 * @description Ranks in a suite of cards
 * @type {[String]}
 */
export const RANKS = [...[...new Array(9)].map((v, i) => (i + 2).toString()), 'J', 'Q', 'K', 'A']

/**
 * @description Emojis of suites of cards
 * @type {{ [string]: sting }}
 */
export const SUITMOJIS = {
    "clubs": "♣️",
    "diamonds": "💎",
    "hearts": "🖤",
    "spades": "♠️"
}

/**
 * @description Emojis of ranks in a suite of cards
 * @type {{ [string]: sting }}
 */
export const RANKMOJIS = {
    'K': "🤴",
    'Q': "👸",
    'J': "🎃",
    'A': '👾'
}