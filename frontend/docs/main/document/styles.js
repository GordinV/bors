module.exports = {
    docRow: {
        display: 'flex',
        flexDirection: 'row',
        /*
                border: '1px solid blue'
        */
    },
    docColumn: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    },
    doc: {
        display: 'flex',
        flexDirection: 'column',
        /*
                border: '1px solid brown'
        */
    },
    ok: {
        backgroundColor:'lightgreen',
        width:'100%',
        textAlign: 'right'
    },
    error: {
        backgroundColor:'lightcoral',
        width:'100%',
        textAlign: 'right'
    },
    notValid: {
        backgroundColor:'yellow',
        width:'100%',
        textAlign: 'right'

    },
    modalValidate: {
        iconImage: '/images/icons/info.png'
    },
    pictureFrame: {
        width: '50%'
    },
    picture : {
        objectFit: 'contain',
        width:'100%'
    },
    toolBarContainerStyle: {
        display: 'flex',
        width: '100%',
        height: 'Auto',
        marginBottom:'5px',
        marginHeight:'5px',
        borderRadius:'5px'
    },

    right : {
        justifyContent: 'flex-end',
    },

    left: {
        justifyContent: 'flex-start',
    }

};