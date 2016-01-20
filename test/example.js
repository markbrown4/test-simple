import assert from 'assert';

describe('Math.floor', ()=> {
  it('should round down to the nearest whole number', ()=> {
    let value = Math.floor(4.24);
    assert(value === 4);
  });
});
