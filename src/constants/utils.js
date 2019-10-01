const utils = {
    sidebarItems: [
        {
            title: 'Users',
            path: '/users',
            iconType: 'user'
        },
        {
            title: 'Analytics',
            path: '/analytics',
            iconType: 'line-chart'
        },
        {
            title: 'Notes',
            path: '/notes',
            iconType: 'form'
        },
        {
            title: 'Music',
            path: '/music',
            iconType: 'customer-service'
        }
    ],
    userTableColumns: [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name'
    },
    {
        title: 'Surname',
        key: 'surname',
        dataIndex: 'surname'
    },
    {
        title: 'Gender',
        key: 'gender',
        dataIndex: 'gender'
    },
    {
        title: 'Region',
        key: 'region',
        dataIndex: 'region'
    }

]};

export default utils;

