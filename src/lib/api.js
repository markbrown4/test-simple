
import { fetch } from 'whatwg-fetch';

const get = (path)=> {
  return fetch(`/api/${ path }`);
}

export default {
  get
}
