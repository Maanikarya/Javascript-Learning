function BracketMatcher(str) { 

  let varOcg = 0; // counter for open brackets

  // __define-ocg__: checking balanced parentheses
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      varOcg++;
    } else if (str[i] === ')') {
      varOcg--;

      // if closing comes before opening
      if (varOcg < 0) {
        return 0;
      }
    }
  }

  // if all brackets matched
  return varOcg === 0 ? 1 : 0;
}
   
// keep this function call here 
console.log(BracketMatcher(readline()));