const fetchData = require('./../../libs/fetchData');


const initialState =
    {
        authors: [],
        authorId: null
    };

// Use the initialState as a default value
export default function authorsReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

        case 'authors': {
            return {
                ...state, authors: action.payload
            }
        }
        case 'authorId': {
            return {
                ...state, authorId: action.payload
            }
        }

        case 'getAuthors': {
            let authors = getAuthors();
            return authors;
        }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }

    function getAuthors() {
        return [{id: 0, code: 'code1', name: 'Name 1'}];
    }
}