
import { Promise } from 'es6-promise';
import { Response } from 'whatwg-fetch';

const jsonResponse = (obj)=> {
  let json = JSON.stringify(obj);
  var res = new Response(json, {
    status: 200,
    headers: { 'Content-type': 'application/json' }
  });

  return Promise.resolve(res);
}

export {
  jsonResponse
}
