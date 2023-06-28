
const initialState = {
    userApplications: [],
};

// Use the initialState as a default value
export default function menuReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

        case 'userApplications': {
            return {
                ...state, userApplications: action.userApplications, reloadActivePageComponent: false
            }

        }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
