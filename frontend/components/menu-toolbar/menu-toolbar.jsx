'use strict';

const PropTypes = require('prop-types');
const {withRouter} = require('react-router-dom');
const fetchData = require('./../../../libs/fetchData');

const React = require('react'),
    ToolbarContainer = require('./../toolbar-container/toolbar-container.jsx'),
    BtnStart = require('./../button-register/button-register-start/button-register-start.jsx'),
    BtnAdd = require('./../../components/button-register/button-register-add/button-register-add.jsx'),
    BtnLogin = require('./../button-register/button-login/button-login.jsx'),
    BtnEdit = require('./../button-register/button-register-edit/button-register-edit.jsx'),
    BtnInfo = require('./../button-register/button-info/index.jsx'),
    StartMenu = require('./../start-menu/start-menu.jsx'),
    SelectRekv = require('./../select-rekv/index.jsx'),
    Select = require('./../select/select.jsx'),
    BtnAccount = require('./../button-register/button-account/button-account.jsx');
const Login = require('./../login/login.jsx');
const SearchText = require('./../../docs/main/search-component.jsx');

const style = require('./menu-toolbar.styles');
const DocRights = require('./../../../config/doc_rights');
const checkRights = require('./../../../libs/checkRights');


class MenuToolBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logedIn: false,
            showLogin: false,
            startMenuValue: 'parentid',
            showStartMenu: false,
            isOpenRekvPage: false,
            rekvId: props.rekvId ? props.rekvId : 1,
            keel: 'EST',
            user: {
                id: 0,
                kasutaja: null,
                ametnik: null
            }
        };


        this.btnStartClick = this.btnStartClick.bind(this);
        this.btnAddClick = this.btnAddClick.bind(this);
        this.btnLoginClick = this.btnLoginClick.bind(this);
        this.renderStartMenu = this.renderStartMenu.bind(this);
        this.startMenuClickHandler = this.startMenuClickHandler.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.btnAccountClick = this.btnAccountClick.bind(this);
        this.btnEditRekvClick = this.btnEditRekvClick.bind(this);
        this.renderLoginComponent = this.renderLoginComponent.bind(this);
