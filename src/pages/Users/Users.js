import React, {Component} from 'react';
import {Button, Input, Modal, Select, Table} from 'antd/es';
import connect from './connect';
import text from '../../constants/text';
import utils from '../../constants/utils';
import './Users.css';

class Users extends Component {
    state = {
        params: {
            gender: null,
            region: null,
            amount: 25
        },
        visible: false
    };

    componentDidMount() {
        this.getData(this.state.params)
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    };

    onChange = (elem) => {
        let name = '';
        let value = '';
        typeof elem === 'string' ? ([name, value] = ['gender', elem]) : ({name, value} = elem.target);
        this.setState({
            params: {
                ...this.state.params,
                [name]: value,
            }
        });
    };

    handleApply = () => {
        this.setState({
            visible: false
        });
        this.getData(this.state.params)
    };

    handleCancel = () => {
        this.setState({
            visible: false,
            params: {
                gender: null,
                region: null
            }
        });
    };

    getData = (params) => this.props.getData(params);

    render() {
        const {params: {gender, region}, visible} = this.state;
        const {users} = this.props;

        return (
            <div className="wrapper">
                <h1>Users</h1>
                <Button type="primary" onClick={this.showModal} key="filterButton" >
                    Filter
                </Button>
                <Modal
                    title="Filter"
                    visible={visible}
                    onCancel={this.handleCancel}
                    key="filter"
                    footer={[
                        <Button type="back" onClick={this.handleCancel}>
                            {text.modalCancel}
                        </Button>,
                        <Button type="primary" onClick={this.handleApply}>
                            {text.modalApply}
                        </Button>
                    ]}
                >
                    <Select
                    showSearch
                    placeholder={text.placeholderForGenderSelect}
                    onChange={this.onChange}
                    key="gender"
                    value={gender || text.placeholderForGenderSelect}
                    >
                        <Select.Option key={text.genderMale} value={text.genderMale}>{text.genderMale}</Select.Option>
                        <Select.Option key={text.genderMale} value={text.genderFemale}>{text.genderFemale}</Select.Option>
                    </Select>
                    <Input
                        placeholder="Region"
                        name="region"
                        onChange={this.onChange}
                        value={region}
                        key="region"
                    />
                </Modal>
                <Table
                    columns={utils.userTableColumns}
                    dataSource={users}
                    scroll={{ y: 300 }}
                />
            </div>
        )
    }
}

export default connect(Users);