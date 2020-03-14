
exports.min = function min (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let min = array[0];
  array.forEach(function(items) {
    if(min > items){
      min = items;
    }
  })
  return min;
}

exports.max = function max (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let max = array[1];
  array.forEach(function(items) {
    if(max < items){
      max = items;
    }
  })
  return max;
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let res = 0;
  array.forEach(function(items) {
    res += items;
  })
  return res/array.length;
}
