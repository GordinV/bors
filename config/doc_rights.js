module.exports = {
    LEPING: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja', 'raama', 'juht', 'kasutaja'],
        add: ['kasutaja', 'raama', 'juht'],
        edit: ['kasutaja', 'raama', 'juht'],
        delete: ['kasutaja', 'raama', 'juht'],
        arved: ['raama']
    },
    USERID: {
        select: ['admin', 'juht'],
        add: ['admin',],
        edit: ['admin',],
        delete: ['admin',]
    },
    REKL: {
        select: ['juht'],
        add: ['juht'],
        edit: ['juht'],
        delete: ['juht']
    },
    REKV: {
        select: ['admin', 'juht', 'raama'],
        add: ['admin'],
        edit: ['admin', 'juht', 'raama'],
        delete: ['admin']
    },

    ARV: {
        select: ['kasutaja', 'arvestaja', 'vaatleja', 'peakasutaja', 'raama'],
        add: ['kasutaja', 'peakasutaja', 'raama'],
        edit: ['kasutaja', 'peakasutaja', 'raama'],
        delete: ['kasutaja', 'peakasutaja', 'raama']
    },
    SMK: {
        select: ['kasutaja', 'arvestaja', 'vaatleja', 'peakasutaja', 'raama'],
        add: ['kasutaja', 'peakasutaja', 'raama'],
        edit: ['kasutaja', 'peakasutaja', 'raama'],
        delete: ['kasutaja', 'peakasutaja', 'raama'],
        import: ['admin', 'raama']
    },
    PANK_VV: {
        edit: ['kasutaja', 'peakasutaja'],
        delete: ['kasutaja', 'peakasutaja'],
    },
    VMK: {
        select: ['kasutaja', 'arvestaja', 'vaatleja', 'peakasutaja', 'raama'],
        add: ['kasutaja', 'peakasutaja', 'raama'],
        edit: ['kasutaja', 'peakasutaja', 'raama'],
        delete: ['kasutaja', 'peakasutaja', 'raama']
    },
    VORDER: {
        select: ['kasutaja', 'arvestaja', 'vaatleja', 'peakasutaja'],
        add: ['kasutaja', 'peakasutaja'],
        edit: ['kasutaja', 'peakasutaja'],
        delete: ['kasutaja', 'peakasutaja']
    },
    SORDER: {
        select: ['kasutaja', 'arvestaja', 'vaatleja', 'peakasutaja'],
        add: ['kasutaja', 'peakasutaja'],
        edit: ['kasutaja', 'peakasutaja'],
        delete: ['kasutaja', 'peakasutaja']
    },
    TUNNUS: {
        select: ['raama'],
        add: ['raama'],
        edit: ['raama'],
        delete: ['raama']
    },
    PROJECT: {
        select: ['raama'],
        add: ['raama'],
        edit: ['raama'],
        delete: ['raama']
    },
    KONTOD: {
        select: ['raama'],
        add: ['raama'],
        edit: ['raama'],
        delete: ['raama']
    },
    //nomenclature
    NOMENCLATURE: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja', 'raama', 'juht'],
        add: ['raama', 'juht'],
        edit: ['raama', 'juht'],
        delete: ['raama', 'juht'],
        import: ['admin']
    },
    ASUTUSED: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja', 'raama', 'juht'],
        add: ['kasutaja', 'arvestaja', 'raama', 'juht'],
        edit: ['kasutaja', 'arvestaja', 'raama', 'juht'],
        delete: ['kasutaja', 'raama', 'juht']
    },

    OBJEKT: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja', 'raama', 'juht', 'kasutaja'],
        add: ['kasutaja', 'raama', 'juht', 'kasutaja'],
        edit: ['kasutaja', 'raama', 'juht', 'kasutaja'],
        delete: ['kasutaja', 'raama', 'juht', 'kasutaja']
    },
    ARTIKKEL: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja'],
        add: ['kasutaja'],
        edit: ['kasutaja'],
        delete: ['kasutaja']
    },
    ALLIKAS: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja'],
        add: ['kasutaja'],
        edit: ['kasutaja'],
        delete: ['kasutaja']
    },
    TEGEV: {
        select: ['kasutaja', 'vaatleja', 'peakasutaja'],
        add: ['kasutaja'],
        edit: ['kasutaja'],
        delete: ['kasutaja']
    },
    //asutuse_liik
    TAOTLUS_LOGIN: {
        select: ['admin'],
        edit: ['admin'],
        delete: ['admin'],

    },
    TEATIS: {
        select: ['arvestaja'],
        add: ['arvestaja'],
        edit: ['arvestaja'],
        delete: ['arvestaja']
    },
    KAIBEANDMIK: {
        select: ['raama'],
    },
    KONTONDMIK: {
        select: ['raama'],
    },

};