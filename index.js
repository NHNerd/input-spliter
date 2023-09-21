import { inputSplitHandler } from './inputSplitHandler.js';

const inputDOM = document.getElementById('input');

//! * Workaround * (the algorithm breaks down when the input cursor is set to the middle)
inputDOM.style.pointerEvents = 'none';
document.addEventListener('click', () => {
  inputDOM.focus();
});

// 1. part of text
// 2. length all text
// 3. symbol dividing parts
// 4. DOM element

inputDOM.addEventListener('input', () => inputSplitHandler(4, 16, ' :) ', inputDOM));
