const radium = require('radium');

const React = require('react'),
    styles = require('./styles');

class Filters extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            region: '',
            continent: '',
            city: ''
        };
        this.onChange = this.onChange.bind(this);
        this.updateStore = this.updateStore.bind(this);
    }

    onChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        let store = this.props.store;
        let regions = [];
        let continents = [];
        let cities = [];
        if (store) {

            regions = store.getState().statuses.regions;
            continents = store.getState().statuses.continents;
            cities = store.getState().statuses.cities;
        }

        return (
            <div>
                <div style={styles.filterBlock}>
                    <label style={styles.filterLabel}>Continents: </label>
                    <select ref="select-continents"
                            style={styles.select}
                            value={this.state.continent || ''}
                            id={'continent'}
                            name={'continent'}
                            onChange={this.onChange}>
                        {continents.map((item, index) => {
                            return <option value={item}> {`${item}`} </option>
                        })}
                    </select>
                </div>
                <div style={styles.filterBlock}>
                    <label style={styles.filterLabel}>Regions: </label>
                    <select ref="select-region"
                            style={styles.select}
                            value={this.state.region || ''}
                            id={'region'}
                            name={'region'}
                            onChange={this.onChange}>
                        {regions.map((item, index) => {
                            return <option value={item}> {`${item}`} </option>
                        })}
                    </select>
                </div>
                <div style={styles.filterBlock}>
                    <label style={styles.filterLabel}>Cities: </label>
                    <select ref="select-cities"
                            style={styles.select}
                            value={this.state.city || ''}
                            id={'city'}
                            name={'city'}
                            onChange={this.onChange}>
                        {cities.map((item, index) => {
                            return <option value={item}> {`${item}`} </option>
                        })}
                    </select>
                </div>
            </div>)
    }

    /**
     * Отследит изменения значений полей фильтрации
     * @param e
     */
    onChange(e) {
        let name = e.target.name;
        switch (name) {
            case 'continent': {
                this.setState({continent: e.target.value},()=> this.updateStore());
                break;
            }
            case 'region': {
                this.setState({region: e.target.value},()=> this.updateStore());
                break;
            }
            case 'city': {
                this.setState({city: e.target.value},()=> this.updateStore());
                break;
            }
            default:
                break;
        }

    }

    /**
     * Обновить  доп. фильтр в сторе
     */
    updateStore() {
        let addtionalFilter = {
            continent: this.state.continent,
            region: this.state.region,
            city: this.state.city
        }
        this.props.store.dispatch({type: 'additionalFilter', additionalFilter: addtionalFilter});

    }

}


module.exports = radium(Filters);