import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import "../css/Welcome.css"
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      
    }
  }
  componentDidMount() {
    fetch('/allProducts')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });

        console.log(result);
      });
  }

  logout() {
    firebase.auth().signOut();
  }

  //   <ul>
  //   {items.map(item => (
  //     <li key={item.id}>
  //       <h3>{item.title}</h3>
  //       <p>{item.price}</p>
  //     </li>
  //   ))}
  // </ul>
  render() {
    const { items } = this.state;

    return (

      <div>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid"> <a class="navbar-brand name" href="#">Remon's Ecommerce</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">About</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="#">Categories</a> </li>
                  <a href="cart.html" class="icons-btn d-inline-block bag" />
                  <span class="icon-shopping-bag"></span>
                  <li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li>
                 
                 
                  <li class="nav-item" > <a class="nav-link" href="#" onClick={this.logout}>Logout</a> </li>

                </ul>
                <form class="d-flex searchitem"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> <i class="fa fa-search"></i> </form>
              </div>
            </div>
          </nav>
          <div class="d-flex justify-content-center align-items-center mt-5"> <button class="btn btn-dark">OUR PRODUCTS</button> </div>
          <div class="d-flex justify-content-center mt-3"> <span class="text text-center">Finding Best Products Now in Your Fingertips </span> </div>
          <div class="row mt-2 g-4">
            {/* <div class="col-md-3">
              <div class="card p-1">
                <div class="d-flex justify-content-between align-items-center p-2">
                  <div class="flex-column lh-1 imagename"> <span>Mobile</span> <span>Phones</span> </div>
                  <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </div>
                </div>
              </div>
            </div> */}
            {items.map(item => (

              <div class="col-md-4 mt-2">
                <div class="card welcome">
                  <div class="card-body">
                    <div class="card-img-actions"> <img src={item.image} class="card-img" /> </div>
                  </div>
                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"> <a href="#" class="text-default mb-2" data-abc="true">{item.title}</a> </h6>
                      <a href="#" class="text-muted" data-abc="true">{item.category}</a>
                    </div>
                    <h3 class="mb-0 font-weight-semibold">{item.price}$</h3>
                    <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
                    <div class="text-muted mb-3">23</div> <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>


      //  {/* <h1>Welcome</h1>
      //   <button onClick={this.logout}>Logout</button> */}


    );

  }


  // const { items } = this.state;
  // if (!isLoaded) {
  //   return <div>Loading ... </div>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map(item => (
  //         <li key={item.id}>
  //           <h3>{item.title}</h3>
  //           <p>{item.body}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }




}


export default Welcome
