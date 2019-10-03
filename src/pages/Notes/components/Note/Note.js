import React from 'react';
import {Button} from 'antd';
import {EditContainer} from '../index';
import connect from '../../connect';
import utils from '../../../../constants/utils';
import buttonText from '../../../../constants/text';
import './Note.scss';

class Note extends React.Component {
    state = {
        type: null,
        value: ''
    };

    onEdit = (type, value) => ()  => {
        this.setState({
            type,
            value
        })
    };

    onChange = ({target: {value}}) => {
        this.setState({
            value
        })
    };

    onUpdate = () => {
        const {type, value} = this.state;
        const {id, updateNoteById} = this.props;
        updateNoteById(id, value, type);
        this.setState({
            value: '',
            type: null
        })
    };

    deleteNote = (id) => () => this.props.deleteNote(id);

    render(){
        const {type, value} = this.state;
        const {title, date, text, id} = this.props;

        return(
            <div className="note">
                <header>
                    <div className="note-info">
                        <EditContainer
                            type={type}
                            containerType={utils.types.title}
                            value={value}
                            onChange={this.onChange}
                            onUpdate={this.onUpdate}
                            text={title}
                            onEdit={this.onEdit}
                        />
                        <EditContainer
                            type={type}
                            containerType={utils.types.date}
                            value={value}
                            onChange={this.onChange}
                            onUpdate={this.onUpdate}
                            text={date}
                            onEdit={this.onEdit}
                        />
                    </div>
                    <Button type="primary" onClick={this.deleteNote(id)}>
                        {buttonText.buttonDelete}
                    </Button>
                </header>

                    <EditContainer
                        type={type}
                        containerType={utils.types.text}
                        value={value}
                        onChange={this.onChange}
                        onUpdate={this.onUpdate}
                        text={text}
                        onEdit={this.onEdit}
                    />
            </div>
        )
    }
}

export default connect(Note);