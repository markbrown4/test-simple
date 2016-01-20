
import assert from 'assert';
import { node } from '../src/lib/dom';

describe('DOM.node(tagName)', ()=> {
  it('should return an HTMLElement', ()=> {
    let img = node('img');
    assert(img.nodeName === 'IMG');
  });
});
