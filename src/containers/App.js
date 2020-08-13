import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import PhotoList from '../components/PhotoList.js';
import PhotoDetails from '../components/PhotoDetails.js';
import Header from '../components/Header.js';
import Auth from '../components/Auth.js';
import { store } from '../index';
import { likePhoto, unlikePhoto, authenticationUrl } from '../unsplash/unsplash.js';
import { addImages, likedPhoto, unlikedPhoto, logOutAction, logInAction } from '../actions/actions.js';

let App = (props) => {
  const { images, addImages, likedPhoto, unlikedPhoto, logOutAction, logInAction } = props;

  const likeUpdate = id => {
    const currentState = store.getState();
    const targetElement = currentState.find(item => item.id === id );
    if (!targetElement.liked_by_user) {
      targetElement.liked_by_user = true;
      targetElement.likes++;
      likedPhoto();
      likePhoto(targetElement.id, localStorage.getItem('token'));
    } else {
      targetElement.liked_by_user = false;
      targetElement.likes--;
      unlikedPhoto();
      unlikePhoto(targetElement.id, localStorage.getItem('token'));
    }
  };

  const logIn = () => {
    logInAction();
    location.assign(authenticationUrl);

  }

  const logOut = () => {
    localStorage.clear('token');
    logOutAction();
  }

  return (
    <>
      <Header logIn={logIn} logOut={logOut}/>
      <Switch>
      {
        (localStorage.getItem('token') != 'undefined' && localStorage.getItem('token') != '' && localStorage.getItem('token') != null ) ?
          <>
            <Route exact path='/' render={() => (
              <PhotoList images={images} addImages={addImages} likedPhoto={likeUpdate} unlikedPhoto={likeUpdate} />
            )}/>
            <Route path='/photo/:id' render={() => (
              <PhotoDetails images={images} likedPhoto={likeUpdate} unlikedPhoto={likeUpdate} />
            )}/>
          </>          
        :
          <Route exact path='/'>
            <Auth logIn={logIn}/>
          </Route>
        }
        <Redirect to='/' />
      </Switch>
    </>
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
    unlikedPhoto: (id) => dispatch(unlikedPhoto(id)),
    logOutAction: () => dispatch(logOutAction()),
    logInAction: () => dispatch(logInAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);