//        this.handleLoginClickEvent = this.handleLoginClickEvent.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                // When state will be updated(in our case, when items will be fetched),
                // we will update local component state and force component to rerender
                // with new data.

                let user = store.getState().statuses.user;
                this.setState({
                    user: user,
                    logedIn: (user.id ? !!user.id : false)
                });

            })
        }
    }

    render() {
        let isEditMode = this.props.edited,
            toolbarParams = {
                btnStart: {
                    show: this.props.params['btnStart'].show || false,
                    disabled: isEditMode
                },
                btnAdd: {
                    show: true,
                    disabled: isEditMode
                },
                btnLogin: {
                    show: true,
                    disabled: false
                },
                btnAccount: {
                    show: this.state.logedIn || false,
                    disabled: false
                },
                btnInfo: {
                    show: true,
                    disabled: false
                }
            };

        return (
            <div style={style['container']}>
                <ToolbarContainer
                    ref='menuToolbarContainer'
                    position="left">
                    <BtnStart ref='btnStart'
                              store={this.props.store}
                              onClick={this.btnStartClick}
                              show={toolbarParams['btnStart'].show}
                              disabled={toolbarParams['btnStart'].disabled}
                    />
                    {this.state.logedIn ? (<BtnAdd onClick={this.btnAddClick}
                                                   show={toolbarParams['btnAdd'].show}
                                                   disable={toolbarParams['btnAdd'].disabled}/>) : null}

                    {this.state.logedIn ?
                        (<BtnAccount ref='btnAccount'
                                     value={this.state.user.ametnik ? this.state.user.ametnik : ''}
                                     onClick={this.btnAccountClick}
                                     show={toolbarParams['btnAccount'].show}
                                     disabled={toolbarParams['btnAccount'].disabled}/>) : null}
                    <BtnLogin ref='btnLogin'
                              value={this.state.logedIn ? 'Välju' : 'Sisse'}
                              onClick={this.btnLoginClick}
                              show={toolbarParams['btnLogin'].show}
                              disabled={toolbarParams['btnLogin'].disabled}/>
                    <SearchText
                        store={this.props.store}
                    />
                    <select ref="select"
                            style={style['selectKeel']}
                            value={this.state.keel || 'Est'}
                            id={'keel'}
                            onChange={this.handleChangeSelect}>
                        <option value={'Est'} key={'est'}
                                ref={'Est'}> {'EST'} </option>
                        <option value={'RU'} key={'RU'}
                                ref={'RU'}> {'RU'} </option>
                        <option value={'ING'} key={'ING'}
                                ref={'ING'}> {'ING'} </option>
                    </select>
                    {/*
                    <BtnInfo ref='btnInfo'
                             value={'Juhend'}
                             show={toolbarParams['btnInfo'].show}/>
*/}
                </ToolbarContainer>
                {this.renderStartMenu()}
                {this.state.showLogin ? (this.renderLoginComponent()) : null}

            </div>
        );
    }

    /**
     * отрисует конмпонент редактирования картины
     * @returns {*}
     */
    renderLoginComponent() {
        return (<Login show={true}
                       id={0}
                       store={this.props.store}
                       loginClickEvent={this.handleLoginClickEvent}>
            Login
        </Login>)
    }

    handleChangeSelect(e) {
        let fieldValue = e.target.value;

        this.setState({keel: fieldValue});
        const current = window.location.pathname;
        this.props.history.replace(`/reload`);
        setTimeout(() => {
            this.props.history.replace(current);
        });

    }

    renderStartMenu() {
        let component = null;
        let data = [];
        let user = {};
        if (this.props.store) {
            user = this.props.store.getState().statuses.user;
            data = this.props.store.getState().menu.menu;

            if (!user || !user.is_admin) {
                data = data.filter(row => {
                    // если нет пользователя, или он не адми, грузим только доступные
                    if (!row.props || !row.props.is_admin) {
                        return row;
                    } else {
                        return null;
                    }
                });
            }
        }

        if (this.state.showStartMenu) {
            component = <StartMenu ref='startMenu'
                                   store={this.props.store}
                                   value={this.state.startMenuValue}
                                   data={data}
                                   clickHandler={this.startMenuClickHandler}/>
        }
        return component
    }

    btnStartClick() {
        // обработчик для кнопки Start

        this.setState({showStartMenu: !this.state.showStartMenu});

    }

    btnAddClick() {
        // обработчик для кнопки Start

        //this.setState({showPicture: !this.state.showPicture});
        // сигнал не перегрузку основного окна
        if (this.props.btnClickEventHandler) {
            this.props.btnClickEventHandler('btnAdd');
        }
    }

    /**
     * получит от стартого меню данные, спрячет меню
     */
    startMenuClickHandler(value) {
        this.setState({showStartMenu: false});

        if (this.props.store) {
            // new action
            let store = this.props.store;
            if (value == 'RAAMA') {
                window.open(`/RAAMA/login`);
            } else {
                store.dispatch({type: 'activePageComponent', activePageComponent: value});
            }


        } else {
            let docType = DocContext['menu'].find(row => row.kood === value);
            if (docType) {
                DocContext.pageName = docType.name;
            }

            if (this.props.history) {
                return this.props.history.push({
                    pathname: `/${DocContext.module}/${value}`,
                    state: {module: DocContext.module}

                });
            } else {
                document.location.href = `/${DocContext.module}/${value}`
            }
        }
    }

    btnLoginClick() {
        if (!this.state.logedIn) {
            this.setState({showLogin: !this.state.showLogin})
        } else {
            // удалим из стора пользователя
            let store = this.props.store;
            store.dispatch({type: 'user', user: {}});
            this.setState({logedIn: false});
        }
    }


    btnAccountClick() {
        /*
                return this.props.history.push({
                    pathname: `/${DocContext.module}/userid/${DocContext.userData.userId}`,
                    state: {module: DocContext.module}
                });
        */
    }

    btnEditRekvClick() {
        /*
                return this.props.history.push({
                    pathname: `/${DocContext.module}/rekv/${DocContext.userData.asutusId}`,
                    state: {module: DocContext.module}
                });
        */

    }
}

/*
MenuToolBar
    .propTypes = {
    edited: PropTypes.bool,
    params: PropTypes.object.isRequired,
    logedIn: PropTypes.bool
};


MenuToolBar
    .defaultProps = {
    edited: false,
    logedIn: false,
    params: {
        btnStart: {
            show: true
        }
    }
};
*/

module.exports = withRouter(MenuToolBar);