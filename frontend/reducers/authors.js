const fetchData = require('./../../libs/fetchData');


const initialState =  [];

// Use the initialState as a default value
export default function authorsReducer(state = initialState, action) {
    console.log('authorsReducer', action)
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

        case 'authors': {
            return action.library
        }
        case 'getAuthors': {
            let authors = getAuthors();
            console.log('getAuthors got authors', authors);
            return authors;
        }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }

    function getAuthors() {
        console.log('getAuthors')
/*
        let user = this.props.store.getState().user;

        let data = await fetchData.fetchDataPost(`/main/authors/`, user);
        console.log('data', data)
*/
        return [{id: 0, code: 'code1', name: 'Name 1'}];
    }
}