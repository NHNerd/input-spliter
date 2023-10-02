import { inputSplitHandler } from './inputSplitHandler.js';

const inputDOM = document.getElementById('input');

//! * Workaround * (the algorithm breaks down when the input cursor is set to the middle)
// cancel mouse cursor positioning
inputDOM.style.pointerEvents = 'none';
document.addEventListener('click', (event) => {
  inputDOM.focus();
});
// cancel the arrow key cursor positioning
inputDOM.addEventListener('keydown', (event) => {
  if (event.keyCode === 37 || event.keyCode === 39) {
    event.preventDefault();
  }
});

// 1. part of text
// 2. length all text
// 3. symbol dividing parts
// 4. DOM element

inputDOM.addEventListener('input', () => inputSplitHandler(4, 16, ' :) ', inputDOM));
