'use strict';

const DocContext = require('../../doc-context');
const React = require('react');
const Documents = require('./../documents/documents.jsx');
const styles = require('./styles');
const DOC_TYPE_ID = 'RAAMA';
const TOOLBAR_PROPS = require('./../../../config/constants').TEATIS.toolbarProps;

/**
 * Класс реализует документ справочника признаков.
 */
class Register extends React.PureComponent {
    constructor(props) {
        super(props);
        this.btnEditClick = this.btnEditClick.bind(this);
        this.renderer = this.renderer.bind(this);
        this.data = [];

    }

    componentDidMount() {
        if (this.props.store) {
            // сохраним модуль в сторе
            this.props.store.dispatch({type: 'module', payload: 'raama'});
        }
    }

    render() {

        let user;
        if (this.props.store) {
            user = this.props.store.getState().statuses.user;
        }
        return <Documents initData={this.props.initData}
                          history={this.props.history ? this.props.history : null}
                          module={this.props.module}
                          store={this.props.store}
                          ref='register'
                          docTypeId={DOC_TYPE_ID}
                          style={styles}
                          btnEditClick={this.btnEditClick}
                          toolbarProps={TOOLBAR_PROPS}
                          render={this.renderer}/>;
    }


    renderer(self) {
        if (self.gridData) {
            this.data = self.gridData;
        }

        return null;
    }

    btnEditClick(row_id) {
        // ищем тип документа
        let gridRowId = this.data.findIndex(row => row.id == row_id);
        if (gridRowId > -1) {
            let docTypeId = this.data[gridRowId].doc_type_id;

            return this.props.history.push({
                pathname: `/raama/${docTypeId}/${row_id}`,
                state: {module: this.props.module}
            });
        }
    }

}


module.exports = (Register);


