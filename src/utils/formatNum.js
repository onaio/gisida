export default function formatNum(num, decimal) {
  let x = (`${num}`).length;
  if (Number.isInteger(num) && x > 3) {
    const pow = 10 ** decimal;
    x -= x % 3;
    return (Math.round((num * pow) / (10 ** x)) / pow) + ' kMGTPE'[x / 3];
  }
  return num;
}
