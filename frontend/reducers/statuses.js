const initialState = {
    user: {
        id: 0,
        kasutaja: null,
        Ametnik: null,
        is_kasutaja: false,
        is_admin: false,
        is_raama: false,
        logedIn: false
    },
    activePageComponent: 'pictures',
    reloadActivePageComponent: false,
    isPictureShow: false,
    pictureId: null,
    menu: [
        {id: 'kasutaja', parentid: 0, kood: 'kasutaja', name: 'kasutaja', props: null},
        {id: 'main', parentid: 0, kood: 'main', name: 'main', props: null},
        {id: 'document', parentid: 0, kood: 'document', name: 'Documents', props: null, is_node: true},
        {
            id: 'pictures',
            parentid: 'document',
            kood: 'Pictures',
            name: 'Pictures',
            props: {type: "document", module: ["main"]},
            is_node: false
        },
        {
            id: 'TAOTLUS_LOGIN',
            parentid: 'document',
            kood: 'TAOTLUS_LOGIN',
            name: 'New user applications',
            props: {type: "document", module: ["main"], is_admin: true},
            is_node: false
        },
        {
            id: 'DEALS',
            parentid: 'document',
            kood: 'DEALS',
            name: 'Deals with pictures',
            props: {type: "document", module: ["main"], is_admin: true},
            is_node: false
        },
    ],
    continents: ['', 'Europe', 'America', 'Asia', 'Australia', 'Russia'],
    cities: ['', 'Tallinna', 'Tartu', 'Narva', 'Võru', 'Valga', 'Sillamäe', 'Viljandi'],
    regions: ['', 'Ida Virumaa', 'Lääne Virumaa', 'Harjumaa', 'Lääne', 'Pärnu', 'Saare', 'Hiiumaa', 'Viljandi', 'Valga', 'Võru', 'Tartu', 'Põlva', 'Järva'],
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    console.log('reducer', action)
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'user': {
            return {
                ...state, user: action.user
            }
        }
        case 'activePageComponent': {
            return {
                ...state, activePageComponent: action.activePageComponent
            }
        }
        case 'reloadActivePageComponent': {
            return {
                ...state, reloadActivePageComponent: action.reloadActivePageComponent
            }
        }
        case 'isPictureShow': {
            return {
                ...state, isPictureShow: action.isPictureShow
            }
        }
        case 'pictureId': {
            return {
                ...state, pictureId: action.pictureId
            }
        }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

/*
export default function getAuthors () {
    console.log('getAuthors')
    return dispatch => {
        // диспатчим лоадер
        /!*
                    dispatch({
                        type: authors,
                        payload: true
                    })

        *!/
        fetchData.fetchDataPost(`/main/authors/`).then((response) => {
            // успешно получили данные
            dispatch({
                type: 'authors',
                authors: response.data.data
            });

        });
        /!*

                    axios.get('/main/authors/')
                        .then(res => {
                            // успешно получили данные
                            dispatch({
                                type: 'authors',
                                payload: result.data.data
                            })
                        })
        *!/
        /!*
                        .cath(err => {
                            // Ошибка...
                            dispatch({
                                type: GET_PROFILE_ERROR
                                payload: true
                            })
                        })
        *!/
    }
}
*/
