import questions from '../would-you-rather/src/reducers/questions';
import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from './action'

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            }

        case ADD_CARD:
            return {
                ...state,
                [action.card.title]: {
                    ...state[action.card.title],
                    questions: state[action.card.title].questions.concat([action.card.card]),


                }
            }

        case REMOVE_DECK:
            const newState = Object.assign({}, state)
            delete newState[action.deck.title];
            return newState

        case ADD_DECK:
            return {
                ...state,
                [action.deck.title] : {
                    title : [action.deck.title],
                    questions : []
                }
            }



        default:
            return state
    }
}

export default decks