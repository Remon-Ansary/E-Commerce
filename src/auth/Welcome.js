import React from 'react'
import firebase from '../firebase'
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
    }}

logout() {
    firebase.auth().signOut();
}
    render() {
        return (
            <div>
          <h1>Welcome</h1>
        
        
           <button onClick={this.logout}>Logout</button>
            </div>
            
        )
    }
}

export default Welcome
