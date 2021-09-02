import React from 'react'
import firebase from './firebase'
import Login from './auth/Login';
import Welcome from './auth/Welcome'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    user:{}
    }
  }
  componentDidMount(){
    this.authListener();

  }
  authListener(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
  })
  }

 
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  

  render() {

  return (
    <div>
      
      {this.state.user ? (<Welcome/>):(<Login/>) }
     
    </div>
  );
}
}
export default App;
