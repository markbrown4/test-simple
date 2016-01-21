
import assert from 'assert';
import sinon from 'sinon';
import API from '../src/lib/api';
import { Promise } from 'es6-promise';
import { Response } from 'whatwg-fetch';

const jsonResponse = (obj)=> {
  let json = JSON.stringify(obj);
  var res = new Response(json, {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(res);
}

describe('API.fetch(path)', ()=> {
  it('should return a Promise', ()=> {

    sinon.stub(global, 'fetch', ()=> {
      return jsonResponse({
        cats: [{
          url: 'lolcat.jpg'
        },{
          url: 'dancing_pug.gif'
        }]
      });
    })

    API.get('cats').then((cats)=> {
      console.log("HUZZAH");
      assert(cats.length === 2);
    })

    global.fetch.restore();

  });
});
