import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import PhotoList from '../components/PhotoList.js';
import PhotoDetails from '../components/PhotoDetails.js';
import Header from '../components/Header.js';
import { store } from '../index';
import { likePhoto, unlikePhoto } from '../unsplash/unsplash.js';
import { addImages, likedPhoto, unlikedPhoto } from '../actions/actions.js';

let App = (props) => {
  const { images, addImages, likedPhoto, unlikedPhoto } = props;

  const likeUpdate = id => {
    const currentState = store.getState();
    const targetElement = currentState.find(item => item.id === id );
    if (!targetElement.liked_by_user) {
      targetElement.liked_by_user = true;
      targetElement.likes++;
      likedPhoto();
      likePhoto(targetElement.id);
    } else {
      targetElement.liked_by_user = false;
      targetElement.likes--;
      unlikedPhoto();
      unlikePhoto(targetElement.id);
    }
  };

  return (
    <div>
      <Header />
      <Switch>      
        <Route exact path='/' render={() => (
          <PhotoList images={images} addImages={addImages} likedPhoto={likeUpdate} unlikedPhoto={likeUpdate} />
        )}/>

        <Route path='/photo/:id' render={() => (
          <PhotoDetails images={images} likedPhoto={likeUpdate} unlikedPhoto={likeUpdate} />
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