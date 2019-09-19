import React, {Component} from 'react';
import {Button, Input, Modal, Icon} from 'antd/es';
import text from '../../constants/text';
import './Jobs.css';

class Jobs extends Component {
    state = {
        language: '',
        region: '',
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true
        })
    };

    onChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value,
        });

    };

    handleApply = () => {
        this.setState({
            visible: false
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
            language: '',
            region: ''
        });
    };

    render() {
        const {language, region, visible} = this.state;
        return (
            <div className="wrapper">
                <h1>Jobs</h1>
                <Button type="primary" onClick={this.showModal}>
                    Filter
                </Button>
                <Modal
                    title="Filter"
                    visible={visible}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button type="back" onClick={this.handleCancel}>
                            {text.modalCancel}
                        </Button>,
                        <Button type="primary" onClick={this.handleApply}>
                            {text.modalApply}
                        </Button>
                    ]}
                >
                    <Input
                        placeholder="Language"
                        prefix={<Icon type="bulb"/>}
                        name="language"
                        onChange={this.onChange}
                        value={language}
                    />
                    <Input
                        placeholder="Region"
                        prefix={<Icon type="environment"/>}
                        name="region"
                        onChange={this.onChange}
                        value={region}
                    />
                </Modal>
            </div>
        )
    }
}

export default Jobs;