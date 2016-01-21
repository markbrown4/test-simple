
import assert from 'assert';
import sinon from 'sinon';
import API from '../src/lib/api';
import { jsonResponse } from './test_helper';

describe('API.get(path)', ()=> {
  it('should return a Promise with cats', ()=> {

    sinon.stub(global, 'fetch', (url)=> {
      if (url == '/api/cats.json') {
        return jsonResponse({
          cats: [{
            url: 'lolcat.jpg'
          },{
            url: 'dancing_pug.gif'
          }]
        });
      }
    });

    API.get('cats.json').then((cats)=> {
      assert(cats.length === 2);
      assert(cats[0].url === 'lolcat.jpg');
    })

    global.fetch.restore();

  });
});
