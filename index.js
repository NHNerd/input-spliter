import { inputSplitHandler } from './inputSplitHandler.js';

const inputDOM = document.getElementById('input');

// 1. part of text
// 2. lenth all text
// 3. symbol dividing parts
// 4. DOM element

inputDOM.addEventListener('input', () => inputSplitHandler(4, 16, ' :) ', inputDOM));
