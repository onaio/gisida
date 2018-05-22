export default function (xs, key) {
  return xs.reduce((r, x) => {
    const rv = r;
      (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
