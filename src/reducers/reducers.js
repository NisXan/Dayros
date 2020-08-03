import { likePhoto, unlikePhoto } from '../unsplash/unsplash.js';
import { ADD_IMAGES, LIKED_PHOTO, UNLIKED_PHOTO } from '../constants.js';

const reducers = (state = [], action) => {
  switch(action.type) {
    case ADD_IMAGES:
      return [...state, ...action.images]
       
    case LIKED_PHOTO: 
      return state.map((img) => {
        if(img.id === action.id) {
          img.liked_by_user = true;
          img.likes++;
          likePhoto(action.id, localStorage.getItem('token'));
        }
        return img;
      })  
    case UNLIKED_PHOTO:
      return state.map((img) => {
        if(img.id === action.id) {
          img.liked_by_user = false;
          img.likes--;
          unlikePhoto(action.id, localStorage.getItem('token'));
        }
        return img;
      })

    default:
      return state;
  }
}

export default reducers;