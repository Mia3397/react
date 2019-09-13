import React, {Component} from 'react';
import './Jobs.css';
import {Button, Input, Modal, Icon} from 'antd/es';

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
        let {name, value} = target;
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
        const {language, region} = this.state;
        return (
            <div className="wrapper">
                <Button type="primary" onClick={this.showModal}>
                    Filter
                </Button>
                <Modal
                    title="Filter"
                    visible={this.state.visible}
                    onApply={this.handleApply}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button type="back" onClick={this.handleCancel}>
                            Cancel
                        </Button>,
                        <Button type="primary" onClick={this.handleApply}>
                            Apply
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