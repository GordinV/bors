'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const DocContext = require('./../doc-context.js');

const Menu = require('./../components/menu-toolbar/menu-toolbar.jsx');

const StartMenu = require('./../components/start-menu/start-menu.jsx'),
    RaamaRegister = require('./../docs/raama/index.jsx'),
    AsutusRegister = require('./../docs/asutused/index.jsx'),
    AsutusDocument = require('../docs/asutused/document/index.jsx'),
    ObjectDocument = require('../docs/objekt/document/index.jsx'),
    ObjectRegister = require('./../docs/objekt/index.jsx'),
    KontoDocument = require('../docs/kontod/document/index.jsx'),
    KontoRegister = require('./../docs/kontod/index.jsx'),
    TunnusDocument = require('../docs/tunnus/document/index.jsx'),
    TunnusRegister = require('./../docs/tunnus/index.jsx'),
    ProjektDocument = require('../docs/project/document/index.jsx'),
    ProjektRegister = require('./../docs/project/index.jsx'),
    NomDocument = require('../docs/nomenclature/document/index.jsx'),
    NomRegister = require('./../docs/nomenclature/index.jsx'),
    LepingDocument = require('../docs/leping/document/index.jsx'),
    ArveRegister = require('./../docs/arv/index.jsx'),
    ArveDocument = require('../docs/arv/document/index.jsx'),
    JournalRegister = require('./../docs/journal/index.jsx'),
    JournalDocument = require('../docs/journal/document/index.jsx'),
    SorderRegister = require('./../docs/sorder/index.jsx'),
    SorderDocument = require('../docs/sorder/document/index.jsx'),
    PankVvRegister = require('./../docs/pank_vv/index.jsx'),
    PankVvDocument = require('../docs/pank_vv/document/index.jsx'),
    VorderRegister = require('./../docs/vorder/index.jsx'),
    VorderDocument = require('../docs/vorder/document/index.jsx'),
    SmkRegister = require('./../docs/smk/index.jsx'),
    SmkDocument = require('../docs/smk/document/index.jsx'),
    VmkRegister = require('./../docs/vmk/index.jsx'),
    VmkDocument = require('../docs/vmk/document/index.jsx'),
    KaiveAruanne = require('./../docs/kaive_aruanne/index.jsx'),
    KaibeAndmik = require('./../docs/kaibeandmik/index.jsx'),
    KontoAndmik = require('./../docs/kontoandmik/index.jsx'),
    ArvedKoodiJargi = require('./../docs/arved_koodi_jargi/index.jsx'),
    ArveKokkuvote = require('./../docs/arve_kokkuvote/index.jsx'),
    LepingRegister = require('./../docs/leping/index.jsx'),
    MooduDocument = require('../docs/moodu/document/index.jsx'),
    MooduRegister = require('./../docs/moodu/index.jsx'),
    RekvRegister = require('./../docs/rekv/index.jsx'),
    RekvDocument = require('./../docs/rekv/document/index.jsx');

