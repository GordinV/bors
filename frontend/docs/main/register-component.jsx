'use strict';

const React = require('react');
const styles = require('./styles');
const PictureComponent = require('./picture-component.jsx');
const DealComponent = require('./deal-component.jsx');

/**
 * Класс реализует документ справочника признаков.
 */
class RegisterComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            warning: null,
            initLoad: false,
            pictures: [],
            user: {},
            editDocument: false,
            saleDocument: false,
            pictureId: null

        }
        this.btnClickHandler = this.btnClickHandler.bind(this);

//подписываемся на изменения в сторе
        let store = this.props.store;
        if (store) {
            store.subscribe(() => {
                let pictures = store.getState().pictures.pictures;
                let user = store.getState().statuses.user;

                if (JSON.stringify(pictures) !== JSON.stringify(this.state.pictures) ||
                    JSON.stringify(user) !== JSON.stringify(this.state.user)) {
                    this.setState({
                        pictures: pictures,
                        user: user
                    }, () => {
                        this.forceUpdate();
                    });
                }
            })
        }
    }


    render() {
        let Component;
        let pictures = this.state.pictures;
        if (!pictures.length && this.props.store) {
            // подгрузим из стора
            pictures = this.props.store.getState().pictures.pictures;
        }

        let logedIn = false;
        if (this.props.store) {
            let user = this.props.store.getState().statuses.user;
            logedIn = user && user.id ? true : false;
        }

        console.log('render ', pictures);
        if (pictures && pictures.length) {
            Component = pictures.map((picture, idx) => {
                return (
                    <div style={styles.docRow} key={picture.id}>

                        <div style={styles.docColumn}>
                            <div style={styles.frame}>
                                <img
                                    src={`data:image/jpeg;base64,/${picture.file}`}
                                    alt={'Image'}
                                    key={picture.id}
                                    style={styles.img}
                                    href={`/main/${picture.id}`}
                                />
                            </div>
                        </div>
                        <div style={styles.docColumn}>
                            <div style={styles.docRow} key={picture.id}>
                                {logedIn  ?
                                    (<button
                                        style={styles.btnEdit}
                                        onClick={() => this.btnClickHandler('edit', idx)}
                                        onDoubleClick={() => this.btnClickHandler('edit', idx)}
                                    >
                                        <img ref='image' src={styles.icons['edit']}/>
                                    </button>) : null
                                }

                                {logedIn && picture.status === 1 ?
                                    (<button
                                        style={styles.btnSale}
                                        onClick={() => this.btnClickHandler('sale', idx)}
                                        onDoubleClick={() => this.btnClickHandler('sale', idx)}
                                    >
                                        <img ref='image'
                                             src={styles.icons['sale']}

                                        />
                                    </button>) : null
                                }
                            </div>
                            <span>Code: </span>
                            <input value={picture.kood || ''}
                                   disabled={true}
                                   name={'kood'}
                            />
                            <span>Description:</span>
                            <input value={picture.description || ''}
                                   disabled={true}
                                   name={'description'}
                            />
                            <span>Author:</span>
                            <input value={picture.author || ''}
                                   disabled={true}
                                   name={'Author'}
                            />
                            <span>Price:</span>
                            <input value={picture.price || ''}
                                   disabled={true}
                                   name={'Price'}
                            />
                            <span>Status:</span>
                            <input value={picture.status_name || ''}
                                   disabled={true}
                                   name={'Status'}
                            />
                        </div>

                    </div>
                )

            })
        } else {
            Component = (<div>Pictures are loading</div>)
        }
        let pictureId;
        if (this.props.store) {
            pictureId = this.props.store.getState().statuses.pictureId;
        }
        return (<div>
            {Component}
            {this.state.editDocument ? <PictureComponent
                store={this.props.store}
                id={pictureId}
                show={true}
                btnClickEventHandler={this.props.btnClickEventHandler}
            /> : null}
            {this.state.saleDocument ? <DealComponent
                store={this.props.store}
                id={pictureId}
                show={true}
                btnClickEventHandler={this.props.btnClickEventHandler}
            /> : null}

        </div>);
    }

    btnClickHandler(event, idx) {
        let pictures = this.props.store.getState().pictures.pictures;
        let pictureId = pictures[idx].id;

        this.props.store.dispatch({type: 'pictureId', pictureId: pictureId});
        switch (event) {
            case 'btnAdd':
                // новая картинка
                this.setState({editDocument: true, pictureId: null})
                break;
            case 'edit':
                // меняем статус окна
                this.props.store.dispatch({type: 'isPictureShow', isPictureShow: true});
                this.setState({editDocument: true, saleDocument: false, pictureId: pictureId})
                break;
            case 'sale':
                // меняем статус окна
                this.props.store.dispatch({type: 'isPictureShow', isPictureShow: true});
                this.setState({saleDocument: true, editDocument: false, pictureId: pictureId})

                break;
        }
    }
}

module.exports = RegisterComponent;

