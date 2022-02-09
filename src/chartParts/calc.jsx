const contentWidth = 700;
const contentHeight = 500;

export const CalcH2 = (text, index) => {
  const convertRemToPx = (rem) => {
    const fontSize = getComputedStyle(document.documentElement).fontSize;
    return rem * parseFloat(fontSize);
  };

  const makePropObj = (index) => {
    const obj = {};
    if (index % 2 === 0) {
      obj.top = contentHeight / 4 + 5;
      obj.transform = 'rotate(60deg) translateY(-50%)';
    } else {
      obj.top = contentHeight - contentHeight / 4 - 25 + 2;
      obj.transform = 'rotate(120deg)';
    }
    // ここの6remはh1のwidth
    obj.left = contentWidth - convertRemToPx(6) * (index + 4);
    return obj;
  };
  const propObj = makePropObj(index);
  
  return {
    text,
    ...propObj,
  };
};
