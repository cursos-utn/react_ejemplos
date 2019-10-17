import React from 'react';
import {connect} from 'react-redux';
import LoginService from '../../services/LoginService';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.loginService = new LoginService();
        this.state = {
            email: '',
            password: ''
        }
        this.checkLogin = this.checkLogin.bind(this);
        this.cambioInput = this.cambioInput.bind(this);
    }

    async checkLogin() {
        var respuesta = await this.loginService.register(this.state.email, this.state.password);
        console.log(respuesta);
    }

    cambioInput(e) {
        if (e.target.name==="email") {
            this.setState({email: e.target.value});
        }
        if (e.target.name==="password") {
            this.setState({password: e.target.value});
        }
    }    

    render() {
        return (
            <div className="login">
                <h1>Registración</h1>
                <div className="input-group mb-3 ">
                  <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.cambioInput}/>
                  <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.cambioInput}/>
                  <button className="btn btn-primary" onClick={this.checkLogin}>Registrarme</button>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(Register);