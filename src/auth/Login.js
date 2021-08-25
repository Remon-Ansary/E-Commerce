import React from 'react'
import firebase from '../firebase'
import "../css/Login.css"
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""

        }
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    signup(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {

        return (


            // <div>
            // <input
            // type="email"
            // id="email"
            // name="email"
            // placeholder="enter email address"
            // onChange={this.handleChange}
            // value={this.state.email}/>
            // <input
            // name="password"
            // type= "password"
            // onChange={this.handleChange}
            // id="password"
            // placeholder="enter password"
            // value={this.state.password}/>

            // <button onClick={this.login}>Login</button>
            // <button onClick={this.signup}>Signup</button>
            // </div>

            <div className="login-body">
                <div className="container px-4 py-5 mx-auto">
                    <div className="card card0">
                        <div className="d-flex flex-lg-row flex-column-reverse">
                            <div className="card card1">
                                <div className="row justify-content-center my-auto">
                                    <div className="col-md-8 col-10 my-5">
                                        <div className="row justify-content-center px-3 mb-3"> </div>
                                        <h3 className="mb-5 text-center heading">Remon's Ecommerce</h3>
                                        <h6 className="msg-info">Please login to your account</h6>
                                        <div className="form-group"> <label className="form-control-label text-muted">Username</label>

                                            <input 
                                             type="email"
                                             id="email"
                                             name="email"
                                             placeholder="Enter email address"
                                             onChange={this.handleChange}
                                             value={this.state.email}
                                            className="form-control" />

                                        </div>
                                        <div className="form-group"> <label className="form-control-label text-muted">Password</label>

                                         <input 
                                          name="password"
                                          type= "password"
                                          onChange={this.handleChange}
                                          id="password"
                                          placeholder="Enter password"
                                          value={this.state.password}
                                         className="form-control" /> 
                                         
                                         </div>
                                        <div className="row justify-content-center my-3 px-3"> <button  onClick={this.login} className="btn-block btn-color">Login</button> </div>
                                        <div className="row justify-content-center my-2"> <a href="#"><small className="text-muted">Forgot Password?</small></a> </div>
                                    </div>
                                </div>
                                <div className="bottom text-center mb-5">
                                    <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button  onClick={this.signup} className="btn btn-white ml-2">Create new</button></p>
                                </div>
                            </div>
                            <div className="card card2">
                                <div className="my-auto mx-md-5 px-md-5 right">
                                    <h3 className="text-white">We are more than just a company</h3> <small className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Login;