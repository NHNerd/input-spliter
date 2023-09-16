let mult = 0;
let splitSymbolCount = 0;
let inputLengthOld = 0;
let isMaxLengthSeted = false;

export function inputSplitHandler(part, limiteSymbol, symbol, inputDOM) {
  //set max length in Calling a function
  if (!isMaxLengthSeted) {
    inputDOM.maxLength = limiteSymbol + (limiteSymbol / part - 1) * symbol.length;
    isMaxLengthSeted = true;
  }

  const inputLength = inputDOM.value.length - splitSymbolCount;

  if (inputLengthOld >= inputLength) {
    if (inputDOM.value.endsWith(String(symbol.slice(0, -1)))) {
      inputDOM.value = inputDOM.value.slice(0, symbol.length * -1);
      mult = mult != 0 ? mult - 1 : 0;
      splitSymbolCount = mult * symbol.length;
    }
    // clear
    inputLengthOld = inputLength;
    return;
  } else if (inputLength > limiteSymbol - 1) {
    // clear
    inputLengthOld = inputLength;
    return;
  }

  // Add split simbol after evry part
  if (inputLength >= part * (mult + 1)) {
    inputDOM.value += symbol;

    mult = Math.floor(inputLength / part);
    splitSymbolCount = mult * symbol.length;
  }
  // clear
  inputLengthOld = inputLength;
}
