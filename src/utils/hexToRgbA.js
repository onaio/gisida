// adapted from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
const hexToRgbA = (hex, alpha) => {
  let c;
  const a = alpha || alpha === 0 ? alpha : 1;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = [[c[0], c[1]].join(''), [c[2], c[3]].join(''), [c[4], c[5]].join('')];
    return `rgba(${parseInt(c[0], 16)}, ${parseInt(c[1], 16)}, ${parseInt(
      c[2],
      16,
    )}, ${a})`;
  }
  throw new Error('Bad Hex');
};

export default hexToRgbA;
