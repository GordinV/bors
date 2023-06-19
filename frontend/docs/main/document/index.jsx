'use strict';

//const store = require("../../../store");

const PropTypes = require('prop-types');
const React = require('react');
const fetchData = require('./../../../../libs/fetchData');
const DocContext = require('./../../../doc-context.js');
const styles = require('./styles');


/**
 * Класс реализует базовый документ .
 */
class MainDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docId: 0, //если Id документа не передан, то создаем новый док
            reloadData: true,
            data: [],
            id: 0,
            selectedFile: null,
            selectedFileType: '',
            uploadedImage: null,
            fileName: '',

        };
        this.fetchData = this.fetchData.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.renderToolBar = this.renderToolBar.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

    }

    componentDidMount() {
        if (this.state.reloadData && this.props.match && this.props.match.params.docId) {
            //делаем запрос на получение данных
            this.fetchData(this.props.match.params.docId);
        }

    }

    render() {
        return (
            <div style={styles.doc}>
                {this.renderToolBar()}
                {!this.state.data.id ? (<input type="file"
                                               name="file"
                                               onChange={this.onChangeHandler}
                                               accept={".jpg"}/>
                ) : null}
                <div style={styles.docRow}>
                    <div style={styles.docColumn}>
                        <label>Code: </label>
                        <input type='text'
                               id={'code'}
                               name={'kood'}
                               onChange={this.onChangeInput}
                               value={this.state.data.kood || ''}
                        />
                        <label>Description: </label>
                        <input type='text'
                               id={'description'}
                               name={'description'}
                               onChange={this.onChangeInput}
                               value={this.state.data.description || ''}
                        />
                    </div>
                    <div style={styles.docColumn}>
                        <div style={styles.pictureFrame}>
                            {this.state.data.file ? <img
                                src={this.state.data.id ? `data:image/jpeg;base64,/${this.state.data.file}` : this.state.uploadedImage}
                                alt={'Image'}
                                key={'img_1'}
                                style={styles.picture}
                            /> : null}
                        </div>
                    </div>

                </div>
            </div>

        )

    }


    onChangeInput(e) {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;
        let data = this.state.data;

        switch (fieldName) {
            case 'kood':
                data['kood'] = fieldValue;
                break;
            case 'description':
                data['description'] = fieldValue;
                break;
        }

        this.setState({data: data});
    }

    onChangeHandler(event) {
        let img = event.target.files[0];
        let imgName = img.name;
        let type = img.type;

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        let data = this.state.data;
        data['file'] = 'file';

        reader.onload = e => {
            this.setState({
                uploadedImage: e.target.result,
                selectedFile: URL.createObjectURL(img),
                selectedFileType: type,
                fileName: imgName,
                data: data
            });

        };
    }

    /**
     * Вернет компонет - панель инструментов документа
     * @returns {XML}
     */
    renderToolBar() {
        let toolbarStyle = Object.assign({}, styles.toolBarContainerStyle, styles.right)
        return (
            <div>
                <div style={styles.docRow}>
                    <div ref='toolbarContainer'
                         style={toolbarStyle}
                    >
                        <button onClick={this.btnClick}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

    btnClick(event) {
        const data = new FormData();
        // если фотография уже добавлена, то повторно ее уже не добаляем
        if (!this.state.data.id) {

            const image = new File([this.state.uploadedImage], this.state.fileName);
            data.append('file', image, this.state.fileName)
        }

        data.append('id', this.state.data.id)
        data.append('kood', this.state.data.kood)
        data.append('description', this.state.data.description)

        return new Promise((resolve, reject) => {
            fetchData.fetchDataPost(`/upload`, data, this.state.selectedFileType).then(response => {
                // error handling
                if (response.status === 200 && response.data.result) {
                    resolve(response.data);

                    return this.props.history.push({
                        pathname: `/`
                    });
                } else {
                    console.error('viga', response)
                    return reject();
                }

            });
        })

    }


    /**
     * загрузка данных
     * @returns {*|Promise<AxiosResponse<unknown> | never>}
     */
    fetchData(docId) {
        let URL = `/main/data/${docId}`;
        let params = {};
        return new Promise((resolved, rejected) => {

            fetchData['fetchDataPost'](URL, params).then(response => {
                // error handling
                if (response.status === 200) {

                    // load store with data
                    this.setState({reload: false, data: response.data.data[0]});
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

module.exports = (MainDoc);
