module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let current;
  const matchLookup = bracketsConfig.reduce(function(result, item, index, array){result[item[0]]=item[1]; return result}, {});
  const openpair = Object.keys(matchLookup);
  const closepair = Object.values(matchLookup);
  for (let i = 0; i < str.length; i++) {
    current = str[i];
    if (openpair.includes(current) && closepair.includes(current) && stack.includes(current)){
      let lastBracket = stack.pop();
      if (matchLookup[lastBracket] !== current){
        return false;
      }
    } else if (openpair.includes(current)){
      stack.push(current);
    } else if (closepair.includes(current)) {
      let lastBracket = stack.pop();
      if (matchLookup[lastBracket] !== current){
        return false;
      }
    }
  }
  return stack.length === 0;
}