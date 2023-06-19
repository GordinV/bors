const PropTypes = require('prop-types');
const radium = require('radium');

const React = require('react'),
    styles = require('./styles');
const getTextValue = require('./../../../libs/getTextValue');

class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onChange = this.onChange.bind(this);
        this.btnClickHandler = this.btnClickHandler.bind(this);
    }

    onChange(e) {
        this.setState({value: e.target.value});
    }

    render() {

        return (
            <div style={styles.searchText.wrapper}>
                <input type='text'
                       style={styles.searchText.text}
                       onChange={this.onChange}
                       value={this.state.value || ''}
                />
                <button
                    style={styles.searchText.button}
                    onClick={this.btnClickHandler}
                    onDoubleClick={this.btnClickHandler}
                >

                    <img ref='image' src={styles.icons['filter']}/>
                </button>


            </div>)
    }

    btnClickHandler() {
        console.log('fliter btn clicked', this.state.value)
        let store = this.props.store;
        store.dispatch({type: 'filter', filter: this.state.value});
    }

    onChange(e) {
        this.setState({value: e.target.value});
    }

    /**
     * установит фокус на элементы
     */
    focus() {
        this.refs['input'].focus();
    }

}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    valid: PropTypes.bool,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string
};


Input.defaultProps = {
    readOnly: false,
    disabled: false,
    valid: true,
    value: '',
    title: ''
};

module.exports = radium(Input);