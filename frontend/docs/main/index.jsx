'use strict';

//import authors from "../../reducers/authors";

const React = require('react');
const styles = require('./styles');

const fetchData = require('./../../../libs/fetchData');
const Menu = require('./../../components/menu-toolbar/menu-toolbar.jsx');
const Const = require('./../../../config/constants');

const RegisterComponent = require('./register-component.jsx');
const PictureComponent = require('./picture-component.jsx');
const UserApplicationsComponent = require('./userApplications-component.jsx');
const DealsComponent = require('./dealsRegister-component.jsx');
const AuthorsComponent = require('./authorsRegister-component.jsx');
const ToolbarContainer = require('./../../components/toolbar-container/toolbar-container.jsx');

const FilterComponent = require('./filter-component.jsx');

const btnParams = {
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


/**
 * Класс реализует документ справочника признаков.
 */
class Register extends React.PureComponent {
    constructor(props) {
        super(props);
        this.btnClickEventHandler = this.btnClickEventHandler.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.btnAddClick = this.btnAddClick.bind(this);
        this.loadLibs = this.loadLibs.bind(this);
        this.data = [];
        this.state = {
            warning: null,
            warningStyle: null,
            initLoad: false,
            editDocument: false,
            pictureId: null,
            activeComponent: 'pictures',
            filter: ''
        }

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let filter = store.getState().filters.filter;
                let activeComponent = store.getState().statuses.activePageComponent;
                if (filter.searchText !== this.state.filter || JSON.stringify(filter.additionalFilter) !== JSON.stringify(this.state.additionalFilter)) {
                    this.setState({
                        filter: filter.searchText,
                        additionalFilter: filter.additionalFilter
                    }, () => {
                        // обновим запрос
                        this.fetchData()
                    });
                }

                // новой компонет в меню
                if (activeComponent !== this.state.activeComponent) {
                    this.setState({activeComponent: activeComponent}, () => this.fetchData());
                }

                let reload = store.getState().statuses.reloadActivePageComponent;
                if (reload) {

                    store.dispatch({type: 'reloadActivePageComponent', reloadActivePageComponent: false});
                    // обновим запрос
                    this.fetchData()
                }
            })
        }

    }

    /**
     * пишем делаем запрос по итогу загрузки
     */
    componentDidMount() {
        // делаем запрос
        this.fetchData();
        // грузим библиотеки
        this.loadLibs('reload', 'authors');
    }

    render() {
        const _style = Object.assign({}, styles, this.props.style ? this.props.style : {});
        const warningStyle = this.state.warningStyle && styles[this.state.warningStyle] ? styles[this.state.warningStyle] : null;

        return (
            <div style={_style.doc}>
                <Menu params={btnParams}
                      ref='menu'
                      store={this.props.store}
                      btnClickEventHandler={this.btnClickEventHandler}
                      history={this.props.history}
                      module={this.props.module}/>
                {this.state.warning ?
                    <ToolbarContainer ref='toolbar-container'>
                        <div style={warningStyle}>
                            <span>{this.state.warning}</span>
                        </div>
                    </ToolbarContainer>
                    : null}
                <div style={styles.pageFrame}>
                    <div style={styles.filterFrame}>
                        <span>Addition filters</span>
                        <FilterComponent store={this.props.store}/>
                    </div>
                    <div style={styles.componentFrame}>

                        {this.state.activeComponent == 'pictures' ? (<RegisterComponent
                            store={this.props.store}
                            btnClickEventHandler={this.btnClickEventHandler}
                        />) : null}

                        {this.state.activeComponent == 'DEALS' ? (<DealsComponent
                            store={this.props.store}
                            btnClickEventHandler={this.btnClickEventHandler}
                        />) : null}
                        {this.state.activeComponent == 'TAOTLUS_LOGIN' ? (<UserApplicationsComponent
                            store={this.props.store}
                            btnClickEventHandler={this.btnClickEventHandler}
                        />) : null}
                        {this.state.activeComponent == 'AUTHORS' ? (<AuthorsComponent
                            store={this.props.store}
                            btnClickEventHandler={this.btnClickEventHandler}
                        />) : null}

                    </div>
                </div>
                {this.state.activeComponent == 'pictures' && this.state.editDocument ? <PictureComponent
                    store={this.props.store}
                    id={this.state.pictureId}
                    show={true}
                    btnClickEventHandler={this.btnClickEventHandler}
                /> : null}
            </div>
        );
    }

    /**
     * обработчик событий кнопки
     * @param event
     * @param docId
     */
    btnClickEventHandler(event, docId) {
        switch (event) {
            case 'btnAdd':
                // новая картинка
                this.props.store.dispatch({type: 'pictureId', pictureId: null});
                this.props.store.dispatch({type: 'isPictureShow', isPictureShow: true});
                this.setState({editDocument: true, pictureId: null})
                break;
            case 'reload':
                // reload
                this.fetchData();
                this.setState({editDocument: false, pictureId: docId})
                break;
            case 'Cancel':
                this.setState({editDocument: false, pictureId: null})
                break;
            case 'saved':
                this.setState({editDocument: false, pictureId: docId})
                break;
        }
    }


    /**
     * Вернет компонет - панель инструментов документа
     * @returns {XML}
     */
    renderDocToolBar() {
        const toolbarParams = {
            btnStart: {
                show: true
            },
            btnAdd: {
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

        return (
            <div>
                <div style={styles.docRow}>
                    <ToolbarContainer ref='toolbarContainer'>
                        <BtnAdd onClick={this.btnAddClick}
                                show={toolbarParams['btnAdd'].show}
                                disable={toolbarParams['btnAdd'].disabled}/>
                    </ToolbarContainer>
                </div>
            </div>
        );
    }

    btnAddClick() {
        console.log('main btnAddClick')
        this.fetchData()
        this.forceUpdate()
    }

    /**
     * при необходимости подгрухзит нужную библиотеку
     * @param library
     */
    loadLibs(event, library) {
        // 1. если библиотека не загружена, грузим
        let lib = [];
        if (library === 'authors') {
            lib = this.props.store.getState().authors.authors;
        }
        if (!lib || !lib.length || event === 'reload') {
            // справочник не подгружен

            let url = `/main/${library}`;
            return new Promise((resolved, rejected) => {
                fetchData['fetchDataPost'](url).then(response => {
                    console.log('lib load response', response.data)
                    // error handling
                    if (response.status === 200) {
                        let store = this.props.store;
                        // сохраним данные в сторе
                        store.dispatch({type: library, library: response.data.data});
                        this.forceUpdate()
                        resolved(response.data);
                    } else {
                        console.error('status !== 200')
                        return rejected();
                    }

                }).catch((error) => {
                    console.error('fetch error', error);
                    // Something happened in setting up the request that triggered an Error
                    return rejected(error);
                });
            })
        }

        // 2/ если надо обновить, обновляем
    }

    /**
     * загрузка данных
     * @returns {*|Promise<AxiosResponse<unknown> | never>}
     */
    fetchData(url) {
        this.setState({warning: 'Data is loading...', warningStyle: 'info'})
        let URL = `/main/data/`;
        if (this.state.activeComponent !== 'pictures') {
            URL = `/main/${this.state.activeComponent.toLowerCase()}/`;
        }
        // если задан адрес, используем его
        if (url) {
            URL = url;
        }

        let user = this.props.store.getState().statuses.user;
        let additionalFilters = this.props.store.getState().filters.filter.additionalFilter;
        let filter = this.props.store.getState().filters.filter.searchText;
        let params = {filter: filter, additionalFilters: additionalFilters, user: user};

        return new Promise((resolved, rejected) => {

            fetchData['fetchDataPost'](URL, params).then(response => {
                // error handling
                if (response.status === 200) {
                    this.setState({warning: 'Data loaded successfuly', warningStyle: 'ok'})
                    let store = this.props.store;
                    // сохраним данные в сторе
                    switch (this.state.activeComponent) {
                        case 'pictures': {
                            store.dispatch({type: 'pictures', pictures: response.data.data});
                            break;
                        }
                        case 'TAOTLUS_LOGIN': {
                            store.dispatch({type: 'userApplications', userApplications: response.data.data});
                            break;
                        }
                        case 'DEALS': {
                            store.dispatch({type: 'deals', deals: response.data.data});
                            break;
                        }
                        case 'AUTHORS': {
                            store.dispatch({type: 'authors', library: response.data.data});
                            break;
                        }
                        default:
// наверное picture
                    }
                    this.forceUpdate();
                    resolved(response.data);
                } else {
                    this.setState({warning: 'Data loading error', warningStyle: 'error'})
                    console.error('status !== 200')
                    return rejected();
                }

            }).catch((error) => {
//                let state = this.props.store.getState()
                console.error('got fetch error', error, URL, params);
                // Something happened in setting up the request that triggered an Error
                return rejected(error);

            });
        });

    }


}

module.exports = Register;
