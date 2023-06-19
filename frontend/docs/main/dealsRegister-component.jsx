'use strict';

const React = require('react');
const styles = require('./styles');
const fetchData = require('./../../../libs/fetchData');


/**
 * Класс реализует документ справочника признаков.
 */
class DealsRegisterComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            warning: null,
            initLoad: false,
            deals: [],
            user: {},
            info: null

        }
        this.btnClickHandler = this.btnClickHandler.bind(this);
        this.renderGridComponent = this.renderGridComponent.bind(this);
        this.fetchData = this.fetchData.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let deals = store.getState().deals.deals;
                let user = store.getState().statuses.user;

                if (JSON.stringify(deals) !== JSON.stringify(this.state.deals) ||
                    JSON.stringify(user) !== JSON.stringify(this.state.user)) {
                    this.setState({
                        deals: deals,
                        user: user
                    }, () => {
                        this.forceUpdate();
                    });
                }
            })
        }
    }

/*
    // will update state if props changed
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.deals !== prevState.deals ||
            JSON.stringify(nextProps.user) !== JSON.stringify(prevState.user)) {
            return {value: nextProps.deals, user: nextProps.user};
        } else return null;
    }
*/


    render() {
        let Component;
        let deals = this.state.deals;
        if (!deals.length && this.props.store) {
            // подгрузим из стора
            deals = this.props.store.getState().deals.deals;
        }
        if (deals && deals.length) {
            Component = this.renderGridComponent(deals);
        } else {
            Component = (<div>Data are loading</div>)
        }
        return Component;
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
                        <th style={styles.grid.mainTable.th}>{'kood'}</th>
                        <th style={styles.grid.mainTable.th}>{'Description'}</th>
                        <th style={styles.grid.mainTable.th}>{'Deal date'}</th>
                        <th style={styles.grid.mainTable.th}>{'Client'}</th>
                        <th style={styles.grid.mainTable.th}>{'Price'}</th>
                        <th style={styles.grid.mainTable.th}>{'Status'}</th>
                    </tr>
                    </tbody>
                    {data.map((row,rowIndex)  => {
                        return (
                            <tr onClick={this.handleCellClick.bind(this, rowIndex)}
                            >
                                <td style={styles.grid.mainTable.td}>{row.kood}</td>
                                <td style={styles.grid.mainTable.td}>{row.description}</td>
                                <td style={styles.grid.mainTable.td}>{row.deal_date}</td>
                                <td style={styles.grid.mainTable.td}>{row.client}</td>
                                <td style={styles.grid.mainTable.td}>{row.price}</td>
                                <td style={styles.grid.mainTable.td}>{row.status_name}</td>

                                <td style={styles.grid.mainTable.tdButtons}>
                                    {isAdmin && row.status === 0 ? (<button
                                        style={styles.button_accept}
                                        onClick={() => {
                                            this.btnClickHandler('accept', rowIndex)
                                        }}
                                        onDoubleClick={() => this.btnClickHandler('accept', rowIndex)}
                                    >
                                        <img ref='image' src={styles.icons['ok']}/>
                                    </button>) : null}
                                    {isAdmin && (row.status === 1 || row.status === 0) ? (<button
                                        style={styles.button_delete}
                                        onClick={() => this.btnClickHandler('delete', rowIndex)}
                                        onDoubleClick={() => this.btnClickHandler('delete', rowIndex)}
                                    >
                                        <img ref='image' src={styles.icons['delete']}/>
                                    </button>) : null}

                                </td>


                            </tr>
                        )
                    })}
                </table>
            </div>

        )
    }

    handleCellClick(idx) {
        console.log('handleCellClick', idx);
    }


    btnClickHandler(event, rowIndex) {
        let data = this.props.store.getState().deals.deals;
        let row = data[rowIndex];

        console.log('btnClick', event, row);
        this.fetchData(event, row.id)
    }

    /**
     * загрузка данных
     * @returns {*|Promise<AxiosResponse<unknown> | never>}
     */
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

}

module.exports = DealsRegisterComponent;


