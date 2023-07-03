'use strict';

const React = require('react');
const DocumentRegister = require('./../documents/documents.jsx');
const BtnGetXml = require('./../../components/button-register/button-task/index.jsx');
const ToolbarContainer = require('./../../components/toolbar-container/toolbar-container.jsx');
const InputNumber = require('../../components/input-number/input-number.jsx');
const InputText = require('../../components/input-text/input-text.jsx');
const Loading = require('../../components/loading/index.jsx');

const styles = require('./styles');
const DOC_TYPE_ID = 'KAIBEANDMIK';
const TOOLBAR_PROPS = {
    add: false,
    edit: false,
    delete: false,
    start: false,
    print: true,
    email: true
};
const DocContext = require('./../../doc-context.js');

/**
 * Класс реализует документ справочника признаков.
 */
class Documents extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.renderer = this.renderer.bind(this);
        this.state = {
            alg_saldo: 0,
            deebet: 0,
            kreedit: 0,
            lopp_saldo: 0,
            read: 0,
            filtri_read: 0
        };

    }

    render() {
        return (
            <div>
                <DocumentRegister initData={this.props.initData}
                                  history={this.props.history ? this.props.history : null}
                                  module={this.props.module}
                                  store={this.props.store}
                                  ref='register'
                                  toolbarProps={TOOLBAR_PROPS}
                                  docTypeId={DOC_TYPE_ID}
                                  style={styles}
                                  render={this.renderer}/>
                <InputText title="Filtri all / read kokku:"
                           name='read_kokku'
                           style={styles.total}
                           ref="input-read"
                           value={String(this.state.filtri_read + '/' + this.state.read) || 0}
                           disabled={true}/>
                <InputNumber title="Alg.saldo kokku:"
                             name='alg_saldo_kokku'
                             style={styles.total}
                             ref="input-read"
                             value={Number(this.state.alg_saldo) || 0}
                             disabled={true}/>
                <InputNumber title="Deebet kokku:"
                             name='deebet_kokku'
                             style={styles.total}
                             ref="input-deebet"
                             value={Number(this.state.deebet) || 0}
                             disabled={true}/>
                <InputNumber title="Kreedit kokku:"
                             name='kreedit_kokku'
                             style={styles.total}
                             ref="input-kreedit"
                             value={Number(this.state.kreedit) || 0}
                             disabled={true}/>
                <InputNumber title="Lõpp saldo kokku:"
                             name='lopp_saldo_kokku'
                             style={styles.total}
                             ref="input-lopp_saldo"
                             value={Number(this.state.lopp_saldo) || 0}
                             disabled={true}/>
            </div>
        )
    }

    renderer(self) {

        if (!self || !self.gridData || !self.gridData.length) {
            // пока нет данных
            return null;
        }

        let alg_saldo = self.gridData ? self.gridData[0].alg_saldo_total : 0;
        let deebet = self.gridData ? self.gridData[0].deebet_total : 0;
        let kreedit = self.gridData ? self.gridData[0].kreedit_total : 0;
        let lopp_saldo = self.gridData ? self.gridData[0].lopp_saldo_total : 0;


        let read = self.gridData && self.gridData.length && self.gridData[0].rows_total ? self.gridData[0].rows_total : 0;
        let filtri_read = self.gridData && self.gridData.length && self.gridData[0].filter_total ? self.gridData[0].filter_total : 0;

        this.setState({
            alg_saldo: alg_saldo,
            deebet: deebet,
            kreedit: kreedit,
            lopp_saldo: lopp_saldo,
            read: read,
            filtri_read: filtri_read
        });

    }

    //handler для события клик на кнопках панели
    onClickHandler() {
        const Doc = this.refs['register'];

        if (Doc.gridData && Doc.gridData.length) {
            //делаем редайрект на конфигурацию
            let sqlWhere = Doc.state.sqlWhere;
            let url = `/reports/kaibeandmik/${DocContext.userData.uuid}`;
            let params = encodeURIComponent(`${sqlWhere}`);
            let filter = encodeURIComponent(`${(JSON.stringify(Doc.filterData))}`);
            let fullUrl = sqlWhere ? `${url}/${filter}/${params}` : `${url}/${filter}`;
            window.open(fullUrl);

        } else {
            Doc.setState({
                warning: 'Mitte ühtegi kirjed leidnud', // строка извещений
                warningType: 'notValid',

            });
        }
    }

}


module.exports = (Documents);


