import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
  accessKey: 'jjol7KDbrcx_PZUboYqtsq2rGjYHciCkmC5Pxl89z0E',
  secret: 'HHjqrDfm1vlRaf_0Y8mInPgHG_jp26UioO_gmFcFOi4',
  callbackUrl: 'http://localhost:3000/'
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
  return unsplash.photos.listPhotos(start, 10, 'latest')
    .then(res => res.json());
};

export const likePhoto = (id, token) => {
  unsplash.photos.likePhoto(id);
};

export const unlikePhoto = (id, token) => {
  unsplash.photos.unlikePhoto(id);
};