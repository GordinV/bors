const PropTypes = require('prop-types');

const React = require('react'),
    styles = require('./styles');
const fetchData = require('./../../../libs/fetchData');

//const store = require('./../../store');

const ModalPage = require('./../../components/modalpage/modalPage.jsx');

class Picture extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: '',
            selectedFiles: null,
            selectedFileType: '',
            uploadedImage: null,
            fileName: '',
            show: true,
            id: this.props.id,
            lastId: 0,
            kood: this.props.kood,
            description: this.props.description,
            author_id: 0,
            author: ''
        }
        this.onClickHandled = this.onClickHandled.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fecthData = this.fecthData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.getPictureFromStore = this.getPictureFromStore.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let isPictureShow = store.getState().statuses.isPictureShow;
                let authors = store.getState().authors.authors;

                this.setState({
                    show: isPictureShow,
                    authors: authors
                }, () => {
                    this.forceUpdate();
                });
            });
        }

    }

    componentDidMount() {
        if (this.props.id) {
            // редактирование
            let picture = this.getPictureFromStore();
            if (!picture || !picture.length) {
                return;
            }

            let store = this.props.store;
            // проверим справочник авторов
            let authors = store.getState().authors;

            if (authors && !authors.length) {
                // справочник пуст, загружаем
                store.dispatch({type: 'getAuthors', payload: []});
            }

            this.setState({
                kood: picture[0].kood,
                description: picture[0].description,
                selectedFile: `data:image/jpeg;base64,/${picture[0].file}`,
                id: picture[0].id,
                fileName: picture[0].name,
                author_id: picture[0].author_id
            });
        }
    }


    render() {
        let mimeTypes = ".jpg, .png";
        let authors = [{id: 0, code: '', name: ''}].concat(this.props.store.getState().authors);
        let picture = this.getPictureFromStore();
        let pictureId = picture && picture.length ? picture[0]: 0;
        if (!pictureId) {
            // new picture
            pictureId = null;
            picture = [{
                id: null,
                kood: this.state.kood,
                nimetus: this.state.nimetus,
                description: this.state.description,
                author_id: this.state.author_id,
                file: this.state.selectedFile
            }];
//            return <div>Data is loading</div>
        }

        let selectedFile = picture && picture.length && picture[0].id ?  `data:image/jpeg;base64,/${picture[0].file}` : this.state.uploadedImage;
        console.log('render', this.state, selectedFile)


        return (
            <ModalPage show={this.state.show}
                       modalPageBtnClick={this.onClickHandled}
            >
                {!pictureId ? (<input type="file"
                                          name="file"
                                          onChange={this.onChangeHandler}
                                          accept={mimeTypes}/>
                ) : null}
                <div style={styles.docRow}>
                    <div style={styles.pictureFrame}>
                        {selectedFile ? <img
                            src={selectedFile}
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
                               onChange={this.onChangeInput}
                               value={picture[0].kood || ''}
                        />
                        <label>Description: </label>
                        <input type='text'
                               id={'description'}
                               name={'description'}
                               onChange={this.onChangeInput}
                               value={picture[0].description || ''}
                        />
                        <label>Athor: </label>
                        <select ref="select"
                                style={styles.select}
                                value={picture[0].author_id || 0}
                                id={'author'}
                                name={'author'}
                                onChange={this.onChangeInput}>
                            {authors.map((item, index) => {
                                return <option value={item.id}> {`${item.code}  ${item.name}`} </option>
                            })}
                        </select>
                    </div>
                </div>
            </ModalPage>
        );
    }

    onChangeInput(e) {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;

        switch (fieldName) {
            case 'kood':
                this.setState({kood: fieldValue});
                break;
            case 'description':
                this.setState({description: fieldValue});
                break;
            case 'author':
                // найти и сохранить имя автора
                let authorName = '';
                if (fieldValue) {
                    let author = this.props.store.getState().authors.filter(row => row.id == fieldValue);
                    if (author) {
                        authorName = author[0].name;
                    }
                }
                this.setState({author_id: fieldValue, author: authorName});
                break;
        }

    }

    onChangeHandler(event) {
        let img = event.target.files[0];
        let imgName = img.name;
        let type = img.type;

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = e => {
            this.setState({
                uploadedImage: e.target.result,
                selectedFile: URL.createObjectURL(img),
                selectedFileType: type,
                fileName: imgName
            });

        };
    }

    onClickHandled(event) {
        if (event == 'Ok') {

            // сохраняем
            if (this.state.selectedFile) {
                this.fecthData()
            }
        }

        this.setState({show: !this.state.show});
    }

    fecthData() {
        let user = this.props.store.getState().user;
        const data = new FormData();
        const image = new File([this.state.uploadedImage], this.state.fileName);
        data.append('file', image, this.state.fileName)
        data.append('kood', this.state.kood)
        data.append('id', this.state.id)
        data.append('description', this.state.description)
        data.append('author_id', this.state.author_id ? this.state.author_id: user.id)

        fetchData.fetchDataPost(`/upload`, data, this.state.selectedFileType).then((result) => {
            this.setState({id: result.data.result});
            let store = this.props.store;
            store.dispatch({type: 'addPicture', picture: result.data.docdata});
            // вызвать перегрузку картин
            this.props.btnClickEventHandler('saved', result.data.result)
        });
    }

    /**
     * вернет обьект с картиной
     * @returns {T[]|Array}
     */
    getPictureFromStore() {
        let store = this.props.store;
        if (!store) {
            return []
        }
        let pictures = store.getState().pictures.pictures;
        let pictureId = store.getState().statuses.pictureId;
        return pictures.filter(row => row.id === pictureId);
    }

}

Picture.propTypes = {
    disabled: PropTypes.bool,
    show: PropTypes.bool
};


Picture.defaultProps = {
    disabled: false.valueOf(),
    pages: []
};

module.exports = Picture;