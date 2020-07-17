export const addImages = state => {  
  return {
    type: 'ADD_IMAGES',
    images: state
  }
}

export const likedPhoto = state => {
  return {
    type: 'LIKED_PHOTO',
    id: state
  }
}

export const unlikedPhoto = state => {
  return {
    type: 'UNLIKED_PHOTO',
    id: state
  }
}