const PropTypes = require('prop-types');

const React = require('react'),
    styles = require('./styles');
const fetchData = require('./../../../libs/fetchData');

//const store = require('./../../store');

const ModalPage = require('./../../components/modalpage/modalPage.jsx');

class Taotlus extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            kasutaja: '',
            login: '',
            code: '',
            name: '',
            id: 0,
            email: '',
            aadress: '',
            continent: '',
            region: '',
            city: '',
            show: true,
            isEditeMode: false
        }
        this.onClickHandled = this.onClickHandled.bind(this);
        this.fecthData = this.fecthData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.getAuthorFromStore = this.getAuthorFromStore.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let isPictureShow = store.getState().statuses.isPictureShow;
                let author = this.getAuthorFromStore();

                this.setState({
                    show: isPictureShow,
                    login: author[0].login,
                    nimi: author[0].nimi,
                    id: author[0].id,
                    email: author[0].email,
                    aadress: author[0].aadress,
                    continent: author[0].continent,
                    region: author[0].region,
                    city: author[0].city,
                }, () => {
                    this.forceUpdate();
                });
            });
        }
    }

    componentDidMount() {
        // редактирование
        let author = this.getAuthorFromStore();

        if (!author || !author.length) {
            return;
        }
        this.setState({
            login: author[0].login,
            code: author[0].code,
            name: author[0].name,
            id: author[0].id,
            email: author[0].email,
            aadress: author[0].aadress,
            continent: author[0].continent,
            region: author[0].region,
            city: author[0].city,
            show: true
        })
    }


    render() {
        let show = this.props.store.getState().statuses.isPictureShow;
        let author = this.getAuthorFromStore()[0];

        if (this.state.isEditeMode) {
            author = {...this.state}
        }

        return (
            <ModalPage show={show}
                       modalPageBtnClick={this.onClickHandled}>
                <div style={styles.docRow}>
                    <label style={styles.label}>Login: </label>
                    <input type='text'
                           id={'login'}
                           name={'login'}
                           disabled={true}
                           value={author.login || ''}
                    />
                </div>
                <div style={styles.docRow}>
                    <label style={styles.label}>Name: </label>
                    <input type='text'
                           id={'name'}
                           name={'name'}
                           onChange={this.onChangeInput}
                           value={author.name || ''}
                    />
                </div>
                <div style={styles.docRow}>

                    <label style={styles.label}>Email: </label>
                    <input type='text'
                           ref="email"
                           value={author.email || ''}
                           id={'email'}
                           name={'email'}
                           onChange={this.onChangeInput}>
                    </input>
                </div>
                <div style={styles.docRow}>

                    <label style={styles.label}>Address: </label>
                    <input type='text'
                           ref="aadress"
                           value={author.aadress || ''}
                           id={'aadress'}
                           name={'aadress'}
                           onChange={this.onChangeInput}>
                    </input>
                </div>
                <div style={styles.docRow}>

                    <label style={styles.label}>Continent: </label>
                    <select ref="select"
                            style={styles.select}
                            value={author.continent || ''}
                            id={'continent'}
                            name={'continent'}
                            onChange={this.onChangeInput}>
                        {this.props.store.getState().statuses.continents.map((item, index) => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div style={styles.docRow}>

                    <label style={styles.label}>Region: </label>
                    <select ref="select"
                            style={styles.select}
                            value={author.region || ''}
                            id={'region'}
                            name={'region'}
                            onChange={this.onChangeInput}>
                        {this.props.store.getState().statuses.regions.map((item, index) => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div style={styles.docRow}>
                    <label style={styles.label}>City: </label>
                    <select ref="city"
                            style={styles.select}
                            value={author.city || ''}
                            id={'city'}
                            name={'city'}
                            onChange={this.onChangeInput}>
                        {this.props.store.getState().statuses.cities.map((item, index) => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
            </ModalPage>);
    }


    onChangeInput(e) {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;
        let state = {};
        state[fieldName] = fieldValue;
        state = {...this.state, state};

        switch (fieldName) {
            case 'name':
                this.setState({name: fieldValue, isEditeMode: true});
                break;
            case 'aadress':
                this.setState({aadress: fieldValue, isEditeMode: true});
                break;
            case 'tel':
                this.setState({tel: fieldValue, isEditeMode: true});
                break;
            case 'email':
                this.setState({email: fieldValue, isEditeMode: true});
                break;
            case 'continent':
                this.setState({continent: fieldValue, isEditeMode: true});
                break;
            case 'region':
                this.setState({region: fieldValue, isEditeMode: true});
            case 'city':
                this.setState({city: fieldValue, isEditeMode: true});
                break;
            default:
                break;
        }
    }

    onClickHandled(event) {
        if (event == 'Ok') {
            // сохраняем
            this.fecthData()
        }

        this.setState({show: false});
        let store = this.props.store;
        // меняем статус окна
        store.dispatch({type: 'isPictureShow', isPictureShow: false});
    }

    fecthData() {
        let data = {
            id: this.state.id,
            nimi: this.state.name,
            email: this.state.email,
            aadress: this.state.aadress,
            continent: this.state.continent,
            region: this.state.region,
            city: this.state.city,
            user: this.props.store.getState().statuses.user
        }

        fetchData.fetchDataPost(`/main/taotlus_save`, data).then((result) => {
            this.setState({id: result.data.result});
            let store = this.props.store;
            // вызовем перегрузку
            store.dispatch({type: 'reloadActivePageComponent', reloadActivePageComponent: true});

        });
    }

    /**
     * вернет обьект с картиной
     * @returns {T[]|Array}
     */
    getAuthorFromStore() {
        let store = this.props.store;
        if (!store) {
            return []
        }
        let authorId = store.getState().statuses.pictureId; // получим ид документа
        let authors = store.getState().userApplications.userApplications;
        let states = store.getState();

        return authors.filter(row => row.id == authorId);
    }

}

Taotlus.propTypes = {
    disabled: PropTypes.bool,
    show: PropTypes.bool
};


Taotlus.defaultProps = {
    disabled: false.valueOf(),
    pages: []
};

module.exports = Taotlus;