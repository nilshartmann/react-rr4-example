
import * as React from 'react';

const connect = require('react-redux').connect;
import { bindActionCreators } from 'redux';

import { Layout, Column, Row } from './ui/FoundationComponents';
import { IRedirectLocationState, IGlobalState, IAuthState, IAuthentication } from '../types';
import { login } from '../actions';


interface ILoginPageStateProps {
  auth: IAuthState;
  location: HistoryModule.Location;
}

interface ILoginPageDispatchProps {
  login: (authentication: IAuthentication, redirect: string) => void;
}

interface ILoginPageProps extends ILoginPageStateProps, ILoginPageDispatchProps {
};

interface ILoginPageState extends IAuthentication {
}

function mapStateToProps(state: IGlobalState, ownProps): ILoginPageStateProps {
  return {
    auth: state.auth,
    location: ownProps.location
  };
}

function mapDispatchToProps(dispatch): ILoginPageDispatchProps {
  return {
    login: (authentication: IAuthentication, redirect: string) => dispatch(login(authentication, redirect))
  };
}

class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value } as IAuthentication);
  }

  doLogin() {
    const { username, password }: IAuthentication = this.state;
    const { login, location } = this.props;

    login({ username, password }, location.state && (location.state as IRedirectLocationState).redirect);
  }

  render() {

    const { username, password } = this.state;
    const { error } = this.props.auth;

    const loginButtonEnabled = username && password;
    return <div className='LoginPage'>

      <div className='Left'>
        <h2>Please sign in</h2>
      </div>
      <div className='Right'>
        <form>
          <label>Name
                <input type='text' name='username' value={username} onChange={e => this.onInputChange(e)} />
          </label>
          <label>Password
                <input type='text' name='password' value={password} onChange={e => this.onInputChange(e)} />
          </label>
          <button disabled={!loginButtonEnabled} type='button' className='submit success button expanded' onClick={() => this.doLogin()}>Login</button>
        </form>
      </div>
    </div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);


