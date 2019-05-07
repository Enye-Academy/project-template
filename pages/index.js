/* eslint react/jsx-no-literals: 0 */
/* eslint no-tabs: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/react-in-jsx-scope: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint no-mixed-spaces-and-tabs: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-trailing-spaces: 0 */
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
				<button onClick={() => auth.login()}>Login</button>
			</div>
    	</div>
	);
};

export default Index;
