const initialState = {
    filter: {
        searchText: '',
        additionalFilter: {continent: '', region: '', city: ''}
    },
};

// Use the initialState as a default value
export default function filterReducer(state = initialState, action) {
    console.log('filterReducer', action)
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

        case 'filter': {
            return {
                ...state, filter: {searchText: action.filter}
            }
        }
        case 'additionalFilter': {
            return {
                ...state, filter: {additionalFilter: action.additionalFilter}
            }

        }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
