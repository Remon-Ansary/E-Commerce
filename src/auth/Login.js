import React from 'react'
import firebase from '../firebase'


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



            <div className="container login-container">

                <div class="row">
                    <div class="col-md-6 ads">
                        <h1><span id="fl">Company</span><span id="sl">Name</span></h1>
                    </div>
               
                    <form>
                <div class="form-group">
                    <input className="form-control" 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter email address"
                        onChange={this.handleChange}
                        value={this.state.email} />
                </div>

                <div class="form-group">
                    <input className="form-control" 
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        id="password"
                        placeholder="enter password"
                        value={this.state.password} />
                </div>

                <div class="form-group">
                    <button className="btn btn-primary" onClick={this.login}>Login</button>
                </div>

                <div class="form-group">
                    <button className="btn btn-primary" onClick={this.signup}>Signup</button>
                </div>
                </form>

            </div>
            </div>

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




        )
    }

}

export default Login;