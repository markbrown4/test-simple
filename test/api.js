
import assert from 'assert';
import fetchMock from 'fetch-mock';
import API from '../src/lib/api';

describe('API.get(path)', ()=> {
  it('should return a Promise with cats', (done)=> {

    fetchMock.get('/api/cats.json', {
      cats: [{
        url: 'lolcat.jpg'
      },{
        url: 'dancing_pug.gif'
      }]
    })

    API.get('cats.json').then((resp)=> {
      assert(resp.cats.length === 2);
      assert(resp.cats[0].url === 'lolcat.jpg');
      done();
    })

  });
});
