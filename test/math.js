
import assert from 'assert';
import { add } from '../src/lib/math';

describe('Math.add(a, b)', ()=> {
  it('should add two numbers', ()=> {
    let sum = add(1, 2);
    assert(sum === 3);
  });
});
