'use strict';

const PropTypes = require('prop-types');

const React = require('react');

const styles = require('./start-menu.styles'),
    fetchData = require('./../../../libs/fetchData'),
    TreeList = require('./../tree/tree.jsx');

const DocContext = require('./../../doc-context.js');

const URL = require('./../../../config/constants').START_MENU.URL;

class StartMenu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            data: props.data
        };

        this.treeData = props.data;
        this.clickHandler = this.clickHandler.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    /**
     * пишем делаем запрос по итогу загрузки
     */
    componentDidMount() {
        if (this.props.store) {
            let data = this.props.store.getState().menu.menu;
            let user = this.props.store.getState().statuses.user;
            let module = this.props.store.getState().statuses.module;

            if (module) {
                data = data.filter(menu => {
                    // оставим только меню модуля
                    // props: {type: "document", module: ["main"]
                    if (!menu.props || (menu.props.module && menu.props.module.includes(module))) {
                        // общие
                        return menu;
                    } else {
                        return null;

                    }
                });
            }

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

            this.treeData = data;
            this.setState({data: data});
            DocContext['menu'] = data;
        } else {
            if (!this.treeData.length) {
                //делаем запрос на получение данных
                this.fetchData(this.props);
            }

        }
    }

    render() {
        console.log('start menu render')
        return (
            <div style={styles.container}>
                <TreeList ref='treeList'
                          style={styles.ul}
                          data={this.treeData}
                          bindDataField="kood"
                          value={this.state.value}
                          onClickAction={this.clickHandler}
                />
            </div>
        );
    }

    clickHandler(action, value) {
        if (this.props.clickHandler) {
            return this.props.clickHandler(value);
        }
    }

    /**
     * Выполнит запросы
     */
    fetchData(props) {
        let module = DocContext.module ? DocContext.module : 'main';
        let url = URL + `/${module}`;
        let params = {};

        if (this.props.store) {
            // берем данные из стора
            let user = this.props.store.getState().statuses.user;
            params = {userId: user.id, uuid: ''}
        } else {
            params = {userId: DocContext.userData.userId, uuid: DocContext.userData.uuid};
        }

        try {
            // will check in cache
            if (!DocContext['menu'] || DocContext['menu'].length === 0) {
                fetchData.fetchDataPost(url, params)
                    .then(response => {
                        if (response.status && response.status == 401) {
                            console.error('Error 401, redirect');
                            document.location = `/login`;
                        }
                        if (response) {

                            this.treeData = response.data.data;
                            // запомним содержимое
                            DocContext.menu = this.treeData;
                            this.forceUpdate();
                        }
                    })
                    .catch(error => {
                        console.error('received error-> ', error);
                        if (error) {
                            document.location = `/login`;
                        }
                    });
            } else {
                this.treeData = DocContext['menu'];
                this.forceUpdate();
            }

        } catch (e) {
            console.error(e);
        }
    }

}


StartMenu.propTypes = {
    data: PropTypes.array
};

StartMenu.defaultProps = {
    data: []
};


module.exports = StartMenu;