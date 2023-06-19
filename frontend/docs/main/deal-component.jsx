const PropTypes = require('prop-types');

const React = require('react'),
    styles = require('./styles');
const fetchData = require('./../../../libs/fetchData');

//const store = require('./../../store');

const ModalPage = require('./../../components/modalpage/modalPage.jsx');

class Deal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: '',
            selectedFiles: null,
            selectedFileType: '',
            uploadedImage: null,
            fileName: '',
            show: this.props.show,
            id: this.props.id,
            lastId: 0,
            kood: this.props.kood,
            description: this.props.description,
            author_id: 0,
            author: '',
            price: this.props.price
        }
        this.onClickHandled = this.onClickHandled.bind(this);
//        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fecthData = this.fecthData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.getPictureFromStore = this.getPictureFromStore.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let isPictureShow = store.getState().statuses.isPictureShow;
                let pictureId = store.getState().statuses.pictureId;
                let picture = this.getPictureFromStore();

                this.setState({
                    show: isPictureShow,
                    id: pictureId,
                    kood: picture[0].kood,
                    description: picture[0].description,
                    selectedFile: `data:image/jpeg;base64,/${picture[0].file}`,
                    fileName: picture[0].name,
                    author_id: picture[0].author_id,
                    price: Number(picture[0].price) * 2
                }, () => {
                    this.forceUpdate();
                });
            });
        }
    }

    componentDidMount() {
        // редактирование
        let picture = this.getPictureFromStore();

        if (!picture || !picture.length) {
            return;
        }

        console.log('deal comp did mount', picture)
        this.setState({
            kood: picture[0].kood,
            description: picture[0].description,
            selectedFile: `data:image/jpeg;base64,/${picture[0].file}`,
            id: picture[0].id,
            fileName: picture[0].name,
            author_id: picture[0].author_id,
            price: Number(picture[0].price) * 2
        })
    }


    render() {
        return (
            <ModalPage show={this.state.show}
                       modalPageBtnClick={this.onClickHandled}>
                <div style={styles.docRow}>
                    <div style={styles.pictureFrame}>
                        {this.state.selectedFile ? <img
                            src={this.state.selectedFile}
                            alt={'Image'}
                            key={'img_1'}
                            style={styles.picture}
                        /> : null}
                    </div>
                    <div style={styles.docColumn}>
                        <label>Kood: </label>
                        <input type='text'
                               id={'kood'}
                               name={'kood'}
                               value={this.state.kood || ''}
                               disabled={true}
                        />
                        <label>Description: </label>
                        <input type='text'
                               id={'description'}
                               name={'description'}
                               value={this.state.description || ''}
                               disabled={true}
                        />
                        <label>New price: </label>
                        <input type="number"
                               ref="price"
                               value={this.state.price || 0}
                               id={'price'}
                               name={'price'}
                               onChange={this.onChangeInput}>
                        </input>
                    </div>
                </div>
            </ModalPage>);
    }


    onChangeInput(e) {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;

        switch (fieldName) {
            case 'price':
                this.setState({price: fieldValue});
                break;
        }

    }

    onClickHandled(event) {
        if (event == 'Ok') {
            // сохраняем
            this.fecthData()
        }

        let store = this.props.store;
        // меняем статус окна
        store.dispatch({type: 'isPictureShow', isPictureShow: false});
    }

    fecthData() {
        let data = {
            picture_id: this.state.id,
            price: this.state.price,
            user: this.props.store.getState().statuses.user
        }
        fetchData.fetchDataPost(`/main/newDeal`, data).then((result) => {
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
    getPictureFromStore() {
        console.log('getPictureFromStore')
        let store = this.props.store;
        if (!store) {
            return []
        }
        let pictures = store.getState().pictures.pictures;
        let pictureId = store.getState().statuses.pictureId;
        if (!pictureId || !pictures || !pictures.length) {
            return null;
        }
        return pictures.filter(row => row.id == pictureId);
    }


    loadPicture() {
//        let source = require('./../../../public/images/art_1.jpg').default
        return source;
    }
}

Deal.propTypes = {
    disabled: PropTypes.bool,
    show: PropTypes.bool
};


Deal.defaultProps = {
    disabled: false.valueOf(),
    pages: []
};

module.exports = Deal;