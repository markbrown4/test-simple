
import 'whatwg-fetch';
import $ from 'jquery';

import { add } from './lib/math';
import { node } from './lib/dom';
import API from './lib/api';

console.log(add(1,2));
console.log($('<img />'));
console.log(node('img'));

API.get('cats.json').then((images) => {
  console.log(images);
})
