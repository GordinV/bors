const PropTypes = require('prop-types');

const React = require('react'),
    styles = require('./styles');
const DocContext = require('./../../doc-context.js');
const fetchData = require('./../../../libs/fetchData');


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
            show: this.props.show,
            id: this.props.id,
            lastId: 0,
            kood: this.props.kood,
            description: this.props.description
        }
        this.onClickHandled = this.onClickHandled.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fecthData = this.fecthData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    render() {
        let mimeTypes = ".jpg, .png";
        return (
            <ModalPage show={this.state.show}
                       modalPageBtnClick={this.onClickHandled}
            >
                {!this.state.id ? (<input type="file"
                                          name="file"
                                          onChange={this.onChangeHandler}
                                          accept={mimeTypes}/>
                ) : null}
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
                               onChange={this.onChangeInput}
                               value={this.state.kood || ''}
                        />
                        <label>Description: </label>
                        <input type='text'
                               id={'description'}
                               name={'description'}
                               onChange={this.onChangeInput}
                               value={this.state.description || ''}
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
            case 'kood':
                this.setState({kood: fieldValue});
                break;
            case 'description':
                this.setState({description: fieldValue});
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
            if (this.state.selectedFile && !this.state.id) {
                if (!DocContext.pictures) {
                    DocContext.pictures = [];
                }
                this.fecthData()
            }
        }

        this.setState({show: !this.state.show});
        return this.props.addClickEvent(true);
    }

    fecthData() {
        const data = new FormData();
        const image = new File([this.state.uploadedImage], this.state.fileName);
        data.append('file', image, this.state.fileName)
        data.append('kood', this.state.kood)
        data.append('description', this.state.description)

        return fetchData.fetchDataPost(`/upload`, data, this.state.selectedFileType);
    }


    loadPicture() {
//        let source = require('./../../../public/images/art_1.jpg').default
        return source;
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