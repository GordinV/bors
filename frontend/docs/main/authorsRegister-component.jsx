'use strict';

const React = require('react');
const styles = require('./styles');
const fetchData = require('./../../../libs/fetchData');
const AuthorComponent = require('./author-component.jsx')


/**
 * Класс реализует документ справочника признаков.
 */
class AuthorsRegisterComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            warning: null,
            initLoad: false,
            authors: [],
            authorId: null,
            user: {},
            info: null

        }
        this.btnClickHandler = this.btnClickHandler.bind(this);
        this.renderGridComponent = this.renderGridComponent.bind(this);
//        this.fetchData = this.fetchData.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let authors = store.getState().authors;
                let user = store.getState().statuses.user;

                if (JSON.stringify(authors) !== JSON.stringify(this.state.authors) ||
                    JSON.stringify(user) !== JSON.stringify(this.state.user)) {
                    this.setState({
                        authors: authors,
                        user: user
                    }, () => {
                        this.forceUpdate();
                    });
                }
            })
        }
    }

    // will update state if props changed
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.deals !== prevState.deals ||
            JSON.stringify(nextProps.user) !== JSON.stringify(prevState.user)) {
            return {value: nextProps.deals, user: nextProps.user};
        } else return null;
    }


    render() {
        let Component;
        let authors = [];
        let authorId = null;
        if (!authors.length && this.props.store) {
            // подгрузим из стора
            let store = this.props.store;
            authors = store.getState().authors;
            authorId = store.getState().statuses.pictureId;
        }
        if (authors && authors.length) {
            Component = this.renderGridComponent(authors);
        } else {
            Component = (<div>Data are loading</div>)
        }
        return <div>
            {Component}
            {this.state.editDocument ? <AuthorComponent
                store={this.props.store}
                id={authorId}
                show={true}
                btnClickEventHandler={this.props.btnClickEventHandler}
            /> : null}


        </div>;
    }

    renderGridComponent(data) {
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
                        <th style={styles.grid.mainTable.th}>{'Code'}</th>
                        <th style={styles.grid.mainTable.th}>{'Name'}</th>
                        <th style={styles.grid.mainTable.th}>{'Phone'}</th>
                        <th style={styles.grid.mainTable.th}>{'Email'}</th>
                    </tr>
                    </tbody>
                    {data.map(row => {
                        console.log('row', row)
                        return (
                            <tr>
                                <td style={styles.grid.mainTable.td}>{row.login}</td>
                                <td style={styles.grid.mainTable.td}>{row.code}</td>
                                <td style={styles.grid.mainTable.td}>{row.name}</td>
                                <td style={styles.grid.mainTable.td}>{row.phone}</td>
                                <td style={styles.grid.mainTable.td}>{row.email}</td>

                                <td style={styles.grid.mainTable.td}>
                                    {logedIn ?
                                        (<button
                                            style={styles.btnEdit}
                                            onClick={() => this.btnClickHandler('edit', row.id)}
                                            onDoubleClick={() => this.btnClickHandler('edit', row.id)}
                                        >
                                            <img ref='image' src={styles.icons['edit']}/>
                                        </button>) : null
                                    }
                                </td>


                            </tr>
                        )
                    })}
                </table>
            </div>

        )
    }

    btnClickHandler(event, authorId) {
            console.log('btnClickHandler', event, authorId )
            this.props.store.dispatch({type: 'pictureId', pictureId: authorId});
            switch (event) {
                case 'btnAdd':
                    // новая картинка
                    break;
                case 'edit':
                    // меняем статус окна
                    this.props.store.dispatch({type: 'isPictureShow', isPictureShow: true});
                    this.setState({editDocument: true, authorId: authorId})
                    break;
                case 'Cancel':
                    this.setState({editDocument: false, authorId: null})
                    break;
                case 'saved':
                    this.setState({editDocument: false, authorId: authorId})
                    break;

            }
        }

/*
    /!**
     * загрузка данных
     * @returns {*|Promise<AxiosResponse<unknown> | never>}
     *!/
    fetchData(event, dealId) {
        let URL = `/main/deal_accept/`;
        let user = this.props.store.getState().statuses.user;
        let params = {id: dealId, event: event, user: user};
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
*/

}

module.exports = AuthorsRegisterComponent;


