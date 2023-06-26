const PropTypes = require('prop-types');

const React = require('react'),
    styles = require('./styles');
const DocContext = require('./../../doc-context.js');
const fetchData = require('./../../../libs/fetchData');
const LogUp = require('./../logup/index.jsx')


const ModalPage = require('./../../components/modalpage/modalPage.jsx');

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            lastId: 0,
            login: this.props.login,
            password: this.props.password,
            isShowLogUp: false
        }
        this.onClickHandled = this.onClickHandled.bind(this);
        this.fecthData = this.fecthData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.logUp = this.logUp.bind(this);
    }

    render() {
        return (
            <ModalPage show={this.state.show}
                       modalPageName={'Login'}
                       modalPageBtnClick={this.onClickHandled}
                       modalPageBtnClick={this.onClickHandled}
            >
                {this.state.isShowLogUp ? <LogUp
                    show={true}
                    modalPageBtnClick={this.logUp}
                /> : null}
                <div style={styles.docRow}>
                    <button
                        style={styles.logUpButton}
                        onClick={this.logUp}
                    >
                        New user
                    </button>
                </div>
                <div style={styles.docRow}>

                    <div style={styles.docColumn}>
                        <label>Login: </label>
                        <input type='text'
                               id={'login'}
                               name={'login'}
                               onChange={this.onChangeInput}
                               value={this.state.login || ''}
                        />
                        <label>Password: </label>
                        <input type='text'
                               id={'password'}
                               name={'password'}
                               onChange={this.onChangeInput}
                               value={this.state.password || ''}
                        />

                    </div>
                </div>
            </ModalPage>
        );
    }

    /**
     * вернет компонет для регистрации пользователем
     */
    logUp(event) {
        this.setState({isShowLogUp: !this.state.isShowLogUp})
    }

    onChangeInput(e) {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;

        switch (fieldName) {
            case 'login':
                this.setState({login: fieldValue});
                break;
            case 'password':
                this.setState({password: fieldValue});
                break;
        }

    }

    onClickHandled(event) {
        if (event == 'Ok') {
            // отправляем на сервер на контроль
            this.fecthData()
        }
        this.setState({show: !this.state.show});
    }

    fecthData() {
        const data = new FormData();
        data.append('login', this.state.login)
        data.append('password', this.state.password)
        return new Promise((resolved, rejected) => {
            fetchData.fetchDataPost(`/main/login`, data).then(response => {
                // error handling
                if (response.status === 200) {
                    // load store with data

                    // сохраним пользователя в сторе
                    let store = this.props.store;
                    store.dispatch({type: 'user', user: response.data.data[0]});

                    if (this.props.loginClickEvent) {
                        this.props.loginClickEvent(response.data.data.length && response.data.data[0].id ? true : false);
                    }
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
        });
    }

}

Login.propTypes = {
    disabled: PropTypes.bool,
    show: PropTypes.bool
};


Login.defaultProps = {
    disabled: false.valueOf(),
    pages: []
};

module.exports = Login;