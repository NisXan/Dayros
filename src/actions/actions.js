import { ADD_IMAGES, LIKED_PHOTO, UNLIKED_PHOTO, LOG_OUT, LOG_IN } from '../constants.js';

export const addImages = state => {  
  return {
    type: ADD_IMAGES,
    images: state
  }
}

export const likedPhoto = state => {
  return {
    type: LIKED_PHOTO,
    id: state
  }
}

export const unlikedPhoto = state => {
  return {
    type: UNLIKED_PHOTO,
    id: state
  }
}

export const logOutAction = () => {
  return {
    type: LOG_OUT
  }
}

export const logInAction = () => {
  return {
    type: LOG_IN
  }
}