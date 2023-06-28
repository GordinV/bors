const initialState = {
    menu: [
        {id: 'kasutaja', parentid: 0, kood: 'kasutaja', name: 'kasutaja', props: null},
        {id: 'main', parentid: 0, kood: 'main', name: 'main', props: null},
        {id: 'document', parentid: 0, kood: 'document', name: 'Documents', props: null, is_node: true},
        {id: 'library', parentid: 0, kood: 'library', name: 'Libraries', props: {type: "library", module: ["raama"], is_admin: true}, is_node: true},
        {id: 'report', parentid: 0, kood: 'report', name: 'Reports', props: {type: "report", module: ["raama"], is_admin: true}, is_node: true},
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
            props: {type: "document", module: ["raama"], is_admin: true},
            is_node: false
        },
        {
            id: 'RAAMA',
            parentid: 'module',
            kood: 'RAAMA',
            name: 'Accounting',
            props: {type: "module", module: ["main"], is_admin: true},
            is_node: false
        },
        {
            id: 'MAIN',
            parentid: 'module',
            kood: 'MAIN',
            name: 'Pictures',
            props: {type: "module", module: ["raama"], is_admin: true},
            is_node: false
        },
        {
            id: 'SMK',
            parentid: 'document',
            kood: 'SMK',
            name: 'Received payment orders',
            props: {type: "document", module: ["raama"], is_admin: true},
            is_node: false
        },
        {
            id: 'nomenclature',
            parentid: 'library',
            kood: 'nomenclature',
            name: 'Nomenclatures',
            props: {type: "library", module: ["raama"], is_admin: true},
            is_node: false
        },
        {
            id: 'asutused',
            parentid: 'library',
            kood: 'asutused',
            name: 'Clients register',
            props: {type: "library", module: ["raama"], is_admin: true},
            is_node: false
        },
        {
            id: 'kaive_aruanne',
            parentid: 'report',
            kood: 'kaive_aruanne',
            name: 'Bilanss',
            props: {type: "report", module: ["raama"], is_admin: true},
            is_node: false
        },

    ],
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    return state;
}
