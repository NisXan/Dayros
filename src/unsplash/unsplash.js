import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
  accessKey: 'K2zcIGxjEXNJYPl4oq8rspBhg0DISO3qTM02XmXRrDc',
  secret: 'k83A6Ff91VSeVg_E_RKqACPtXHcvuY-pNJ6xvw9oFkc',
  callbackUrl: 'https://dayros.nisxan.ru/'
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes'
]);

export const setAccessTokenUnplash = (code) => {  
  unsplash.auth.userAuthentication(code)
    .then(res => res.json())
    .then(json =>
      localStorage.setItem('token', json.access_token)
    );
};

export const setBearerToken = (token) => {unsplash.auth.setBearerToken(token)};

export const listPhoto = (start, token) => {
  setBearerToken(token);
  return unsplash.photos.listPhotos(start, 10, 'latest')
    .then(res => res.json());
};

export const likePhoto = (id, token) => {
  setBearerToken(token);
  unsplash.photos.likePhoto(id);
};

export const unlikePhoto = (id, token) => {
  setBearerToken(token);
  unsplash.photos.unlikePhoto(id);
};