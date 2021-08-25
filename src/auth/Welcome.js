import React from 'react'
import firebase from '../firebase'
import "../css/Welcome.css"
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    logout() {
        firebase.auth().signOut();
    }
    render() {
        return (
            <div>

                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid"> <a class="navbar-brand name" href="#">Remon's Ecommerce</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">About</a> </li>
                                    <li class="nav-item"> <a class="nav-link" href="#">Categories</a> </li>
                                    <li class="nav-item"> <a class="nav-link" href="#">Blog</a> </li>
                                    <li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li>
                                    <li class="nav-item" > <a class="nav-link" href="#" onClick={this.logout}>Logout</a> </li>

                                </ul>
                                <form class="d-flex searchitem"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> <i class="fa fa-search"></i> </form>
                            </div>
                        </div>
                    </nav>
                    <div class="d-flex justify-content-center align-items-center mt-5"> <button class="btn btn-dark">OUR CATEGORIES</button> </div>
                    <div class="d-flex justify-content-center mt-3"> <span class="text text-center">Finding Best Products Now in Your Fingertips </span> </div>
                    <div class="row mt-2 g-4">
                        <div class="col-md-3">
                            <div class="card p-1">
                                <div class="d-flex justify-content-between align-items-center p-2">
                                    <div class="flex-column lh-1 imagename"> <span>Mobile</span> <span>Phones</span> </div>
                                    <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
               {/* <h1>Welcome</h1>
                <button onClick={this.logout}>Logout</button> */}


            </div>

        )
    }
}

export default Welcome
