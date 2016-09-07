import React, {Component} from 'react';
import Navbar1 from './navbar1.jsx';
import Navbar2 from './navbar2.jsx';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isAuth: false
    };
    this.checkAuthState = this.checkAuthState.bind(this);
  }

  componentWillMount() {
    var context = this;
    $.get('/checkLogin').then(function(data) {
      context.setState({
        isAuth: data === 'authenticated'
      });
    }).catch(function(err) {
      context.setState({
        isAuth: false
      });
    });
  }

  checkAuthState () {
    return this.state.isAuth;
  }

  render() {
    var checkAuthState = this.checkAuthState;
    var navbar = this.state.isAuth ? <Navbar2 /> : <Navbar1 />;
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        auth: checkAuthState
      });
    });
    return (
      <div>
        {navbar}
        {children}
      </div>
    );
  }
}