const initialState = {
    pictures: [],
};

// Use the initialState as a default value
export default function pictureReducer(state = initialState, action) {
    console.log('pictureReducer', action)
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions

        case 'pictures': {
            // We need to return a new state object
            return {
                ...state, pictures: action.pictures, reloadActivePageComponent: false
            }
        }
        case 'addPicture': {
            return {
                ...state,
                pictures: state.pictures.map(
                    picture => picture.id === action.picture.id
                        ? {
                            ...picture, ...action.picture, file: picture.file
                        }
                        : picture
                ),
            }
        }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
