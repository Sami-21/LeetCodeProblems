const hasAllCodes = (s: string, k: number): boolean => {
  let checkedNums = new Set<string>();
  for (let j: number = 0; j < s.length - k + 1; j++) {
    let possibleBinary: string = s.substring(j, j + k);
    checkedNums.add(possibleBinary);
  }
  if (checkedNums.size !== 2 ** k) return false;
  return true;
};