import React from 'react';
import {connect} from 'react-redux';
import LoginService from '../../services/LoginService';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.loginService = new LoginService();
        this.state = {
            email: '',
            password: '',
            errores: ''
        }
        this.register = this.register.bind(this);
        this.cambioInput = this.cambioInput.bind(this);
    }

    async register() {
        try {
            const respuesta = await this.loginService.register(this.state.email, this.state.password);
            this.props.setToken(respuesta);
            this.props.history.push('/');
        } catch (e) {
            this.setState({errores: 'Hubo un problema en la conexión con el servidor'});
        }
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
        let mensajeError = '';
        if (this.state.errores) {
            mensajeError = <div className='alert alert-danger'>{this.state.errores}</div>
        }
        return (
            <div id="contenedor-login">
                <div className="login">
                    <h1>Registración</h1>
                    {mensajeError}
                    <div>
                        <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.cambioInput}/>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.cambioInput}/>
                        <button className="btn btn-primary" onClick={this.register}>Registrarme</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapToActions = (dispatch) => {
    return {
        setToken: (token) => dispatch({type:'SET_TOKEN', token})
    }
}
export default connect(null, mapToActions)(Register);