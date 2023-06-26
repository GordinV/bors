const initialState = {
    menu: [
        {id: 'kasutaja', parentid: 0, kood: 'kasutaja', name: 'kasutaja', props: null},
        {id: 'main', parentid: 0, kood: 'main', name: 'main', props: null},
        {id: 'document', parentid: 0, kood: 'document', name: 'Documents', props: null, is_node: true},
        {id: 'module', parentid: 0, kood: 'module', name: 'Modules', props: null, is_node: true},
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
        {
            id: 'AUTHORS',
            parentid: 'document',
            kood: 'AUTHORS',
            name: 'Authors',
            props: {type: "document", module: ["main"], is_admin: true},
            is_node: false
        },
        {
            id: 'ARV',
            parentid: 'document',
            kood: 'ARV',
            name: 'Arved',
            props: {type: "document", module: ["main"], is_admin: true},
            is_node: false
        },
        {
            id: 'RAAMA',
            parentid: 'module',
            kood: 'RAAMA',
            name: 'Accounting',
            props: {type: "module", module: ["raama"], is_admin: true},
            is_node: false
        },
    ],
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    console.log('reducer', action)
    return state;
}
