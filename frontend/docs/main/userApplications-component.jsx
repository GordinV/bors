'use strict';

const React = require('react');
const styles = require('./styles');
const fetchData = require('./../../../libs/fetchData');
const AuthorComponent = require('./author-component.jsx');


/**
 * Класс реализует документ справочника признаков.
 */
class UserApplicationsComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            warning: null,
            initLoad: false,
            userApplications: [],
            user: {},
            info: null,
            editDocument: false

        }
        this.btnClickHandler = this.btnClickHandler.bind(this);
        this.renderGridComponent = this.renderGridComponent.bind(this);
        this.fetchData = this.fetchData.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let userApplications = store.getState().userApplications.userApplications;
                let user = store.getState().statuses.user;

                if (JSON.stringify(userApplications) !== JSON.stringify(this.state.userApplications) ||
                    JSON.stringify(user) !== JSON.stringify(this.state.user)) {
                    this.setState({
                        userApplications: userApplications,
                        user: user
                    }, () => {
                        this.forceUpdate();
                    });
                }
            })
        }
    }


    render() {
        let Component;
        let userApplications = this.state.userApplications;
        if (!userApplications.length && this.props.store) {
            // подгрузим из стора
            userApplications = this.props.store.getState().userApplications.userApplications;
        }
        if (userApplications && userApplications.length) {
            Component = this.renderGridComponent(userApplications);
        } else {
            Component = (<div>Data are loading</div>)
        }
        return Component;
    }

    renderGridComponent(data) {
        console.log('renderGridComponent')

        let user = this.state.user;

        if (!user) {
            // подгрузим из стора
            user = this.props.store.getState().statuses.user;
        }

        let logedIn = user && user.id ? true : false;
        let isAdmin = user && user.is_admin ? true : false;


        return (<div style={styles.grid.gridContainer}>

                {this.state.info ? <div><span>{this.state.info}</span></div> : null}
                <table ref="dataGridTable" style={styles.grid.mainTable} onKeyPress={this.handleKeyDown}>
                    <tbody>
                    <tr>
                        <th style={styles.grid.mainTable.th}>{'Login'}</th>
                        <th style={styles.grid.mainTable.th}>{'User name'}</th>
                        <th style={styles.grid.mainTable.th}>{'Email'}</th>
                        <th style={styles.grid.mainTable.th}>{'Status'}</th>
                    </tr>
                    </tbody>
                    {data.map(row => {
                        return (
                            <tr>
                                <td style={styles.grid.mainTable.td}>{row.kasutaja}</td>
                                <td style={styles.grid.mainTable.td}>{row.nimi}</td>
                                <td style={styles.grid.mainTable.td}>{row.email}</td>
                                <td style={styles.grid.mainTable.td}>{row.status_name}</td>

                                <td style={styles.grid.mainTable.tdButtons}>
                                    {logedIn ? (<button
                                        style={styles.btnEdit}
                                        onClick={() => this.btnClickHandler('edit', row.id)}
                                        onDoubleClick={() => this.btnClickHandler('edit', row.id)}
                                    >
                                        <img ref='image' src={styles.icons['edit']}/>
                                    </button>) : null
                                    }
                                    {isAdmin && row.status === 0 ? (<button
                                        style={styles.button_accept}
                                        onClick={() => this.btnClickHandler('accept', row.id)}
                                        onDoubleClick={() => this.btnClickHandler('accept', row.id)}
                                    >
                                        <img ref='image' src={styles.icons['ok']}/>
                                    </button>) : null}
                                    {isAdmin ? (<button
                                        style={styles.button_delete}
                                        onClick={() => this.btnClickHandler('delete', row.id)}
                                        onDoubleClick={() => this.btnClickHandler('delete', row.id)}
                                    >
                                        <img ref='image' src={styles.icons['delete']}/>
                                    </button>) : null}

                                </td>


                            </tr>
                        )
                    })}
                </table>
                {this.state.editDocument ? <AuthorComponent
                    store={this.props.store}
                    show={true}
                    btnClickEventHandler={this.props.btnClickEventHandler}
                /> : null}

            </div>

        )
    }

    /**
     * Обработка события клика по кнопкам
     * @param event
     * @param applicationId
     */
    btnClickHandler(event, applicationId) {
        if (event == 'delete' || event == 'accept') {
            this.fetchData(event, applicationId)
        }
        if (event == 'edit') {
            // сохраняем ид автора и пишем его в стор. Открываем на редактирование
            this.props.store.dispatch({type: 'pictureId', pictureId: applicationId});
            this.props.store.dispatch({type: 'isPictureShow', isPictureShow: true});
            // isPictureShow
            this.setState({editDocument: true, applicationId: applicationId})
        }
    }

    /**
     * загрузка данных
     * @returns {*|Promise<AxiosResponse<unknown> | never>}
     */
    fetchData(event, applicationId) {
        if (event !== 'accept') {
            return;
        }
        let URL = `/main/taotlus_accept/`;

        let params = {id: applicationId, event: event};
        return new Promise((resolved, rejected) => {
                fetchData['fetchDataPost'](URL, params).then(response => {
                    // error handling
                    if (response.status === 200) {
                        this.setState({info: 'Update succefull'})
                        if (this.props.btnClickEventHandler) {
                            // дадим на верх команду на релоад
                            this.props.btnClickEventHandler('reload')
                        }
                        resolved(response.data);
                    } else {
                        console.error('status !== 200')
                        this.setState({info: 'Update with error'})
                        return rejected();
                    }

                }).catch((error) => {
                    console.error('fetch error', error);
                    this.setState({info: `Update with error ${error}`})
                    return rejected(error);
                });
            }
        )
            ;
    }

}

module.exports = UserApplicationsComponent;


