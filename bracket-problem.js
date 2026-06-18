function BracketCombinations(num) {
  if (num === 0) return 1;

  let count = 0;

  function generate(open, close) {
    // Valid combination formed
    if (open === 0 && close === 0) {
      count++;
      return;
    }

    // Can still place an opening bracket
    if (open > 0) {
      generate(open - 1, close);
    }

    // Can place closing bracket only if more closing remain than opening
    if (close > open) {
      generate(open, close - 1);
    }
  }

  generate(num, num);
  return count;
}

console.log(BracketCombinations(readline()));