const {Route} = require('react-router-dom');
const {StyleRoot} = require('radium');
const MODULE = 'raama';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.prepareParamsForToolbar = this.prepareParamsForToolbar.bind(this);
    }

    /*
        render() {
            return <div>Raama</div>
        }
    */
    render() {
        let activeStyle = {backgroundColor: 'lightblue'};
        let btnParams = this.prepareParamsForToolbar();
        let store = this.props.store;

        return (
            <StyleRoot>
                <Route exact path="/raama"
                       render={(props) =>
                           <RaamaRegister
                               store={store}
                               history={props.history}
                               initData={this.props.initData}
                               module={MODULE}/>}/>
                <Route exact path="/raama/asutused/:docId" component={AsutusDocument}/>
                <Route exact path="/raama/asutused"
                       render={(props) => <AsutusRegister history={props.history}
                                                          store={store}
                                                          initData={this.props.initData}
                                                          module={MODULE}/>}
                />
                <Route exact path="/raama/objekt/:docId" component={ObjectDocument}/>
                <Route exact path="/raama/objekt"
                       render={(props) => <ObjectRegister history={props.history}
                                                          store={store}
                                                          initData={this.props.initData}
                                                          module={MODULE}/>}/>

                {/*
Признак проводки, справочник
*/}

                <Route exact path="/raama/tunnus/:docId" component={TunnusDocument}/>
                <Route exact path="/raama/tunnus"
                       render={(props) => <TunnusRegister history={props.history}
                                                          store={store}
                                                          initData={this.props.initData}
                                                          module={MODULE}/>}/>

                {/*
Проекты, справочник
*/}

                <Route exact path="/raama/project/:docId"
                       component={ProjektDocument}
                       store={store}
                />
                <Route exact path="/raama/project"
                       render={(props) => <ProjektRegister history={props.history}
                                                           store={store}
                                                           initData={this.props.initData}
                                                           module={MODULE}/>}/>

                {/*
Проводки
*/}

                <Route exact path="/raama/journal/:docId"
                       component={JournalDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/journal"
                       render={(props) => <JournalRegister history={props.history}
                                                           store={store}
                                                           initData={this.props.initData}
                                                           module={MODULE}/>}/>
                <Route exact path="/raama/arv/:docId"
                       component={ArveDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/arv"
                       render={(props) => <ArveRegister history={props.history}
                                                        store={store}
                                                        initData={this.props.initData}
                                                        module={MODULE}/>}/>
                <Route exact path="/raama/sorder/:docId"
                       component={SorderDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/sorder"
                       render={(props) => <SorderRegister history={props.history}
                                                          store={store}
                                                          initData={this.props.initData}
                                                          module={MODULE}/>}/>
                <Route exact path="/raama/vorder/:docId"
                       component={VorderDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/vorder"
                       render={(props) => <VorderRegister history={props.history}
                                                          store={store}
                                                          initData={this.props.initData}
                                                          module={MODULE}/>}/>
                <Route exact path="/raama/smk/:docId"
                       component={SmkDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/smk"
                       render={(props) => <SmkRegister history={props.history}
                                                       initData={this.props.initData}
                                                       module={MODULE}/>}/>
                <Route exact path="/raama/pank_vv/:docId"
                       component={PankVvDocument}
                       store={store}
                />
                <Route exact path="/raama/pank_vv"
                       render={(props) => <PankVvRegister
                           module={MODULE}
                           history={props.history}
                           initData={this.props.initData}/>}/>


                <Route exact path="/raama/vmk/:docId"
                       component={VmkDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/vmk"
                       render={(props) => <VmkRegister history={props.history}
                                                       initData={this.props.initData}
                                                       module={MODULE}/>}/>
                <Route exact path="/raama/leping/:docId"
                       component={LepingDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/leping"
                       render={(props) => <LepingRegister history={props.history}
                                                          store={store}
                                                          initData={this.props.initData}
                                                          module={MODULE}/>}/>
                <Route exact path="/raama/andmed/:docId"
                       component={MooduDocument}
                       store={store}
                       module={MODULE}/>
                <Route exact path="/raama/andmed"
                       render={(props) => <MooduRegister history={props.history}
                                                         store={store}
                                                         initData={this.props.initData}
                                                         module={MODULE}/>}/>

                <Route exact path="/raama/nomenclature/:docId" component={NomDocument}/>
                <Route exact path="/raama/nomenclature"
                       render={(props) => <NomRegister history={props.history}
                                                       store={store}
                                                       module={MODULE}
                                                       initData={this.props.initData}/>}/>

                <Route exact path="/raama/kontod/:docId"
                       store={store}
                       component={KontoDocument}/>
                <Route exact path="/raama/kontod"
                       render={(props) => <KontoRegister history={props.history}
                                                         module={MODULE}
                                                         store={store}
                                                         initData={this.props.initData}/>}/>


                <Route exact path="/raama/kaive_aruanne"
                       render={(props) => <KaiveAruanne history={props.history}
                                                        module={MODULE}
                                                        store={store}
                                                        initData={this.props.initData}/>}/>
                <Route exact path="/raama/kaibeandmik"
                       render={(props) => <KaibeAndmik history={props.history}
                                                       module={MODULE}
                                                       store={store}
                                                       initData={this.props.initData}/>}/>

                <Route exact path="/raama/kontoandmik"
                       render={(props) => <KontoAndmik history={props.history}
                                                       module={MODULE}
                                                       store={store}
                                                       initData={this.props.initData}/>}/>

                <Route exact path="/raama/arved_koodi_jargi"
                       render={(props) => <ArvedKoodiJargi history={props.history}
                                                           module={MODULE}
                                                           store={store}
                                                           initData={this.props.initData}/>}/>
                <Route exact path="/raama/arve_kokkuvote"
                       render={(props) => <ArveKokkuvote history={props.history}
                                                         module={MODULE}
                                                         store={store}
                                                         initData={this.props.initData}/>}/>
                <Route exact path="/raama/rekv"
                       render={(props) => <RekvRegister history={props.history}
                                                        store={store}
                                                        initData={this.props.initData}
                                                        module={MODULE}/>}/>
                <Route exact path="/raama/rekv/:docId"
                       render={(props) => <RekvDocument  {...props}
                                                         module={MODULE}
                                                         store={store}
                                                         history={props.history}/>}
                />

            </StyleRoot>)
    }

    prepareParamsForToolbar() {
        return {
            btnStart: {
                show: true
            },
            btnLogin: {
                show: true,
                disabled: false
            },
            btnAccount: {
                show: true,
                disabled: false
            }

        };
    }

}

module.exports = App;