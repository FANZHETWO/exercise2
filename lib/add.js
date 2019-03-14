function add(a, b) {
  if (!a && !b) {
    throw new Error('arg must input')
  }
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('arg should string')
  }

  // 大佬的写法
  // let tempA = a.split('');
  // let tempB = b.split('');
  // let tempC = 0;
  // let total = '';
  // while (tempA.length || tempB.length || tempC) {
  //   tempC += ~~tempA.pop() + ~~tempB.pop();
  //   total = tempC % 10 + total;
  //   tempC = tempC > 9;
  // }

  // return total.replace(/^0+/, '')

  a = a.split('').reverse();
  b = b.split('').reverse();
  let maxLength = Math.max(a.length, b.length);
  let tempA = 0;
  let tempB = 0;
  let tempPlus = 0;
  let into = 0;
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    tempA = a[i] || 0
    tempB = b[i] || 0
    tempPlus = Number(tempA) + Number(tempB)

    if (into) {
      tempPlus += into
    }
    into = tempPlus >= 10 ? 1 : 0
    if (i === maxLength - 1 && into) {
      result.push(tempPlus)
    } else {
      result.push(tempPlus % 10)
    }
  }

  return result.reverse().join('')

}

module.exports = add