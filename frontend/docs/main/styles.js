module.exports = {
    grid: {
        mainTable: {
            width: '100%',
            td: {
                display: 'table-cell',
                paddingLeft: '5px',
            },
            th: {
                display: 'table-cell',
                paddingLeft: '5px',
            },
            tdButtons: {
                display: 'inline-flex'
            }
        },
        headerTable: {
            width: '100%',
        },

        gridContainer: {
            width: '100%'
        }

    },
    img: {
        objectFit: 'contain',
        width: '50%'
    },
    picture: {
        objectFit: 'contain',
        width: '500px',
        height: '500px'
    },

    frame: {
        width: '100%'
    },
    docRow: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5px'
    },
    pictureFrame: {
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '5px'
    },
    label: {
        width: '30%'
    },
    pageFrame: {
        display: 'inline-flex',
        border: '1px solid black',
        borderRadius: '10px'
    },
    filterFrame: {
        width: '30%',
//        border: '1px solid grey',
        margin: '5px'

    },
    componentFrame: {
        width: '70%',
//        border: '1px solid red',
        margin: '5px'
    },
    docColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    button: {
        background: 'white',
        margin: '5px 2px',
        borderRadius: '5px',
        height: '30px',
        display: 'flex',
        border: '1px solid gray'
    },
    toolbarBtnImage: {
        width: 'auto',
        height: 'auto'
    },
    button_edit: {
        icon: 'images/icons/edit.png',
    },
    button_accept: {
        icon: 'images/icons/ok.png',
    },
    button_delete: {
        icon: 'images/icons/delete.png',
    },
    error: {
        width: '100%',
        backgroundColor: 'lightcoral'
    },
    ok: {
        width: '100%',
        backgroundColor: 'lightgreen'
    },
    info: {
        width: '100%',
        backgroundColor: 'lightyellow'
    },
    icons: {
        add: '/images/icons/add.png',
        edit: '/images/icons/edit.png',
        delete: '/images/icons/delete.png',
        filter: '/images/icons/filter.png',
        print: '/images/icons/print.png',
        ok: '/images/icons/ok.png',
        cancel: '/images/icons/cancel.png',
        save: '/images/icons/save.png',
        execute: '/images/icons/execute.png',
        start: '/images/icons/start.png',
        login: '/images/icons/login.png',
        account: '/images/icons/account.png',
        rekv: '/images/icons/rekv.png',
        info: '/images/icons/info.png',
        settings: '/images/icons/settings.png',
        mail: '/images/icons/mail.png',
        select: '/images/icons/select.png',
        refresh: '/images/icons/refresh.png',
        attachment: '/images/icons/attachment.png',
        sale: '/images/icons/sale.png',
    },
    searchText: {
        wrapper: {
            height: '30px',
            borderRadius: '5px',
            border: '1px solid grey',
            margin: '5px 2px'

        },
        text: {
            border: 0,
            padding: 0,
            outline: 0,
            height: '25px'
        },
        button: {
            height: '28px',
            width: '28px',
            border: 0,
            padding: 0,
            outline: 0
        }
    },
    btnEdit: {
        width: '30px',
        marginLeft: '2px'
    },
    btnSale: {
        width: '30px',
        marginLeft: '2px'
    },
    select: {
        height: '30px',
        width: '100px',
        borderRadius: '5px',
    },
    filterBlock: {
        marginTop: '5px',
        backgroundColor: 'white',
        opacity: '0.9'

    },
    filterLabel: {
        display: 'inline-block',
        width: '30%',
        marginRight: '10px'
    }
};