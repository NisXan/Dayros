import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import PhotoList from '../components/PhotoList.js';
import PhotoDetails from '../components/PhotoDetails.js';
import Auth from '../components/Auth.js';
import Header from '../components/Header.js';
import { addImages, likedPhoto } from '../actions/actions.js';

let App = (props) => {
  const { images, addImages, likedPhoto } = props; 

  return (    
    <div>    
      <Header />    
      { (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === ''|| !localStorage.getItem('token')) ?        
        <Route exact path='/'>          
          <Auth />
        </Route>
      :
        <Switch>
          <Route exact path='/' render={() => (
            <PhotoList images={images} addImages={addImages} likedPhoto={likedPhoto} />
          )}/>

          <Route path='/photo/:id' render={() => (
            <PhotoDetails images={images} likedPhoto={likedPhoto} />
          )}/>
          <Redirect to='/' />
        </Switch>
      }      
    </div>
  )         
}

const mapStateToProps = state => {  
  return {
    images: state
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    addImages: (images) => dispatch(addImages(images)),
    likedPhoto: (id) => dispatch(likedPhoto(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;