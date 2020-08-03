import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import PhotoList from '../components/PhotoList.js';
import PhotoDetails from '../components/PhotoDetails.js';
import Header from '../components/Header.js';
import { addImages, likedPhoto, unlikedPhoto } from '../actions/actions.js';

let App = (props) => {
  const { images, addImages, likedPhoto, unlikedPhoto } = props; 

  return (
    <div>
      <Header />
      <Switch>      
        <Route exact path='/' render={() => (
          <PhotoList images={images} addImages={addImages} likedPhoto={likedPhoto} unlikedPhoto={unlikedPhoto} />
        )}/>

        <Route path='/photo/:id' render={() => (
          <PhotoDetails images={images} likedPhoto={likedPhoto} unlikedPhoto={unlikedPhoto} />
        )}/>
        <Redirect to='/' />
      </Switch>
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
    likedPhoto: (id) => dispatch(likedPhoto(id)),
    unlikedPhoto: (id) => dispatch(unlikedPhoto(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;