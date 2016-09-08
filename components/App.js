import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions/actions'
import LoginScreen from './loginscreen/LoginScreen'
import Dashboard from './dashboard/Dashboard'
import styles from './sass/app.sass'

class App extends Component {

    componentDidMount () {

        window.fbAsyncInit = function () {
            FB.init({
                appId      : '257356887982054',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.7'
            });
            FB.getLoginStatus(function (response) {
                this.statusChangeCallback(response);
            }.bind(this));

        }.bind(this);

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return
            };
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

    testAPI () {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            //document.getElementById('status').innerHTML =
            //'Thanks for logging in, ' + response.name + '!';
        });
    }

    statusChangeCallback (response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.props.dispatch(actions.RegisterUser(response.authResponse.userID, response.authResponse.accessToken))
            //this.props.dispatch(actions.Login(response.authResponse.userID, response.authResponse.accessToken))
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            //document.getElementById('status').innerHTML = 'Please log ' +
            //  'into this app.';
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            //document.getElementById('status').innerHTML = 'Please log ' +
            //'into Facebook.';
        }
    }

    render() {
        return (
            <div>
                {this.props.user.loggedIn ? <Dashboard state={this.props} dispatch={this.props.dispatch}/> : <LoginScreen dispatch={this.props.dispatch}/>}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps) (App)
