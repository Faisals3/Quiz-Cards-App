export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function receiveDecks (decks) { 
    return {
        type:RECEIVE_DECKS,
        decks,
    }
}