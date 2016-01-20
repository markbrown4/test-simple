
import assert from 'assert';
import { node } from '../src/lib/dom';

describe('node(tag)', ()=> {
  it('should return a Node', ()=> {
    let img = node('img');
    assert(img.nodeName === 'IMG');
  });
});
