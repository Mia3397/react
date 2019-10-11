import React from 'react';
import {Redirect} from 'react-router-dom';

const withUserName = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            const {userName} = this.props;

            return (
                userName ? <Redirect to={{pathname: '/musicians'}}/> : <WrappedComponent {...this.props}/>
            )
        }
    }
    return HOC;
};

export default withUserName;