var kasutaja =
webpackJsonp_name_([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _docContext=__webpack_require__(1);var _docContext2=_interopRequireDefault(_docContext);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ReactDOM=__webpack_require__(4);var _require=__webpack_require__(5),BrowserRouter=_require.BrowserRouter;var Doc=__webpack_require__(292);initData=JSON.parse(initData);userData=JSON.parse(userData);// сохраним базовые данные в памети
	_docContext2.default.initData=initData;_docContext2.default.userData=userData;_docContext2.default.module='kasutaja';_docContext2.default.pageName='Kasutaja';_docContext2.default.gridConfig=initData.docConfig;_docContext2.default.menu=initData.menu?initData.menu.data:[];_docContext2.default.keel='EST';ReactDOM.hydrate(React.createElement(BrowserRouter,null,React.createElement(Doc,{initData:initData,userData:userData})),document.getElementById('doc'));

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);
	var DocContext = __webpack_require__(1);

	var Menu = __webpack_require__(40);

	var StartMenu = __webpack_require__(82),
	    KasutajaRegister = __webpack_require__(293),
	    TaotlusLoginRegister = __webpack_require__(249),
	    TaotlusLoginDocument = __webpack_require__(251),
	    ObjectDocument = __webpack_require__(260),
	    ObjectRegister = __webpack_require__(262),
	    LepingDocument = __webpack_require__(264),
	    LepingRegister = __webpack_require__(270),
	    ArvDocument = __webpack_require__(273),
	    ArvRegister = __webpack_require__(275),
	    SmkDocument = __webpack_require__(297),
	    SorderDocument = __webpack_require__(302),
	    MooduDocument = __webpack_require__(288),
	    MooduRegister = __webpack_require__(290);

	var _require = __webpack_require__(5),
	    Route = _require.Route;

	var _require2 = __webpack_require__(88),
	    StyleRoot = _require2.StyleRoot;

	var MODULE = 'kasutaja';

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	        _this.prepareParamsForToolbar = _this.prepareParamsForToolbar.bind(_this);
	        return _this;
	    }

	    /*
	        render() {
	            return <div>Raama</div>
	        }
	    */


	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                StyleRoot,
	                null,
	                React.createElement(Route, { path: '/redirect', component: function component() {
	                        window.open('http://' + DocContext.link, "_blank");
	                        return null;
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja',
	                    render: function render(props) {
	                        return React.createElement(KasutajaRegister, {
	                            history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/kasutaja',
	                    render: function render(props) {
	                        return React.createElement(KasutajaRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    }
	                }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/taotlus_login',
	                    render: function render(props) {
	                        return React.createElement(TaotlusLoginRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    }
	                }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/taotlus_login/:docId',
	                    render: function render(props) {
	                        return React.createElement(TaotlusLoginDocument, _extends({}, props, {
	                            module: MODULE,
	                            history: props.history }));
	                    }
	                }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/isiku_objekt/:docId', component: ObjectDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/objekt',
	                    render: function render(props) {
	                        return React.createElement(ObjectRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/isiku_leping/:docId',
	                    component: LepingDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/leping/:docId',
	                    component: LepingDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/leping',
	                    render: function render(props) {
	                        return React.createElement(LepingRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/isiku_leping',
	                    render: function render(props) {
	                        return React.createElement(LepingRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/isiku_arv/:docId',
	                    component: ArvDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/arv/:docId',
	                    component: ArvDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/arv',
	                    render: function render(props) {
	                        return React.createElement(ArvRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/smk/:docId',
	                    component: SmkDocument,
	                    module: MODULE }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/sorder/:docId',
	                    component: SorderDocument,
	                    module: MODULE }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/andmed/:docId',
	                    component: MooduDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/isiku_andmed/:docId',
	                    component: MooduDocument }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/isiku_andmed',
	                    render: function render(props) {
	                        return React.createElement(MooduRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } }),
	                React.createElement(Route, { exact: true, path: '/kasutaja/andmed',
	                    render: function render(props) {
	                        return React.createElement(MooduRegister, { history: props.history,
	                            initData: _this2.props.initData,
	                            module: MODULE });
	                    } })
	            );
	        }
	    }, {
	        key: 'prepareParamsForToolbar',
	        value: function prepareParamsForToolbar() {
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
	    }]);

	    return App;
	}(React.Component);

	module.exports = App;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var Documents = __webpack_require__(179);
	var ToolbarContainer = __webpack_require__(71);
	var ReklComponent = __webpack_require__(294);
	var BtnAddMoodu = __webpack_require__(75);
	var DocContext = __webpack_require__(1);

	var styles = __webpack_require__(296);
	var DOC_TYPE_ID = 'KASUTAJA';
	var TOOLBAR_PROPS = __webpack_require__(86).TEATIS.toolbarProps;

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Register = function (_React$PureComponent) {
	    _inherits(Register, _React$PureComponent);

	    function Register(props) {
	        _classCallCheck(this, Register);

	        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

	        _this.btnEditClick = _this.btnEditClick.bind(_this);
	        _this.onClickHandler = _this.onClickHandler.bind(_this);
	        _this.renderer = _this.renderer.bind(_this);
	        _this.data = [];
	        return _this;
	    }

	    _createClass(Register, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Documents, { initData: this.props.initData,
	                    history: this.props.history ? this.props.history : null,
	                    module: this.props.module,
	                    ref: 'register',
	                    docTypeId: DOC_TYPE_ID,
	                    style: styles,
	                    btnEditClick: this.btnEditClick,
	                    toolbarProps: TOOLBAR_PROPS,
	                    render: this.renderer }),
	                React.createElement('br', null),
	                React.createElement(
	                    ToolbarContainer,
	                    { position: 'left',
	                        container: { border: '1px solid lightGrey' } },
	                    React.createElement(ReklComponent, { history: this.props.history })
	                )
	            );
	        }
	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            return React.createElement(
	                ToolbarContainer,
	                null,
	                React.createElement(BtnAddMoodu, {
	                    onClick: this.onClickHandler,
	                    value: 'Lisa andmed'
	                })
	            );
	        }

	        //handler для события клик на кнопках панели

	    }, {
	        key: 'onClickHandler',
	        value: function onClickHandler() {
	            //делаем редайрект на создание документа - показания счетчиков
	            this.props.history.push('/kasutaja/ANDMED/0');
	        }
	    }, {
	        key: 'btnEditClick',
	        value: function btnEditClick(row_id) {
	            // ищем тип документа
	            var Doc = this.refs['register'];

	            var gridRow = Doc.gridData.filter(function (row) {
	                return row.id == row_id;
	            });
	            if (gridRow) {
	                var docTypeId = gridRow[0].doc_type_id;
	                return this.props.history.push({
	                    pathname: '/' + this.props.module + '/' + docTypeId + '/' + gridRow[0].id,
	                    state: { module: this.props.module }
	                });
	            }
	        }
	    }]);

	    return Register;
	}(React.PureComponent);

	module.exports = Register;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var _fetchData = __webpack_require__(41);
	var DocContext = __webpack_require__(1);

	//const {withRouter} = require('react-router-dom');

	var React = __webpack_require__(10),
	    styles = __webpack_require__(295);

	var Index = function (_React$PureComponent) {
	    _inherits(Index, _React$PureComponent);

	    function Index(props) {
	        _classCallCheck(this, Index);

	        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

	        _this.docId = null;
	        _this.state = {
	            nimetus: null,
	            link: null
	        };
	        _this.interval = null;
	        _this.fetchData = _this.fetchData.bind(_this);

	        return _this;
	    }

	    _createClass(Index, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            //        setInterval(this.fetchData(), 1000 * 60);
	            this.interval = setInterval(function () {
	                return _this2.fetchData();
	            }, 10000);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearInterval(this.interval);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { style: styles.frame },
	                this.state.nimetus ? React.createElement(
	                    'a',
	                    { href: this.state.link, target: '_blank' },
	                    ' ',
	                    this.state.nimetus,
	                    ' '
	                ) : null
	            );
	        }
	    }, {
	        key: 'fetchData',


	        /**
	         * Выполнит запросы
	         */
	        value: function fetchData(url, link) {
	            var _this3 = this;

	            var URL = '/newApi';
	            if (link) {
	                URL = link;
	            }

	            var params = {
	                link: link,
	                parameter: 'REKL', // параметры
	                method: 'selectDocs',
	                sortBy: [{ column: 'last_shown', direction: 'asc' }], // сортировка
	                limit: 1, // row limit in query
	                sqlWhere: 'where (format_date(alg_kpv)::date <= current_date or format_date(lopp_kpv)::date >= current_date) AND docs.update_last_rekl(id) = 1', // динамический фильтр грида
	                module: 'juht',
	                userId: DocContext.userData.userId,
	                uuid: DocContext.userData.uuid
	            };

	            return new Promise(function (resolved, rejected) {
	                if (link) {
	                    _fetchData['fetchDataGet'](URL);
	                } else {
	                    _fetchData['fetchDataPost'](URL, params).then(function (response) {
	                        if (response.status && response.status === 401) {
	                            document.location = '/login';
	                        }

	                        // error handling
	                        if (response.status !== 200) {
	                            return {
	                                result: null,
	                                status: response.status,
	                                error_message: 'error ' + (response.data && response.data.error_message ? 'response.data.error_message' : response.error_message)
	                            };
	                        }

	                        var data = response.data.result.data[0];
	                        _this3.setState({ nimetus: data.nimetus, link: data.link });
	                        resolved(response.data);
	                    });
	                }
	            }).catch(function (error) {
	                console.error('fetch error', error);
	                // Something happened in setting up the request that triggered an Error
	            });
	        }
	    }]);

	    return Index;
	}(React.PureComponent);

	//module.exports = withRouter(DocToolBar);


	module.exports = Index;

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

	'use strict';module.exports={frame:{width:'100%'}};

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}},frame:{justifyContent:'flex-start',border:'1px solid lightGrey'}};

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    InputDate = __webpack_require__(236),
	    InputNumber = __webpack_require__(238),
	    Select = __webpack_require__(164),
	    SelectData = __webpack_require__(265),
	    TextArea = __webpack_require__(216),
	    DataGrid = __webpack_require__(183),
	    DokProp = __webpack_require__(298),
	    relatedDocuments = __webpack_require__(267),
	    ModalPage = __webpack_require__(171),
	    Loading = __webpack_require__(243),
	    ButtonUuendaLib = __webpack_require__(300),
	    styles = __webpack_require__(301);

	var getTextValue = __webpack_require__(76);

	var DOC_TYPE_ID = 'SMK';
	var DocContext = __webpack_require__(1);

	var LIBRARIES = [{ id: 'nomenclature', filter: 'where dok in (\'MK\',\'SMK\')' }, { id: 'asutused', filter: '' }, { id: 'aa', filter: '' }];

	var Smk = function (_React$PureComponent) {
	    _inherits(Smk, _React$PureComponent);

	    function Smk(props) {
	        _classCallCheck(this, Smk);

	        var _this = _possibleConstructorReturn(this, (Smk.__proto__ || Object.getPrototypeOf(Smk)).call(this, props));

	        _this.state = {
	            docId: props.docId ? props.docId : Number(props.match.params.docId),
	            loadedData: false,
	            lapsId: null,
	            module: _this.props.module,
	            isAskToCreateFromArv: true, // если указан счет, а док.ид = 0 , то можно создпть ордер по счету
	            getSMK: false,
	            arvId: 0,
	            kas_aa_kasitsi: false
	        };

	        _this.createGridRow = _this.createGridRow.bind(_this);
	        _this.recalcDocSumma = _this.recalcDocSumma.bind(_this);
	        _this.recalcRowSumm = _this.recalcRowSumm.bind(_this);

	        _this.renderer = _this.renderer.bind(_this);
	        _this.gridValidateFields = _this.gridValidateFields.bind(_this);
	        _this.modalPageBtnClick = _this.modalPageBtnClick.bind(_this);

	        _this.pages = [{ pageName: 'Sissemakse korraldus', docTypeId: 'SMK' }];
	        return _this;
	    }

	    _createClass(Smk, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.history && this.props.history.location.state) {
	                var lapsId = this.props.history.location.state.lapsId;
	                var _module = this.props.history.location.state.module ? this.props.history.location.state.module : 'lapsed';
	                this.setState({ lapsId: lapsId, module: _module });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                docTypeId: DOC_TYPE_ID,
	                history: this.props.history,
	                module: this.state.module,
	                initData: this.props.initData,
	                reload: true,
	                libs: LIBRARIES,
	                pages: this.pages,
	                renderer: this.renderer,
	                createGridRow: this.createGridRow,
	                gridValidator: this.gridValidateFields,
	                recalcDoc: this.recalcDocSumma,
	                focusElement: 'input-number'

	            });
	        }

	        /**
	         * Вернет кастомные компоненты документа
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self || !self.docData || !self.docData.kpv) {
	                return React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(Loading, { label: getTextValue('Laadimine...') })
	                );
	            }

	            var isEditeMode = self.state.edited;

	            // формируем зависимости
	            if (self.docData.relations) {
	                relatedDocuments(self);
	            }

	            var isNewDoc = !self.docData.id || self.docData.id === 0;
	            if ((!self.docData.id || self.docData.id === 0) && self.docData.arvid && this.state.isAskToCreateFromArv) {
	                this.setState({ getSMK: true, isAskToCreateFromArv: false, arvId: self.docData.arvid });
	            }

	            // queryArvTasu
	            var gridArvData = self.docData.queryArvTasu,
	                gridArvColumns = self.docData.gridArvConfig;

	            if (self.docData.jaak) {
	                DocContext.mkJaak = self.docData.jaak;
	            }

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { className: 'div-doc' },
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { title: 'Number',
	                                name: 'number',
	                                value: String(self.docData.number || ''),
	                                ref: 'input-number',
	                                onChange: self.handleInputChange,
	                                readOnly: !isEditeMode }),
	                            React.createElement(InputDate, { title: 'Kuup\xE4ev',
	                                name: 'kpv',
	                                value: self.docData.kpv || '01-07-2020',
	                                ref: 'input-kpv',
	                                onChange: self.handleInputChange,
	                                readOnly: !isEditeMode }),
	                            React.createElement(Select, { title: 'Arveldus arve',
	                                name: 'aa_id',
	                                libs: 'aa',
	                                value: Number(self.docData.aa_id) || 0,
	                                data: self.libs['aa'],
	                                defaultValue: String(self.docData.pank) || '',
	                                onChange: self.handleInputChange,
	                                ref: 'select-aaId',
	                                readOnly: !isEditeMode }),
	                            React.createElement(InputDate, { title: 'Maksep\xE4ev',
	                                name: 'maksepaev',
	                                value: self.docData.maksepaev || '',
	                                ref: 'input-maksepaev',
	                                onChange: self.handleInputChange,
	                                readOnly: !isEditeMode }),
	                            React.createElement(InputText, { title: 'Viitenumber',
	                                name: 'viitenr',
	                                value: self.docData.viitenr || '',
	                                ref: 'input-viitenr',
	                                onChange: self.handleInputChange,
	                                readOnly: !isEditeMode })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(TextArea, { title: 'Selgitus',
	                            name: 'selg',
	                            ref: 'textarea-selg',
	                            value: self.docData.selg || '',
	                            onChange: self.handleInputChange,
	                            readOnly: !isEditeMode })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(DataGrid, { source: 'details',
	                            gridData: self.docData.gridData,
	                            gridColumns: self.docData.gridConfig,
	                            showToolBar: isEditeMode,
	                            handleGridRow: self.handleGridRow,
	                            handleGridBtnClick: self.handleGridBtnClick,
	                            readOnly: !isEditeMode,
	                            style: styles.grid.headerTable,
	                            ref: 'data-grid' })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { title: 'Kokku:',
	                                name: 'summa',
	                                ref: 'input-summa',
	                                value: String(self.docData.summa) || '0.00',
	                                width: 'auto',
	                                disabled: true })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { title: 'M\xE4\xE4ramata summa:',
	                                name: 'mk_jaak',
	                                ref: 'input-jaak',
	                                value: String(self.docData.jaak) || '0.00',
	                                width: 'auto',
	                                disabled: true })
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'M\xE4rkused',
	                        name: 'muud',
	                        ref: 'textarea-muud',
	                        value: self.docData.muud || '',
	                        onChange: self.handleInputChange,
	                        readOnly: !isEditeMode })
	                ),
	                self.state.gridRowEdit ? this.createGridRow(self) : null,
	                React.createElement(
	                    ModalPage,
	                    { ref: 'modalpageCreateOrder',
	                        modalPageBtnClick: this.modalPageBtnClick,
	                        modalPageName: 'Kas koosta SMK',
	                        show: this.state.getSMK },
	                    'Kas koosta SMK?'
	                ),
	                React.createElement('br', null),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { ref: 'label' },
	                        getTextValue('Arved')
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(DataGrid, { source: 'arved',
	                        gridData: gridArvData,
	                        gridColumns: gridArvColumns,
	                        showToolBar: false,
	                        handleGridBtnClick: self.handleGridBtnClick,
	                        docTypeId: 'arv',
	                        readOnly: true,
	                        style: styles.grid.headerTable,
	                        ref: 'arved-data-grid' })
	                )
	            );
	        }

	        /**
	         * will create SMK
	         */

	    }, {
	        key: 'modalPageBtnClick',
	        value: function modalPageBtnClick(btnEvent) {
	            var _this2 = this;

	            this.setState({ getSMK: false });
	            if (btnEvent === 'Ok') {
	                var Doc = this.refs['document'];
	                var api = '/calc/koostaMK';

	                var params = {
	                    docTypeId: DOC_TYPE_ID,
	                    module: this.props.module ? this.props.module : DocContext.module,
	                    userId: DocContext.userData.userId,
	                    uuid: DocContext.userData.uuid,
	                    docs: [Number(this.state.arvId)],
	                    seisuga: Doc.docData && Doc.docData.kpv ? Doc.docData.kpv : null,
	                    context: DocContext[api] ? DocContext[api] : null,
	                    taskName: 'koostaMK'
	                };

	                Doc.fetchData('Post', api, { data: params }).then(function (response) {
	                    if (response && response.error_message) {
	                        Doc.setState({
	                            warning: 'viga: ' + response.error_message,
	                            warningType: 'error'
	                        });
	                    } else {
	                        if (response && response.result) {
	                            var newDocId = response.data && response.data && response.data.result && response.data.result.doc_id ? response.data.result.doc_id : 0;
	                            Doc.setState({
	                                warning: 'Edukalt, suunatan ...',
	                                warningType: 'ok'
	                            });

	                            // переходим на созданнй док
	                            if (newDocId) {
	                                setTimeout(function () {
	                                    var current = '/' + (_this2.props.module ? _this2.props.module : DocContext.module) + '/smk/' + newDocId;
	                                    _this2.props.history.replace('/reload');
	                                    setTimeout(function () {
	                                        _this2.props.history.replace(current);
	                                    });
	                                }, 2000);
	                            }
	                        } else {
	                            Doc.setState({
	                                warning: 'Tekkis viga',
	                                warningType: 'error'
	                            });
	                        }
	                    }
	                }).catch(function (error) {
	                    console.error('api call error', error);
	                    Doc.setState({
	                        warning: 'Viga ' + error,
	                        warningType: 'error'
	                    });
	                });
	            }
	        }

	        /**
	         * формирует объекты модального окна редактирования строки грида
	         * @returns {XML}
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow(self) {
	            var row = self.gridRowData ? self.gridRowData : {},
	                validateMessage = '',
	                // self.state.warning
	            buttonOkReadOnly = validateMessage.length > 0 || !self.state.checked,
	                modalObjects = ['btnOk', 'btnCancel'];

	            if (buttonOkReadOnly) {
	                // уберем кнопку Ок
	                modalObjects.splice(0, 1);
	            }

	            if (!row) return React.createElement('div', null);

	            return React.createElement(
	                'div',
	                { className: '.modalPage' },
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalObjects: modalObjects,
	                        ref: 'modalpage-grid-row',
	                        show: true,
	                        modalPageBtnClick: self.modalPageClick,
	                        modalPageName: 'Rea lisamine / parandamine' },
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Operatsioon',
	                                name: 'nomid',
	                                data: self.libs['nomenclature'],
	                                value: row.nomid || 0,
	                                collId: 'id',
	                                defaultValue: row.kood || '',
	                                ref: 'nomid',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Partner',
	                                name: 'asutusid',
	                                data: self.libs['asutused'],
	                                value: row.asutusid,
	                                defaultValue: row.asutus || '',
	                                collId: 'id',
	                                ref: 'asutusid',
	                                onChange: self.handleGridRowChange }),
	                            React.createElement(ButtonUuendaLib, {
	                                self: self,
	                                lib: 'asutused'
	                            })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputText, { title: 'Arveldus arve: ',
	                                name: 'aa',
	                                value: row.aa || '',
	                                bindData: false,
	                                ref: 'aa',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Summa: ',
	                                name: 'summa',
	                                value: Number(row.summa),
	                                bindData: false,
	                                ref: 'summa',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Korr. konto',
	                                name: 'konto',
	                                libs: 'kontod',
	                                data: self.libs['kontod'],
	                                value: row.konto,
	                                ref: 'konto',
	                                collId: 'kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Tunnus:',
	                                name: 'tunnus',
	                                libs: 'tunnus',
	                                data: self.libs['tunnus'],
	                                value: row.tunnus,
	                                ref: 'tunnus',
	                                collId: 'kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Project:',
	                                name: 'proj',
	                                libs: 'project',
	                                data: self.libs['project'],
	                                value: row.proj,
	                                ref: 'project',
	                                collId: 'kood',
	                                onChange: self.handleGridRowChange })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'span',
	                            null,
	                            validateMessage
	                        )
	                    )
	                )
	            );
	        }

	        /**
	         * перерасчет итоговой суммы документа
	         */

	    }, {
	        key: 'recalcDocSumma',
	        value: function recalcDocSumma() {
	            var doc = this.refs['document'];
	            doc.docData['summa'] = 0;
	            doc.docData.gridData.forEach(function (row) {
	                doc.docData['summa'] += Number(row['summa']);
	            });
	        }

	        /**
	         * подставит код операции
	         */

	    }, {
	        key: 'recalcRowSumm',
	        value: function recalcRowSumm() {
	            var doc = this.refs['document'];

	            if (!Object.keys(doc.gridRowData).length) {
	                return;
	            }

	            //подставим наименование услогу

	            if (doc.gridRowData['nomid']) {
	                var nomDataName = doc.libs['nomenclature'].find(function (lib) {
	                    return lib.id === Number(doc.gridRowData['nomid']);
	                });

	                if (nomDataName) {
	                    doc.gridRowData['kood'] = nomDataName.kood;
	                    doc.gridRowData['nimetus'] = nomDataName.nimetus;
	                }
	            }

	            //подставим наименование
	            if (doc.gridRowData['asutusid']) {

	                var asutusDataName = doc.libs['asutused'].find(function (lib) {
	                    return lib.id === Number(doc.gridRowData['asutusid']);
	                });

	                if (asutusDataName) {
	                    doc.gridRowData['asutus'] = asutusDataName.nimetus;

	                    if (!doc.gridRowData['aa']) {
	                        doc.gridRowData['aa'] = asutusDataName.pank;
	                    }
	                }
	            }
	        }

	        /**
	         * валидатор для строки грида
	         * @returns {string}
	         */

	    }, {
	        key: 'gridValidateFields',
	        value: function gridValidateFields() {
	            var warning = '';
	            var doc = this.refs['document'];
	            if (doc && doc.gridRowData) {

	                // только после проверки формы на валидность
	                if (doc.gridRowData && !doc.gridRowData['nomid']) warning = warning + ' Код операции';
	                if (!doc.gridRowData['summa']) warning = warning + ' Сумма';
	                if (!doc.gridRowData['asutusid']) warning = warning + ' Платильщик';

	                this.recalcRowSumm();
	                this.recalcDocSumma('summa');
	            }
	            return warning;
	        }
	    }]);

	    return Smk;
	}(React.PureComponent);

	Smk.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object,
	    userData: PropTypes.object
	};

	Smk.defaultProps = {
	    initData: {},
	    userData: {}
	};

	module.exports = Smk;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

	// виджет, объединяющий селект и текст. в тексте отражаютмя данные, связанные с селектом
	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var Select = __webpack_require__(164);
	var ButtonEdit = __webpack_require__(80);
	var ButtonAdd = __webpack_require__(78);
	var Text = __webpack_require__(216);
	var DocContext = __webpack_require__(1);
	var styles = __webpack_require__(299);

	var React = __webpack_require__(10);

	var SelectTextWidget = function (_React$PureComponent) {
	    _inherits(SelectTextWidget, _React$PureComponent);

	    function SelectTextWidget(props) {
	        _classCallCheck(this, SelectTextWidget);

	        var _this = _possibleConstructorReturn(this, (SelectTextWidget.__proto__ || Object.getPrototypeOf(SelectTextWidget)).call(this, props));

	        _this.state = {
	            value: props.value ? props.value : null,
	            description: '', // пойдет в текстовую область
	            libData: props.data
	        };
	        _this.handleSelectOnChange = _this.handleSelectOnChange.bind(_this);
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(SelectTextWidget, [{
	        key: 'handleSelectOnChange',
	        value: function handleSelectOnChange(name, value) {
	            var _this2 = this;

	            // отработаем событие и поменяем состояние

	            this.setState({ value: value }, function () {
	                _this2.props.onChange(_this2.props.name, value);
	            });
	        }

	        /**
	         *     кастомный обработчик собютия клик
	         */

	    }, {
	        key: 'handleClick',
	        value: function handleClick(event) {
	            // делаем редайрект на страницц справочника
	            if (event === 'edit' || event === 'Muuda') {
	                this.props.history.push({
	                    pathname: '/' + DocContext.module + '/dokprops/' + this.state.value,
	                    state: { dokPropId: DocContext.docTypeId, type: 'text' }
	                });
	            } else if (event === 'add' || event === 'Lisa') {
	                this.props.history.push({
	                    pathname: '/' + DocContext.module + '/dokprops/0',
	                    state: { dokPropId: DocContext.docTypeId, type: 'text' }
	                });
	            }
	        }

	        /**
	         * Метод ищет в справочнике описание
	         * @param libData
	         * @returns {string}
	         */

	    }, {
	        key: 'getDescriptionBySelectValue',
	        value: function getDescriptionBySelectValue(libData) {
	            var _this3 = this;

	            // найдем в справочнике описание и установим его состояние
	            var libRow = libData.filter(function (lib) {

	                if (lib.id === _this3.props.value) {
	                    return lib;
	                }
	            }),
	                selg = '',
	                selgObject = libRow.length ? libRow[0].details : '';

	            for (var property in selgObject) {
	                if (selgObject.hasOwnProperty(property)) {
	                    // интересуют только "собственные" свойства объекта
	                    selg = selg + property + ':' + selgObject[property];
	                }
	            }
	            return selg;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(Select, { className: this.props.className,
	                    ref: 'select',
	                    title: this.props.title,
	                    name: this.props.name,
	                    data: this.props.data,
	                    collId: 'id',
	                    value: this.state.value || '',
	                    defaultValue: this.props.defaultValue || '',
	                    placeholder: this.props.placeholder || this.props.title,
	                    readOnly: this.props.readOnly,
	                    onChange: this.handleSelectOnChange
	                }),
	                this.state.value ? React.createElement(ButtonEdit, {
	                    value: 'Muuda',
	                    show: this.props.readOnly,
	                    onClick: this.handleClick
	                }) : React.createElement(ButtonAdd, {
	                    value: 'Lisa',
	                    show: this.props.readOnly,
	                    onClick: this.handleClick })
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value) {
	                return { value: nextProps.value };
	            } else return null;
	        }
	    }]);

	    return SelectTextWidget;
	}(React.PureComponent);

	SelectTextWidget.propTypes = {
	    value: PropTypes.number,
	    name: PropTypes.string.isRequired,
	    title: PropTypes.string,
	    libs: PropTypes.string,
	    defaultValue: PropTypes.string,
	    readOnly: PropTypes.bool,
	    placeholder: PropTypes.string
	};

	SelectTextWidget.defaultProps = {
	    readOnly: false,
	    title: ''
	};

	module.exports = SelectTextWidget;

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

	'use strict';module.exports={wrapper:{margin:'5px',display:'flex',width:'95%'},input:{width:'70%',marginLeft:'5px',borderRadius:'5px'},a:{width:'70%',marginLeft:'5px',borderRadius:'5px'},hide:{display:'none'},select:{width:'70%',heigth:'100%',marginLeft:'5px',borderRadius:'5px',':focus':{backgroundColor:'lightpink'}},readOnly:{backgroundColor:'#F3EFEF'},label:{width:'30%',margin:'5px'},button:{width:'5%'}};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'refresh';

	var ButtonUuendaLib = function (_React$PureComponent) {
	    _inherits(ButtonUuendaLib, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonUuendaLib(props) {
	        _classCallCheck(this, ButtonUuendaLib);

	        return _possibleConstructorReturn(this, (ButtonUuendaLib.__proto__ || Object.getPrototypeOf(ButtonUuendaLib)).call(this, props));
	    }

	    _createClass(ButtonUuendaLib, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            // если передан обработчик, вернем его
	            if (this.props.onClick) {
	                return this.props.onClick();
	            }

	            // если передан документ, вызовем метод обновления библиотеки
	            if (this.props.self && this.props.self.loadLibs && this.props.lib) {
	                var self = this.props.self;
	                self.loadLibs(this.props.lib);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnUuenda',
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonUuendaLib;
	}(React.PureComponent);

	ButtonUuendaLib.defaultProps = {
	    disabled: false,
	    show: true
	};
	module.exports = ButtonUuendaLib;

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	        border: '1px solid blue'
	*/},docColumn:{display:'flex',flexDirection:'column',/*
	        border: '1px solid yellow',
	*/width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	        border: '1px solid brown'
	*/},gridRow:{border:'1px solid black',backgroundColor:'white',position:'relative',margin:'10% 30% 10% 30%',width:'auto',opacity:'1',top:'100px'},docToolbarWarning:{float:'left',backgroundColor:'red',margin:'10px'},grid:{mainTable:{width:'100%'},headerTable:{width:'100%'},gridContainer:{width:'100%'}}};

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    InputDate = __webpack_require__(236),
	    InputNumber = __webpack_require__(238),
	    Select = __webpack_require__(164),
	    SelectData = __webpack_require__(265),
	    ButtonEdit = __webpack_require__(80),
	    TextArea = __webpack_require__(216),
	    DataGrid = __webpack_require__(183),
	    relatedDocuments = __webpack_require__(267),
	    ModalPage = __webpack_require__(171),
	    styles = __webpack_require__(303);

	var getTextValue = __webpack_require__(76);

	var DOC_TYPE_ID = 'SORDER';
	var DocContext = __webpack_require__(1);
	var DocRights = __webpack_require__(176);
	var checkRights = __webpack_require__(177);

	var LIBRARIES = __webpack_require__(86).SORDER.LIB_OBJS;

	var Sorder = function (_React$PureComponent) {
	    _inherits(Sorder, _React$PureComponent);

	    function Sorder(props) {
	        _classCallCheck(this, Sorder);

	        var _this = _possibleConstructorReturn(this, (Sorder.__proto__ || Object.getPrototypeOf(Sorder)).call(this, props));

	        _this.state = {
	            loadedData: false,
	            docId: props.docId ? props.docId : Number(props.match.params.docId),
	            lapsId: null,
	            isAskToCreateFromArv: true, // если указан счет, а док.ид = 0 , то можно создпть ордер по счету
	            getSMK: false,
	            arvId: 0

	        };
	        _this.createGridRow = _this.createGridRow.bind(_this);
	        _this.recalcDocSumma = _this.recalcDocSumma.bind(_this);
	        _this.recalcRowSumm = _this.recalcRowSumm.bind(_this);
	        _this.btnEditAsutusClick = _this.btnEditAsutusClick.bind(_this);

	        _this.renderer = _this.renderer.bind(_this);
	        _this.gridValidateFields = _this.gridValidateFields.bind(_this);
	        _this.modalPageBtnClick = _this.modalPageBtnClick.bind(_this);

	        _this.pages = [{ pageName: 'Sissetuliku kassaorder', docTypeId: 'SORDER' }];

	        return _this;
	    }

	    _createClass(Sorder, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                docTypeId: DOC_TYPE_ID,
	                history: this.props.history,
	                initData: this.props.initData,
	                module: this.state.module,
	                reload: true,
	                libs: LIBRARIES,
	                pages: this.pages,
	                renderer: this.renderer,
	                createGridRow: this.createGridRow,
	                gridValidator: this.gridValidateFields,
	                recalcDoc: this.recalcDocSumma,
	                focusElement: 'input-number'
	            });
	        }

	        /**
	         * Вернет кастомные компоненты документа
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            var bpm = self.docData && self.docData.bpm ? self.docData.bpm : [],
	                isEditeMode = self.state.edited;

	            // формируем зависимости
	            if (self.docData.relations) {
	                relatedDocuments(self);
	            }

	            var arved = [];
	            // фильтруем счета
	            if (self.docData.asutusid && self.docData.asutusid > 0) {
	                arved = self.libs['arv'].filter(function (row) {
	                    return row.asutusid == self.docData.asutusid;
	                });
	            }

	            var isNewDoc = !self.docData.id || self.docData.id == 0;
	            if ((!self.docData.id || self.docData.id == 0) && self.docData.arvid && this.state.isAskToCreateFromArv) {
	                this.setState({ getSMK: true, isAskToCreateFromArv: false, arvId: self.docData.arvid });
	            }

	            // права на редактирование карточки контрагента
	            var docRights = DocRights['ASUTUSED'] ? DocRights['ASUTUSED'] : [];
	            var userRoles = DocContext.userData ? DocContext.userData.roles : [];

	            return React.createElement(
	                'div',
	                { style: styles.doc },
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(InputText, { title: 'Number',
	                            name: 'number',
	                            value: String(self.docData.number) || '',
	                            ref: 'input-number',
	                            onChange: self.handleInputChange,
	                            readOnly: !isEditeMode })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(InputDate, { title: 'Kuup\xE4ev',
	                            name: 'kpv',
	                            value: self.docData.kpv,
	                            ref: 'input-kpv',
	                            onChange: self.handleInputChange,
	                            readOnly: !isEditeMode }),
	                        React.createElement(Select, { title: 'Kassa',
	                            name: 'kassa_id',
	                            libs: 'kassa',
	                            value: self.docData.kassa_id,
	                            data: self.libs['kassa'],
	                            defaultValue: String(self.docData.kassa) || '',
	                            ref: 'select-kassaId',
	                            onChange: self.handleInputChange,
	                            readOnly: !isEditeMode })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(Select, { title: 'Raha saaja',
	                            libs: 'asutused',
	                            name: 'asutusid',
	                            data: self.libs['asutused'],
	                            value: self.docData.asutusid || 0,
	                            defaultValue: self.docData.asutus,
	                            onChange: self.handleInputChange,
	                            collId: 'id',
	                            readOnly: !isEditeMode })
	                    ),
	                    checkRights(userRoles, docRights, 'edit') ? React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(ButtonEdit, {
	                            ref: 'btnEdit',
	                            value: 'Muuda',
	                            onClick: this.btnEditAsutusClick,
	                            show: !isEditeMode,
	                            style: styles.btnEdit,
	                            disabled: false
	                        })
	                    ) : null
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(Select, { title: 'Arve nr',
	                            libs: 'arv',
	                            name: 'arvid',
	                            data: arved,
	                            value: self.docData.arvid || 0,
	                            defaultValue: self.docData.arvnr,
	                            onChange: self.handleInputChange,
	                            collId: 'id',
	                            readOnly: !isEditeMode }),
	                        React.createElement(InputText, { title: 'Dokument',
	                            name: 'dokument',
	                            value: self.docData.dokument || '',
	                            ref: 'input-dokument',
	                            onChange: self.handleInputChange,
	                            readOnly: !isEditeMode })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Nimi',
	                        name: 'nimi',
	                        ref: 'textarea-nimi',
	                        value: self.docData.nimi || '',
	                        onChange: self.handleInputChange,
	                        readOnly: !isEditeMode })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Aadress',
	                        name: 'aadress',
	                        ref: 'textarea-aadress',
	                        value: self.docData.aadress || '',
	                        onChange: self.handleInputChange,
	                        readOnly: !isEditeMode })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Alus',
	                        name: 'alus',
	                        ref: 'textarea-alus',
	                        value: self.docData.alus || '',
	                        onChange: self.handleInputChange,
	                        readOnly: !isEditeMode })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(DataGrid, { source: 'details',
	                        gridData: self.docData.gridData,
	                        gridColumns: self.docData.gridConfig,
	                        showToolBar: isEditeMode,
	                        handleGridRow: self.handleGridRow,
	                        handleGridBtnClick: self.handleGridBtnClick,
	                        readOnly: !isEditeMode,
	                        style: styles.grid.headerTable,
	                        ref: 'data-grid' })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputNumber, { title: 'Summa',
	                        name: 'summa',
	                        ref: 'input-summa',
	                        value: Number(self.docData.summa) || 0,
	                        width: 'auto',
	                        disabled: true
	                    })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'M\xE4rkused',
	                        name: 'muud',
	                        ref: 'textarea-muud',
	                        value: self.docData.muud || '',
	                        onChange: self.handleInputChange,
	                        readOnly: !isEditeMode })
	                ),
	                self.state.gridRowEdit ? this.createGridRow(self) : null,
	                React.createElement(
	                    ModalPage,
	                    { ref: 'modalpageCreateOrder',
	                        modalPageBtnClick: this.modalPageBtnClick,
	                        modalPageName: 'Kas koosta SORDER',
	                        show: this.state.getSMK },
	                    'Kas koosta kassaorder?'
	                )
	            );
	        }

	        // откроет карточку контр-агента

	    }, {
	        key: 'btnEditAsutusClick',
	        value: function btnEditAsutusClick() {
	            var docAsutusId = this.refs['document'].docData.asutusid;

	            // осуществит переход на карточку контр-агента
	            this.props.history.push('/' + DocContext.module + '/asutused/' + docAsutusId);
	        }

	        /**
	         * will create SORDER
	         */

	    }, {
	        key: 'modalPageBtnClick',
	        value: function modalPageBtnClick(btnEvent) {
	            var _this2 = this;

	            this.setState({ getSMK: false });
	            if (btnEvent === 'Ok') {
	                var Doc = this.refs['document'];
	                var api = '/calc/koostaSorder';

	                var params = {
	                    docTypeId: DOC_TYPE_ID,
	                    module: this.props.module ? this.props.module : DocContext.module,
	                    userId: DocContext.userData.userId,
	                    uuid: DocContext.userData.uuid,
	                    docs: [Number(this.state.arvId)],
	                    seisuga: Doc.docData && Doc.docData.kpv ? Doc.docData.kpv : null,
	                    context: DocContext[api] ? DocContext[api] : null,
	                    taskName: 'koostaSorder'
	                };

	                Doc.fetchData('Post', api, { data: params }).then(function (response) {
	                    if (response && response.error_message) {
	                        Doc.setState({
	                            warning: 'viga: ' + response.error_message,
	                            warningType: 'error'
	                        });
	                    } else {
	                        if (response && response.result) {
	                            var newDocId = response.data && response.data && response.data.result && response.data.result.doc_id ? response.data.result.doc_id : 0;
	                            if (newDocId && newDocId > 0) {
	                                Doc.setState({
	                                    warning: 'Edukalt, suunatan ...',
	                                    warningType: 'ok'
	                                });
	                                // переходим на созданнй док
	                                if (newDocId) {
	                                    setTimeout(function () {
	                                        var current = '/' + (_this2.props.module ? _this2.props.module : DocContext.module) + '/' + DOC_TYPE_ID + '/' + newDocId;
	                                        _this2.props.history.replace('/reload');
	                                        setTimeout(function () {
	                                            _this2.props.history.replace(current);
	                                        });
	                                    }, 2000);
	                                }
	                            } else {
	                                Doc.setState({
	                                    warning: 'Tekkis viga',
	                                    warningType: 'error'
	                                });
	                            }
	                        }
	                    }
	                });
	            }
	        }

	        /**
	         * валидатор для строки грида
	         * @param gridRowData строка грида
	         * @returns {string}
	         */

	    }, {
	        key: 'gridValidateFields',
	        value: function gridValidateFields() {
	            var warning = '';
	            var doc = this.refs['document'];
	            if (doc && doc.gridRowData) {

	                // только после проверки формы на валидность
	                if (doc.gridRowData && !doc.gridRowData['nomid']) warning = warning + ' Код операции';
	                if (!doc.gridRowData['summa']) warning = warning + ' Сумма';

	                this.recalcRowSumm();
	                this.recalcDocSumma('summa');
	            }
	            return warning;
	        }

	        /**
	         * подставит код операции
	         */

	    }, {
	        key: 'recalcRowSumm',
	        value: function recalcRowSumm() {
	            var doc = this.refs['document'];

	            if (!Object.keys(doc.gridRowData).length) {
	                return;
	            }

	            //подставим наименование услогу

	            var nomDataName = doc.libs['nomenclature'].filter(function (lib) {
	                if (lib.id === doc.gridRowData['nomid']) return lib;
	            });

	            if (doc.gridRowData['nomid']) {
	                doc.gridRowData['kood'] = nomDataName[0].kood;
	                doc.gridRowData['nimetus'] = nomDataName[0].name;
	            }
	        }

	        /**
	         * Перерасчет сумм документа
	         */

	    }, {
	        key: 'recalcDocSumma',
	        value: function recalcDocSumma() {
	            var doc = this.refs['document'];
	            doc.docData['summa'] = 0;
	            doc.docData.gridData.forEach(function (row) {
	                doc.docData['summa'] += Number(row['summa']);
	            });
	        }

	        /**
	         * формирует объекты модального окна редактирования строки грида
	         * @returns {XML}
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow(self) {
	            var row = self.gridRowData ? self.gridRowData : {},
	                validateMessage = '',
	                // self.state.warning
	            buttonOkReadOnly = validateMessage.length > 0 || !self.state.checked,
	                modalObjects = ['btnOk', 'btnCancel'];

	            if (buttonOkReadOnly) {
	                // уберем кнопку Ок
	                modalObjects.splice(0, 1);
	            }

	            if (!row) return React.createElement('div', null);

	            return React.createElement(
	                'div',
	                { className: '.modalPage' },
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalObjects: modalObjects,
	                        ref: 'modalpage-grid-row',
	                        show: true,
	                        modalPageBtnClick: self.modalPageClick,
	                        modalPageName: 'Rea lisamine / parandamine' },
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        self.state.gridWarning.length ? React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'span',
	                                null,
	                                self.state.gridWarning
	                            )
	                        ) : null,
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Teenus',
	                                name: 'nomid',
	                                libs: 'nomenclature',
	                                data: self.libs['nomenclature'],
	                                value: row.nomid || 0,
	                                defaultValue: row.kood || '',
	                                ref: 'nomid',
	                                placeholder: 'Teenuse kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Summa: ',
	                                name: 'summa',
	                                value: Number(row.summa) || 0,
	                                bindData: false,
	                                ref: 'summa',
	                                onChange: self.handleGridRowInput })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'span',
	                            null,
	                            validateMessage
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Sorder;
	}(React.PureComponent);

	Sorder.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object,
	    userData: PropTypes.object
	};

	Sorder.defaultProps = {
	    initData: {},
	    userData: {}
	};

	module.exports = Sorder;

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	        border: '1px solid blue'
	*/},docColumn:{display:'flex',flexDirection:'column',/*
	        border: '1px solid yellow',
	*/width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	        border: '1px solid brown'
	*/},gridRow:{border:'1px solid black',backgroundColor:'white',position:'relative',margin:'10% 30% 10% 30%',width:'auto',opacity:'1',top:'100px'},docToolbarWarning:{float:'left',backgroundColor:'red',margin:'10px'},grid:{mainTable:{width:'100%'},headerTable:{width:'100%'},gridContainer:{width:'100%'}},btnEdit:{width:'min-content'}};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FzdXRhamEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9rYXN1dGFqYS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9tb2R1bGVzL2thc3V0YWphLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kb2NzL2thc3V0YWphL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL2RvY19yZWtsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb21wb25lbnRzL2RvY19yZWtsL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kb2NzL2thc3V0YWphL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kb2NzL3Ntay9kb2N1bWVudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9kb2Nwcm9wL2RvY3Byb3AuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvZG9jcHJvcC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9idXR0b24tcmVnaXN0ZXIvYnV0dG9uLXV1ZW5kYS1saWIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2RvY3Mvc21rL2RvY3VtZW50L3Ntay1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kb2NzL3NvcmRlci9kb2N1bWVudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZG9jcy9zb3JkZXIvZG9jdW1lbnQvc29yZGVyLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jzt2YXIgX2RvY0NvbnRleHQ9cmVxdWlyZSgnLi9kb2MtY29udGV4dC5qcycpO3ZhciBfZG9jQ29udGV4dDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9jQ29udGV4dCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O312YXIgUmVhY3RET009cmVxdWlyZSgncmVhY3QtZG9tJyk7dmFyIF9yZXF1aXJlPXJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKSxCcm93c2VyUm91dGVyPV9yZXF1aXJlLkJyb3dzZXJSb3V0ZXI7dmFyIERvYz1yZXF1aXJlKCcuLi9mcm9udGVuZC9tb2R1bGVzL2thc3V0YWphLmpzeCcpO2luaXREYXRhPUpTT04ucGFyc2UoaW5pdERhdGEpO3VzZXJEYXRhPUpTT04ucGFyc2UodXNlckRhdGEpOy8vINGB0L7RhdGA0LDQvdC40Lwg0LHQsNC30L7QstGL0LUg0LTQsNC90L3Ri9C1INCyINC/0LDQvNC10YLQuFxuX2RvY0NvbnRleHQyLmRlZmF1bHQuaW5pdERhdGE9aW5pdERhdGE7X2RvY0NvbnRleHQyLmRlZmF1bHQudXNlckRhdGE9dXNlckRhdGE7X2RvY0NvbnRleHQyLmRlZmF1bHQubW9kdWxlPSdrYXN1dGFqYSc7X2RvY0NvbnRleHQyLmRlZmF1bHQucGFnZU5hbWU9J0thc3V0YWphJztfZG9jQ29udGV4dDIuZGVmYXVsdC5ncmlkQ29uZmlnPWluaXREYXRhLmRvY0NvbmZpZztfZG9jQ29udGV4dDIuZGVmYXVsdC5tZW51PWluaXREYXRhLm1lbnU/aW5pdERhdGEubWVudS5kYXRhOltdO19kb2NDb250ZXh0Mi5kZWZhdWx0LmtlZWw9J0VTVCc7UmVhY3RET00uaHlkcmF0ZShSZWFjdC5jcmVhdGVFbGVtZW50KEJyb3dzZXJSb3V0ZXIsbnVsbCxSZWFjdC5jcmVhdGVFbGVtZW50KERvYyx7aW5pdERhdGE6aW5pdERhdGEsdXNlckRhdGE6dXNlckRhdGF9KSksZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvYycpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2thc3V0YWphLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbnZhciBEb2NDb250ZXh0ID0gcmVxdWlyZSgnLi8uLi9kb2MtY29udGV4dC5qcycpO1xuXG52YXIgTWVudSA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9tZW51LXRvb2xiYXIvbWVudS10b29sYmFyLmpzeCcpO1xuXG52YXIgU3RhcnRNZW51ID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL3N0YXJ0LW1lbnUvc3RhcnQtbWVudS5qc3gnKSxcbiAgICBLYXN1dGFqYVJlZ2lzdGVyID0gcmVxdWlyZSgnLi8uLi9kb2NzL2thc3V0YWphL2luZGV4LmpzeCcpLFxuICAgIFRhb3RsdXNMb2dpblJlZ2lzdGVyID0gcmVxdWlyZSgnLi8uLi9kb2NzL3Rhb3RsdXNfbG9naW4vaW5kZXguanN4JyksXG4gICAgVGFvdGx1c0xvZ2luRG9jdW1lbnQgPSByZXF1aXJlKCcuLy4uL2RvY3MvdGFvdGx1c19sb2dpbi9kb2N1bWVudC9pbmRleC5qc3gnKSxcbiAgICBPYmplY3REb2N1bWVudCA9IHJlcXVpcmUoJy4uL2RvY3Mvb2JqZWt0L2RvY3VtZW50L2luZGV4LmpzeCcpLFxuICAgIE9iamVjdFJlZ2lzdGVyID0gcmVxdWlyZSgnLi8uLi9kb2NzL29iamVrdC9pbmRleC5qc3gnKSxcbiAgICBMZXBpbmdEb2N1bWVudCA9IHJlcXVpcmUoJy4uL2RvY3MvbGVwaW5nL2RvY3VtZW50L2luZGV4LmpzeCcpLFxuICAgIExlcGluZ1JlZ2lzdGVyID0gcmVxdWlyZSgnLi8uLi9kb2NzL2xlcGluZy9pbmRleC5qc3gnKSxcbiAgICBBcnZEb2N1bWVudCA9IHJlcXVpcmUoJy4uL2RvY3MvYXJ2L2RvY3VtZW50L2luZGV4LmpzeCcpLFxuICAgIEFydlJlZ2lzdGVyID0gcmVxdWlyZSgnLi8uLi9kb2NzL2Fydi9pbmRleC5qc3gnKSxcbiAgICBTbWtEb2N1bWVudCA9IHJlcXVpcmUoJy4uL2RvY3Mvc21rL2RvY3VtZW50L2luZGV4LmpzeCcpLFxuICAgIFNvcmRlckRvY3VtZW50ID0gcmVxdWlyZSgnLi4vZG9jcy9zb3JkZXIvZG9jdW1lbnQvaW5kZXguanN4JyksXG4gICAgTW9vZHVEb2N1bWVudCA9IHJlcXVpcmUoJy4uL2RvY3MvbW9vZHUvZG9jdW1lbnQvaW5kZXguanN4JyksXG4gICAgTW9vZHVSZWdpc3RlciA9IHJlcXVpcmUoJy4vLi4vZG9jcy9tb29kdS9pbmRleC5qc3gnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpLFxuICAgIFJvdXRlID0gX3JlcXVpcmUuUm91dGU7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCdyYWRpdW0nKSxcbiAgICBTdHlsZVJvb3QgPSBfcmVxdWlyZTIuU3R5bGVSb290O1xuXG52YXIgTU9EVUxFID0gJ2thc3V0YWphJztcblxudmFyIEFwcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEFwcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFwcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5wcmVwYXJlUGFyYW1zRm9yVG9vbGJhciA9IF90aGlzLnByZXBhcmVQYXJhbXNGb3JUb29sYmFyLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlJhYW1hPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEFwcCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBTdHlsZVJvb3QsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6ICcvcmVkaXJlY3QnLCBjb21wb25lbnQ6IGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vJyArIERvY0NvbnRleHQubGluaywgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2thc3V0YWphJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEthc3V0YWphUmVnaXN0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiBwcm9wcy5oaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXREYXRhOiBfdGhpczIucHJvcHMuaW5pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9rYXN1dGFqYScsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChLYXN1dGFqYVJlZ2lzdGVyLCB7IGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdERhdGE6IF90aGlzMi5wcm9wcy5pbml0RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IE1PRFVMRSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6ICcva2FzdXRhamEvdGFvdGx1c19sb2dpbicsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYW90bHVzTG9naW5SZWdpc3RlciwgeyBoaXN0b3J5OiBwcm9wcy5oaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXREYXRhOiBfdGhpczIucHJvcHMuaW5pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2thc3V0YWphL3Rhb3RsdXNfbG9naW4vOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhb3RsdXNMb2dpbkRvY3VtZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IE1PRFVMRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiBwcm9wcy5oaXN0b3J5IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6ICcva2FzdXRhamEvaXNpa3Vfb2JqZWt0Lzpkb2NJZCcsIGNvbXBvbmVudDogT2JqZWN0RG9jdW1lbnQgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9vYmpla3QnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT2JqZWN0UmVnaXN0ZXIsIHsgaGlzdG9yeTogcHJvcHMuaGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0RGF0YTogX3RoaXMyLnByb3BzLmluaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogTU9EVUxFIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6ICcva2FzdXRhamEvaXNpa3VfbGVwaW5nLzpkb2NJZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTGVwaW5nRG9jdW1lbnQgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9sZXBpbmcvOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBMZXBpbmdEb2N1bWVudCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2thc3V0YWphL2xlcGluZycsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMZXBpbmdSZWdpc3RlciwgeyBoaXN0b3J5OiBwcm9wcy5oaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXREYXRhOiBfdGhpczIucHJvcHMuaW5pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9pc2lrdV9sZXBpbmcnLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVwaW5nUmVnaXN0ZXIsIHsgaGlzdG9yeTogcHJvcHMuaGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0RGF0YTogX3RoaXMyLnByb3BzLmluaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogTU9EVUxFIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6ICcva2FzdXRhamEvaXNpa3VfYXJ2Lzpkb2NJZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQXJ2RG9jdW1lbnQgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9hcnYvOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBBcnZEb2N1bWVudCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2thc3V0YWphL2FydicsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBcnZSZWdpc3RlciwgeyBoaXN0b3J5OiBwcm9wcy5oaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXREYXRhOiBfdGhpczIucHJvcHMuaW5pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9zbWsvOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBTbWtEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9zb3JkZXIvOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBTb3JkZXJEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9rYXN1dGFqYS9hbmRtZWQvOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBNb29kdURvY3VtZW50IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6ICcva2FzdXRhamEvaXNpa3VfYW5kbWVkLzpkb2NJZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTW9vZHVEb2N1bWVudCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2thc3V0YWphL2lzaWt1X2FuZG1lZCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNb29kdVJlZ2lzdGVyLCB7IGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdERhdGE6IF90aGlzMi5wcm9wcy5pbml0RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IE1PRFVMRSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2thc3V0YWphL2FuZG1lZCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNb29kdVJlZ2lzdGVyLCB7IGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdERhdGE6IF90aGlzMi5wcm9wcy5pbml0RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IE1PRFVMRSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlcGFyZVBhcmFtc0ZvclRvb2xiYXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZVBhcmFtc0ZvclRvb2xiYXIoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJ0blN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ0bkxvZ2luOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnRuQWNjb3VudDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXBwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL21vZHVsZXMva2FzdXRhamEuanN4XG4vLyBtb2R1bGUgaWQgPSAyOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRG9jdW1lbnRzID0gcmVxdWlyZSgnLi8uLi9kb2N1bWVudHMvZG9jdW1lbnRzLmpzeCcpO1xudmFyIFRvb2xiYXJDb250YWluZXIgPSByZXF1aXJlKCcuLy4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci1jb250YWluZXIvdG9vbGJhci1jb250YWluZXIuanN4Jyk7XG52YXIgUmVrbENvbXBvbmVudCA9IHJlcXVpcmUoJy4vLi4vLi4vY29tcG9uZW50cy9kb2NfcmVrbC9pbmRleC5qc3gnKTtcbnZhciBCdG5BZGRNb29kdSA9IHJlcXVpcmUoJy4vLi4vLi4vY29tcG9uZW50cy9idXR0b24tcmVnaXN0ZXIvYnV0dG9uLXJlZ2lzdGVyLmpzeCcpO1xudmFyIERvY0NvbnRleHQgPSByZXF1aXJlKCcuLy4uLy4uL2RvYy1jb250ZXh0LmpzJyk7XG5cbnZhciBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xudmFyIERPQ19UWVBFX0lEID0gJ0tBU1VUQUpBJztcbnZhciBUT09MQkFSX1BST1BTID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9jb25maWcvY29uc3RhbnRzJykuVEVBVElTLnRvb2xiYXJQcm9wcztcblxuLyoqXHJcbiAqINCa0LvQsNGB0YEg0YDQtdCw0LvQuNC30YPQtdGCINC00L7QutGD0LzQtdC90YIg0YHQv9GA0LDQstC+0YfQvdC40LrQsCDQv9GA0LjQt9C90LDQutC+0LIuXHJcbiAqL1xuXG52YXIgUmVnaXN0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmVnaXN0ZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJlZ2lzdGVyKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWdpc3Rlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlZ2lzdGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVnaXN0ZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuYnRuRWRpdENsaWNrID0gX3RoaXMuYnRuRWRpdENsaWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkNsaWNrSGFuZGxlciA9IF90aGlzLm9uQ2xpY2tIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5yZW5kZXJlciA9IF90aGlzLnJlbmRlcmVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVnaXN0ZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRzLCB7IGluaXREYXRhOiB0aGlzLnByb3BzLmluaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnkgPyB0aGlzLnByb3BzLmhpc3RvcnkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IHRoaXMucHJvcHMubW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICByZWY6ICdyZWdpc3RlcicsXG4gICAgICAgICAgICAgICAgICAgIGRvY1R5cGVJZDogRE9DX1RZUEVfSUQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgIGJ0bkVkaXRDbGljazogdGhpcy5idG5FZGl0Q2xpY2ssXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXJQcm9wczogVE9PTEJBUl9QUk9QUyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiB0aGlzLnJlbmRlcmVyIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgVG9vbGJhckNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB7IGJvcmRlcjogJzFweCBzb2xpZCBsaWdodEdyZXknIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWtsQ29tcG9uZW50LCB7IGhpc3Rvcnk6IHRoaXMucHJvcHMuaGlzdG9yeSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcmVyKHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFRvb2xiYXJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ0bkFkZE1vb2R1LCB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja0hhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTGlzYSBhbmRtZWQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2hhbmRsZXIg0LTQu9GPINGB0L7QsdGL0YLQuNGPINC60LvQuNC6INC90LAg0LrQvdC+0L/QutCw0YUg0L/QsNC90LXQu9C4XG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2xpY2tIYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgLy/QtNC10LvQsNC10Lwg0YDQtdC00LDQudGA0LXQutGCINC90LAg0YHQvtC30LTQsNC90LjQtSDQtNC+0LrRg9C80LXQvdGC0LAgLSDQv9C+0LrQsNC30LDQvdC40Y8g0YHRh9C10YLRh9C40LrQvtCyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2thc3V0YWphL0FORE1FRC8wJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2J0bkVkaXRDbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidG5FZGl0Q2xpY2socm93X2lkKSB7XG4gICAgICAgICAgICAvLyDQuNGJ0LXQvCDRgtC40L8g0LTQvtC60YPQvNC10L3RgtCwXG4gICAgICAgICAgICB2YXIgRG9jID0gdGhpcy5yZWZzWydyZWdpc3RlciddO1xuXG4gICAgICAgICAgICB2YXIgZ3JpZFJvdyA9IERvYy5ncmlkRGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3cuaWQgPT0gcm93X2lkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZ3JpZFJvdykge1xuICAgICAgICAgICAgICAgIHZhciBkb2NUeXBlSWQgPSBncmlkUm93WzBdLmRvY190eXBlX2lkO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnLycgKyB0aGlzLnByb3BzLm1vZHVsZSArICcvJyArIGRvY1R5cGVJZCArICcvJyArIGdyaWRSb3dbMF0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7IG1vZHVsZTogdGhpcy5wcm9wcy5tb2R1bGUgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlZ2lzdGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3Mva2FzdXRhamEvaW5kZXguanN4XG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG52YXIgX2ZldGNoRGF0YSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vbGlicy9mZXRjaERhdGEnKTtcbnZhciBEb2NDb250ZXh0ID0gcmVxdWlyZSgnLi8uLi8uLi9kb2MtY29udGV4dC5qcycpO1xuXG4vL2NvbnN0IHt3aXRoUm91dGVyfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xuXG52YXIgSW5kZXggPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoSW5kZXgsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmRleCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEluZGV4Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5kZXgpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuZG9jSWQgPSBudWxsO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5pbWV0dXM6IG51bGwsXG4gICAgICAgICAgICBsaW5rOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmludGVydmFsID0gbnVsbDtcbiAgICAgICAgX3RoaXMuZmV0Y2hEYXRhID0gX3RoaXMuZmV0Y2hEYXRhLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5kZXgsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmZldGNoRGF0YSgpLCAxMDAwICogNjApO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmZldGNoRGF0YSgpO1xuICAgICAgICAgICAgfSwgMTAwMDApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZnJhbWUgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5pbWV0dXMgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgIHsgaHJlZjogdGhpcy5zdGF0ZS5saW5rLCB0YXJnZXQ6ICdfYmxhbmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5uaW1ldHVzLFxuICAgICAgICAgICAgICAgICAgICAnICdcbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmV0Y2hEYXRhJyxcblxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCS0YvQv9C+0LvQvdC40YIg0LfQsNC/0YDQvtGB0YtcclxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZldGNoRGF0YSh1cmwsIGxpbmspIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgVVJMID0gJy9uZXdBcGknO1xuICAgICAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICAgICAgICBVUkwgPSBsaW5rO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGxpbms6IGxpbmssXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyOiAnUkVLTCcsIC8vINC/0LDRgNCw0LzQtdGC0YDRi1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3NlbGVjdERvY3MnLFxuICAgICAgICAgICAgICAgIHNvcnRCeTogW3sgY29sdW1uOiAnbGFzdF9zaG93bicsIGRpcmVjdGlvbjogJ2FzYycgfV0sIC8vINGB0L7RgNGC0LjRgNC+0LLQutCwXG4gICAgICAgICAgICAgICAgbGltaXQ6IDEsIC8vIHJvdyBsaW1pdCBpbiBxdWVyeVxuICAgICAgICAgICAgICAgIHNxbFdoZXJlOiAnd2hlcmUgKGZvcm1hdF9kYXRlKGFsZ19rcHYpOjpkYXRlIDw9IGN1cnJlbnRfZGF0ZSBvciBmb3JtYXRfZGF0ZShsb3BwX2twdik6OmRhdGUgPj0gY3VycmVudF9kYXRlKSBBTkQgZG9jcy51cGRhdGVfbGFzdF9yZWtsKGlkKSA9IDEnLCAvLyDQtNC40L3QsNC80LjRh9C10YHQutC40Lkg0YTQuNC70YzRgtGAINCz0YDQuNC00LBcbiAgICAgICAgICAgICAgICBtb2R1bGU6ICdqdWh0JyxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IERvY0NvbnRleHQudXNlckRhdGEudXNlcklkLFxuICAgICAgICAgICAgICAgIHV1aWQ6IERvY0NvbnRleHQudXNlckRhdGEudXVpZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlZCwgcmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgICAgICAgICBfZmV0Y2hEYXRhWydmZXRjaERhdGFHZXQnXShVUkwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9mZXRjaERhdGFbJ2ZldGNoRGF0YVBvc3QnXShVUkwsIHBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9ICcvbG9naW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfbWVzc2FnZTogJ2Vycm9yICcgKyAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmVycm9yX21lc3NhZ2UgPyAncmVzcG9uc2UuZGF0YS5lcnJvcl9tZXNzYWdlJyA6IHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLnJlc3VsdC5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgbmltZXR1czogZGF0YS5uaW1ldHVzLCBsaW5rOiBkYXRhLmxpbmsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmV0Y2ggZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEluZGV4O1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuLy9tb2R1bGUuZXhwb3J0cyA9IHdpdGhSb3V0ZXIoRG9jVG9vbEJhcik7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBJbmRleDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2NvbXBvbmVudHMvZG9jX3Jla2wvaW5kZXguanN4XG4vLyBtb2R1bGUgaWQgPSAyOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO21vZHVsZS5leHBvcnRzPXtmcmFtZTp7d2lkdGg6JzEwMCUnfX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9jb21wb25lbnRzL2RvY19yZWtsL3N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIid1c2Ugc3RyaWN0Jzttb2R1bGUuZXhwb3J0cz17Z3JpZDp7bWFpblRhYmxlOnt3aWR0aDonMTAwJScsdGQ6e2JvcmRlcjonMXB4IHNvbGlkIGxpZ2h0R3JleScsZGlzcGxheTondGFibGUtY2VsbCcscGFkZGluZ0xlZnQ6JzVweCd9fSxoZWFkZXJUYWJsZTp7d2lkdGg6JzEwMCUnfSxncmlkQ29udGFpbmVyOnt3aWR0aDonMTAwJSd9fSxmcmFtZTp7anVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLGJvcmRlcjonMXB4IHNvbGlkIGxpZ2h0R3JleSd9fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3Mva2FzdXRhamEvc3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgRG9jdW1lbnRUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uLy4uL2RvY3VtZW50VGVtcGxhdGUvaW5kZXguanN4JyksXG4gICAgSW5wdXRUZXh0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC10ZXh0L2lucHV0LXRleHQuanN4JyksXG4gICAgSW5wdXREYXRlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC1kYXRlL2lucHV0LWRhdGUuanN4JyksXG4gICAgSW5wdXROdW1iZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0LW51bWJlci9pbnB1dC1udW1iZXIuanN4JyksXG4gICAgU2VsZWN0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmpzeCcpLFxuICAgIFNlbGVjdERhdGEgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL3NlbGVjdC1kYXRhL3NlbGVjdC1kYXRhLmpzeCcpLFxuICAgIFRleHRBcmVhID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEvdGV4dC1hcmVhLmpzeCcpLFxuICAgIERhdGFHcmlkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLWdyaWQvZGF0YS1ncmlkLmpzeCcpLFxuICAgIERva1Byb3AgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL2RvY3Byb3AvZG9jcHJvcC5qc3gnKSxcbiAgICByZWxhdGVkRG9jdW1lbnRzID0gcmVxdWlyZSgnLi4vLi4vLi4vbWl4aW4vcmVsYXRlZERvY3VtZW50cy5qc3gnKSxcbiAgICBNb2RhbFBhZ2UgPSByZXF1aXJlKCcuLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxwYWdlL21vZGFsUGFnZS5qc3gnKSxcbiAgICBMb2FkaW5nID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9jb21wb25lbnRzL2xvYWRpbmcvaW5kZXguanN4JyksXG4gICAgQnV0dG9uVXVlbmRhTGliID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24tcmVnaXN0ZXIvYnV0dG9uLXV1ZW5kYS1saWIvaW5kZXguanN4JyksXG4gICAgc3R5bGVzID0gcmVxdWlyZSgnLi9zbWstc3R5bGUnKTtcblxudmFyIGdldFRleHRWYWx1ZSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vLi4vbGlicy9nZXRUZXh0VmFsdWUnKTtcblxudmFyIERPQ19UWVBFX0lEID0gJ1NNSyc7XG52YXIgRG9jQ29udGV4dCA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vZG9jLWNvbnRleHQuanMnKTtcblxudmFyIExJQlJBUklFUyA9IFt7IGlkOiAnbm9tZW5jbGF0dXJlJywgZmlsdGVyOiAnd2hlcmUgZG9rIGluIChcXCdNS1xcJyxcXCdTTUtcXCcpJyB9LCB7IGlkOiAnYXN1dHVzZWQnLCBmaWx0ZXI6ICcnIH0sIHsgaWQ6ICdhYScsIGZpbHRlcjogJycgfV07XG5cbnZhciBTbWsgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU21rLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTbWsocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNtayk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNtay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNtaykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRvY0lkOiBwcm9wcy5kb2NJZCA/IHByb3BzLmRvY0lkIDogTnVtYmVyKHByb3BzLm1hdGNoLnBhcmFtcy5kb2NJZCksXG4gICAgICAgICAgICBsb2FkZWREYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGxhcHNJZDogbnVsbCxcbiAgICAgICAgICAgIG1vZHVsZTogX3RoaXMucHJvcHMubW9kdWxlLFxuICAgICAgICAgICAgaXNBc2tUb0NyZWF0ZUZyb21BcnY6IHRydWUsIC8vINC10YHQu9C4INGD0LrQsNC30LDQvSDRgdGH0LXRgiwg0LAg0LTQvtC6LtC40LQgPSAwICwg0YLQviDQvNC+0LbQvdC+INGB0L7Qt9C00L/RgtGMINC+0YDQtNC10YAg0L/QviDRgdGH0LXRgtGDXG4gICAgICAgICAgICBnZXRTTUs6IGZhbHNlLFxuICAgICAgICAgICAgYXJ2SWQ6IDAsXG4gICAgICAgICAgICBrYXNfYWFfa2FzaXRzaTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5jcmVhdGVHcmlkUm93ID0gX3RoaXMuY3JlYXRlR3JpZFJvdy5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMucmVjYWxjRG9jU3VtbWEgPSBfdGhpcy5yZWNhbGNEb2NTdW1tYS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMucmVjYWxjUm93U3VtbSA9IF90aGlzLnJlY2FsY1Jvd1N1bW0uYmluZChfdGhpcyk7XG5cbiAgICAgICAgX3RoaXMucmVuZGVyZXIgPSBfdGhpcy5yZW5kZXJlci5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ3JpZFZhbGlkYXRlRmllbGRzID0gX3RoaXMuZ3JpZFZhbGlkYXRlRmllbGRzLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5tb2RhbFBhZ2VCdG5DbGljayA9IF90aGlzLm1vZGFsUGFnZUJ0bkNsaWNrLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLnBhZ2VzID0gW3sgcGFnZU5hbWU6ICdTaXNzZW1ha3NlIGtvcnJhbGR1cycsIGRvY1R5cGVJZDogJ1NNSycgfV07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU21rLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhpc3RvcnkgJiYgdGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhcHNJZCA9IHRoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5zdGF0ZS5sYXBzSWQ7XG4gICAgICAgICAgICAgICAgdmFyIF9tb2R1bGUgPSB0aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24uc3RhdGUubW9kdWxlID8gdGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnN0YXRlLm1vZHVsZSA6ICdsYXBzZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXBzSWQ6IGxhcHNJZCwgbW9kdWxlOiBfbW9kdWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRUZW1wbGF0ZSwgeyBkb2NJZDogdGhpcy5zdGF0ZS5kb2NJZCxcbiAgICAgICAgICAgICAgICByZWY6ICdkb2N1bWVudCcsXG4gICAgICAgICAgICAgICAgZG9jVHlwZUlkOiBET0NfVFlQRV9JRCxcbiAgICAgICAgICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgICAgICBpbml0RGF0YTogdGhpcy5wcm9wcy5pbml0RGF0YSxcbiAgICAgICAgICAgICAgICByZWxvYWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGliczogTElCUkFSSUVTLFxuICAgICAgICAgICAgICAgIHBhZ2VzOiB0aGlzLnBhZ2VzLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgICAgICAgICAgIGNyZWF0ZUdyaWRSb3c6IHRoaXMuY3JlYXRlR3JpZFJvdyxcbiAgICAgICAgICAgICAgICBncmlkVmFsaWRhdG9yOiB0aGlzLmdyaWRWYWxpZGF0ZUZpZWxkcyxcbiAgICAgICAgICAgICAgICByZWNhbGNEb2M6IHRoaXMucmVjYWxjRG9jU3VtbWEsXG4gICAgICAgICAgICAgICAgZm9jdXNFbGVtZW50OiAnaW5wdXQtbnVtYmVyJ1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCS0LXRgNC90LXRgiDQutCw0YHRgtC+0LzQvdGL0LUg0LrQvtC80L/QvtC90LXQvdGC0Ysg0LTQvtC60YPQvNC10L3RgtCwXHJcbiAgICAgICAgICogQHJldHVybnMge1hNTH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyZXIoc2VsZikge1xuICAgICAgICAgICAgaWYgKCFzZWxmIHx8ICFzZWxmLmRvY0RhdGEgfHwgIXNlbGYuZG9jRGF0YS5rcHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2MgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7IGxhYmVsOiBnZXRUZXh0VmFsdWUoJ0xhYWRpbWluZS4uLicpIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGlzRWRpdGVNb2RlID0gc2VsZi5zdGF0ZS5lZGl0ZWQ7XG5cbiAgICAgICAgICAgIC8vINGE0L7RgNC80LjRgNGD0LXQvCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4XG4gICAgICAgICAgICBpZiAoc2VsZi5kb2NEYXRhLnJlbGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHJlbGF0ZWREb2N1bWVudHMoc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpc05ld0RvYyA9ICFzZWxmLmRvY0RhdGEuaWQgfHwgc2VsZi5kb2NEYXRhLmlkID09PSAwO1xuICAgICAgICAgICAgaWYgKCghc2VsZi5kb2NEYXRhLmlkIHx8IHNlbGYuZG9jRGF0YS5pZCA9PT0gMCkgJiYgc2VsZi5kb2NEYXRhLmFydmlkICYmIHRoaXMuc3RhdGUuaXNBc2tUb0NyZWF0ZUZyb21BcnYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2V0U01LOiB0cnVlLCBpc0Fza1RvQ3JlYXRlRnJvbUFydjogZmFsc2UsIGFydklkOiBzZWxmLmRvY0RhdGEuYXJ2aWQgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHF1ZXJ5QXJ2VGFzdVxuICAgICAgICAgICAgdmFyIGdyaWRBcnZEYXRhID0gc2VsZi5kb2NEYXRhLnF1ZXJ5QXJ2VGFzdSxcbiAgICAgICAgICAgICAgICBncmlkQXJ2Q29sdW1ucyA9IHNlbGYuZG9jRGF0YS5ncmlkQXJ2Q29uZmlnO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5kb2NEYXRhLmphYWspIHtcbiAgICAgICAgICAgICAgICBEb2NDb250ZXh0Lm1rSmFhayA9IHNlbGYuZG9jRGF0YS5qYWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Rpdi1kb2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY0NvbHVtbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRUZXh0LCB7IHRpdGxlOiAnTnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcoc2VsZi5kb2NEYXRhLm51bWJlciB8fCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2lucHV0LW51bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogIWlzRWRpdGVNb2RlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXREYXRlLCB7IHRpdGxlOiAnS3V1cFxceEU0ZXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAna3B2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuZG9jRGF0YS5rcHYgfHwgJzAxLTA3LTIwMjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdpbnB1dC1rcHYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB0aXRsZTogJ0FydmVsZHVzIGFydmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWFfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWJzOiAnYWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTnVtYmVyKHNlbGYuZG9jRGF0YS5hYV9pZCkgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZi5saWJzWydhYSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFN0cmluZyhzZWxmLmRvY0RhdGEucGFuaykgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdzZWxlY3QtYWFJZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhaXNFZGl0ZU1vZGUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dERhdGUsIHsgdGl0bGU6ICdNYWtzZXBcXHhFNGV2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21ha3NlcGFldicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLmRvY0RhdGEubWFrc2VwYWV2IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdpbnB1dC1tYWtzZXBhZXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0VGV4dCwgeyB0aXRsZTogJ1ZpaXRlbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZpaXRlbnInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5kb2NEYXRhLnZpaXRlbnIgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2lucHV0LXZpaXRlbnInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7IHRpdGxlOiAnU2VsZ2l0dXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICd0ZXh0YXJlYS1zZWxnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5kb2NEYXRhLnNlbGcgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGFHcmlkLCB7IHNvdXJjZTogJ2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWREYXRhOiBzZWxmLmRvY0RhdGEuZ3JpZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbnM6IHNlbGYuZG9jRGF0YS5ncmlkQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb29sQmFyOiBpc0VkaXRlTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcmlkUm93OiBzZWxmLmhhbmRsZUdyaWRSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JpZEJ0bkNsaWNrOiBzZWxmLmhhbmRsZUdyaWRCdG5DbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogIWlzRWRpdGVNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZ3JpZC5oZWFkZXJUYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdkYXRhLWdyaWQnIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY0NvbHVtbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRUZXh0LCB7IHRpdGxlOiAnS29ra3U6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1bW1hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAnaW5wdXQtc3VtbWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nKHNlbGYuZG9jRGF0YS5zdW1tYSkgfHwgJzAuMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY0NvbHVtbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRUZXh0LCB7IHRpdGxlOiAnTVxceEU0XFx4RTRyYW1hdGEgc3VtbWE6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21rX2phYWsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdpbnB1dC1qYWFrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFN0cmluZyhzZWxmLmRvY0RhdGEuamFhaykgfHwgJzAuMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7IHRpdGxlOiAnTVxceEU0cmt1c2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdtdXVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ3RleHRhcmVhLW11dWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuZG9jRGF0YS5tdXVkIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogIWlzRWRpdGVNb2RlIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLmdyaWRSb3dFZGl0ID8gdGhpcy5jcmVhdGVHcmlkUm93KHNlbGYpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBNb2RhbFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmOiAnbW9kYWxwYWdlQ3JlYXRlT3JkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxQYWdlQnRuQ2xpY2s6IHRoaXMubW9kYWxQYWdlQnRuQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFBhZ2VOYW1lOiAnS2FzIGtvb3N0YSBTTUsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS5nZXRTTUsgfSxcbiAgICAgICAgICAgICAgICAgICAgJ0thcyBrb29zdGEgU01LPydcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ2xhYmVsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGV4dFZhbHVlKCdBcnZlZCcpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YUdyaWQsIHsgc291cmNlOiAnYXJ2ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZERhdGE6IGdyaWRBcnZEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbnM6IGdyaWRBcnZDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Rvb2xCYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JpZEJ0bkNsaWNrOiBzZWxmLmhhbmRsZUdyaWRCdG5DbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1R5cGVJZDogJ2FydicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZ3JpZC5oZWFkZXJUYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2FydmVkLWRhdGEtZ3JpZCcgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogd2lsbCBjcmVhdGUgU01LXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vZGFsUGFnZUJ0bkNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vZGFsUGFnZUJ0bkNsaWNrKGJ0bkV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdldFNNSzogZmFsc2UgfSk7XG4gICAgICAgICAgICBpZiAoYnRuRXZlbnQgPT09ICdPaycpIHtcbiAgICAgICAgICAgICAgICB2YXIgRG9jID0gdGhpcy5yZWZzWydkb2N1bWVudCddO1xuICAgICAgICAgICAgICAgIHZhciBhcGkgPSAnL2NhbGMva29vc3RhTUsnO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jVHlwZUlkOiBET0NfVFlQRV9JRCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnByb3BzLm1vZHVsZSA/IHRoaXMucHJvcHMubW9kdWxlIDogRG9jQ29udGV4dC5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogRG9jQ29udGV4dC51c2VyRGF0YS51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IERvY0NvbnRleHQudXNlckRhdGEudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgZG9jczogW051bWJlcih0aGlzLnN0YXRlLmFydklkKV0sXG4gICAgICAgICAgICAgICAgICAgIHNlaXN1Z2E6IERvYy5kb2NEYXRhICYmIERvYy5kb2NEYXRhLmtwdiA/IERvYy5kb2NEYXRhLmtwdiA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IERvY0NvbnRleHRbYXBpXSA/IERvY0NvbnRleHRbYXBpXSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRhc2tOYW1lOiAna29vc3RhTUsnXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIERvYy5mZXRjaERhdGEoJ1Bvc3QnLCBhcGksIHsgZGF0YTogcGFyYW1zIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5lcnJvcl9tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb2Muc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmc6ICd2aWdhOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nVHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RvY0lkID0gcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0ICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0LmRvY19pZCA/IHJlc3BvbnNlLmRhdGEucmVzdWx0LmRvY19pZCA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9jLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzogJ0VkdWthbHQsIHN1dW5hdGFuIC4uLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdUeXBlOiAnb2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQv9C10YDQtdGF0L7QtNC40Lwg0L3QsCDRgdC+0LfQtNCw0L3QvdC5INC00L7QulxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdEb2NJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gJy8nICsgKF90aGlzMi5wcm9wcy5tb2R1bGUgPyBfdGhpczIucHJvcHMubW9kdWxlIDogRG9jQ29udGV4dC5tb2R1bGUpICsgJy9zbWsvJyArIG5ld0RvY0lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLmhpc3RvcnkucmVwbGFjZSgnL3JlbG9hZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLmhpc3RvcnkucmVwbGFjZShjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvYy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmc6ICdUZWtraXMgdmlnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdUeXBlOiAnZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignYXBpIGNhbGwgZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIERvYy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nOiAnVmlnYSAnICsgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nVHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINGE0L7RgNC80LjRgNGD0LXRgiDQvtCx0YrQtdC60YLRiyDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINGB0YLRgNC+0LrQuCDQs9GA0LjQtNCwXHJcbiAgICAgICAgICogQHJldHVybnMge1hNTH1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlR3JpZFJvdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVHcmlkUm93KHNlbGYpIHtcbiAgICAgICAgICAgIHZhciByb3cgPSBzZWxmLmdyaWRSb3dEYXRhID8gc2VsZi5ncmlkUm93RGF0YSA6IHt9LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlTWVzc2FnZSA9ICcnLFxuICAgICAgICAgICAgICAgIC8vIHNlbGYuc3RhdGUud2FybmluZ1xuICAgICAgICAgICAgYnV0dG9uT2tSZWFkT25seSA9IHZhbGlkYXRlTWVzc2FnZS5sZW5ndGggPiAwIHx8ICFzZWxmLnN0YXRlLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgbW9kYWxPYmplY3RzID0gWydidG5PaycsICdidG5DYW5jZWwnXTtcblxuICAgICAgICAgICAgaWYgKGJ1dHRvbk9rUmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAvLyDRg9Cx0LXRgNC10Lwg0LrQvdC+0L/QutGDINCe0LpcbiAgICAgICAgICAgICAgICBtb2RhbE9iamVjdHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJvdykgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJy5tb2RhbFBhZ2UnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTW9kYWxQYWdlLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbE9iamVjdHM6IG1vZGFsT2JqZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ21vZGFscGFnZS1ncmlkLXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxQYWdlQnRuQ2xpY2s6IHNlbGYubW9kYWxQYWdlQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFBhZ2VOYW1lOiAnUmVhIGxpc2FtaW5lIC8gcGFyYW5kYW1pbmUnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiAnZ3JpZC1yb3ctY29udGFpbmVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgdGl0bGU6ICdPcGVyYXRzaW9vbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub21pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHNlbGYubGlic1snbm9tZW5jbGF0dXJlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cubm9taWQgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbElkOiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHJvdy5rb29kIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdub21pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUdyaWRSb3dDaGFuZ2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB0aXRsZTogJ1BhcnRuZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXN1dHVzaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzZWxmLmxpYnNbJ2FzdXR1c2VkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cuYXN1dHVzaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogcm93LmFzdXR1cyB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbElkOiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdhc3V0dXNpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUdyaWRSb3dDaGFuZ2UgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25VdWVuZGFMaWIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZjogc2VsZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGliOiAnYXN1dHVzZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0VGV4dCwgeyB0aXRsZTogJ0FydmVsZHVzIGFydmU6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3cuYWEgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmREYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAnYWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVHcmlkUm93SW5wdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0TnVtYmVyLCB7IHRpdGxlOiAnU3VtbWE6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdW1tYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIocm93LnN1bW1hKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZERhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdzdW1tYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUdyaWRSb3dJbnB1dCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IHRpdGxlOiAnS29yci4ga29udG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAna29udG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWJzOiAna29udG9kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZi5saWJzWydrb250b2QnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy5rb250byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAna29udG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsSWQ6ICdrb29kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlR3JpZFJvd0NoYW5nZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IHRpdGxlOiAnVHVubnVzOicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0dW5udXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWJzOiAndHVubnVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZi5saWJzWyd0dW5udXMnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy50dW5udXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ3R1bm51cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxJZDogJ2tvb2QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVHcmlkUm93Q2hhbmdlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgdGl0bGU6ICdQcm9qZWN0OicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9qJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGliczogJ3Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzZWxmLmxpYnNbJ3Byb2plY3QnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvdy5wcm9qLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdwcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbElkOiAna29vZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUdyaWRSb3dDaGFuZ2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0L/QtdGA0LXRgNCw0YHRh9C10YIg0LjRgtC+0LPQvtCy0L7QuSDRgdGD0LzQvNGLINC00L7QutGD0LzQtdC90YLQsFxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWNhbGNEb2NTdW1tYScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGNEb2NTdW1tYSgpIHtcbiAgICAgICAgICAgIHZhciBkb2MgPSB0aGlzLnJlZnNbJ2RvY3VtZW50J107XG4gICAgICAgICAgICBkb2MuZG9jRGF0YVsnc3VtbWEnXSA9IDA7XG4gICAgICAgICAgICBkb2MuZG9jRGF0YS5ncmlkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICBkb2MuZG9jRGF0YVsnc3VtbWEnXSArPSBOdW1iZXIocm93WydzdW1tYSddKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0L/QvtC00YHRgtCw0LLQuNGCINC60L7QtCDQvtC/0LXRgNCw0YbQuNC4XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlY2FsY1Jvd1N1bW0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjYWxjUm93U3VtbSgpIHtcbiAgICAgICAgICAgIHZhciBkb2MgPSB0aGlzLnJlZnNbJ2RvY3VtZW50J107XG5cbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoZG9jLmdyaWRSb3dEYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v0L/QvtC00YHRgtCw0LLQuNC8INC90LDQuNC80LXQvdC+0LLQsNC90LjQtSDRg9GB0LvQvtCz0YNcblxuICAgICAgICAgICAgaWYgKGRvYy5ncmlkUm93RGF0YVsnbm9taWQnXSkge1xuICAgICAgICAgICAgICAgIHZhciBub21EYXRhTmFtZSA9IGRvYy5saWJzWydub21lbmNsYXR1cmUnXS5maW5kKGZ1bmN0aW9uIChsaWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpYi5pZCA9PT0gTnVtYmVyKGRvYy5ncmlkUm93RGF0YVsnbm9taWQnXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9tRGF0YU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jLmdyaWRSb3dEYXRhWydrb29kJ10gPSBub21EYXRhTmFtZS5rb29kO1xuICAgICAgICAgICAgICAgICAgICBkb2MuZ3JpZFJvd0RhdGFbJ25pbWV0dXMnXSA9IG5vbURhdGFOYW1lLm5pbWV0dXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL9C/0L7QtNGB0YLQsNCy0LjQvCDQvdCw0LjQvNC10L3QvtCy0LDQvdC40LVcbiAgICAgICAgICAgIGlmIChkb2MuZ3JpZFJvd0RhdGFbJ2FzdXR1c2lkJ10pIHtcblxuICAgICAgICAgICAgICAgIHZhciBhc3V0dXNEYXRhTmFtZSA9IGRvYy5saWJzWydhc3V0dXNlZCddLmZpbmQoZnVuY3Rpb24gKGxpYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGliLmlkID09PSBOdW1iZXIoZG9jLmdyaWRSb3dEYXRhWydhc3V0dXNpZCddKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChhc3V0dXNEYXRhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2MuZ3JpZFJvd0RhdGFbJ2FzdXR1cyddID0gYXN1dHVzRGF0YU5hbWUubmltZXR1cztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvYy5ncmlkUm93RGF0YVsnYWEnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmdyaWRSb3dEYXRhWydhYSddID0gYXN1dHVzRGF0YU5hbWUucGFuaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCy0LDQu9C40LTQsNGC0L7RgCDQtNC70Y8g0YHRgtGA0L7QutC4INCz0YDQuNC00LBcclxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdncmlkVmFsaWRhdGVGaWVsZHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ3JpZFZhbGlkYXRlRmllbGRzKCkge1xuICAgICAgICAgICAgdmFyIHdhcm5pbmcgPSAnJztcbiAgICAgICAgICAgIHZhciBkb2MgPSB0aGlzLnJlZnNbJ2RvY3VtZW50J107XG4gICAgICAgICAgICBpZiAoZG9jICYmIGRvYy5ncmlkUm93RGF0YSkge1xuXG4gICAgICAgICAgICAgICAgLy8g0YLQvtC70YzQutC+INC/0L7RgdC70LUg0L/RgNC+0LLQtdGA0LrQuCDRhNC+0YDQvNGLINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgICAgICAgICAgICAgICBpZiAoZG9jLmdyaWRSb3dEYXRhICYmICFkb2MuZ3JpZFJvd0RhdGFbJ25vbWlkJ10pIHdhcm5pbmcgPSB3YXJuaW5nICsgJyDQmtC+0LQg0L7Qv9C10YDQsNGG0LjQuCc7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2MuZ3JpZFJvd0RhdGFbJ3N1bW1hJ10pIHdhcm5pbmcgPSB3YXJuaW5nICsgJyDQodGD0LzQvNCwJztcbiAgICAgICAgICAgICAgICBpZiAoIWRvYy5ncmlkUm93RGF0YVsnYXN1dHVzaWQnXSkgd2FybmluZyA9IHdhcm5pbmcgKyAnINCf0LvQsNGC0LjQu9GM0YnQuNC6JztcblxuICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjUm93U3VtbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjYWxjRG9jU3VtbWEoJ3N1bW1hJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd2FybmluZztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTbWs7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5TbWsucHJvcFR5cGVzID0ge1xuICAgIGRvY0lkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGluaXREYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHVzZXJEYXRhOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5TbWsuZGVmYXVsdFByb3BzID0ge1xuICAgIGluaXREYXRhOiB7fSxcbiAgICB1c2VyRGF0YToge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU21rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvZG9jcy9zbWsvZG9jdW1lbnQvaW5kZXguanN4XG4vLyBtb2R1bGUgaWQgPSAyOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQiLCIvLyDQstC40LTQttC10YIsINC+0LHRitC10LTQuNC90Y/RjtGJ0LjQuSDRgdC10LvQtdC60YIg0Lgg0YLQtdC60YHRgi4g0LIg0YLQtdC60YHRgtC1INC+0YLRgNCw0LbQsNGO0YLQvNGPINC00LDQvdC90YvQtSwg0YHQstGP0LfQsNC90L3Ri9C1INGBINGB0LXQu9C10LrRgtC+0Lxcbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xudmFyIFNlbGVjdCA9IHJlcXVpcmUoJy4uL3NlbGVjdC9zZWxlY3QuanN4Jyk7XG52YXIgQnV0dG9uRWRpdCA9IHJlcXVpcmUoJy4uL2J1dHRvbi1yZWdpc3Rlci9idXR0b24tcmVnaXN0ZXItZWRpdC9idXR0b24tcmVnaXN0ZXItZWRpdC5qc3gnKTtcbnZhciBCdXR0b25BZGQgPSByZXF1aXJlKCcuLi9idXR0b24tcmVnaXN0ZXIvYnV0dG9uLXJlZ2lzdGVyLWFkZC9idXR0b24tcmVnaXN0ZXItYWRkLmpzeCcpO1xudmFyIFRleHQgPSByZXF1aXJlKCcuLi90ZXh0LWFyZWEvdGV4dC1hcmVhLmpzeCcpO1xudmFyIERvY0NvbnRleHQgPSByZXF1aXJlKCcuLy4uLy4uL2RvYy1jb250ZXh0LmpzJyk7XG52YXIgc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMuanMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFNlbGVjdFRleHRXaWRnZXQgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU2VsZWN0VGV4dFdpZGdldCwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2VsZWN0VGV4dFdpZGdldChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0VGV4dFdpZGdldCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNlbGVjdFRleHRXaWRnZXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3RUZXh0V2lkZ2V0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlID8gcHJvcHMudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyDQv9C+0LnQtNC10YIg0LIg0YLQtdC60YHRgtC+0LLRg9GOINC+0LHQu9Cw0YHRgtGMXG4gICAgICAgICAgICBsaWJEYXRhOiBwcm9wcy5kYXRhXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVNlbGVjdE9uQ2hhbmdlID0gX3RoaXMuaGFuZGxlU2VsZWN0T25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZUNsaWNrID0gX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvLyB3aWxsIHVwZGF0ZSBzdGF0ZSBpZiBwcm9wcyBjaGFuZ2VkXG5cblxuICAgIF9jcmVhdGVDbGFzcyhTZWxlY3RUZXh0V2lkZ2V0LCBbe1xuICAgICAgICBrZXk6ICdoYW5kbGVTZWxlY3RPbkNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTZWxlY3RPbkNoYW5nZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vINC+0YLRgNCw0LHQvtGC0LDQtdC8INGB0L7QsdGL0YLQuNC1INC4INC/0L7QvNC10L3Rj9C10Lwg0YHQvtGB0YLQvtGP0L3QuNC1XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShfdGhpczIucHJvcHMubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiAgICAg0LrQsNGB0YLQvtC80L3Ri9C5INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGO0YLQuNGPINC60LvQuNC6XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyDQtNC10LvQsNC10Lwg0YDQtdC00LDQudGA0LXQutGCINC90LAg0YHRgtGA0LDQvdC40YbRhiDRgdC/0YDQsNCy0L7Rh9C90LjQutCwXG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdlZGl0JyB8fCBldmVudCA9PT0gJ011dWRhJykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvJyArIERvY0NvbnRleHQubW9kdWxlICsgJy9kb2twcm9wcy8nICsgdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHsgZG9rUHJvcElkOiBEb2NDb250ZXh0LmRvY1R5cGVJZCwgdHlwZTogJ3RleHQnIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdhZGQnIHx8IGV2ZW50ID09PSAnTGlzYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnLycgKyBEb2NDb250ZXh0Lm1vZHVsZSArICcvZG9rcHJvcHMvMCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7IGRva1Byb3BJZDogRG9jQ29udGV4dC5kb2NUeXBlSWQsIHR5cGU6ICd0ZXh0JyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQnNC10YLQvtC0INC40YnQtdGCINCyINGB0L/RgNCw0LLQvtGH0L3QuNC60LUg0L7Qv9C40YHQsNC90LjQtVxyXG4gICAgICAgICAqIEBwYXJhbSBsaWJEYXRhXHJcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGVzY3JpcHRpb25CeVNlbGVjdFZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uQnlTZWxlY3RWYWx1ZShsaWJEYXRhKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgLy8g0L3QsNC50LTQtdC8INCyINGB0L/RgNCw0LLQvtGH0L3QuNC60LUg0L7Qv9C40YHQsNC90LjQtSDQuCDRg9GB0YLQsNC90L7QstC40Lwg0LXQs9C+INGB0L7RgdGC0L7Rj9C90LjQtVxuICAgICAgICAgICAgdmFyIGxpYlJvdyA9IGxpYkRhdGEuZmlsdGVyKGZ1bmN0aW9uIChsaWIpIHtcblxuICAgICAgICAgICAgICAgIGlmIChsaWIuaWQgPT09IF90aGlzMy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGliO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHNlbGcgPSAnJyxcbiAgICAgICAgICAgICAgICBzZWxnT2JqZWN0ID0gbGliUm93Lmxlbmd0aCA/IGxpYlJvd1swXS5kZXRhaWxzIDogJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNlbGdPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZ09iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0LjQvdGC0LXRgNC10YHRg9GO0YIg0YLQvtC70YzQutC+IFwi0YHQvtCx0YHRgtCy0LXQvdC90YvQtVwiINGB0LLQvtC50YHRgtCy0LAg0L7QsdGK0LXQutGC0LBcbiAgICAgICAgICAgICAgICAgICAgc2VsZyA9IHNlbGcgKyBwcm9wZXJ0eSArICc6JyArIHNlbGdPYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxnO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLndyYXBwZXIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICByZWY6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxJZDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0aGlzLnByb3BzLnJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVTZWxlY3RPbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkVkaXQsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdNdXVkYScsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tcbiAgICAgICAgICAgICAgICB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uQWRkLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTGlzYScsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRoaXMucHJvcHMucmVhZE9ubHksXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gcHJldlN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG5leHRQcm9wcy52YWx1ZSB9O1xuICAgICAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNlbGVjdFRleHRXaWRnZXQ7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5TZWxlY3RUZXh0V2lkZ2V0LnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGliczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TZWxlY3RUZXh0V2lkZ2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICByZWFkT25seTogZmFsc2UsXG4gICAgdGl0bGU6ICcnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdFRleHRXaWRnZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9jb21wb25lbnRzL2RvY3Byb3AvZG9jcHJvcC5qc3hcbi8vIG1vZHVsZSBpZCA9IDI5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCIsIid1c2Ugc3RyaWN0Jzttb2R1bGUuZXhwb3J0cz17d3JhcHBlcjp7bWFyZ2luOic1cHgnLGRpc3BsYXk6J2ZsZXgnLHdpZHRoOic5NSUnfSxpbnB1dDp7d2lkdGg6JzcwJScsbWFyZ2luTGVmdDonNXB4Jyxib3JkZXJSYWRpdXM6JzVweCd9LGE6e3dpZHRoOic3MCUnLG1hcmdpbkxlZnQ6JzVweCcsYm9yZGVyUmFkaXVzOic1cHgnfSxoaWRlOntkaXNwbGF5Oidub25lJ30sc2VsZWN0Ont3aWR0aDonNzAlJyxoZWlndGg6JzEwMCUnLG1hcmdpbkxlZnQ6JzVweCcsYm9yZGVyUmFkaXVzOic1cHgnLCc6Zm9jdXMnOntiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0cGluayd9fSxyZWFkT25seTp7YmFja2dyb3VuZENvbG9yOicjRjNFRkVGJ30sbGFiZWw6e3dpZHRoOiczMCUnLG1hcmdpbjonNXB4J30sYnV0dG9uOnt3aWR0aDonNSUnfX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9jb21wb25lbnRzL2RvY3Byb3Avc3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBzdHlsZXMgPSByZXF1aXJlKCcuLi9idXR0b24tcmVnaXN0ZXItc3R5bGVzJyksXG4gICAgQnV0dG9uID0gcmVxdWlyZSgnLi4vYnV0dG9uLXJlZ2lzdGVyLmpzeCcpLFxuICAgIElDT04gPSAncmVmcmVzaCc7XG5cbnZhciBCdXR0b25VdWVuZGFMaWIgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQnV0dG9uVXVlbmRhTGliLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICAvLyDQutC90L7Qv9C60LAg0YHQvtC30LTQsNC90LjRjyDQtNC+0LrRg9C80LXQvdGC0LAg0LIg0YDQtdCz0LjRgdGC0YDQsNGFXG4gICAgZnVuY3Rpb24gQnV0dG9uVXVlbmRhTGliKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b25VdWVuZGFMaWIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQnV0dG9uVXVlbmRhTGliLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQnV0dG9uVXVlbmRhTGliKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCdXR0b25VdWVuZGFMaWIsIFt7XG4gICAgICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC/0LXRgNC10LTQsNC9INC+0LHRgNCw0LHQvtGC0YfQuNC6LCDQstC10YDQvdC10Lwg0LXQs9C+XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQv9C10YDQtdC00LDQvSDQtNC+0LrRg9C80LXQvdGCLCDQstGL0LfQvtCy0LXQvCDQvNC10YLQvtC0INC+0LHQvdC+0LLQu9C10L3QuNGPINCx0LjQsdC70LjQvtGC0LXQutC4XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxmICYmIHRoaXMucHJvcHMuc2VsZi5sb2FkTGlicyAmJiB0aGlzLnByb3BzLmxpYikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcy5wcm9wcy5zZWxmO1xuICAgICAgICAgICAgICAgIHNlbGYubG9hZExpYnModGhpcy5wcm9wcy5saWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2J0blV1ZW5kYScsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRoaXMucHJvcHMuc2hvdyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVDbGljayhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgcmVmOiAnaW1hZ2UnLCBzcmM6IHN0eWxlcy5pY29uc1tJQ09OXSB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCdXR0b25VdWVuZGFMaWI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5CdXR0b25VdWVuZGFMaWIuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzaG93OiB0cnVlXG59O1xubW9kdWxlLmV4cG9ydHMgPSBCdXR0b25VdWVuZGFMaWI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9jb21wb25lbnRzL2J1dHRvbi1yZWdpc3Rlci9idXR0b24tdXVlbmRhLWxpYi9pbmRleC5qc3hcbi8vIG1vZHVsZSBpZCA9IDMwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCIsIid1c2Ugc3RyaWN0Jzttb2R1bGUuZXhwb3J0cz17ZG9jUm93OntkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidyb3cnLypcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmx1ZSdcclxuKi99LGRvY0NvbHVtbjp7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJywvKlxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB5ZWxsb3cnLFxyXG4qL3dpZHRoOic1MCUnfSxkb2M6e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicvKlxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBicm93bidcclxuKi99LGdyaWRSb3c6e2JvcmRlcjonMXB4IHNvbGlkIGJsYWNrJyxiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyxwb3NpdGlvbjoncmVsYXRpdmUnLG1hcmdpbjonMTAlIDMwJSAxMCUgMzAlJyx3aWR0aDonYXV0bycsb3BhY2l0eTonMScsdG9wOicxMDBweCd9LGRvY1Rvb2xiYXJXYXJuaW5nOntmbG9hdDonbGVmdCcsYmFja2dyb3VuZENvbG9yOidyZWQnLG1hcmdpbjonMTBweCd9LGdyaWQ6e21haW5UYWJsZTp7d2lkdGg6JzEwMCUnfSxoZWFkZXJUYWJsZTp7d2lkdGg6JzEwMCUnfSxncmlkQ29udGFpbmVyOnt3aWR0aDonMTAwJSd9fX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9kb2NzL3Ntay9kb2N1bWVudC9zbWstc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIERvY3VtZW50VGVtcGxhdGUgPSByZXF1aXJlKCcuLi8uLi9kb2N1bWVudFRlbXBsYXRlL2luZGV4LmpzeCcpLFxuICAgIElucHV0VGV4dCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbXBvbmVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmpzeCcpLFxuICAgIElucHV0RGF0ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbXBvbmVudHMvaW5wdXQtZGF0ZS9pbnB1dC1kYXRlLmpzeCcpLFxuICAgIElucHV0TnVtYmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLmpzeCcpLFxuICAgIFNlbGVjdCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qc3gnKSxcbiAgICBTZWxlY3REYXRhID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9zZWxlY3QtZGF0YS9zZWxlY3QtZGF0YS5qc3gnKSxcbiAgICBCdXR0b25FZGl0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24tcmVnaXN0ZXIvYnV0dG9uLXJlZ2lzdGVyLWVkaXQvYnV0dG9uLXJlZ2lzdGVyLWVkaXQuanN4JyksXG4gICAgVGV4dEFyZWEgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYS90ZXh0LWFyZWEuanN4JyksXG4gICAgRGF0YUdyaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtZ3JpZC9kYXRhLWdyaWQuanN4JyksXG4gICAgcmVsYXRlZERvY3VtZW50cyA9IHJlcXVpcmUoJy4uLy4uLy4uL21peGluL3JlbGF0ZWREb2N1bWVudHMuanN4JyksXG4gICAgTW9kYWxQYWdlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHBhZ2UvbW9kYWxQYWdlLmpzeCcpLFxuICAgIHN0eWxlcyA9IHJlcXVpcmUoJy4vc29yZGVyLXN0eWxlJyk7XG5cbnZhciBnZXRUZXh0VmFsdWUgPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL2xpYnMvZ2V0VGV4dFZhbHVlJyk7XG5cbnZhciBET0NfVFlQRV9JRCA9ICdTT1JERVInO1xudmFyIERvY0NvbnRleHQgPSByZXF1aXJlKCcuLy4uLy4uLy4uL2RvYy1jb250ZXh0LmpzJyk7XG52YXIgRG9jUmlnaHRzID0gcmVxdWlyZSgnLi8uLi8uLi8uLi8uLi9jb25maWcvZG9jX3JpZ2h0cycpO1xudmFyIGNoZWNrUmlnaHRzID0gcmVxdWlyZSgnLi8uLi8uLi8uLi8uLi9saWJzL2NoZWNrUmlnaHRzJyk7XG5cbnZhciBMSUJSQVJJRVMgPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL2NvbmZpZy9jb25zdGFudHMnKS5TT1JERVIuTElCX09CSlM7XG5cbnZhciBTb3JkZXIgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU29yZGVyLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTb3JkZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvcmRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvcmRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvcmRlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvYWRlZERhdGE6IGZhbHNlLFxuICAgICAgICAgICAgZG9jSWQ6IHByb3BzLmRvY0lkID8gcHJvcHMuZG9jSWQgOiBOdW1iZXIocHJvcHMubWF0Y2gucGFyYW1zLmRvY0lkKSxcbiAgICAgICAgICAgIGxhcHNJZDogbnVsbCxcbiAgICAgICAgICAgIGlzQXNrVG9DcmVhdGVGcm9tQXJ2OiB0cnVlLCAvLyDQtdGB0LvQuCDRg9C60LDQt9Cw0L0g0YHRh9C10YIsINCwINC00L7Qui7QuNC0ID0gMCAsINGC0L4g0LzQvtC20L3QviDRgdC+0LfQtNC/0YLRjCDQvtGA0LTQtdGAINC/0L4g0YHRh9C10YLRg1xuICAgICAgICAgICAgZ2V0U01LOiBmYWxzZSxcbiAgICAgICAgICAgIGFydklkOiAwXG5cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY3JlYXRlR3JpZFJvdyA9IF90aGlzLmNyZWF0ZUdyaWRSb3cuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnJlY2FsY0RvY1N1bW1hID0gX3RoaXMucmVjYWxjRG9jU3VtbWEuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnJlY2FsY1Jvd1N1bW0gPSBfdGhpcy5yZWNhbGNSb3dTdW1tLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5idG5FZGl0QXN1dHVzQ2xpY2sgPSBfdGhpcy5idG5FZGl0QXN1dHVzQ2xpY2suYmluZChfdGhpcyk7XG5cbiAgICAgICAgX3RoaXMucmVuZGVyZXIgPSBfdGhpcy5yZW5kZXJlci5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ3JpZFZhbGlkYXRlRmllbGRzID0gX3RoaXMuZ3JpZFZhbGlkYXRlRmllbGRzLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5tb2RhbFBhZ2VCdG5DbGljayA9IF90aGlzLm1vZGFsUGFnZUJ0bkNsaWNrLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLnBhZ2VzID0gW3sgcGFnZU5hbWU6ICdTaXNzZXR1bGlrdSBrYXNzYW9yZGVyJywgZG9jVHlwZUlkOiAnU09SREVSJyB9XTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNvcmRlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERvY3VtZW50VGVtcGxhdGUsIHsgZG9jSWQ6IHRoaXMuc3RhdGUuZG9jSWQsXG4gICAgICAgICAgICAgICAgcmVmOiAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgICAgIGRvY1R5cGVJZDogRE9DX1RZUEVfSUQsXG4gICAgICAgICAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgICAgICAgICAgIGluaXREYXRhOiB0aGlzLnByb3BzLmluaXREYXRhLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogdGhpcy5zdGF0ZS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgcmVsb2FkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxpYnM6IExJQlJBUklFUyxcbiAgICAgICAgICAgICAgICBwYWdlczogdGhpcy5wYWdlcyxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgICAgICAgICAgICBjcmVhdGVHcmlkUm93OiB0aGlzLmNyZWF0ZUdyaWRSb3csXG4gICAgICAgICAgICAgICAgZ3JpZFZhbGlkYXRvcjogdGhpcy5ncmlkVmFsaWRhdGVGaWVsZHMsXG4gICAgICAgICAgICAgICAgcmVjYWxjRG9jOiB0aGlzLnJlY2FsY0RvY1N1bW1hLFxuICAgICAgICAgICAgICAgIGZvY3VzRWxlbWVudDogJ2lucHV0LW51bWJlcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JLQtdGA0L3QtdGCINC60LDRgdGC0L7QvNC90YvQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQtNC+0LrRg9C80LXQvdGC0LBcclxuICAgICAgICAgKiBAcmV0dXJucyB7WE1MfVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJlcihzZWxmKSB7XG4gICAgICAgICAgICB2YXIgYnBtID0gc2VsZi5kb2NEYXRhICYmIHNlbGYuZG9jRGF0YS5icG0gPyBzZWxmLmRvY0RhdGEuYnBtIDogW10sXG4gICAgICAgICAgICAgICAgaXNFZGl0ZU1vZGUgPSBzZWxmLnN0YXRlLmVkaXRlZDtcblxuICAgICAgICAgICAgLy8g0YTQvtGA0LzQuNGA0YPQtdC8INC30LDQstC40YHQuNC80L7RgdGC0LhcbiAgICAgICAgICAgIGlmIChzZWxmLmRvY0RhdGEucmVsYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmVsYXRlZERvY3VtZW50cyhzZWxmKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFydmVkID0gW107XG4gICAgICAgICAgICAvLyDRhNC40LvRjNGC0YDRg9C10Lwg0YHRh9C10YLQsFxuICAgICAgICAgICAgaWYgKHNlbGYuZG9jRGF0YS5hc3V0dXNpZCAmJiBzZWxmLmRvY0RhdGEuYXN1dHVzaWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJ2ZWQgPSBzZWxmLmxpYnNbJ2FydiddLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3cuYXN1dHVzaWQgPT0gc2VsZi5kb2NEYXRhLmFzdXR1c2lkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaXNOZXdEb2MgPSAhc2VsZi5kb2NEYXRhLmlkIHx8IHNlbGYuZG9jRGF0YS5pZCA9PSAwO1xuICAgICAgICAgICAgaWYgKCghc2VsZi5kb2NEYXRhLmlkIHx8IHNlbGYuZG9jRGF0YS5pZCA9PSAwKSAmJiBzZWxmLmRvY0RhdGEuYXJ2aWQgJiYgdGhpcy5zdGF0ZS5pc0Fza1RvQ3JlYXRlRnJvbUFydikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZXRTTUs6IHRydWUsIGlzQXNrVG9DcmVhdGVGcm9tQXJ2OiBmYWxzZSwgYXJ2SWQ6IHNlbGYuZG9jRGF0YS5hcnZpZCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0L/RgNCw0LLQsCDQvdCwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LrQsNGA0YLQvtGH0LrQuCDQutC+0L3RgtGA0LDQs9C10L3RgtCwXG4gICAgICAgICAgICB2YXIgZG9jUmlnaHRzID0gRG9jUmlnaHRzWydBU1VUVVNFRCddID8gRG9jUmlnaHRzWydBU1VUVVNFRCddIDogW107XG4gICAgICAgICAgICB2YXIgdXNlclJvbGVzID0gRG9jQ29udGV4dC51c2VyRGF0YSA/IERvY0NvbnRleHQudXNlckRhdGEucm9sZXMgOiBbXTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvYyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NDb2x1bW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRUZXh0LCB7IHRpdGxlOiAnTnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nKHNlbGYuZG9jRGF0YS5udW1iZXIpIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2lucHV0LW51bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jQ29sdW1uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RGF0ZSwgeyB0aXRsZTogJ0t1dXBcXHhFNGV2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAna3B2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5kb2NEYXRhLmtwdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdpbnB1dC1rcHYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhaXNFZGl0ZU1vZGUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB0aXRsZTogJ0thc3NhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAna2Fzc2FfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpYnM6ICdrYXNzYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuZG9jRGF0YS5rYXNzYV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzZWxmLmxpYnNbJ2thc3NhJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTdHJpbmcoc2VsZi5kb2NEYXRhLmthc3NhKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdzZWxlY3Qta2Fzc2FJZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jQ29sdW1uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB0aXRsZTogJ1JhaGEgc2FhamEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpYnM6ICdhc3V0dXNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FzdXR1c2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzZWxmLmxpYnNbJ2FzdXR1c2VkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuZG9jRGF0YS5hc3V0dXNpZCB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogc2VsZi5kb2NEYXRhLmFzdXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsSWQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjaGVja1JpZ2h0cyh1c2VyUm9sZXMsIGRvY1JpZ2h0cywgJ2VkaXQnKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NDb2x1bW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uRWRpdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2J0bkVkaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTXV1ZGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuYnRuRWRpdEFzdXR1c0NsaWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6ICFpc0VkaXRlTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGVzLmJ0bkVkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY0NvbHVtbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgdGl0bGU6ICdBcnZlIG5yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWJzOiAnYXJ2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXJ2aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGFydmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLmRvY0RhdGEuYXJ2aWQgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHNlbGYuZG9jRGF0YS5hcnZucixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsSWQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRUZXh0LCB7IHRpdGxlOiAnRG9rdW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkb2t1bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuZG9jRGF0YS5kb2t1bWVudCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdpbnB1dC1kb2t1bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7IHRpdGxlOiAnTmltaScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmltaScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6ICd0ZXh0YXJlYS1uaW1pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLmRvY0RhdGEubmltaSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwgeyB0aXRsZTogJ0FhZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FhZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAndGV4dGFyZWEtYWFkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5kb2NEYXRhLmFhZHJlc3MgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5OiAhaXNFZGl0ZU1vZGUgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEFyZWEsIHsgdGl0bGU6ICdBbHVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhbHVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ3RleHRhcmVhLWFsdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGYuZG9jRGF0YS5hbHVzIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHNlbGYuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogIWlzRWRpdGVNb2RlIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGFHcmlkLCB7IHNvdXJjZTogJ2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZERhdGE6IHNlbGYuZG9jRGF0YS5ncmlkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5zOiBzZWxmLmRvY0RhdGEuZ3JpZENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb29sQmFyOiBpc0VkaXRlTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdyaWRSb3c6IHNlbGYuaGFuZGxlR3JpZFJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdyaWRCdG5DbGljazogc2VsZi5oYW5kbGVHcmlkQnRuQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogIWlzRWRpdGVNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5ncmlkLmhlYWRlclRhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiAnZGF0YS1ncmlkJyB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dE51bWJlciwgeyB0aXRsZTogJ1N1bW1hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdW1tYScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdpbnB1dC1zdW1tYScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTnVtYmVyKHNlbGYuZG9jRGF0YS5zdW1tYSkgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwgeyB0aXRsZTogJ01cXHhFNHJrdXNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbXV1ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6ICd0ZXh0YXJlYS1tdXVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLmRvY0RhdGEubXV1ZCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6ICFpc0VkaXRlTW9kZSB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5ncmlkUm93RWRpdCA/IHRoaXMuY3JlYXRlR3JpZFJvdyhzZWxmKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgTW9kYWxQYWdlLFxuICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ21vZGFscGFnZUNyZWF0ZU9yZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsUGFnZUJ0bkNsaWNrOiB0aGlzLm1vZGFsUGFnZUJ0bkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxQYWdlTmFtZTogJ0thcyBrb29zdGEgU09SREVSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRoaXMuc3RhdGUuZ2V0U01LIH0sXG4gICAgICAgICAgICAgICAgICAgICdLYXMga29vc3RhIGthc3Nhb3JkZXI/J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQvtGC0LrRgNC+0LXRgiDQutCw0YDRgtC+0YfQutGDINC60L7QvdGC0YAt0LDQs9C10L3RgtCwXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2J0bkVkaXRBc3V0dXNDbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidG5FZGl0QXN1dHVzQ2xpY2soKSB7XG4gICAgICAgICAgICB2YXIgZG9jQXN1dHVzSWQgPSB0aGlzLnJlZnNbJ2RvY3VtZW50J10uZG9jRGF0YS5hc3V0dXNpZDtcblxuICAgICAgICAgICAgLy8g0L7RgdGD0YnQtdGB0YLQstC40YIg0L/QtdGA0LXRhdC+0LQg0L3QsCDQutCw0YDRgtC+0YfQutGDINC60L7QvdGC0YAt0LDQs9C10L3RgtCwXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycgKyBEb2NDb250ZXh0Lm1vZHVsZSArICcvYXN1dHVzZWQvJyArIGRvY0FzdXR1c0lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHdpbGwgY3JlYXRlIFNPUkRFUlxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb2RhbFBhZ2VCdG5DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb2RhbFBhZ2VCdG5DbGljayhidG5FdmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZXRTTUs6IGZhbHNlIH0pO1xuICAgICAgICAgICAgaWYgKGJ0bkV2ZW50ID09PSAnT2snKSB7XG4gICAgICAgICAgICAgICAgdmFyIERvYyA9IHRoaXMucmVmc1snZG9jdW1lbnQnXTtcbiAgICAgICAgICAgICAgICB2YXIgYXBpID0gJy9jYWxjL2tvb3N0YVNvcmRlcic7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBkb2NUeXBlSWQ6IERPQ19UWVBFX0lELFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IHRoaXMucHJvcHMubW9kdWxlID8gdGhpcy5wcm9wcy5tb2R1bGUgOiBEb2NDb250ZXh0Lm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBEb2NDb250ZXh0LnVzZXJEYXRhLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogRG9jQ29udGV4dC51c2VyRGF0YS51dWlkLFxuICAgICAgICAgICAgICAgICAgICBkb2NzOiBbTnVtYmVyKHRoaXMuc3RhdGUuYXJ2SWQpXSxcbiAgICAgICAgICAgICAgICAgICAgc2Vpc3VnYTogRG9jLmRvY0RhdGEgJiYgRG9jLmRvY0RhdGEua3B2ID8gRG9jLmRvY0RhdGEua3B2IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogRG9jQ29udGV4dFthcGldID8gRG9jQ29udGV4dFthcGldIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFza05hbWU6ICdrb29zdGFTb3JkZXInXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIERvYy5mZXRjaERhdGEoJ1Bvc3QnLCBhcGksIHsgZGF0YTogcGFyYW1zIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5lcnJvcl9tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb2Muc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmc6ICd2aWdhOiAnICsgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nVHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RvY0lkID0gcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0ICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0LmRvY19pZCA/IHJlc3BvbnNlLmRhdGEucmVzdWx0LmRvY19pZCA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0RvY0lkICYmIG5ld0RvY0lkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2Muc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzogJ0VkdWthbHQsIHN1dW5hdGFuIC4uLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nVHlwZTogJ29rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L/QtdGA0LXRhdC+0LTQuNC8INC90LAg0YHQvtC30LTQsNC90L3QuSDQtNC+0LpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0RvY0lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9ICcvJyArIChfdGhpczIucHJvcHMubW9kdWxlID8gX3RoaXMyLnByb3BzLm1vZHVsZSA6IERvY0NvbnRleHQubW9kdWxlKSArICcvJyArIERPQ19UWVBFX0lEICsgJy8nICsgbmV3RG9jSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnByb3BzLmhpc3RvcnkucmVwbGFjZSgnL3JlbG9hZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2Muc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzogJ1Rla2tpcyB2aWdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdUeXBlOiAnZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0LLQsNC70LjQtNCw0YLQvtGAINC00LvRjyDRgdGC0YDQvtC60Lgg0LPRgNC40LTQsFxyXG4gICAgICAgICAqIEBwYXJhbSBncmlkUm93RGF0YSDRgdGC0YDQvtC60LAg0LPRgNC40LTQsFxyXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dyaWRWYWxpZGF0ZUZpZWxkcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBncmlkVmFsaWRhdGVGaWVsZHMoKSB7XG4gICAgICAgICAgICB2YXIgd2FybmluZyA9ICcnO1xuICAgICAgICAgICAgdmFyIGRvYyA9IHRoaXMucmVmc1snZG9jdW1lbnQnXTtcbiAgICAgICAgICAgIGlmIChkb2MgJiYgZG9jLmdyaWRSb3dEYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAvLyDRgtC+0LvRjNC60L4g0L/QvtGB0LvQtSDQv9GA0L7QstC10YDQutC4INGE0L7RgNC80Ysg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjFxuICAgICAgICAgICAgICAgIGlmIChkb2MuZ3JpZFJvd0RhdGEgJiYgIWRvYy5ncmlkUm93RGF0YVsnbm9taWQnXSkgd2FybmluZyA9IHdhcm5pbmcgKyAnINCa0L7QtCDQvtC/0LXRgNCw0YbQuNC4JztcbiAgICAgICAgICAgICAgICBpZiAoIWRvYy5ncmlkUm93RGF0YVsnc3VtbWEnXSkgd2FybmluZyA9IHdhcm5pbmcgKyAnINCh0YPQvNC80LAnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNhbGNSb3dTdW1tKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNhbGNEb2NTdW1tYSgnc3VtbWEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3YXJuaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0L/QvtC00YHRgtCw0LLQuNGCINC60L7QtCDQvtC/0LXRgNCw0YbQuNC4XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlY2FsY1Jvd1N1bW0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjYWxjUm93U3VtbSgpIHtcbiAgICAgICAgICAgIHZhciBkb2MgPSB0aGlzLnJlZnNbJ2RvY3VtZW50J107XG5cbiAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoZG9jLmdyaWRSb3dEYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v0L/QvtC00YHRgtCw0LLQuNC8INC90LDQuNC80LXQvdC+0LLQsNC90LjQtSDRg9GB0LvQvtCz0YNcblxuICAgICAgICAgICAgdmFyIG5vbURhdGFOYW1lID0gZG9jLmxpYnNbJ25vbWVuY2xhdHVyZSddLmZpbHRlcihmdW5jdGlvbiAobGliKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpYi5pZCA9PT0gZG9jLmdyaWRSb3dEYXRhWydub21pZCddKSByZXR1cm4gbGliO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkb2MuZ3JpZFJvd0RhdGFbJ25vbWlkJ10pIHtcbiAgICAgICAgICAgICAgICBkb2MuZ3JpZFJvd0RhdGFbJ2tvb2QnXSA9IG5vbURhdGFOYW1lWzBdLmtvb2Q7XG4gICAgICAgICAgICAgICAgZG9jLmdyaWRSb3dEYXRhWyduaW1ldHVzJ10gPSBub21EYXRhTmFtZVswXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0J/QtdGA0LXRgNCw0YHRh9C10YIg0YHRg9C80Lwg0LTQvtC60YPQvNC10L3RgtCwXHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlY2FsY0RvY1N1bW1hJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2FsY0RvY1N1bW1hKCkge1xuICAgICAgICAgICAgdmFyIGRvYyA9IHRoaXMucmVmc1snZG9jdW1lbnQnXTtcbiAgICAgICAgICAgIGRvYy5kb2NEYXRhWydzdW1tYSddID0gMDtcbiAgICAgICAgICAgIGRvYy5kb2NEYXRhLmdyaWREYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgIGRvYy5kb2NEYXRhWydzdW1tYSddICs9IE51bWJlcihyb3dbJ3N1bW1hJ10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDRhNC+0YDQvNC40YDRg9C10YIg0L7QsdGK0LXQutGC0Ysg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDRgdGC0YDQvtC60Lgg0LPRgNC40LTQsFxyXG4gICAgICAgICAqIEByZXR1cm5zIHtYTUx9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZUdyaWRSb3cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlR3JpZFJvdyhzZWxmKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gc2VsZi5ncmlkUm93RGF0YSA/IHNlbGYuZ3JpZFJvd0RhdGEgOiB7fSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZU1lc3NhZ2UgPSAnJyxcbiAgICAgICAgICAgICAgICAvLyBzZWxmLnN0YXRlLndhcm5pbmdcbiAgICAgICAgICAgIGJ1dHRvbk9rUmVhZE9ubHkgPSB2YWxpZGF0ZU1lc3NhZ2UubGVuZ3RoID4gMCB8fCAhc2VsZi5zdGF0ZS5jaGVja2VkLFxuICAgICAgICAgICAgICAgIG1vZGFsT2JqZWN0cyA9IFsnYnRuT2snLCAnYnRuQ2FuY2VsJ107XG5cbiAgICAgICAgICAgIGlmIChidXR0b25Pa1JlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgLy8g0YPQsdC10YDQtdC8INC60L3QvtC/0LrRgyDQntC6XG4gICAgICAgICAgICAgICAgbW9kYWxPYmplY3RzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyb3cpIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICcubW9kYWxQYWdlJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIE1vZGFsUGFnZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxPYmplY3RzOiBtb2RhbE9iamVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdtb2RhbHBhZ2UtZ3JpZC1yb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsUGFnZUJ0bkNsaWNrOiBzZWxmLm1vZGFsUGFnZUNsaWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxQYWdlTmFtZTogJ1JlYSBsaXNhbWluZSAvIHBhcmFuZGFtaW5lJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ2dyaWQtcm93LWNvbnRhaW5lcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuZ3JpZFdhcm5pbmcubGVuZ3RoID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLmdyaWRXYXJuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB0aXRsZTogJ1RlZW51cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub21pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpYnM6ICdub21lbmNsYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzZWxmLmxpYnNbJ25vbWVuY2xhdHVyZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93Lm5vbWlkIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogcm93Lmtvb2QgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ25vbWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdUZWVudXNlIGtvb2QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogc2VsZi5oYW5kbGVHcmlkUm93Q2hhbmdlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dE51bWJlciwgeyB0aXRsZTogJ1N1bW1hOiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VtbWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTnVtYmVyKHJvdy5zdW1tYSkgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZERhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdzdW1tYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZWxmLmhhbmRsZUdyaWRSb3dJbnB1dCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU29yZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuU29yZGVyLnByb3BUeXBlcyA9IHtcbiAgICBkb2NJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpbml0RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1c2VyRGF0YTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuU29yZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbml0RGF0YToge30sXG4gICAgdXNlckRhdGE6IHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvcmRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3Mvc29yZGVyL2RvY3VtZW50L2luZGV4LmpzeFxuLy8gbW9kdWxlIGlkID0gMzAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IiwiJ3VzZSBzdHJpY3QnO21vZHVsZS5leHBvcnRzPXtkb2NSb3c6e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J3JvdycvKlxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJ1xyXG4qL30sZG9jQ29sdW1uOntkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLC8qXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHllbGxvdycsXHJcbiovd2lkdGg6JzUwJSd9LGRvYzp7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJy8qXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJyb3duJ1xyXG4qL30sZ3JpZFJvdzp7Ym9yZGVyOicxcHggc29saWQgYmxhY2snLGJhY2tncm91bmRDb2xvcjond2hpdGUnLHBvc2l0aW9uOidyZWxhdGl2ZScsbWFyZ2luOicxMCUgMzAlIDEwJSAzMCUnLHdpZHRoOidhdXRvJyxvcGFjaXR5OicxJyx0b3A6JzEwMHB4J30sZG9jVG9vbGJhcldhcm5pbmc6e2Zsb2F0OidsZWZ0JyxiYWNrZ3JvdW5kQ29sb3I6J3JlZCcsbWFyZ2luOicxMHB4J30sZ3JpZDp7bWFpblRhYmxlOnt3aWR0aDonMTAwJSd9LGhlYWRlclRhYmxlOnt3aWR0aDonMTAwJSd9LGdyaWRDb250YWluZXI6e3dpZHRoOicxMDAlJ319LGJ0bkVkaXQ6e3dpZHRoOidtaW4tY29udGVudCd9fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3Mvc29yZGVyL2RvY3VtZW50L3NvcmRlci1zdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25JQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdGpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9KQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=