import React from 'react';
import Auth from '../server/authentication/Auth';

const auth = new Auth();

class Callback extends React.Component {
    componentDidMount() {
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>Life Aid</div>
        );
    }
}

const Index = () => {
    return (
        <div>
            <Callback />
            <div>
                <button type="button" onClick={() => auth.login()}>Login</button>
            </div>
        </div>
    );
};

export default Index;
