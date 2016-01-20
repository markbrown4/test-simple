
import assert from 'assert';
import { add } from '../src/lib/math';

describe('node(tag)', ()=> {
  it('should add two numbers', ()=> {
    let sum = add(1, 2);
    assert(sum === 3);
  });
});
