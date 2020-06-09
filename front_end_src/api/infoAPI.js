// import fetch from 'isomorphic-fetch';
import request from 'superagent';

export function getUserList(data) {  
  return request.get('https://api.github.com/users')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .query(data)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function getUserInfo(data) {
  return request.get('https://api.github.com/users/' + data)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}