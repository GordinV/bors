const PropTypes = require('prop-types');

const React = require('react'),
    styles = require('./styles');
const DocContext = require('./../../doc-context.js');
const fetchData = require('./../../../libs/fetchData');


const ModalPage = require('./../../components/modalpage/modalPage.jsx');

class Logup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            lastId: 0,
            login: this.props.login,
            email: this.props.email,
            name: this.props.name,
            address: this.props.address,
            info: null
        }
        this.onClickHandled = this.onClickHandled.bind(this);
        this.fecthData = this.fecthData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    render() {
        return (
            <ModalPage show={this.state.show}
                       modalPageBtnClick={this.onClickHandled}
                       modalPageBtnClick={this.onClickHandled}
            >
                {this.state.info ? (<div style={styles.info}>
                    {this.state.info}
                </div>) : null}
                <div style={styles.docRow}>
                    <div style={styles.docColumn}>
                        <label>Login: </label>
                        <input type='text'
                               id={'login'}
                               name={'login'}
                               onChange={this.onChangeInput}
                               value={this.state.login || ''}
                        />
                        <label>email: </label>
                        <input type='text'
                               id={'email'}
                               name={'email'}
                               onChange={this.onChangeInput}
                               value={this.state.email || ''}
                        />
                        <label>Name: </label>
                        <input type='text'
                               id={'name'}
                               name={'name'}
                               onChange={this.onChangeInput}
                               value={this.state.name || ''}
                        />
                        <label>Address: </label>
                        <input type='text'
                               id={'address'}
                               name={'address'}
                               onChange={this.onChangeInput}
                               value={this.state.address || ''}
                        />


                    </div>
                </div>
            </ModalPage>
        );
    }

    onChangeInput(e) {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;

        switch (fieldName) {
            case 'login':
                this.setState({login: fieldValue});
                break;
            case 'email':
                this.setState({email: fieldValue});
                break;
            case 'name':
                this.setState({name: fieldValue});
                break;
            case 'address':
                this.setState({address: fieldValue});
                break;
        }

    }

    onClickHandled(event) {
        console.log('logup btn click')
        if (event == 'Ok') {
            // отправляем на сервер на контроль
            this.fecthData()
        } else {
            this.setState({wshow: !this.state.sho});
        }
    }

    fecthData() {
        let params = {
            login: this.state.login,
            email: this.state.email,
            name: this.state.name,
            address: this.state.address
        }
        const data = new FormData();
        data.append('login', this.state.login)
        data.append('email', this.state.email)
        data.append('name', this.state.name)
        data.append('address', this.state.address)
        return new Promise((resolved, rejected) => {
            fetchData.fetchDataPost(`/main/logup`, params).then(response => {
                console.log('response', response)
                // error handling
                if (response.status === 200) {
                    resolved(true);
                } else {
                    console.error('status !== 200')
                    rejected(false);
                }

            }).then(() => {
                this.setState({info: 'Successfully saved'}, () => {
                    setTimeout(() => {
                        this.setState({show: false});
                    }, 5000);
                    console.log('wait ends, show ...')
                });
            }).catch((error) => {
                console.error('fetch error', error ? error : '');
                // Something happened in setting up the request that triggered an Error
                this.setStatus({info: 'Error in saving data'});
            });
        });
    }

}

Logup.propTypes = {
    disabled: PropTypes.bool,
    show: PropTypes.bool
};


Logup.defaultProps = {
    disabled: false.valueOf(),
};

module.exports = Logup;