
const get = (path)=> {
  return fetch(`/api/${ path }`).then((resp)=> resp.json());
}

export default {
  get
}
