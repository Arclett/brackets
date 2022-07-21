module.exports = function check(str, bracketsConfig) {
  let x = [];
  for (let i = 0; i < str.length; i++) {
    x.push(str[i]);
  }
  for (let i = 0; i < x.length; i++) {
    bracketsConfig.map((a) => {
      if (x[i] === a[0] && x[i + 1] === a[1]) {
        x.splice(i, 2);
        i = i - 2;
      }
    });
  }
  return x.length === 0;
};
