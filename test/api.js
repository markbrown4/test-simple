
import assert from 'assert';
import sinon from 'sinon';
import API from '../src/lib/api';
import Promise from 'es6-promise';

const sampleResponse = {
  cats: [{
    url: 'lolcat.jpg'
  },{
    url: 'dancing_pug.gif'
  }]
};

describe('API.fetch(path)', ()=> {
  it('should return a Promise', ()=> {

    sinon.stub(window, 'fetch', ()=> {
      return {
        then: ()=> {
          console.log("RETURNING RESPONSE");
          return sampleResponse;
        }
      }
    });

    API.get('cats').then((cats)=> {
      console.log("THEN");
      assert(cats.length === 2);
    })

    window.fetch.restore();

  });
});
